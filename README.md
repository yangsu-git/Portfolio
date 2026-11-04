# Personal Portfolio

A personal archive of projects, experiments, and lessons—documenting growth in
graphics programming, game development, and software engineering.

This is a static portfolio site. It contains project descriptions, screenshots,
and demo-video placeholders, but no private project source code.

## Local preview

From the repository root, run:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000/>.

## Project media

Add media using these filenames:

```text
projects/kepler/media/kepler-demo.mp4
projects/unity-fluid/media/demo.mp4
projects/unity-game/media/demo.mp4
```

The detail pages detect the video once it is available and replace the
placeholder automatically. Use H.264 video in an MP4 container for broad
browser compatibility.

## Privacy

The pages include `noindex` metadata and the repository includes a restrictive
`robots.txt`. These are discovery preferences, not access control: anyone with
the public URL can still view the site.
