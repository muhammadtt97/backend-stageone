const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    const slackName = 'Muhammad alameen Adamu'; // Hardcoded slack_name
    const track = req.query.track;

    if (!track) {
        return res.status(400).json({ error: "track is a required parameter" });
    }

    const [todays_day, todays_time] = dateFunction();

    const githubFileURL = "https://github.com/muhammadtt97/repo/blob/main/app.js";
    const githubRepoURL = "https://github.com/muhammadtt97/backend-stageone";

    const response = {
        slack_name: slackName,
        current_day: todays_day, 
        utc_time: todays_time,   
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
    const todays_time = now.toISOString().slice(0, 19) + "Z"; 

    return [todays_day, todays_time];
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
