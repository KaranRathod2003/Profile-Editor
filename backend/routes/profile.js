const express = require('express');
const Profile = require('../models/Profile');

const router = express.Router();

// GET - Get the profile
router.get('/', async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (!profile) {
            // If no profile exists, return empty object
            return res.json({});
        }
        res.json(profile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST - Create profile (if not exists) or overwrite
router.post('/', async (req, res) => {
    try {
        // Check if a profile already exists
        let profile = await Profile.findOne();
        if (profile) {
            // If exists, overwrite it
            profile = await Profile.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
        } else {
            profile = await Profile.create(req.body);
        }
        res.status(201).json(profile);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error saving profile', error: err.message });
    }
});

// PUT - Update profile fields
router.put('/', async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (!profile) {
            // If no profile exists, create one
            profile = await Profile.create(req.body);
        } else {
            profile = await Profile.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
        }
        res.json(profile);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error updating profile', error: err.message });
    }
});

// DELETE - Reset profile
router.delete('/', async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (profile) {
            await Profile.deleteOne({ _id: profile._id });
        }
        res.json({ message: 'Profile reset successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting profile', error: err.message });
    }
});

module.exports = router;


