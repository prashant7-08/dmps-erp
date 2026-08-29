$git = "C:\Users\computer empire\MinGit\cmd\git.exe"

& $git init
& $git config user.name "prashant7-08"
& $git config user.email "prashant@example.com"
& $git branch -M main

# Add remote if not already added
$remotes = & $git remote
if ($remotes -notcontains "origin") {
    & $git remote add origin "https://github.com/prashant7-08/dmps-erp.git"
}

& $git add .
& $git commit -m "Hide passwords on login and secure role access"
& $git status
