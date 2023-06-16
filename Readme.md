## Info

Different chapters can be found in different branches

## install
npm install typescript -g 
(global)

## initialize typescript
tsc --init

tsc -w to watch the current directory auto compiles

-------------------------------

change root directory in tsconifig.json 
find rootDir and change it to our root directory

--------------------------------

change out directory in tsconifig.json-
find outDir and change it to dir we need to output compiled js

--------------------------------

to change es version for build
find target to the version we need

--------------------------------

deleting a file in our ts root directory doesnt delete js files from our out directory

--------------------------------

add include key as another field after the before the second last curly bracket namsd include to only create js files from the source directory

"include" : [
    "src
]

--------------------------------

if you dont want to compile when there is a error in ts turn on noEmitOnError

otherwise even when there is error in ts it will compiled to js with warnings

