# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


### Docker + GHCR

The repo includes a multi-stage `Dockerfile` and a GitHub Actions workflow that builds and pushes to GHCR on pushes to `main` (linux/amd64 only).

- Image registry: `ghcr.io/<owner>/<repo>` (lowercased automatically)
- Tags: branch name, git tag, commit SHA, and `latest` on default branch
- Package auto-create: GHCR auto-creates the package on first push using `${{ secrets.GHCR_TOKEN }}`

Make the package public (optional):

1. Go to GitHub → Packages (on the repo sidebar)
2. Open the container package → Package Settings → Change visibility to Public

Local build and test:

```powershell
docker build -t ghcr.io/<owner>/<repo>:test .
docker run --rm -p 3000:3000 ghcr.io/<owner>/<repo>:test
```

Manual login and push (if pushing locally):

```powershell
echo $env:GHCR_TOKEN | docker login ghcr.io -u <your-username> --password-stdin
docker push ghcr.io/<owner>/<repo>:test
```
