/*
    tree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
    tree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']
    tree(5) will result in:

    ____#____              1
    ___###___              2
    __#####__              3
    _#######_              4
    #########       -----> 5 - Height of Tree
    ____#____        1
    ____#____        2 - Trunk/Stem of Tree

    tree(3) will result in:

    __#__                  1
    _###_                  2
    #####          ----->  3 - Height of Tree
    __#__           1
    __#__           2 - Trunk/Stem of Tree

* Testing ideas:
* Trunk Only "#", "#"
* Tree Height 1 "#", "#", "#"
* Tree Height 2 "_#_", "###", "_#_", "_#_" (skip -> „fix padding first“)
* Tree Height 2 Top Level "_#_“
* Tree Height 3 Top Level "__#__“
* Tree Height 2 2nd Top Level "###“
* Tree Height 2 (unskip)
* Tree Height 3 "__#__", "_###_", "#####", "__#__", "__#__" // not necessary (skip ->„fix tree body first“)
*   (Tree Height 3 3rd Top Level "#####")
* TreeHeight 5
* Tree Height 7
*/

export function tree(height: number): string[] {
    let trunk: string[], resultTree: string[] = [];
    if (height <= 1)
        trunk = ["#", "#"];
    else
        trunk = ["_#_", "_#_"];
    if (height === 2)
        resultTree.push("_#_", "###");
    if (height === 1)
        resultTree.push("#");
    return resultTree.concat(trunk);
}