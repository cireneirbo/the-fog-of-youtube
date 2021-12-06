# the-fog-of-youtube
A simple web app that attempts to gain insights on how popular a YouTube video might be ever since they have stopped showing the dislikes.

As of 12/13/2021, YouTube's API is setting the value of a video's dislikes to private. This has already been hidden from users, but now it is inaccessible without being the video's owner (having the correct authorization key). In an attempt to glean insight on the popularity of a video (for those interested), this web app will display several other available markers to allow one to make an assessment on how well a video is being received. Some of these markers include:
#### https://developers.google.com/youtube/v3/docs/videos
* statistics.viewCount
* statistics.likeCount
* statistics.commentCount

#### https://developers.google.com/youtube/v3/docs/comments
* snippet.textDisplay
* snippet.viewerRating
* snippet.likeCount
* snippet.publishedAt
* snippet.updatedAt


## Dependencies
* [YouTube Data API](https://developers.google.com/youtube/v3/) - Google's API for interacting with YouTube.


## Getting Started
