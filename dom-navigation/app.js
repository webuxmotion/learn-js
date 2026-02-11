const rows = table_el.rows;

for (let i = 0; i < rows.length; i++) {
    if (rows[i].children[i]) {
        rows[i].children[i].style.background = "red";
    }
}