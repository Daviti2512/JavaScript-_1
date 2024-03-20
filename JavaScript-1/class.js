//-------------Davaleba-1-------------//
function Teqst(text) {
    const italicized = `<i>${text}</i>`;
    const underlined = `<u>${italicized}</u>`;
    const darkened = `<span style="color: darkgrey">${underlined}</span>`;
    return darkened;
}
const Text = Teqst("ნელნელა ვსწავლობ.");
document.write(Text);
document.write("<hr>")




//-------------Davaleba-2-------------//
function Numbers(a, b) {
    return a + b;
}
const result = Numbers(11, 12);
document.write(result);
document.write("<hr>")





//-------------Davaleba-3-------------//
function texti(text, fontSize) {
    return `<span style="font-size: ${fontSize}px">${text}</span>`;
}
const ტექსტი = texti("ცხოვრება იწყება იქ სადაც მთავრდება შიში და ეს არის საუკეტესო მომენტი, მომენტი სანამ ველაფერი დაიწყება", 25);
document.write(ტექსტი);
document.write("<hr>")





//-------------Davaleba-7-------------//

function ცხრილი(Color = "white") {
    const height = 2;
    const width = 2;
    let table = `<table style="background-color: ${Color}; border-collapse: collapse;">`;
    for (let i = 0; i < height; i++) {
        table += "<tr>"; 
        for (let j = 0; j < width; j++) {
            table += `<td style="border: 1px solid black; padding: 10px;">2</td>`;
        }
        table += "</tr>";
    }
    table += "</table>";
    document.body.innerHTML += table;
}
ცხრილი();
ცხრილი("gray");
document.write("<hr>")






//-------------Davaleba-11-------------//
function Natural() {
    for (let i = 1; i <= 10; i++) {
        document.write(i);
        document.write("<br>")
    }
}
Natural();
document.write("<hr>")




//-------------Davaleba-12-------------//
function printNaturali(n) {
    if (n <= 0) {
        document.write();
        return;
    }

    for (let i = 1; i <= n; i++) {
        document.write(i);
        document.write("<br>")
    }
}
printNaturali(15);
document.write("<hr>")





//-------------Davaleba-15-------------//
function cxril(rows, columns) {
    if (rows <= 0 || columns <= 0) {
        document.write();
        return;
    }

    let table = "<table border='1'>";
    for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < columns; j++) {
            table += "<td>Row " + (i + 1) + "," + (j + 1) + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.write(table);
}
cxril(3, 4);
document.write("<hr>")



