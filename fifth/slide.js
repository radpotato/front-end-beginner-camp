		var imageSlide = function(selector) {
			return imageSlide.pbn.init(selector);	
		}
		imageSlide.pbn = imageSlide.prototype = {
			init : function(selector) {
				this.target = document.getElementById(selector);
				return this;
			},
			createNode : function(option) {
				var innerTxt = "<li><img width='105' src="+option.thumb+" alt="+option.title+">"+option.title+"<span>"+option.openDate+"</span></li>";
				if(this.target) {
					this.target.innerHTML += innerTxt;
				} else {
					this.innerHTML += innerTxt;
				}
				return this;
			},
			resetNode : function() {
				this.target.innerHTML = "";
				return this;
			},
			slide : function(index) {	
				var length = 5,
				startPoint = index * length,
				destination = startPoint + length;
				this.target.constructor.prototype.createNode = this.createNode;
				for(i = startPoint; i < destination; i+=1) {
					this.target.createNode(data.movie[i]);
				}
				return this;
			},
			on : function(eventer, func, bubble) {
				this.target.addEventListener(eventer, func, bubble);
				return this;
			},
			css : function(styleAttr) {
				this.target.setAttribute("style", styleAttr);
				return this;	
			},
			fn : function(func) {
				func(this);
			}
		}
