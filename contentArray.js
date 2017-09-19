/* 
contentArray is an array, or an ordered folder, of objects.
To make a new array, you say var name = [object0, object1, etc.];
This specific one has smaller arrays inside of the main array (similar to nested folders).
This is written as var contentArray = [Folder0[object0, etc], Folder1[object0], etc].
It is important to note that arrays start at 0, so the first object listed in a folder has an
index of 0.

To add a page, copy and paste this inside the array:

// Page Title
    'Page Title': {
        'Index': #,
        'File Path': "<p class='filePath'>Folder Title => Page Title</p>",
        'Page Title': "<h1 class='pageTitle'>Page Title</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },

You can then replace the info with the actual contents you want to add.
Index should be in numerical order according to the order in the navigation.

Here is some basic HTML info to help you add new content.
If this doesn't make sense, you can look at w3schools.com to help you.

<h> tags are used for Titles and range anywhere from <h1> to <h6>, with <h1> being the largest.
<p> tags are for paragraphs, and print the same as a normal paragraph.
<img> tags are for images and require a src (source image) attribute that is the same as the image
file.

All tags must have an "end tag" at the end of them, which is the same as the opening tag,
but with a / before the >. For example, a <p> tag must have a </p> after the text you want inside
of it.

To make a table, there are a few more steps:
<table> is the overall table.
<tr> is a table row.
<td> is a cell of the row.
So a table with two rows and three columns would look like this:
<table>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
    <tr>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
    </tr>
</table>


When you add anything to the array, the whole item must still be in quotations,
and there can't be any line breaks between elements (just type it all on one line).
If it is all orange, you did it right!

*/

