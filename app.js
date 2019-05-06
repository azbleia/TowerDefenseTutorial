console.log("GetsHere3");

InitializeControls()
function InitializeControls()
{
document.onkeydown = CheckKeyDown;
// document.onkeyup = CheckKeyUp;
}

function CheckKeyDown(e)
{
    console.log("GetsHere2");


    if (e.keyCode == '37') {
        // left arrow
        console.log("Prev");
        PrevPage();


     }
     if (e.keyCode == '39') {
        // right arrow
        console.log("Next");
        NextPage();
     }
}

let page = 1;
let lastPage = 5;

let gifs = [
"",
"Part1.mp4",
"Part2.mp4",
"Part3.mp4",
"Part4.mp4",
];
/*
"Part5.mp4",
"Part6.mp4",
"Part7.mp4",
"Part8.mp4",
"Part9.mp4",
"Part10.mp4",
];
*/

let towerDefenseDownloadLink = "https://assetstore.unity.com/packages/essentials/tutorial-projects/tower-defense-template-107692";
let lupDownloadLink = "https://developer.leialoft.com/main/documentation";

let step5 = 
`To start, let's disable everything except the GameCamera and LeiaDisplay game objects, so we can just look at the Leia Camera rig.<br>`
+`Observe the Leia Camera bouding volume, which shows you what objects will be displayed and how much depth they will have.<br>`
+`The blue plane is the convergence plane. Objects on this plane will appear at the height of the display.<br>`
+`Objects behind the convergence plane will appear inside the display.<br>`
+`Objects in front of the convergence plane will appear to pop out of the display.<br>`
+`We can adjust the convergence plane's distance from the camera using the Leia Camera component,<br>`
+`and also change the amount of depth by adjusting the baseline scaling.<br>`
+`a higher baseline scaling value will result in more depth.<br>`
+`a lower baseline scaling value will result in less depth.<br>`;

let instructions = [
`This tutorial will show you how to make lightfield content look great on LitByLeia devices,<br>using the Unity Tower Defense Template project.`,
`To start, import the <a target="_blank" href="${towerDefenseDownloadLink}">Tower Defense Template</a> from the Unity Asset Store into a blank Unity project.<br><br>`,
`Download and import the Leia Loft Unity SDK into your project from the  <a target="_blank" href="${lupDownloadLink}">LeiaLoft developer portal</a> .<br>Extract the folder and then import the package called LeiaLoft_Unity_Plugin_vx.x.x.unityPackage.`,
`Open the Level1 scene and add a LeiaCamera component to the GameCamera game object.<br>This will enable multiview rendering from the game camera.<br>If you run the game now on any LitByLeia device, Level 1 will be rendered in multiview.`,
step5,
``,
``,
``,
``,
``,
``,
``,
``,
];

let newStr = ``;

let videoDiv = $("#videos");

for(let i = 0 ; i < gifs.length ; i++)
	{
	newStr = `
	<video height="500" autoplay loop> //autoplay loop
	<source src="${gifs[i]}" type="video/mp4">
	Browser doesn't support video
	</video><br>
	`

	let newVideoDiv = $(`<div id="TutorialImage${i}">`);

	newVideoDiv.append(newStr);

	if (i!=0)
	newVideoDiv.hide();

	videoDiv.append(newVideoDiv);
	}


UpdateInstructions();

//$("#PrevPage").hide();

function PrevPage()
	{
    if (page > 1)
        {
        page--;
        console.log("PrevPage: "+page);

        $("#NextPage").prop('disabled' , false);

        if (page === 1) {
            $("#PrevPage").prop('disabled' , true);  // hide();
        }
        UpdateInstructions();
        }
    }

function NextPage()
	{
    if (page < lastPage)
        {
        page++;
        console.log("NextPage: "+page);

        $("#PrevPage").prop('disabled' , false);

        if (page === lastPage) 
            {
            $("#NextPage").prop('disabled' , true);
            }
        UpdateInstructions();
        }
    }
	
function UpdateInstructions() 
	{
	$("#PartTitle").text(""+page+" / "+lastPage);

	for(let i = 0 ; i < gifs.length ; i++)
        {
        $(`#TutorialImage${i}`).hide();
        }
    
	if (gifs[page-1] != "")
	    $(`#TutorialImage${page-1}`).show();

	console.log("UpdateImage() "+gifs[page-1]);
	$("#TutorialImage").attr("src", gifs[page-1]);
	$("#Instructions").html(instructions[page-1]);
	}