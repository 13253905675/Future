window.onload = function() {
	var navfivebox = document.getElementById("navpicture").getElementsByTagName("a");
	var index = 4;
	navfivebox[4].style.backgroundColor = "blue";
	navfivebox[4].style.width = "30px";
	var picture = document.getElementById("picture");
	var picture5 = document.getElementById("picture").getElementsByTagName("img");
	var lun = document.getElementById("lun");
	var lis = document.getElementById("lun").getElementsByTagName("li");
	// console.log(lis.length);

	function getstyle(obj, name) {
		return getComputedStyle(obj, null)[name];
	}

	var time;

	function move(obj, target, speed, callback) {
		obj.time = setInterval(function() {
			var oldValue = parseInt(getstyle(obj, "left"));
			var newValue = oldValue + speed;
			if (newValue < target && speed < 0)
				newValue = target;
			obj.style.left = newValue + "px";
			if (newValue == target) {
				clearInterval(obj.time);
				callback();
			}
		}, 50);
	}
	for (var i = 4; i >= 0; i--) {
		navfivebox[i].num = i;
		navfivebox[i].onclick = function() {
			clearInterval(time);
			index = this.num;
			for (var i = 4; i >= 0; i--) {
				navfivebox[i].style.backgroundColor = "#FFFFFF";
				navfivebox[i].style.width = "";
			}
			navfivebox[index].style.backgroundColor = "blue";
			navfivebox[index].style.width = "30px";
			// picture.style.left = -1473 * (4 - index) + "px";
			move(picture, -1473 * (4 - index), -80, function() {});
		}
	}
	move(picture, -1473 * (4 - index), -80, function() {
		automove();
	}, 5000);

	function automove() {
		time = setInterval(function() {

			index--;

			if (index < 0) {
				index = 4;
				picture.style.left = 0;
			}
		
			move(picture, -1473 * (4 - index), -80, function() {
				seta();
			})
		}, 5000);
	}

	function seta() {
		for (var i = 4; i >= 0; i--) {
			navfivebox[i].style.backgroundColor = "";
			navfivebox[i].style.width = "";
		}
		navfivebox[index].style.backgroundColor = "blue";
		navfivebox[index].style.width = "30px";
	}
	// var line=document.getElementsByClassName("whiteline");
	// var three=document.getElementsByClassName("ban");
	// 	line.onmouseover=function(){
	// 		line.style.width="100px";

	// 	}

	// var aimright=document.getElementById("aimright");
	// var aimleft=document.getElementById("aimleft");
	// aimright.onclick=function(){
	// 	for(var j=0;j<pictures.length;j++){
	// 		pictures[j].dataset.id=j+1；
	// 	}
	// 	var active=document.querySelector(".eiyactive");
	// 	// picture.style.left = -1473 * (4 - index) + "px";
	var gong = document.getElementsByClassName('gong1')
	var shengy = document.getElementsByClassName('shengy')
	var qikey = document.getElementsByClassName('qikey')
	var weiy = document.getElementsByClassName('weiy')
	shengy.onmousleave = function() {
		for (var onmouseMoveIndex = 0; onmouseMoveIndex < gong.length; onmouseMoveIndex++) {
			gong[onmouseMoveIndex].style.display = 'none'
			console.log(gong[onmouseMoveIndex].style.display,'11111')
		}
		gong[0].style.display = ''
	}
	qikey.onmousemove = function() {
		for (var onmouseMoveIndex = 0; onmouseMoveIndex < gong.length; onmouseMoveIndex++) {
			gong[onmouseMoveIndex].style.display = 'none'
			console.log(gong[onmouseMoveIndex].style.display,'11111')
		}
		gong[1].style.display = ''
	}
	weiy.onmousemove = function() {
		for (var onmouseMoveIndex = 0; onmouseMoveIndex < gong.length; onmouseMoveIndex++) {
			gong[onmouseMoveIndex].style.display = 'none'
			console.log(gong[onmouseMoveIndex].style.display,'11111')
		}
		gong[2].style.display = ''
	}
	var timefour;
	for (var j = 0; j < lis.length; j++) {
		lis[j].num = j;
		var four = lis[j].num;
	}

	var left = document.getElementById("lleft").getElementsByTagName("img")[0];
	var right = document.getElementById("rright").getElementsByTagName("img")[0];
	var secondIndex = 0;
	var thirdIndex = 0;
	left.onclick = function() {
		clearInterval(timefour);
		secondIndex = secondIndex == 0 ? 4 : secondIndex--
		secondIndex--
		lun.style.left = -600 * secondIndex + "px";
		setInterval(timefour);
	}
	right.onclick = function() {

		clearInterval(timefour);
		secondIndex = secondIndex == 4 ? 0 : secondIndex++
		secondIndex++
		if (secondIndex == 4)
			secondIndex = 0;
		lun.style.left = -600 * secondIndex + "px";
		setInterval(timefour);
	}

	move(lun, -600 * four, -90, function() {
		automovefour();
	}, 5000);

	function automovefour() {
		timefour = setInterval(function() {
			secondIndex++;
			if (secondIndex > 3) {
				secondIndex = 0;
				lun.style.left = 0;
			}
	
			move(lun, -600 * secondIndex, -90, function() {

			})
		}, 3000)
	}
	var timeend;
	var picturethr = document.getElementsByClassName("picturethr")[0];
	var epicture = document.getElementsByClassName("picturethr")[0].getElementsByTagName("li");
	for (var k = 0; k < epicture.length; k++) {
		epicture[k].num = k;
		thirdIndex = epicture[k].num;
	}
	var aimyl = document.getElementById("aimyl");
	var aimr = document.getElementById("aimr");
	var eleft = document.getElementById("aimyl").getElementsByTagName("img")[0];
	var eright = document.getElementById("aimr").getElementsByTagName("img")[0];
	console.log(eleft, 'eleft')
	eleft.onclick = function() {
		// console.log(111)
		clearInterval(timeend);
		// thirdIndex=2;
		thirdIndex = thirdIndex == 0 ? 3 : thirdIndex--
		thirdIndex--
		picturethr.style.left = -1473 * thirdIndex + "px";
		setA();
		setInterval(timeend);
	}
	eright.onclick = function() {
		// console.log(111)
		// thirdIndex=0;
		clearInterval(timeend);
		thirdIndex = thirdIndex == 3 ? 0 : thirdIndex++
		thirdIndex++
		if (thirdIndex == 3)
			thirdIndex = 0;
		picturethr.style.left = -1473 * thirdIndex + "px";
		setA();
		setInterval(timeend);
	}
	var navend=document.getElementById("navend").getElementsByTagName("a");
	
	navend[0].style.backgroundColor = "blue";
	navend[0].style.width = "30px";
	
	 for (var k = 0; k < navend.length; k++) {
		navend[k].num = k;
		navend[k].onclick=function(){
			
			clearInterval(timeend);
			thirdIndex = this.num;
			for (var k = 0; k < navend.length; k++){
				navend[k].style.backgroundColor = "#FFFFFF";
				navend[k].style.width = "";
			}
			navend[thirdIndex].style.backgroundColor = "blue";
			navend[thirdIndex].style.width = "30px";
			// picture.style.left = -1473 * (4 - index) + "px";
			move(picturethr, -1473 * thirdIndex, -700, function() {});
			setInterval(timeend);
		}
	}
	move(picturethr,-1473*thirdIndex,-300,function(){
		autothree();
		// console("11122")
	},5000);
	
	function autothree(){
		timeend = setInterval(function() {
		
			thirdIndex++;
		if (thirdIndex > 2) {
					thirdIndex = 0;
					picturethr.style.left = 0;
				}
		
				move(picturethr, -1473 * thirdIndex, -90, function() {
					setA();
				})
			}, 3000)
		}
		function setA() {
			for (var k = 0; k<navend.length; k++) {
				navend[k].style.backgroundColor = "#FFFFFF";
				navend[k].style.width = "";
			}
			navend[thirdIndex].style.backgroundColor = "blue";
			navend[thirdIndex].style.width = "30px";
			
}
}