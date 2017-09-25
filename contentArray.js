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
        'Page Content': "<p>All of your resources for lending.</p><br><br><br>"
    },
    
    // Lending Policies
    
    'Lending Policies': {
        'Index': 1,
        'File Path': "<p class='filePath'>Lending Policies</p>",
        'Page Title': "<h1 id='pageTitle'>Lending Policies</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },
    
        // Insurance
    
    'Insurance': {
        'Index': 2,
        'File Path': "<p class='filePath'>Lending Policies > Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Insurance</h1>",
        'Page Content': "<p>Insurance is required for the majority of ECDI loans to ensure protection for our clients’ personal assets and our financial interest in the business is secure. This requirement can be complicated to fulfill as insurance generally is a detail-oriented topic and insurance companies use a variety of terms to refer to essentially the same products on the insurance certificates. In light of the inherent complexity of insurance for businesses, ECDI’s specific interest involved with client insurance, and errors found with insurance in post close audits, the following will serve as a guide to a general understanding insurance policies and determining the kind of insurance ECDI clients require.</p><p>For more information visit <a href='http://www.iii.org/publications'>http://www.iii.org/publications</a> - this website provides public information about insurance policies and was an immense help in creating this guide. In particular is <a href='http://www.iii.org/publications/insuring-your-business-small-business-owners-guide-to-insurance/small-business-insurance-basics'>http://www.iii.org/publications/insuring-your-business-small-business-owners-guide-to-insurance/small-business-insurance-basics</a> which I would encourage all of ECDI’s RMs to read over.</p><br><br><br>"
    },
    
    'Liability Insurance': {
        'Index': 3,
        'File Path': "<p class='filePath'>Lending Policies > Insurance > Liability Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Liability Insurance</h1>",
        'Page Content': "<p>Liability Insurance – sometimes called “business insurance,” this covers civil liability that can occur as a consequence of simply operating a business, such as a civil suit from a customer of the business. Usually appears on the certificate as “commercial liability” or just “liability.” It should be noted that ECDI is NOT a loss payee for commercial liability – ECDI does not receive a check from an insurance company honoring a commercial liability policy. The insurance coverage goes toward paying fees and costs of litigating the liability incurred by the business. This obviously helps our client avoid financial ruin and continue paying down the loan (by not having to pay the judgment and fees) so it should be required of most borrowers.</p><br><br><br>"
    },
    
    'Automobile Insurance': {
        'Index': 4,
        'File Path': "<p class='filePath'>Lending Policies > Insurance > Automobile Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Automobile Insurance</h1>",
        'Page Content': "<p>Automobile Insurance – simply to differentiate from the other types of insurance (as everyone should be familiar with auto insurance) this type only covers particular kinds of events concerning a personal automobile, usually an accident, and pays for the car damage and injuries associated of those involved up to the policy limit. Any clients using personal automobiles as collateral will need to provide auto insurance and name ECDI as a loss payee.</p><p>The important part is that personal auto insurance primarily covers the vehicle for an individual using it as personal transport. So if the driver is using it primarily for his or her business (making deliveries, transporting passengers, etc.) then private insurance may not cover the vehicle in the event of an accident. In particular, prospective Uber or Lyft drivers in Ohio will need to obtain Rideshare Insurance or Rideshare Endorsement on the personal auto policy. An in-depth explanation of Rideshare Insurance can be found here: <a href='http://www.carinsurance.com/Articles/uber-insurance.aspx'>http://www.carinsurance.com/Articles/uber-insurance.aspx</a></p><p>Other kinds of businesses using vehicles will want to obtain Businessowner’s Automobile Insurance discussed above as personal auto insurance will not protect the business if the injured third party (the person injured in an accident with the business’s vehicle) decides to sue the business. It should be noted that if the automobile is used primarily for business purposes, then the business owner will need only obtain Businessowner’s Auto Insurance as that policy will likely cover the “grey area” of personal use. If the vehicle is primarily for personal use and sometimes used for the business, then the owner’s personal auto insurance should have a commercial liability endorsement.</p><p>An additional wrinkle with automobile insurance concerns trucking clients. Trucking clients must be evaluated based on whether they operate on their own authority (technical term in the trucking industry) or whether they are contract drivers.  Trucking clients who operate their own authority, called Independent Owner-Operators, can haul goods on their own licensure absent outside contracting, though they will typically contract with a supplier to deliver goods. Independent Owner-Operators require all federal and state licensure required for the kinds of loads they intend to deliver, in addition to possessing their own Commercial Auto Insurance. Primary liability coverage amount for the truck and cargo or secondary liability (truck with no trailer) endorsements are examples of complications that should be discussed if a client is operating under their own authority.</p><p>The positive side of trucking insurance is if the client is operating as an Owner-Operator (non-independent), then the contracting company whose authority the client is operating under is required by FMSCA to supply the primary liability and cargo insurance coverage. The contractor however may charge the client for these mandatory provisions. In this case the Owner-Operator client need only maintain primary damage insurance for his or her truck. In either case however, ECDI should acquire some proof of primary and secondary insurance for its trucking clients.</p><br><br><br>"
    },
    
    'Property Insurance': {
        'Index': 5,
        'File Path': "<p class='filePath'>Lending Policies > Insurance > Property Insurance</p>",
        'Page Title': "<h1 id='pageTitle'>Property Insurance</h1>",
        'Page Content': "<p>Property Insurance – this kind breaks into two kinds of property: Real Property and Personal Property. Real property refers to land, buildings and “fixtures;” personal property refers to smaller items and equipment. Usually both kinds of insurance will be included in a policy for Home Insurance – the home is insured in the event the structure itself is naturally damaged or destroyed, and the possessions inside the house will be insured from damage and, depending on the policy, theft. Same goes for Property Insurance for a business. Any clients who mortgage their home or chose to leverage their personal possessions will need to provide proof of property insurance and list ECDI as a mortgagee or loss payee.</p><br><br><br>"
    },
    
        // End of Insurance
    
    // End of Lending Policies
    
    // Loan Programs
    
    'Loan Programs': {
        'Index': 6,
        'File Path': "<p class='filePath'>Loan Programs</p>",
        'Page Title': "<h1 id='pageTitle'>Loan Programs</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },
    
        // Refinance
    
    'Refinance': {
        'Index': 7,
        'File Path': "<p class='filePath'>Loan Programs > Refinance</p>",
        'Page Title': "<h1 id='pageTitle'>Refinance</h1>",
        'Page Content': "<p>Understanding that it is ECDI’s mission to serve entrepreneurs who face challenges in starting or growing their business, it is acknowledged that we must go over and above to ensure the sustainability of our small business borrowers.</p><p>This policy applies to any client requesting a refinance of their existing ECDI debt in order to lower their monthly payment, lower their interest rate, or to consolidate multiple existing loan into a single, new loan package. This policy applies only to existing ECDI debts, any request made for funds over and above the client’s existing debt exposure will be required to adhere to standard lending policy and process. Eligibility for the refinance will be determined on a client-by-client basis in accordance with the Equal Credit Opportunity Act and ECDI’s Nondiscrimination Policy.</p><p>Clients will be required to complete a Debt Refinance Request document. Once the request document is received by ECDI, the client will go through an expedited approval process that includes the verification of eligibility to receive federal funding. This refinance does not require updated credit assessment or background check, as long as the credit assessment and background checks were completed at the time of the original loan closing and are on file.</p><p>All refinance deals will be presented to the Internal Loan Review Committee, requiring existing ILRC voting thresholds for approval.  Any deviation from standard published interest rates for the new loan package will be presented as part of the refinance credit analysis for approval by the committee.</p><p>Closing costs shall be 1% of all non-SBA funds to be refinanced, or $150 whichever is lesser.</p><br><br><br>"
    },
    
        // End of Refinance
    
        // Founders Signature Loan
    
    'Founders Signature Loan': {
        'Index': 8,
        'File Path': "<p class='filePath'>Loan Programs > Founders Signature Loan</p>",
        'Page Title': "<h1 id='pageTitle'>Founders Signature Loan</h1>",
        'Page Content': "<p>To further serve its mission of assisting small businesses and fostering job creation in Ohio, ECDI is offering a Founders’ Signature Loan to existing ECDI clients.  The Founders’ Signature Loan fills an existing credit gap by offering a small-dollar, low interest rate loan with a shorter repayment period to pre-qualified customers.  The Loan provides existing ECDI clients the opportunity to receive a quick injection of capital to take advantage of important business objectives, cover unexpected business expenses, and prepare for the future.  The product requires limited documentation by leveraging ECDI's relationships with existing clients while meeting the requirements of ECDI's funders.  The Loan will be offered through October 31st, 2017.</p><p>Loan Parameters:</p><ul><li>$1,000</li><li>No application fee or closing costs</li><li>4% interest rate</li><li>12-month repayment period</li></ul><p>Loan Package:</p><ul><li>Streamlined application containing Job Creation Form and Child Support Form</li><li>CAIVRS check</li><li>Single-page Credit Analysis</li><li>SBA Note, Personal Guarantee, and ACH Authorization Form</li><li>Funding Request</li></ul><p>Eligibility:</p><ul><li>The client must not have caused ECDI a prior loss, meaning that the client cannot be more than 90 days past due.  The Loan is available to current and past clients.</li></ul><p>Process:</p><ul><li>The Founders’ Signature Loan will be primarily be processed by the Portfolio Management Team.  The reduced documentation and streamlined eligibility requirements will allow the Loan to be quickly processed outside of th</li></ul><p>If you have any questions or clients interested in the Founders’ Signature Loan, please contact Tim Kehoe or Aaron Cornell.</p><br><br><br>"
    },
    
        // End of Founders Signature Loan
    
        // Spring Special
    
    'Spring Special': {
        'Index': 9,
        'File Path': "<p class='filePath'>Loan Programs > Spring Special</p>",
        'Page Title': "<h1 id='pageTitle'>Spring Special</h1>",
        'Page Content': "<p>ECDI Executive Management has agreed to offer a loan special to existing clients. The lending criteria for the loan special is less restrictive than ECDI's regular loan program. Consequently, we are requesting your approval of the loan terms as well as the exception on the items required for the background search and processing of the loans.</p><p>Basic Terms:</p><ul><li>Spring Loan Special for EXISTING clients ONLY</li><li>$5,000 max</li><li>Must have made on time payments for last 12 months with no hardships<ul><li>Other conditions and requirements may apply</li></ul></li><li>Rate of 5% fixed</li><li>No closing fee</li><li>Collateral: First position lien on All Business Assets</li><li>Must close prior to 5/31/17</li></ul><p>Processing:</p><ul><li>Background:<ul><li>Cavirs new search</li><li>OFAC new search</li><li>USDA-ok to use search on file if address has not changed</li><li>SOS-Bus Filed and Active new search</li><li>UCC Search (ECDI in 1st) new search</li><li>Flood-ok to use search on file if address has not changed</li></ul></li><li>Loan File:<ul>Microloan App shortened version in process</li><li>Child Support Form-new</li><li>ID's-ok to use noes on file unless there is no current UCC on file and we will need to file-then a curent, unexpired ID will be required</li><li>Verify Operating agreement on file</li><li>Verify Insurance on file</li></ul></li><li>Financials/Credit:<ul><li>Credit Report-new if older than 6 months</li><li>DHL verification-12 months on-time payments with no hardships</li><li>Collection of most recent Business Tax Returns</li></ul></li><li>Other:<ul><li>ORR Cert, if applicable</li></ul></li></ul><br><br><br>"
    },
    
        // End of Founders Signature Loan
    
        // Microloans
    
    'Microloans': {
        'Index': 10,
        'File Path': "<p class='filePath'>Loan Programs > Microloans</p>",
        'Page Title': "<h1 id='pageTitle'>Microloans</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },
    
            // $10K or Less
    
    '$10K or Less': {
        'Index': 11,
        'File Path': "<p class='filePath'>Loan Programs > Microloans > $10K or Less</p>",
        'Page Title': "<h1 id='pageTitle'>$10K or Less</h1>",
        'Page Content': "<p>The lending policy for loans $10,000 and less has be reviewed and modified. Below are the new credit guidelines:</p><br><br><br>"
    },
    
    'Launch Loan: Tier 1': {
        'Index': 12,
        'File Path': "<p class='filePath'>Loan Programs > Microloans > $10K or Less > Launch Loan: Tier 1</p>",
        'Page Title': "<h1 id='pageTitle'>Launch Loan: Tier 1</h1>",
        'Page Content': "<p>Launch Loan – Tier 1 (formerly known as the Credit Builder Loan): designed for clients that have credit issues or insufficient credit that precludes them from a traditional ECDI loan. The objective of this loan product is to help clients improve their credit situation and advance the client’s access to the financial system. The Tier 1 Launch Loan product is as follows:</p><ul><li>Loan amount up to $750.00</li><li>Nine (9) month term, fixed interest rate of 8.5%</li><li>2% Loan Closing Fee</li><li>No collateral required</li><li>Risk Rating will be a 7</li><li>Loan requests are submitted to the ECDI credit division (Ben)<ul><li>The underwriter will conduct a reduced credit analysis and work with the RM to explain past credit issues. Clients with judgements or tax liens are ineligible</li>If there are collection items on a client’s credit report, the RM should discuss the items with the client and identify why the collection occurred and what steps the client is taking to address the items. This information gathering process should take place in conjunction with the background check, prior to submittal of the CA.</li></ul></li><li>Items need for Credit Builder Loans are as follows:<ul><li>Application – COMPLETE OUTCOME TRACKER RECORD</li>Completion of a Financial Literacy course with evidence of course completion and an action plan for improving the client’s credit</li><li>2 most recent pay stubs</li><li>Tax returns – at the discretion of the RM</li><li>Certificate with Sec. of State</li><li>CAVIRS</li><li>FEMA Flood Plain Search</li><li>Child Support Form</li><li>FABCO Report</li><li>New Abbreviated Credit Analysis Write-up – the CA should include an explanation of past credit issues along with action plan to address collection items</li></ul></li></ul><br><br><br>"
    },
    
    'Launch Loan: Tier 2': {
        'Index': 13,
        'File Path': "<p class='filePath'>Loan Programs > Microloans > $10K or Less > Launch Loan: Tier 2</p>",
        'Page Title': "<h1 id='pageTitle'>Launch Loan: Tier 2</h1>",
        'Page Content': "<p>Launch Loan – Tier 2 (formerly known as the Quick Loan): designed for clients that may need a quick injection of a small amount of capital to begin a project. The Tier 2 Launch Loan product is as follows:</p><ul><li>Loan amount up to $2,500.00</li><li>twelve (12) month term, fixed interest rate of 8.5%</li><li>All Business Assets UCC</li><li>Risk Rating will be a 6</li><li>Client must have a credit score of at least 590</li><li>Loan requests are submitted to the ECDI credit division (Ben)<ul><li>The underwriter will conduct a reduced credit analysis and work with the RM to explain past credit issues. Clients with judgements or tax liens are ineligible</li><li>If there are collection items on a client’s credit report, the RM should discuss the items with the client and identify why the collection occurred and what steps the client is taking to address the items. This information gathering process should take place in conjunction with the background check, prior to submittal of the CA.</li></ul></li><li>Items need for Credit Builder Loans are as follows:<ul><li>Application – COMPLETE OUTCOME TRACKER RECORD</li><li>2 most recent pay stubs</li><li>W2 report form</li><li>2 years of Tax returns – Business and Personal</li><li>Personal Financial Statement</li><li>Certificate with Sec. of State</li><li>CAVIRS</li><li>FEMA Flood Plain Search</li><li>Child Support Form</li><li>FABCO Report</li><li>New Abbreviated Credit Analysis Write-up – the CA should include an explanation of past credit issues along with action plan to address collection items</li></ul></li><li>Tier 2 Launch Loan that are part of a larger loan request should be brought before the Internal Loan Review Committee in the form of flag pole discussion</li></ul><br><br><br>"
    },
    
    '$10,000 Term Loans': {
        'Index': 14,
        'File Path': "<p class='filePath'>Loan Programs > Microloans > $10K or Less > $10,000 Term Loans</p>",
        'Page Title': "<h1 id='pageTitle'>$10,000 Term Loans</h1>",
        'Page Content': "<p>$10,000 term Loans:</p><ul><li>Loan amount up to $10,000</li><li>Fixed annual interest rate range from 7.25% to 12.25%</li><li>Loan Terms 6 to 60 months</li><li>Loans require at least 50% collateral coverage</li><li>Loan requests are submitted to the ECDI credit division (Ben)<ul><li>The underwriter will conduct a reduced credit analysis</li></ul></li><li>Items needed for loans above $2,500 include but are not limited to standard underwriting credit information for ECDI packages – SEE Loan File Set-up Sheet</li></ul><br><br><br>"
    },
    
            // End of $10K or Less
    
        // End of Microloans
    
        
    
    // End of Loan Programs
    
    // Operations P+P
    
    'Operations Policies+Procedures': {
        'Index': 15,
        'File Path': "<p class='filePath'>Operations Policies+Procedures</p>",
        'Page Title': "<h1 id='pageTitle'>Operations Policies+Procedures</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },
    
    'Insurance Requirements': {
        'Index': 16,
        'File Path': "<p class='filePath'>Operations Policies+Procedures > Insurance Requirements</p>",
        'Page Title': "<h1 id='pageTitle'>Insurance Requirements</h1>",
        'Page Content': '<p>All loan recipients are required to maintain a business liability insurance policy for the business receiving ECDI funds. This policy must list ECDI as the loss payee on the policy. Certificate Holder is a notice only designation and not the same thing as loss payee. Loss payee allows ECDI to receive payment on our loan in the event of a claim on the policy.</p><p>If you ever have questions on if we are listed correctly on a policy, calling on the agent listed on the policy can often clear up any confusion.</p><p>These policies must be maintained for the life of the loan and require monitoring throughout. The DHL procedure outlined below is how that monitoring occurs.</p><button type="button" class="float btn btn-search-results" data-toggle="modal" data-target="#modal1"><img src="Images/insuranceRequirements1.png"></button><div id="modal1" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Image 1</h4></div><div class="modal-body"><img class="img-lg" src="Images/insuranceRequirements1.png"></div></div></div></div><p>When the declaration page or the certificate page comes in, the information is noted on the Business Form, User Defined Tab. The Policy Effective Date is the date used for entering into DHL, so you will have to override the date to correctly show the effective policy date in DHL.</p><p>For the Comment Section, please include policy number, from who, loss payee status and renewal date.</p><p>Example: "Policy SAB12345 from Acme Insurance, with ECDI listed as loss payee; policy effective through 12-10-2015"</p><div class="floatBreak"></div><button type="button" class="float btn btn-search-results" data-toggle="modal" data-target="#modal2"><img class="float" src="Images/insuranceRequirements2.png"></button><div id="modal2" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Image 2</h4></div><div class="modal-body"><img class="img-lg" src="Images/insuranceRequirements2.png"></div></div></div></div><p>Once the policy is entered into the Business Form, an action alert should be set so ECDI employees can follow up with the client to obtain the policy renewal. This is done on the Loan Form, Action Alert tab. All action alerts are specific to the subfund, so please set all alerts to the primary subfund of the loan (typically SBA).</p><p>Most business policies are effective for one year, so throughout the life of the loan, there should be a few renewals received.</p><p>Hit “Add”, and enter the date for when you want to be reminded. In the comments field, please be specific about what should be done.</p><p>Example: "Policy SAB12345 from Acme Insurance will expire 12-10-2015. Please contact borrower for updated insurance"</p><div class="floatBreak"></div><p>For all ECDI Insurance Policies, click <button id="Insurance" class="btn btn-search-results inline" type="button" onclick="changeContent(this)">HERE.</button></p><br><br><br>'
    },
    
        // Closing
    
    'Closing': {
        'Index': 17,
        'File Path': "<p class='filePath'>Operations Policies+Procedures > Closing</p>",
        'Page Title': "<h1 id='pageTitle'>Closing</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },
    
            // Loan Docs
    
    'Loan Documents': {
        'Index': 18,
        'File Path': "<p class='filePath'>Operations Policies+Procedures > Closing > Loan Documents</p>",
        'Page Title': "<h1 id='pageTitle'>Loan Documents</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },
    
    'Closing Instructions': {
        'Index': 19,
        'File Path': "<p class='filePath'>Operations Policies+Procedures > Closing > Loan Documents > Closing Instructions</p>",
        'Page Title': "<h1 id='pageTitle'>Closing Instructions</h1>",
        'Page Content': "<h4>**WATCH SAVING… USE SAVE AS INTO CORRESPONDING FOLDER**</h4><p>L:drive  loan doc’s (FY11-12)</p><ol type='1'><li>Loan doc data sheet (info summary)<ol type='a'><li>Payments always come 30-40 days after close, on 1st or 15th; 60 = standard term</li><li>Maturity date manually needs changed</li><li>Funding sources in order</li><li>Checks</li></ol></li><li>Amortization Table</li></ol><p>->Auto Doc’s</p><ol type='1'><li>Cognovit Note<ol type='a'><li>mail to: finish & merge -> from 1:1<ol type='i'><li>With more than one guarantors, 1:2/3/4, etc. </li></ol></li><li>Must manually enter co-borrower signature/initial lines</li></ol></li><li>Personal Guarantees<ol type='a'><li>Only doc signed by guarantors</li><li>Fill in name for personal guarantors (does not auto populate) and final signature line</li><li>Fill in initials</li></ol></li><li>Business Loan Agreements<ol type='a'><li>Fill in borrowers (bottom page 2)</li><li>Fill in all lines for co-borrowers</li></ol></li><li>Security Agreement<ol type='a'><li>Watch header – year will be shoved onto line 2</li><li>Fill in all lines for signatures</li><li>Anything required by loan review comm. must be on security agreement</li><li>Use: collateral folder for specifics</li></ol></li></ol><p>->Closing Document Originals</p><p>Fill in all details for:</p><ol type='1'><li>ACH authorization</li><li>Loan Closing Receipt & Fee Receipt</li><li>Resolution for Borrowing (if partnership, LLC)</li><li>SBA Debarment (if SBA funds used)</li><li>SBA fee agreement (if SBA funds used)</li><li>Errors and Omissions Agreement</li><li>First Source Hiring</li><li>Info Release</li><li>Job Creation</li><li>Child Support Form</li></ol><br><br><br>"
    },
    
            // End of Loan Docs
    
        // End of Closing
    
    // End of Operations P+P
    
    // Compliance
    
    'Compliance': {
        'Index': 20,
        'File Path': "<p class='filePath'>Compliance</p>",
        'Page Title': "<h1 id='pageTitle'>Compliance</h1>",
        'Page Content': "<p>Insert Text Here</p><br><br><br>"
    },
    
};









