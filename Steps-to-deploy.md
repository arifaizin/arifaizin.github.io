# Steps to deploy to GitHub Pages

1.  **Install dependencies** (if you haven't already):
    ```bash
    npm install --legacy-peer-deps
    ```

2.  **Build and Deploy**:
    ```bash
    npm run deploy
    ```
    This command will:
    - Run `gatsby build` to generate the static site in the `public/` folder.
    - Use `gh-pages` to push the `public/` folder to the `master` branch of your repository.

3.  **GitHub Settings**:
    - Go to your repository on GitHub.
    - Navigate to **Settings** > **Pages**.
    - Ensure **Source** is set to "Deploy from a branch".
    - Under **Branch**, select `master` and the folder `/ (root)`.
    - Click **Save**.
