# initial build
npm install  
npm run build  
mv build docs #make docs folder  
git init  
echo "node_modules" >> .gitignore  
echo "dist">> .gitignore  
echo "build">> .gitignore  
git add .  
git commit -m "Initial commit"  

//below three lines from git (after making blank repo, last section that says "or push an existing repository from the command line")  
git remote add origin git@github.com:kmjhyn/webpage.git 
git branch -M main  
git push -u origin main  

//then go back to github, repo>settings>pages>sources: deploy from a branch / branch:main / folder:/docs  


# making edits
make edits on vs code  
terminal >>  
npm run build  
rm -rf docs  
mv build docs #changing the docs to the newly edited ones  

VS source control, commit all chagnes and push  