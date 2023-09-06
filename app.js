const express = require('express');
const app = express();

// Define a route for your API
app.get('/api', (req, res) => {
    const slackName = 'Muhammad Alameen Adamu';
    const track = req.query.track;

    if (!slackName || !track) {
        return res.status(400).json({ error: "slack_name and track are required parameters" });
    }

    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const currentUTC = new Date().toISOString();

    // Replace these with your GitHub URLs
    const githubFileURL = "https://github.com/muhammadtt97/repo/blob/main/app.js";
    const githubRepoURL = "https://github.com/muhammadtt97/backend-stageone";

    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: currentUTC,
        track: track,
        github_file_url: githubFileURL,
        github_repo_url: githubRepoURL,
        status_code: 200
    };

    res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
