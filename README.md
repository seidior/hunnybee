# Hunnybee's Website

Hunnybee Bruncheonette is a Canadian brunch restaurant located at 789 Gore
Avenue, Vancouver, BC V6A 2Z9. Come for a visit sometime for a tasty coffee (and
other things)! They're open from 8:00 am to 4:00 pm daily.

This repository contains the source code for building and deploying Hunnybee's
website to GitHub Pages using GitHub Actions.

The website is built using a framework called [Astro](https://astro.build) to
create the static site using Node.js and TypeScript. The generated site is then
uploaded to GitHub Pages using the "Deploy Site" GitHub Action.

## Technology Stack

### For the site:

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [PNPM](https://pnpm.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Atomic Design](https://atomicdesign.bradfrost.com)

### For hosting:

- [GitHub Pages](https://pages.github.com)
- [GitHub Actions](https://github.com/features/actions)

### For the staging site:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://github.com/docker/compose)
- [Caddy](https://caddyserver.com)

## Development

To get started with developing the site, you must have Node.js 20.5 or later
installed on your computer along with `corepack` (if it was not included with
your Node.js install). Also, the [GitHub CLI](https://cli.github.com) tool is
recommended for working with the repository and
[Visual Studio Code](https://code.visualstudio.com/) is recommended for code
editing.

Once those are set up, enable pnpm:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Then you can clone this repository on your computer using the GitHub CLI:

```bash
mkdir -p ~/Developer
cd ~/Developer
gh repo clone hunnybee-website/hunnybee-ca
```

Install package dependencies:

```bash
cd hunnybee-ca
pnpm install
```

Open the code in Visual Studio code:

```bash
code .
```

To run the development server from the command line: (this can also be triggered
from within Visual Studio Code from the "Run" menu)

```bash
pnpm dev
```

Some additional commands that can be run from the command line:

| Command       | Description                                        |
| ------------- | -------------------------------------------------- |
| pnpm build    | Builds/Re-builds the static site                   |
| pnpm preview  | Previews the built site                            |
| pnpm lint     | Checks for straightforward code errors             |
| pnpm lint:fix | Fixes any auto-fixable straightforward code errors |
| pnpm format   | Reformats the code to code style standards         |

## Deployment

You do not need to have the repository checked out on your development computer
to deploy the site.

Log into GitHub, then from the
[main repository page](https://github.com/hunnybee-website/hunnybee-ca), click
the [Actions](https://github.com/hunnybee-website/hunnybee-ca/actions) tab, run
the "Deploy Site" action.

Additionally, these GitHub Actions are provided for convenience:

| action           | description                                           |
| ---------------- | ----------------------------------------------------- |
| Update Container | For Invisible Carrot's staging site convenience.      |
| Update Packages  | Updates the dependencies to keep the site up to date. |

The "Update Container" GitHub Action also allows for the site to run locally or
on a staging site infrastructure using Docker and Docker Compose, and an example
Docker Compose file is provided in the repository for running the site:

```bash
mkdir -p ~/Developer
cd ~/Developer
gh repo clone hunnybee-website/hunnybee-ca
cd hunnybee-ca
docker compose pull
docker compose up -d
```

At that point, you can view the site at [http://localhost](http://localhost).
This will be the built version of the site, not the development version of the
site. When you're done, you can stop the container:

```bash
docker compose down
```

## Credits

The site is developed by [Invisible Carrot](https://github.com/seidior) with
design and accessibility by [EasySurf](https://easysurf.ca).

All code unique to this repository is made available under the MIT license.
Package dependencies have their own licenses, and they can be viewed from the
repository checked out on your development machine with:

```bash
pnpm licenses list
```

Use of Hunnybee's trademark and assets are under license from Hunnybee.
[Contact Hunnybee](mailto:hey@hunnybee.ca) to license the assets if intending to
use the assets in this repository for your project.

[Oswald](https://fonts.google.com/specimen/Oswald) was provided from Google
Fonts via the
[OFL](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).

Social icons are provided from [Font Awesome](https://fontawesome.com) and are
copyright 2023 Fonticons, Inc.
