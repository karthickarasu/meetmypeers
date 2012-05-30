
var PageName = 'profile page';
var PageId = 'pea29a064ab384cc2a162c3a68d5a8e8f'
document.title = 'profile page';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u136NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u136NoteContainer').style.visibility = document.getElementById('pd0u136').style.visibility;

eval(GetDynamicPanelScript('u136', 1));

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u54 = document.getElementById('u54');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u29 = document.getElementById('u29');

var u115 = document.getElementById('u115');

var u102 = document.getElementById('u102');

x = 0;
y = 0;
u102ann.insertAdjacentHTML("afterBegin", "<div id='u102Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u102', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u102'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u102based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u102base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u102based = document.getElementById('u102based');
            
u102based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clicking this the member can edit his education related details...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="View Education details.html" + GetQuerystring();

}

}
gv_vAlignTable['u102'] = 'top';
var u104 = document.getElementById('u104');

var u45 = document.getElementById('u45');

var u83 = document.getElementById('u83');

x = 0;
y = 0;
u83ann.insertAdjacentHTML("afterBegin", "<div id='u83Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u83', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u83'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u83based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u83base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u83based = document.getElementById('u83based');
            
u83based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can edit personal details here...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	self.location.href="Edit personal details.html" + GetQuerystring();

}

}

var u51 = document.getElementById('u51');

x = 0;
y = 0;
u51ann.insertAdjacentHTML("afterBegin", "<div id='u51Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u51', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u51'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u51based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u51base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u51based = document.getElementById('u51based');
            
u51based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member search for peers just by giving the Title or Name of the peers here...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	self.location.href="Search Results page.html" + GetQuerystring();

}

}

var u96 = document.getElementById('u96');

x = 0;
y = 0;
u96ann.insertAdjacentHTML("afterBegin", "<div id='u96Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u96', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u96'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u96based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u96base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u96based = document.getElementById('u96based');
            
u96based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member edit this education detail here.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="Edit Education details.html" + GetQuerystring();

}

}
gv_vAlignTable['u96'] = 'top';
var u79 = document.getElementById('u79');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u26 = document.getElementById('u26');

if (bIE) u26.attachEvent("onmouseover", MouseOveru26);
else u26.addEventListener("mouseover", MouseOveru26, true);
function MouseOveru26(e)
{
if (!IsTrueMouseOver('u26',e)) return;
if (true) {

}

}
gv_vAlignTable['u26'] = 'top';
var u106 = document.getElementById('u106');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u23 = document.getElementById('u23');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u14 = document.getElementById('u14');

var u67 = document.getElementById('u67');

var u20 = document.getElementById('u20');

if (bIE) u20.attachEvent("onmouseover", MouseOveru20);
else u20.addEventListener("mouseover", MouseOveru20, true);
function MouseOveru20(e)
{
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

}

}
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

x = 0;
y = 0;
u48ann.insertAdjacentHTML("afterBegin", "<div id='u48Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
u48based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Link to view the dashboard...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	self.location.href="After site login.html" + GetQuerystring();

}

}
gv_vAlignTable['u48'] = 'top';
var u4 = document.getElementById('u4');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');

var u133 = document.getElementById('u133');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u87 = document.getElementById('u87');

x = 0;
y = 0;
u87ann.insertAdjacentHTML("afterBegin", "<div id='u87Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u87', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u87'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u87based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u87base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u87based = document.getElementById('u87based');
            
u87based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member edits work details here<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="View work details.html" + GetQuerystring();

}

}

var u55 = document.getElementById('u55');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	self.location.href="Availabiltiy.html" + GetQuerystring();

}

}
gv_vAlignTable['u107'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u89 = document.getElementById('u89');

x = 0;
y = 0;
u89ann.insertAdjacentHTML("afterBegin", "<div id='u89Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u89', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u89'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u89based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u89base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u89based = document.getElementById('u89based');
            
u89based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member view profile here...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	self.location.href="profile page.html" + GetQuerystring();

	window.location.reload();

}

}

var u81 = document.getElementById('u81');

var u136 = document.getElementById('u136');

var u27 = document.getElementById('u27');

if (bIE) u27.attachEvent("onmouseover", MouseOveru27);
else u27.addEventListener("mouseover", MouseOveru27, true);
function MouseOveru27(e)
{
if (!IsTrueMouseOver('u27',e)) return;
if (true) {

}

}
gv_vAlignTable['u27'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u101 = document.getElementById('u101');

x = 0;
y = 0;
u101ann.insertAdjacentHTML("afterBegin", "<div id='u101Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u101', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u101'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u101based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u101base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u101based = document.getElementById('u101based');
            
u101based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On clicking this the member can add or edit his work details<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="View work details.html" + GetQuerystring();

}

}
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');

var u30 = document.getElementById('u30');

if (bIE) u30.attachEvent("onmouseover", MouseOveru30);
else u30.addEventListener("mouseover", MouseOveru30, true);
function MouseOveru30(e)
{
if (!IsTrueMouseOver('u30',e)) return;
if (true) {

}

}
gv_vAlignTable['u30'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u49 = document.getElementById('u49');

x = 0;
y = 0;
u49ann.insertAdjacentHTML("afterBegin", "<div id='u49Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
u49based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member logged out from the application<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	self.location.href="After site login.html" + GetQuerystring();

}

}
gv_vAlignTable['u49'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u65 = document.getElementById('u65');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u71 = document.getElementById('u71');

var u130 = document.getElementById('u130');

var u134 = document.getElementById('u134');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u94 = document.getElementById('u94');

x = 0;
y = 0;
u94ann.insertAdjacentHTML("afterBegin", "<div id='u94Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u94', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u94'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u94based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u94base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u94based = document.getElementById('u94based');
            
u94based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> From this page <BR><BR></div>");

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	self.location.href="Edit work details.html" + GetQuerystring();

}

}
gv_vAlignTable['u94'] = 'top';
var u62 = document.getElementById('u62');

