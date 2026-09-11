# Mariana P. Art Portfolio

A static portfolio site for college applications and creative work.

## Edit the site

This project uses plain HTML, CSS, and JavaScript. You do not need a database or build step.

### Add your artwork

1. Create an `images` folder in the project.
2. Put your files inside it, for example `images/sculpture-01.jpg`.
3. Open `script.js` and find `const artwork`.
4. Add or edit an artwork object:

```js
{
	title: 'Your title',
	medium: 'Sculpture',
	filter: 'Sculpture',
	status: 'Finished',
	detail: 'Plaster, 2025',
	image: 'images/sculpture-01.jpg',
	alt: 'Short description of the artwork'
}
```

Use these existing filter values: `Sculpture`, `Drawing`, `Color`, `Game`, and `Textile`. The `status` value appears as the small label over the image, so it can be `Finished`, `Progress`, or `Game world`.

### Add a new filter

Add a button in `index.html` inside `.filter-buttons`, then use the exact same value in an artwork object's `filter` property:

```html
<button class="filter-button" data-filter="Photography" type="button">Photography</button>
```

### Edit writing

- Hero text, About text, Contact text, and the rights notice are in `index.html`.
- Game planning tiles are in the `mechanisms` array near the top of `script.js`.
- Edit titles, descriptions, groups, and colors there. The available mechanism tones are `lime`, `paper`, `blue`, and `coral`.
- Replace the email, Instagram, LinkedIn, and CV links in `index.html`.

### Preview locally

From this folder, run:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173` in a browser. Stop the server with `Ctrl+C`.

### Add the interactive 3D model

The viewer expects one binary glTF file at `images/world-model.glb`. Here is the full Blender workflow:

1. Open your model in Blender and remove anything you do not want visitors to see, such as cameras, lights, reference images, hidden guides, or unfinished test objects.
2. Select the model objects you want to export. Press `Ctrl+A` and choose **Rotation & Scale**. This prevents unexpected size, rotation, or shading changes in the browser.
3. Check the materials in **Material Preview**. Use image textures saved inside the Blender file or in the same project folder. Avoid absolute texture paths from your computer.
4. Optional but recommended: select the model, right-click, and choose **Shade Auto Smooth** or **Shade Smooth by Angle**. Add a small bevel where appropriate so edges catch light in the viewer.
5. Save the Blender file. Then choose **File > Export > glTF 2.0 (.glb/.gltf)**.
6. In the export panel, use these settings:
	- **Format:** `glTF Binary (.glb)`
	- **Include:** select **Selected Objects** if you only want the model you selected
	- **Transform:** leave the default Blender glTF orientation unless the model imports sideways
	- **Geometry:** enable **Apply Modifiers**; keep compression off for the first export
	- **Materials:** use **Materials**; keep image textures packed into the `.glb`
7. Export directly into this project as `images/world-model.glb`. The filename must match exactly, including lowercase letters.
8. Reload the portfolio and scroll to **03 / In progress**. Drag on the model to orbit, use the mouse wheel to zoom, and use a two-finger gesture on a phone to zoom. Auto-rotation pauses while you interact.

Before committing, check that the `.glb` is not enormous. A compact model with reasonable textures loads much better than a raw high-poly scene. If the viewer is blank, confirm the file is exactly at `images/world-model.glb`, open the browser developer console for a missing-file or texture error, and try exporting again with textures packed into the `.glb`. The viewer currently shows a placeholder until that file is present.

## Rights notice

The site states that the artwork, writing, game concepts, mechanisms, characters, and world-building are original work and may not be copied, reproduced, redistributed, or used for another project without written permission. This is a practical notice, not a substitute for legal advice. Consider adding a formal copyright registration or consulting an intellectual-property professional for stronger protection.
