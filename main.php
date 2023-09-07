<?php
header('Content-Type: application/json');

$slackName = $_GET['muhammadtt97'] ?? null;
$track = $_GET['backend track'] ?? null;


if (!$slackName || !$track) {
    http_response_code(400);
    echo json_encode(array("error" => "slack_name and track are required parameters"));
    exit;
}

$currentDay = date('l');

$currentUTC = gmdate('Y-m-d\TH:i:s\Z');

$githubFileURL = "https://github.com/muhammadtt97/backend-stageone/blob/main/main.php";
$githubRepoURL = "https://github.com/muhammadtt97/backend-stageone";

//the JSON response
$response = array(
    "slack_name" => $slackName,
    "current_day" => $currentDay,
    "utc_time" => $currentUTC,
    "track" => $track,
    "github_file_url" => $githubFileURL,
    "github_repo_url" => $githubRepoURL,
    "status_code" => 200
);

echo json_encode($response);
?>