var u137 = document.getElementById('u137');

var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u117 = document.getElementById('u117');

var u85 = document.getElementById('u85');

x = 0;
y = 0;
u85ann.insertAdjacentHTML("afterBegin", "<div id='u85Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u85', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u85'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u85based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u85base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u85based = document.getElementById('u85based');
            
u85based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member edits education details here..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href="View Education details.html" + GetQuerystring();

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u91 = document.getElementById('u91');

x = 0;
y = 0;
u91ann.insertAdjacentHTML("afterBegin", "<div id='u91Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u91', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u91'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u91based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u91base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u91based = document.getElementById('u91based');
            
u91based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view his availability timigs and also he can edit the timings of Availability<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="Availabiltiy.html" + GetQuerystring();

}

}

var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

	self.location.href="Edit personal details.html" + GetQuerystring();

}

}
gv_vAlignTable['u125'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u82 = document.getElementById('u82');

var u1 = document.getElementById('u1');

var u34 = document.getElementById('u34');

if (bIE) u34.attachEvent("onmouseover", MouseOveru34);
else u34.addEventListener("mouseover", MouseOveru34, true);
function MouseOveru34(e)
{
if (!IsTrueMouseOver('u34',e)) return;
if (true) {

}

}
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u135 = document.getElementById('u135');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');

if (bIE) u31.attachEvent("onmouseover", MouseOveru31);
else u31.addEventListener("mouseover", MouseOveru31, true);
function MouseOveru31(e)
{
if (!IsTrueMouseOver('u31',e)) return;
if (true) {

}

}
gv_vAlignTable['u31'] = 'top';
var u97 = document.getElementById('u97');

var u59 = document.getElementById('u59');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u132 = document.getElementById('u132');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u72 = document.getElementById('u72');

var u129 = document.getElementById('u129');

x = 0;
y = 0;
u129ann.insertAdjacentHTML("afterBegin", "<div id='u129Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u129', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u129'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u129based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u129base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u129based = document.getElementById('u129based');
            
u129based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the end user or member mouse over this button available time is show in a popup window...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

if (bIE) u129.attachEvent("onmouseover", MouseOveru129);
else u129.addEventListener("mouseover", MouseOveru129, true);
function MouseOveru129(e)
{
if (!IsTrueMouseOver('u129',e)) return;
if (true) {

	SetPanelVisibilityu136("");

}

}

if (bIE) u129.attachEvent("onmouseout", MouseOutu129);
else u129.addEventListener("mouseout", MouseOutu129, true);
function MouseOutu129(e)
{
if (!IsTrueMouseOut('u129',e)) return;
if (true) {

	SetPanelVisibilityu136("hidden");

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u131 = document.getElementById('u131');

x = 0;
y = 0;
u131ann.insertAdjacentHTML("afterBegin", "<div id='u131Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u131', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u131'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u131based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u131base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u131based = document.getElementById('u131based');
            
u131based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the end user or member mouse over this button available time is show in a popup window...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

if (bIE) u131.attachEvent("onmouseover", MouseOveru131);
else u131.addEventListener("mouseover", MouseOveru131, true);
function MouseOveru131(e)
{
if (!IsTrueMouseOver('u131',e)) return;
if (true) {

}

}

if (bIE) u131.attachEvent("onmouseout", MouseOutu131);
else u131.addEventListener("mouseout", MouseOutu131, true);
function MouseOutu131(e)
{
if (!IsTrueMouseOut('u131',e)) return;
if (true) {

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	self.location.href="Feedback form.html" + GetQuerystring();

}

}
gv_vAlignTable['u122'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u113 = document.getElementById('u113');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u53 = document.getElementById('u53');

x = 0;
y = 0;
u53ann.insertAdjacentHTML("afterBegin", "<div id='u53Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u53', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u53'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u53based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u53base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u53based = document.getElementById('u53based');
            
u53based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> By selecting menus the member can do actions...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u2 = document.getElementById('u2');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u44 = document.getElementById('u44');

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u41 = document.getElementById('u41');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u69 = document.getElementById('u69');

var u123 = document.getElementById('u123');

var u32 = document.getElementById('u32');

if (bIE) u32.attachEvent("onmouseover", MouseOveru32);
else u32.addEventListener("mouseover", MouseOveru32, true);
function MouseOveru32(e)
{
if (!IsTrueMouseOver('u32',e)) return;
if (true) {

}

}
gv_vAlignTable['u32'] = 'top';
var u16 = document.getElementById('u16');

if (bIE) u16.attachEvent("onmouseover", MouseOveru16);
else u16.addEventListener("mouseover", MouseOveru16, true);
function MouseOveru16(e)
{
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

}

}
gv_vAlignTable['u16'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u6 = document.getElementById('u6');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u35 = document.getElementById('u35');

var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u63 = document.getElementById('u63');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u118 = document.getElementById('u118');

var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
