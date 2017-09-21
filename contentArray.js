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
        'File Path': "<p class='filePath'>Folder Title > Page Title</p>",
        'Page Title': "<h1 id='pageTitle'>Page Title</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },

You can then replace the info with the actual contents you want to add.
Index should be in numerical order according to the order in the navigation.
You will need to change the index value of other pages if you want to add a page in the middle
of the navigation.  If you do this, simply increase the index value of all pages after the new one
by the number of new pages you add.

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


Lists can be either ordered or unordered.
<ol> tags are for ordered lists and can have type="" A, a, I, i, or 1.
<ul> tags are for unordered lists (bullet points).
Each list item must also be inside an <li></li> tag.
Lists can be nested by placing the <ol> or <ul> tag inside an <li> tag.

<br> tags are used to create an empty line.
These are helpful for keeping text away from the bottom of the page, or spacing out elements.

When you add anything to the array, the whole item must still be in quotations,
and there can't be any line breaks between elements (just type it all on one line).
If it is all orange, you did it right!

*/

var contentArray = {
    
    // Home Page
    
    'Home Page': {
        'Index': 0,
        'File Path': "<p class='filePath'>Home Page</p>",
        'Page Title': "<h1 id='pageTitle'>Home Page</h1>",
        'Page Content': "<p>All of your resources for lending.</p><p>Lorem ipsum dolor sit amet, commune pericula eum ne, usu ut vitae instructior, cu vel mucius delicata gloriatur. No interesset consectetuer ius, eum choro intellegebat cu. Est euismod atomorum neglegentur ex. Sit ex quidam omnium, sea modus tractatos eu. Meis mollis ei vix.</p><p>Cum an omnis fuisset, has id commodo erroribus definitionem, stet ullum placerat ex sea. Elit sanctus ei qui, ex quo suavitate consetetur. Aliquip scripta ex eam. Dicit patrioque ne sed, option pertinax assueverit qui eu. Ad nisl unum vis, atqui partem salutatus ea sed. Ea qui quas iusto voluptua, ne eius consectetuer quo.</p><p>Solet laudem posidonium sed eu, cu maiorum intellegat eam, fierent moderatius constituam ex pro. Vix et nibh menandri vulputate, ea sit sumo malis recteque. Error graeco dissentias sit et, ex paulo oporteat hendrerit qui, ad nominavi vulputate vim. Et adhuc zril qui. Sit error graeco facilisi in, cum ei fastidii propriae qualisque. Eos cetero vulputate eu, amet erant cu cum.</p><p>Quo id equidem scripserit. His an nihil iudico, at nec animal persius. Id commodo delectus contentiones sea. Error electram est no. Et per sint facete dicunt, cu pro illud persecuti voluptaria. Ei iriure gubergren ius, at pericula pertinacia vituperata est, ceteros accusamus neglegentur ut ius.</p><p>Cu eum quodsi epicuri constituto. Diceret periculis in vix, ea vitae facilis definitionem cum. Ne sed prima lobortis maiestatis. Audire noluisse similique ea sea, te has facer petentium, vis stet movet omittantur at. Eum ne tibique percipit facilisis, usu id audiam legimus intellegebat. Vis nullam cetero no, nec meis nusquam partiendo ea.</p><p>Lorem ipsum dolor sit amet, commune pericula eum ne, usu ut vitae instructior, cu vel mucius delicata gloriatur. No interesset consectetuer ius, eum choro intellegebat cu. Est euismod atomorum neglegentur ex. Sit ex quidam omnium, sea modus tractatos eu. Meis mollis ei vix.</p><p>Cum an omnis fuisset, has id commodo erroribus definitionem, stet ullum placerat ex sea. Elit sanctus ei qui, ex quo suavitate consetetur. Aliquip scripta ex eam. Dicit patrioque ne sed, option pertinax assueverit qui eu. Ad nisl unum vis, atqui partem salutatus ea sed. Ea qui quas iusto voluptua, ne eius consectetuer quo.</p><p>Solet laudem posidonium sed eu, cu maiorum intellegat eam, fierent moderatius constituam ex pro. Vix et nibh menandri vulputate, ea sit sumo malis recteque. Error graeco dissentias sit et, ex paulo oporteat hendrerit qui, ad nominavi vulputate vim. Et adhuc zril qui. Sit error graeco facilisi in, cum ei fastidii propriae qualisque. Eos cetero vulputate eu, amet erant cu cum.</p><p>Quo id equidem scripserit. His an nihil iudico, at nec animal persius. Id commodo delectus contentiones sea. Error electram est no. Et per sint facete dicunt, cu pro illud persecuti voluptaria. Ei iriure gubergren ius, at pericula pertinacia vituperata est, ceteros accusamus neglegentur ut ius.</p><p>Cu eum quodsi epicuri constituto. Diceret periculis in vix, ea vitae facilis definitionem cum. Ne sed prima lobortis maiestatis. Audire noluisse similique ea sea, te has facer petentium, vis stet movet omittantur at. Eum ne tibique percipit facilisis, usu id audiam legimus intellegebat. Vis nullam cetero no, nec meis nusquam partiendo ea.</p><br><br><br>"
    },
    
    // Lending Policies
    
        // Insurance
    
    'Insurance': {
        'Index': 1,
        'File Path': "<p class='filePath'>Lending Policies > Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Insurance</h1>",
        'Page Content': "<p>Insurance is required for the majority of ECDI loans to ensure protection for our clients’ personal assets and our financial interest in the business is secure. This requirement can be complicated to fulfill as insurance generally is a detail-oriented topic and insurance companies use a variety of terms to refer to essentially the same products on the insurance certificates. In light of the inherent complexity of insurance for businesses, ECDI’s specific interest involved with client insurance, and errors found with insurance in post close audits, the following will serve as a guide to a general understanding insurance policies and determining the kind of insurance ECDI clients require.</p><p>For more information visit <a href='http://www.iii.org/publications'>http://www.iii.org/publications</a> - this website provides public information about insurance policies and was an immense help in creating this guide. In particular is <a href='http://www.iii.org/publications/insuring-your-business-small-business-owners-guide-to-insurance/small-business-insurance-basics'>http://www.iii.org/publications/insuring-your-business-small-business-owners-guide-to-insurance/small-business-insurance-basics</a> which I would encourage all of ECDI’s RMs to read over.</p><br><br><br>"
    },
    
    'Liability Insurance': {
        'Index': 2,
        'File Path': "<p class='filePath'>Lending Policies > Insurance > Liability Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Liability Insurance</h1>",
        'Page Content': "<p>Liability Insurance – sometimes called “business insurance,” this covers civil liability that can occur as a consequence of simply operating a business, such as a civil suit from a customer of the business. Usually appears on the certificate as “commercial liability” or just “liability.” It should be noted that ECDI is NOT a loss payee for commercial liability – ECDI does not receive a check from an insurance company honoring a commercial liability policy. The insurance coverage goes toward paying fees and costs of litigating the liability incurred by the business. This obviously helps our client avoid financial ruin and continue paying down the loan (by not having to pay the judgment and fees) so it should be required of most borrowers.</p><br><br><br>"
    },
    
    'Automobile Insurance': {
        'Index': 3,
        'File Path': "<p class='filePath'>Lending Policies > Insurance > Automobile Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Automobile Insurance</h1>",
        'Page Content': "<p>Automobile Insurance – simply to differentiate from the other types of insurance (as everyone should be familiar with auto insurance) this type only covers particular kinds of events concerning a personal automobile, usually an accident, and pays for the car damage and injuries associated of those involved up to the policy limit. Any clients using personal automobiles as collateral will need to provide auto insurance and name ECDI as a loss payee.</p><p>The important part is that personal auto insurance primarily covers the vehicle for an individual using it as personal transport. So if the driver is using it primarily for his or her business (making deliveries, transporting passengers, etc.) then private insurance may not cover the vehicle in the event of an accident. In particular, prospective Uber or Lyft drivers in Ohio will need to obtain Rideshare Insurance or Rideshare Endorsement on the personal auto policy. An in-depth explanation of Rideshare Insurance can be found here: <a href='http://www.carinsurance.com/Articles/uber-insurance.aspx'>http://www.carinsurance.com/Articles/uber-insurance.aspx</a></p><p>Other kinds of businesses using vehicles will want to obtain Businessowner’s Automobile Insurance discussed above as personal auto insurance will not protect the business if the injured third party (the person injured in an accident with the business’s vehicle) decides to sue the business. It should be noted that if the automobile is used primarily for business purposes, then the business owner will need only obtain Businessowner’s Auto Insurance as that policy will likely cover the “grey area” of personal use. If the vehicle is primarily for personal use and sometimes used for the business, then the owner’s personal auto insurance should have a commercial liability endorsement.</p><p>An additional wrinkle with automobile insurance concerns trucking clients. Trucking clients must be evaluated based on whether they operate on their own authority (technical term in the trucking industry) or whether they are contract drivers.  Trucking clients who operate their own authority, called Independent Owner-Operators, can haul goods on their own licensure absent outside contracting, though they will typically contract with a supplier to deliver goods. Independent Owner-Operators require all federal and state licensure required for the kinds of loads they intend to deliver, in addition to possessing their own Commercial Auto Insurance. Primary liability coverage amount for the truck and cargo or secondary liability (truck with no trailer) endorsements are examples of complications that should be discussed if a client is operating under their own authority.</p><p>The positive side of trucking insurance is if the client is operating as an Owner-Operator (non-independent), then the contracting company whose authority the client is operating under is required by FMSCA to supply the primary liability and cargo insurance coverage. The contractor however may charge the client for these mandatory provisions. In this case the Owner-Operator client need only maintain primary damage insurance for his or her truck. In either case however, ECDI should acquire some proof of primary and secondary insurance for its trucking clients.</p><br><br><br>"
    },
    
    'Property Insurance': {
        'Index': 4,
        'File Path': "<p class='filePath'>Lending Policies > Insurance > Property Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Property Insurance</h1>",
        'Page Content': "<p>Property Insurance – this kind breaks into two kinds of property: Real Property and Personal Property. Real property refers to land, buildings and “fixtures;” personal property refers to smaller items and equipment. Usually both kinds of insurance will be included in a policy for Home Insurance – the home is insured in the event the structure itself is naturally damaged or destroyed, and the possessions inside the house will be insured from damage and, depending on the policy, theft. Same goes for Property Insurance for a business. Any clients who mortgage their home or chose to leverage their personal possessions will need to provide proof of property insurance and list ECDI as a mortgagee or loss payee.</p><br><br><br>"
    },
    
        //End of Insurance
    
    // End of Lending Policies
    
    // Loan Programs
    
    // End of Loan Programs
    
    // Operations P+P
    
    'Insurance Requirements': {
        'Index': 5,
        'File Path': "<p class='filePath'>Operations Policies+Procedures > Insurance Requirements</p>",
        'Page Title': "<h1 id='pageTitle'>Insurance Requirements</h1>",
        'Page Content': '<p>All loan recipients are required to maintain a business liability insurance policy for the business receiving ECDI funds. This policy must list ECDI as the loss payee on the policy. Certificate Holder is a notice only designation and not the same thing as loss payee. Loss payee allows ECDI to receive payment on our loan in the event of a claim on the policy.</p><p>If you ever have questions on if we are listed correctly on a policy, calling on the agent listed on the policy can often clear up any confusion.</p><p>These policies must be maintained for the life of the loan and require monitoring throughout. The DHL procedure outlined below is how that monitoring occurs.</p><button type="button" class="float btn btn-search-results" data-toggle="modal" data-target="#modal1"><img src="Images/insuranceRequirements1.png"></button><div id="modal1" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Image 1</h4></div><div class="modal-body"><img class="img-lg" src="Images/insuranceRequirements1.png"></div></div></div></div><p>When the declaration page or the certificate page comes in, the information is noted on the Business Form, User Defined Tab. The Policy Effective Date is the date used for entering into DHL, so you will have to override the date to correctly show the effective policy date in DHL.</p><p>For the Comment Section, please include policy number, from who, loss payee status and renewal date.</p><p>Example: "Policy SAB12345 from Acme Insurance, with ECDI listed as loss payee; policy effective through 12-10-2015"</p><div class="floatBreak"></div><button type="button" class="float btn btn-search-results" data-toggle="modal" data-target="#modal2"><img class="float" src="Images/insuranceRequirements2.png"></button><div id="modal2" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Image 2</h4></div><div class="modal-body"><img class="img-lg" src="Images/insuranceRequirements2.png"></div></div></div></div><p>Once the policy is entered into the Business Form, an action alert should be set so ECDI employees can follow up with the client to obtain the policy renewal. This is done on the Loan Form, Action Alert tab. All action alerts are specific to the subfund, so please set all alerts to the primary subfund of the loan (typically SBA).</p><p>Most business policies are effective for one year, so throughout the life of the loan, there should be a few renewals received.</p><p>Hit “Add”, and enter the date for when you want to be reminded. In the comments field, please be specific about what should be done.</p><p>Example: "Policy SAB12345 from Acme Insurance will expire 12-10-2015. Please contact borrower for updated insurance"</p><div class="floatBreak"></div><p>For all ECDI Insurance Policies, click <button id="Insurance" class="btn btn-search-results inline" type="button" onclick="changeContent(this)">HERE.</button></p><br><br><br>'
    },
    
        // Closing
    
            // Loan Docs
    
    'Closing Instructions': {
        'Index': 6,
        'File Path': "<p class='filePath'>Operations Policies+Procedures > Closing > Loan Documents > Closing Instructions</p>",
        'Page Title': "<h1 id='pageTitle'>Closing Instructions</h1>",
        'Page Content': "<h4>**WATCH SAVING… USE SAVE AS INTO CORRESPONDING FOLDER**</h4><p>L:drive  loan doc’s (FY11-12)</p><ol type='1'><li>Loan doc data sheet (info summary)<ol type='a'><li>Payments always come 30-40 days after close, on 1st or 15th; 60 = standard term</li><li>Maturity date manually needs changed</li><li>Funding sources in order</li><li>Checks</li></ol></li><li>Amortization Table</li></ol><p>->Auto Doc’s</p><ol type='1'><li>Cognovit Note<ol type='a'><li>mail to: finish & merge -> from 1:1<ol type='i'><li>With more than one guarantors, 1:2/3/4, etc. </li></ol></li><li>Must manually enter co-borrower signature/initial lines</li></ol></li><li>Personal Guarantees<ol type='a'><li>Only doc signed by guarantors</li><li>Fill in name for personal guarantors (does not auto populate) and final signature line</li><li>Fill in initials</li></ol></li><li>Business Loan Agreements<ol type='a'><li>Fill in borrowers (bottom page 2)</li><li>Fill in all lines for co-borrowers</li></ol></li><li>Security Agreement<ol type='a'><li>Watch header – year will be shoved onto line 2</li><li>Fill in all lines for signatures</li><li>Anything required by loan review comm. must be on security agreement</li><li>Use: collateral folder for specifics</li></ol></li></ol><p>->Closing Document Originals</p><p>Fill in all details for:</p><ol type='1'><li>ACH authorization</li><li>Loan Closing Receipt & Fee Receipt</li><li>Resolution for Borrowing (if partnership, LLC)</li><li>SBA Debarment (if SBA funds used)</li><li>SBA fee agreement (if SBA funds used)</li><li>Errors and Omissions Agreement</li><li>First Source Hiring</li><li>Info Release</li><li>Job Creation</li><li>Child Support Form</li></ol><br><br><br>"
    }
    
            // End of Loan Docs
    
        // End of Closing
    
    // End of Operations P+P
    
};









