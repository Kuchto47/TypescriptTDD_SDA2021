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

    tree(0) -> ['#', '#']
    tree(1) -> ['#', '#', '#']
* PLACEHOLDER for testing ideas if requested...
*/

export function tree(height: number): string[] {
    if (height == 0) {
        return ['#', '#'];
    }
    let treeCrown: string[] = [];
    let maxWidth = 2 * height - 1;
    for (let i=0; i<height; i++) {
        treeCrown.push(`${"_".repeat(height - i - 1)}${"#".repeat(1 + 2*i)}${"_".repeat(height - i - 1)}`);
    }

    let trunkLevel = `${"_".repeat(height-1)}#${"_".repeat(height-1)}`;
    let trunk = [trunkLevel,trunkLevel];
    // if (height == 1) {
    //     treeCrown = ['#'];
       
    // }
    // if (height == 2){
    //     treeCrown = ['_#_', '###'];
        
    // }

    // if (height == 3){
    //     treeCrown = ['__#__', '_###_', '#####'];
       
    // }
    // if(height == 4){
    //     treeCrown = ['___#___', '__###__', '_#####_','#######'];
    // }

    return treeCrown.concat(trunk);
}