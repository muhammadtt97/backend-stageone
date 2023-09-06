const express = require('express');
const app = express();

// Define a route for your API
app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
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

dateFunction = () => {
    day = new Date().getUTCDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todays_day = daysOfWeek[day];

    const now = new Date();
    now.setMinutes(now.getUTCMinutes());
    const todays_time = now.toISOString().slice(0, 19) + "Z"; // Adjusted UTC time

    return [todays_day, todays_time];
};


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