var contentArray = {
    
    // Home Page
    
    'Lending Guide Home Page': {
        'Index': 0,
        'File Path': "<p class='filePath'>Home Page</p>",
        'Page Title': "<h1 id='pageTitle'>Lending Guide Home Page</h1>",
        'Page Content': "<p>All of your resources for lending.</p><p>Lorem ipsum dolor sit amet, commune pericula eum ne, usu ut vitae instructior, cu vel mucius delicata gloriatur. No interesset consectetuer ius, eum choro intellegebat cu. Est euismod atomorum neglegentur ex. Sit ex quidam omnium, sea modus tractatos eu. Meis mollis ei vix.</p><p>Cum an omnis fuisset, has id commodo erroribus definitionem, stet ullum placerat ex sea. Elit sanctus ei qui, ex quo suavitate consetetur. Aliquip scripta ex eam. Dicit patrioque ne sed, option pertinax assueverit qui eu. Ad nisl unum vis, atqui partem salutatus ea sed. Ea qui quas iusto voluptua, ne eius consectetuer quo.</p><p>Solet laudem posidonium sed eu, cu maiorum intellegat eam, fierent moderatius constituam ex pro. Vix et nibh menandri vulputate, ea sit sumo malis recteque. Error graeco dissentias sit et, ex paulo oporteat hendrerit qui, ad nominavi vulputate vim. Et adhuc zril qui. Sit error graeco facilisi in, cum ei fastidii propriae qualisque. Eos cetero vulputate eu, amet erant cu cum.</p><p>Quo id equidem scripserit. His an nihil iudico, at nec animal persius. Id commodo delectus contentiones sea. Error electram est no. Et per sint facete dicunt, cu pro illud persecuti voluptaria. Ei iriure gubergren ius, at pericula pertinacia vituperata est, ceteros accusamus neglegentur ut ius.</p><p>Cu eum quodsi epicuri constituto. Diceret periculis in vix, ea vitae facilis definitionem cum. Ne sed prima lobortis maiestatis. Audire noluisse similique ea sea, te has facer petentium, vis stet movet omittantur at. Eum ne tibique percipit facilisis, usu id audiam legimus intellegebat. Vis nullam cetero no, nec meis nusquam partiendo ea.</p><p>Lorem ipsum dolor sit amet, commune pericula eum ne, usu ut vitae instructior, cu vel mucius delicata gloriatur. No interesset consectetuer ius, eum choro intellegebat cu. Est euismod atomorum neglegentur ex. Sit ex quidam omnium, sea modus tractatos eu. Meis mollis ei vix.</p><p>Cum an omnis fuisset, has id commodo erroribus definitionem, stet ullum placerat ex sea. Elit sanctus ei qui, ex quo suavitate consetetur. Aliquip scripta ex eam. Dicit patrioque ne sed, option pertinax assueverit qui eu. Ad nisl unum vis, atqui partem salutatus ea sed. Ea qui quas iusto voluptua, ne eius consectetuer quo.</p><p>Solet laudem posidonium sed eu, cu maiorum intellegat eam, fierent moderatius constituam ex pro. Vix et nibh menandri vulputate, ea sit sumo malis recteque. Error graeco dissentias sit et, ex paulo oporteat hendrerit qui, ad nominavi vulputate vim. Et adhuc zril qui. Sit error graeco facilisi in, cum ei fastidii propriae qualisque. Eos cetero vulputate eu, amet erant cu cum.</p><p>Quo id equidem scripserit. His an nihil iudico, at nec animal persius. Id commodo delectus contentiones sea. Error electram est no. Et per sint facete dicunt, cu pro illud persecuti voluptaria. Ei iriure gubergren ius, at pericula pertinacia vituperata est, ceteros accusamus neglegentur ut ius.</p><p>Cu eum quodsi epicuri constituto. Diceret periculis in vix, ea vitae facilis definitionem cum. Ne sed prima lobortis maiestatis. Audire noluisse similique ea sea, te has facer petentium, vis stet movet omittantur at. Eum ne tibique percipit facilisis, usu id audiam legimus intellegebat. Vis nullam cetero no, nec meis nusquam partiendo ea.</p>"
    },
    
    // Folder 1
    
    // Page 1.1
    'Page 1.1': {
        'Index': 1,
        'File Path': "<p class='filePath'>Folder 1 > Page 1.1</p>",
        'Page Title': "<h1 id='pageTitle'>Page 1.1</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },
    // Page 1.1
    'Page 1.2': {
        'Index': 2,
        'File Path': "<p class='filePath'>Folder 1 > Page 1.2</p>",
        'Page Title': "<h1 id='pageTitle'>Page 1.2</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },
    // Page 1.1
    'Page 1.3': {
        'Index': 3,
        'File Path': "<p class='filePath'>Folder 1 > Page 1.3</p>",
        'Page Title': "<h1 id='pageTitle'>Page 1.3</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },  // End of Folder 1
    
    // Folder 2
    
    // Folder 2.1
    
    // Page 2.1.1
    'Page 2.1.1': {
        'Index': 4,
        'File Path': "<p class='filePath'>Folder 2 > Folder 2.1 > Page 2.1.1</p>",
        'Page Title': "<h1 id='pageTitle'>Page 2.1.1</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },    
    // Page 2.1.2
    'Page 2.1.2': {
        'Index': 5,
        'File Path': "<p class='filePath'>Folder 2 > Folder 2.1 > Page 2.1.2</p>",
        'Page Title': "<h1 id='pageTitle'>Page 2.1.2</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },    
    // Page 2.1.3
    'Page 2.1.3': {
        'Index': 6,
        'File Path': "<p class='filePath'>Folder 2 > Folder 2.1 > Page 2.1.3</p>",
        'Page Title': "<h1 id='pageTitle'>Page 2.1.3</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },  // End of Folder 2.1
    
    // Page 2.2
    'Page 2.2': {
        'Index': 7,
        'File Path': "<p class='filePath'>Folder 2 > Page 2.2</p>",
        'Page Title': "<h1 id='pageTitle'>Page 2.2</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },    
    // Page 2.3
    'Page 2.3': {
        'Index': 8,
        'File Path': "<p class='filePath'>Folder 2 > Page 2.3</p>",
        'Page Title': "<h1 id='pageTitle'>Page 2.3</h1>",
        'Page Content': "<p>Insert Text Here</p>"
    },  // End of Folder 2
    
};









