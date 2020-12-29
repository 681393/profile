### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `deploy on S3`

1. Create S3 bucket on AWS
2. Enable static website hosting under properties.
3. Provide public access to the bucket.
4. Upload files and folders present in build folder

### `deploy on Github`

1. Add "homepage": "https://681393.github.io/profile" in package.json file
2. Verify that gh-pages dependency is present and below scripts are present:
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
3. Run "npm run deploy" command. This command will build your application and publish the application on github. It will also commit build code under gh-pages branch.
4. URL to access application is present in Github under Settings > Options > Github Pages.

This will build project using gh-pages and deploy it on github.
Define "homepage": "https://681393.github.io/Resume" in package.json file below version tag.
gh-pages will deploy and publish project in github which can be accessed using above link.
Above link is the link to Resume repository. We can change github repository link as per our requirement.
