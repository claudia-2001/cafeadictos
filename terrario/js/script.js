dragElement(document.querySelector("#plant1"));
dragElement(document.querySelector("#plant2"));
dragElement(document.querySelector("#plant3"));
dragElement(document.querySelector("#plant4"));
dragElement(document.querySelector("#plant5"));
dragElement(document.querySelector("#plant6"));
dragElement(document.querySelector("#plant7"));
dragElement(document.querySelector("#plant8"));
dragElement(document.querySelector("#plant9"));
dragElement(document.querySelector("#plant10"));
dragElement(document.querySelector("#plant11"));
dragElement(document.querySelector("#plant12"));
dragElement(document.querySelector("#plant13"));
dragElement(document.querySelector("#plant14"));

function dragElement(terrariumElement) {
    let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
    
    function pointerDrag(e) {
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
        document.onpointermove = elementDrag;
		document.onpointerup = stopElementDrag;
	}
    function elementDrag(e) {
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
	}
    function stopElementDrag() {
		document.onpointerup = null;
		document.onpointermove = null;
	}
}