
# Openframe VLC extension

This extension adds VLC support to Openframe. It uses the VLC that is pre-installed on Raspian. 

It supports [a lot of formats](https://wiki.videolan.org/VLC_Features_Formats/). For example:
- most video files
- most image files: Beware, there are a few known problems with images. Read further below.
- most audio files
- Youtube / Vimeo URLs
- just try it probably works!

It also supports streaming. Large videos play straight away and don't need to be downloaded first.

# Installation

First, follow the Openframe guide on how to set up an Openframe and to display artwork: http://docs.openframe.io/frame-setup-guide/

Then, run the following command: `openframe -i openframe-vlc`

# How to upload artwork (or whatever you like to display)?

In the [web app](https://openframe.io/stream)  
1. Click `Add Artwork`
2. Make sure you give your artwork a title 
3. Use `openframe-vlc` as artwork format
4. Enter the URL of what you like to display into the field `URL where the artwork is hosted`.
5. Optionally enter a URL to a preview image of the sketch which is especially useful if you like to publish your artwork.
6. Click `Add artwork`.

To display the artwork on the frame, select the artwork by clicking the `push to frame` button.


# Known problems

- Animated GIFs are unsupported yet: https://trac.videolan.org/vlc/ticket/6697
- If Openframe is started via SSH, images are displayed on the terminal instead of the main display. Videos are okay in all cases. Images are okay if Openframe is started on directly the machine running Openframe.
- Images don't keep their aspect ratio but are stretched to the entire screen.
  - Might be related to: https://trac.videolan.org/vlc/ticket/22128 and https://forum.videolan.org/viewtopic.php?f=13&t=148898&p=490613&hilit=raspberry+pi+image#p490613. The issue only appeard on a specific Raspberry Pi version. They fixed it by getting another version of the Pi. According to the thread it works fine on a Pi 3B+. I was testing with a Pi 3B.
  - I've done some tests with `--croppadd-crop` and `--croppadd-padd` options. Might be possible to work around it using that.

# Todo

- Options:
  - fill / fit
  - loop / no-loop
  - …
- install VLC if not already installed on the system
- Fix known problems 