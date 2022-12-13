const { Category, Charity, Donation, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { findOneAndUpdate } = require("../models/Charity");

const resolvers = {
  // QUERY
  Query: {
    // GET one Charity, based on charity id
    charity: async (parent, { charityId }) => {
      return Charity.findOne({ _id: charityId });
    },

    // GET all Charities
    charities: async () => {
      return Charity.find();
    },

    // GET one User
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    // GET all Donations
    donations: async () => {
      return Donation.find();
    },
  },

  // MUTATIONS
  Mutation: {
    // POST new user *** Do we reference AUTH here? TODO: Vaishali check?:)
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // POST new Donation *** Do we reference charity here? I feel like this one is not correct?
    // We might need to use context: Check 22-State, 22-Stu_Typedefs
    addDonation: async (parent, { donationAmount, charity, user }, context) => {
      console.log(`context: ${context}`);
      if (context.user) {
        const donation = new Donation({ charity, donationAmount });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { donations: donation },
        });

        return donation;
      }

      throw new AuthenticationError("Not logged in!");
    },

    // PUT login
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // PUT to user (saving a charity to user)
    saveCharity: async (parent, { charityId }, context) => {
      // find the charity data of one
      const charity = await Charity.findOne({ _id: charityId });
      const categoryIds = await charity.categories;
      const updateUserCharity = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { charities: charityId } },
        { new: true }
      );
      const updateUserCategories = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { categories: [...categoryIds] } },
        { new: true }
      );

      return updateUserCategories;
    },

    // DELETE from user (unsaving)
    unsaveCharity: async (parent, { charityId }, context) => {
      const charity = await Charity.findOne({ _id: charityId });
      const updateUserCharity = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { charities: charityId } },
        { new: true }
      );

      return updateUserCharity;
    },
  },
};

module.exports = resolvers;
