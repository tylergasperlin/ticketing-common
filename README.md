# NPM
[https://www.npmjs.com/package/@tylergasperlin/ticketing-common]
# PACKAGES IN THIS PROJECT ARE SHARED BETWEEN PROJECTS AND PUBLISHED TO NPM
1. npm login
2. See tylergasperlin organization
3. npm publish --access public
4. package.json name and version are important when publishing to npm

# We publish the common package in javascript even though we write in typescript
1. npm build will compile into js
2. tsconfig => declaration file uncommented so we create a typescript definition file to work between js and ts
3. outDir build will push js code into a build folder
4. del-cli will help to remove files from build before rebuilding. In package json we use del to delete the build dir before rebuilding

# package json
1. main specificies the index js file from build folder
2. types specifies the typescript declarations file
3. files specifies the files we want in the published build. 

# npm commands increment version
1. npm version patch  = increment version number on far right