
new Swiper(".swiper-container", {
	direction: "vertical",
	loop: true,
	onSlideChangeEnd: function (swipe) {
		var n = swipe.activeIndex,
			slideAry = swipe.slides;
		[].forEach.call(slideAry, function (item, index) {
			if (index == n) {
				if (index == 0 || index == slideAry.length - 1) {
					if (index == 0) {
						item.id = "page6";
						return
					} else if (index == slideAry.length - 1) {
						item.id = "page1";
						return
					}
				}
				item.id = "page" + index;
				return
			}
			item.id = null;
		});
	}
});
