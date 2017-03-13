// Garden Gnome Software - Skin
// Pano2VR 5.0.2/15080
// Filename: 190.ggsk
// Generated 周一 3月 13 20:46:43 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/left__o.png';
		preLoadImg.src=basePath + 'images/right__o.png';
		preLoadImg.src=basePath + 'images/up__o.png';
		preLoadImg.src=basePath + 'images/down__o.png';
		preLoadImg.src=basePath + 'images/zoom_in__o.png';
		preLoadImg.src=basePath + 'images/zoom_out__o.png';
		preLoadImg.src=basePath + 'images/auto_rotate__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.png');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img.className='ggskin ggskin_image';
		this._loading_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_image__img);
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading image";
		this._loading_image.ggLeft=-112;
		this._loading_image.ggTop=-32;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_image ';
		this._loading_image.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -112px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text ';
		this._loading_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		this._loading_text.setAttribute('style',hs);
		this._loading_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<b>Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_text.ggUpdatePosition=function () {
		}
		this._loading_image.appendChild(this._loading_text);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="loading bar";
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle ';
		this._loading_bar.ggType='rectangle';
		hs ='';
		hs+='background : #4f4f4f;';
		hs+='border : 2px solid #000000;';
		hs+='height : 10px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_bar.style[domTransform + 'Origin']='0% 50%';
		me._loading_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_bar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_bar.ggUpdatePosition=function () {
		}
		this._loading_image.appendChild(this._loading_bar);
		this._loading_close=document.createElement('div');
		this._loading_close__img=document.createElement('img');
		this._loading_close__img.className='ggskin ggskin_image';
		this._loading_close__img.setAttribute('src',basePath + 'images/loading_close.png');
		this._loading_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_close__img.className='ggskin ggskin_image';
		this._loading_close__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loading_close__img);
		this._loading_close.appendChild(this._loading_close__img);
		this._loading_close.ggId="loading close";
		this._loading_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_close.ggVisible=true;
		this._loading_close.className='ggskin ggskin_image ';
		this._loading_close.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		this._loading_close.setAttribute('style',hs);
		this._loading_close.style[domTransform + 'Origin']='50% 50%';
		me._loading_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_close.onclick=function () {
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility='hidden';
			me._loading_image.ggVisible=false;
		}
		this._loading_close.ggUpdatePosition=function () {
		}
		this._loading_image.appendChild(this._loading_close);
		this.divSkin.appendChild(this._loading_image);
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggLeft=-120;
		this._toolbar.ggTop=-60;
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container ';
		this._toolbar.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		this._toolbar.setAttribute('style',hs);
		this._toolbar.style[domTransform + 'Origin']='50% 50%';
		me._toolbar.ggIsActive=function() {
			return false;
		}
		me._toolbar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._toolbar.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._left=document.createElement('div');
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_button';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._left__img.className='ggskin ggskin_button';
		this._left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_button ';
		this._left.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._left.setAttribute('style',hs);
		this._left.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ggUpdatePosition=function () {
		}
		this._toolbar.appendChild(this._left);
		this._right=document.createElement('div');
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_button';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._right__img.className='ggskin ggskin_button';
		this._right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_button ';
		this._right.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._right.setAttribute('style',hs);
		this._right.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ggUpdatePosition=function () {
		}
		this._toolbar.appendChild(this._right);
		this._up=document.createElement('div');
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_button';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._up__img.className='ggskin ggskin_button';
		this._up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up__img);
		this._up.appendChild(this._up__img);
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_button ';
		this._up.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._up.setAttribute('style',hs);
		this._up.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.png';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ggUpdatePosition=function () {
		}
		this._toolbar.appendChild(this._up);
		this._down=document.createElement('div');
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button ';
		this._down.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._down.setAttribute('style',hs);
		this._down.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.png';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ggUpdatePosition=function () {
		}
		this._toolbar.appendChild(this._down);
		this._zoom_in=document.createElement('div');
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.png');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_in__img);
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in.ggId="zoom in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_button ';
		this._zoom_in.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_in.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_in.onmouseover=function () {
			me._zoom_in__img.src=basePath + 'images/zoom_in__o.png';
		}
		this._zoom_in.onmouseout=function () {
			me._zoom_in__img.src=basePath + 'images/zoom_in.png';
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function () {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ggUpdatePosition=function () {
		}
		this._toolbar.appendChild(this._zoom_in);
		this._zoom_out=document.createElement('div');
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.png');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_out__img);
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.ggId="zoom out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_button ';
		this._zoom_out.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_out.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_out.onmouseover=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out__o.png';
		}
		this._zoom_out.onmouseout=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out.png';
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ggUpdatePosition=function () {
		}
		this._toolbar.appendChild(this._zoom_out);
		this._auto_rotate=document.createElement('div');
		this._auto_rotate__img=document.createElement('img');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img.setAttribute('src',basePath + 'images/auto_rotate.png');
		this._auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._auto_rotate__img);
		this._auto_rotate.appendChild(this._auto_rotate__img);
		this._auto_rotate.ggId="auto rotate";
		this._auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._auto_rotate.ggVisible=true;
		this._auto_rotate.className='ggskin ggskin_button ';
		this._auto_rotate.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._auto_rotate.setAttribute('style',hs);
		this._auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._auto_rotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._auto_rotate.onmouseover=function () {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate__o.png';
		}
		this._auto_rotate.onmouseout=function () {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate.png';
		}
		this._auto_rotate.ggUpdatePosition=function () {
		}
		this._toolbar.appendChild(this._auto_rotate);
		this.divSkin.appendChild(this._toolbar);
		this._daohang=document.createElement('div');
		this._daohang.ggId="daohang";
		this._daohang.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._daohang.ggVisible=true;
		this._daohang.className='ggskin ggskin_container ';
		this._daohang.ggType='container';
		hs ='';
		hs+='height : 222px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 297px;';
		this._daohang.setAttribute('style',hs);
		this._daohang.style[domTransform + 'Origin']='50% 50%';
		me._daohang.ggIsActive=function() {
			return false;
		}
		me._daohang.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._daohang.ggUpdatePosition=function () {
		}
		this._map=document.createElement('div');
		this._map__img=document.createElement('img');
		this._map__img.className='ggskin ggskin_image';
		this._map__img.setAttribute('src',basePath + 'images/map.png');
		this._map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map__img.className='ggskin ggskin_image';
		this._map__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map__img);
		this._map.appendChild(this._map__img);
		this._map.ggId="map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		this._map.className='ggskin ggskin_image ';
		this._map.ggType='image';
		hs ='';
		hs+='height : 372px;';
		hs+='left : -29px;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		this._map.setAttribute('style',hs);
		this._map.style[domTransform + 'Origin']='0% 0%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map.ggUpdatePosition=function () {
		}
		this.__2=document.createElement('div');
		this.__2__img=document.createElement('img');
		this.__2__img.className='ggskin ggskin_image';
		this.__2__img.setAttribute('src',basePath + 'images/_2.png');
		this.__2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__2__img.className='ggskin ggskin_image';
		this.__2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2__img);
		this.__2.appendChild(this.__2__img);
		this.__2.ggId="\u4e1c\u95e8";
		this.__2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2.ggVisible=true;
		this.__2.className='ggskin ggskin_image ';
		this.__2.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 157px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this.__2.setAttribute('style',hs);
		this.__2.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__2.onclick=function () {
			me.player.openNext("{node6}","");
			me._map.style[domTransition]='none';
			me._map.style.visibility='hidden';
			me._map.ggVisible=false;
		}
		this.__2.onmouseover=function () {
			me.elementMouseOver['_2']=true;
		}
		this.__2.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__2.style[domTransition]='none';
			} else {
				me.__2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__2.ggParameter.sx=1;me.__2.ggParameter.sy=1;
			me.__2.style[domTransform]=parameterToTransform(me.__2.ggParameter);
			me._dmtext.style[domTransition]='none';
			me._dmtext.style.visibility='hidden';
			me._dmtext.ggVisible=false;
			me.elementMouseOver['_2']=false;
		}
		this.__2.ontouchend=function () {
			me.elementMouseOver['_2']=false;
		}
		this.__2.ggUpdatePosition=function () {
		}
		this._map.appendChild(this.__2);
		this._dmtext=document.createElement('div');
		this._dmtext__text=document.createElement('div');
		this._dmtext.className='ggskin ggskin_textdiv';
		this._dmtext.ggTextDiv=this._dmtext__text;
		this._dmtext.ggId="dmtext";
		this._dmtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dmtext.ggVisible=true;
		this._dmtext.className='ggskin ggskin_text ';
		this._dmtext.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 119px;';
		hs+='position : absolute;';
		hs+='top : 138px;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		this._dmtext.setAttribute('style',hs);
		this._dmtext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(126,126,126,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._dmtext__text.setAttribute('style',hs);
		this._dmtext__text.innerHTML="<b>\u4f4d\u7f6e4<\/b>";
		this._dmtext.appendChild(this._dmtext__text);
		me._dmtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dmtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dmtext.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._map.appendChild(this._dmtext);
		this.__1=document.createElement('div');
		this.__1__img=document.createElement('img');
		this.__1__img.className='ggskin ggskin_image';
		this.__1__img.setAttribute('src',basePath + 'images/_1.png');
		this.__1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__1__img.className='ggskin ggskin_image';
		this.__1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__1__img);
		this.__1.appendChild(this.__1__img);
		this.__1.ggId="\u548c\u8c10\u76db\u4e16";
		this.__1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1.ggVisible=true;
		this.__1.className='ggskin ggskin_image ';
		this.__1.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 161px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this.__1.setAttribute('style',hs);
		this.__1.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__1.onclick=function () {
			me.player.openNext("{node5}","");
			me._map.style[domTransition]='none';
			me._map.style.visibility='hidden';
			me._map.ggVisible=false;
		}
		this.__1.onmouseover=function () {
			me.elementMouseOver['_1']=true;
		}
		this.__1.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__1.style[domTransition]='none';
			} else {
				me.__1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__1.ggParameter.sx=1;me.__1.ggParameter.sy=1;
			me.__1.style[domTransform]=parameterToTransform(me.__1.ggParameter);
			me._sstext.style[domTransition]='none';
			me._sstext.style.visibility='hidden';
			me._sstext.ggVisible=false;
			me.elementMouseOver['_1']=false;
		}
		this.__1.ontouchend=function () {
			me.elementMouseOver['_1']=false;
		}
		this.__1.ggUpdatePosition=function () {
		}
		this._map.appendChild(this.__1);
		this._sstext=document.createElement('div');
		this._sstext__text=document.createElement('div');
		this._sstext.className='ggskin ggskin_textdiv';
		this._sstext.ggTextDiv=this._sstext__text;
		this._sstext.ggId="sstext";
		this._sstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sstext.ggVisible=true;
		this._sstext.className='ggskin ggskin_text ';
		this._sstext.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		this._sstext.setAttribute('style',hs);
		this._sstext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(126,126,126,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._sstext__text.setAttribute('style',hs);
		this._sstext__text.innerHTML="<b>\u4f4d\u7f6e3<\/b>";
		this._sstext.appendChild(this._sstext__text);
		me._sstext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sstext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sstext.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._map.appendChild(this._sstext);
		this.__0=document.createElement('div');
		this.__0__img=document.createElement('img');
		this.__0__img.className='ggskin ggskin_image';
		this.__0__img.setAttribute('src',basePath + 'images/_0.png');
		this.__0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__0__img.className='ggskin ggskin_image';
		this.__0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__0__img);
		this.__0.appendChild(this.__0__img);
		this.__0.ggId="\u5c0f\u6865";
		this.__0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__0.ggVisible=true;
		this.__0.className='ggskin ggskin_image ';
		this.__0.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 104px;';
		hs+='position : absolute;';
		hs+='top : 194px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this.__0.setAttribute('style',hs);
		this.__0.style[domTransform + 'Origin']='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__0.onclick=function () {
			me.player.openNext("{node4}","");
			me._map.style[domTransition]='none';
			me._map.style.visibility='hidden';
			me._map.ggVisible=false;
		}
		this.__0.onmouseover=function () {
			me.elementMouseOver['_0']=true;
		}
		this.__0.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__0.style[domTransition]='none';
			} else {
				me.__0.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__0.ggParameter.sx=1;me.__0.ggParameter.sy=1;
			me.__0.style[domTransform]=parameterToTransform(me.__0.ggParameter);
			me._xqtext.style[domTransition]='none';
			me._xqtext.style.visibility='hidden';
			me._xqtext.ggVisible=false;
			me.elementMouseOver['_0']=false;
		}
		this.__0.ontouchend=function () {
			me.elementMouseOver['_0']=false;
		}
		this.__0.ggUpdatePosition=function () {
		}
		this._map.appendChild(this.__0);
		this._xqtext=document.createElement('div');
		this._xqtext__text=document.createElement('div');
		this._xqtext.className='ggskin ggskin_textdiv';
		this._xqtext.ggTextDiv=this._xqtext__text;
		this._xqtext.ggId="xqtext";
		this._xqtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._xqtext.ggVisible=true;
		this._xqtext.className='ggskin ggskin_text ';
		this._xqtext.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 65px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		this._xqtext.setAttribute('style',hs);
		this._xqtext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(126,126,126,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._xqtext__text.setAttribute('style',hs);
		this._xqtext__text.innerHTML="<b>\u4f4d\u7f6e2<\/b>";
		this._xqtext.appendChild(this._xqtext__text);
		me._xqtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._xqtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._xqtext.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._map.appendChild(this._xqtext);
		this.__=document.createElement('div');
		this.____img=document.createElement('img');
		this.____img.className='ggskin ggskin_image';
		this.____img.setAttribute('src',basePath + 'images/_.png');
		this.____img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.____img.className='ggskin ggskin_image';
		this.____img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.____img);
		this.__.appendChild(this.____img);
		this.__.ggId="\u6b22\u5e86\u4e30\u6536";
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_image ';
		this.__.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 106px;';
		hs+='position : absolute;';
		hs+='top : 156px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		this.__.setAttribute('style',hs);
		this.__.style[domTransform + 'Origin']='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__.onclick=function () {
			me.player.openNext("{node2}","");
			me._map.style[domTransition]='none';
			me._map.style.visibility='hidden';
			me._map.ggVisible=false;
		}
		this.__.onmouseover=function () {
			me.elementMouseOver['_']=true;
		}
		this.__.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__.ggParameter.sx=1;me.__.ggParameter.sy=1;
			me.__.style[domTransform]=parameterToTransform(me.__.ggParameter);
			me._hqtext.style[domTransition]='none';
			me._hqtext.style.visibility='hidden';
			me._hqtext.ggVisible=false;
			me.elementMouseOver['_']=false;
		}
		this.__.ontouchend=function () {
			me.elementMouseOver['_']=false;
		}
		this.__.ggUpdatePosition=function () {
		}
		this._map.appendChild(this.__);
		this._hqtext=document.createElement('div');
		this._hqtext__text=document.createElement('div');
		this._hqtext.className='ggskin ggskin_textdiv';
		this._hqtext.ggTextDiv=this._hqtext__text;
		this._hqtext.ggId="hqtext";
		this._hqtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hqtext.ggVisible=true;
		this._hqtext.className='ggskin ggskin_text ';
		this._hqtext.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 134px;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		this._hqtext.setAttribute('style',hs);
		this._hqtext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(126,126,126,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._hqtext__text.setAttribute('style',hs);
		this._hqtext__text.innerHTML="<b>\u4f4d\u7f6e1<\/b>";
		this._hqtext.appendChild(this._hqtext__text);
		me._hqtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hqtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hqtext.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._map.appendChild(this._hqtext);
		this.__51=document.createElement('div');
		this.__51__img=document.createElement('img');
		this.__51__img.className='ggskin ggskin_button';
		this.__51__img.setAttribute('src',basePath + 'images/_51.png');
		this.__51__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__51__img.className='ggskin ggskin_button';
		this.__51__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__51__img);
		this.__51.appendChild(this.__51__img);
		this.__51.ggId="\u6309\u94ae 51";
		this.__51.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__51.ggVisible=true;
		this.__51.className='ggskin ggskin_button ';
		this.__51.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 290px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		this.__51.setAttribute('style',hs);
		this.__51.style[domTransform + 'Origin']='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__51.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__51.onclick=function () {
			me._map.style[domTransition]='none';
			me._map.style.visibility='hidden';
			me._map.ggVisible=false;
		}
		this.__51.ggUpdatePosition=function () {
		}
		this._map.appendChild(this.__51);
		this._daohang.appendChild(this._map);
		this.__22=document.createElement('div');
		this.__22__img=document.createElement('img');
		this.__22__img.className='ggskin ggskin_button';
		this.__22__img.setAttribute('src',basePath + 'images/_22.png');
		this.__22__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__22__img.className='ggskin ggskin_button';
		this.__22__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__22__img);
		this.__22.appendChild(this.__22__img);
		this.__22.ggId="\u6309\u94ae 22";
		this.__22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__22.ggVisible=true;
		this.__22.className='ggskin ggskin_button ';
		this.__22.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 174px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		this.__22.setAttribute('style',hs);
		this.__22.style[domTransform + 'Origin']='0% 0%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__22.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__22.onclick=function () {
			me._map.ggVisible = !me._map.ggVisible;
			me._map.style[domTransition]='none';
			me._map.style.visibility=((me._map.ggVisible)&&(Number(me._map.style.opacity)>0||!me._map.style.opacity))?'inherit':'hidden';
		}
		this.__22.ggUpdatePosition=function () {
		}
		this._daohang.appendChild(this.__22);
		this.divSkin.appendChild(this._daohang);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggLeft=-120;
		this._container_1.ggTop=-170;
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container ';
		this._container_1.ggType='container';
		hs ='';
		hs+='height : 55px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		this._container_1.setAttribute('style',hs);
		this._container_1.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		me._container_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._container_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._image_2=document.createElement('div');
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.ggId="Image 2";
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image ';
		this._image_2.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		this._image_2.setAttribute('style',hs);
		this._image_2.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_2.onclick=function () {
			me.player.openNext("{node2}","");
		}
		this._image_2.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._image_2);
		this._text_2=document.createElement('div');
		this._text_2__text=document.createElement('div');
		this._text_2.className='ggskin ggskin_textdiv';
		this._text_2.ggTextDiv=this._text_2__text;
		this._text_2.ggId="Text 2";
		this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_2.ggVisible=true;
		this._text_2.className='ggskin ggskin_text ';
		this._text_2.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		this._text_2.setAttribute('style',hs);
		this._text_2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 47px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_2__text.setAttribute('style',hs);
		this._text_2__text.innerHTML="\u4f4d\u7f6e1";
		this._text_2.appendChild(this._text_2__text);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_2.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._text_2);
		this._image_3=document.createElement('div');
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.ggId="Image 3";
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=true;
		this._image_3.className='ggskin ggskin_image ';
		this._image_3.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		this._image_3.setAttribute('style',hs);
		this._image_3.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_3.onclick=function () {
			me.player.openNext("{node4}","");
		}
		this._image_3.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._image_3);
		this._text_3=document.createElement('div');
		this._text_3__text=document.createElement('div');
		this._text_3.className='ggskin ggskin_textdiv';
		this._text_3.ggTextDiv=this._text_3__text;
		this._text_3.ggId="Text 3";
		this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_3.ggVisible=true;
		this._text_3.className='ggskin ggskin_text ';
		this._text_3.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		this._text_3.setAttribute('style',hs);
		this._text_3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 47px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_3__text.setAttribute('style',hs);
		this._text_3__text.innerHTML="\u4f4d\u7f6e2";
		this._text_3.appendChild(this._text_3__text);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_3.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._text_3);
		this._image_4=document.createElement('div');
		this._image_4__img=document.createElement('img');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
		this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_4__img);
		this._image_4.appendChild(this._image_4__img);
		this._image_4.ggId="Image 4";
		this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_4.ggVisible=true;
		this._image_4.className='ggskin ggskin_image ';
		this._image_4.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		this._image_4.setAttribute('style',hs);
		this._image_4.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_4.onclick=function () {
			me.player.openNext("{node5}","");
		}
		this._image_4.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._image_4);
		this._text_4=document.createElement('div');
		this._text_4__text=document.createElement('div');
		this._text_4.className='ggskin ggskin_textdiv';
		this._text_4.ggTextDiv=this._text_4__text;
		this._text_4.ggId="Text 4";
		this._text_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_4.ggVisible=true;
		this._text_4.className='ggskin ggskin_text ';
		this._text_4.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		this._text_4.setAttribute('style',hs);
		this._text_4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 47px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_4__text.setAttribute('style',hs);
		this._text_4__text.innerHTML="\u4f4d\u7f6e3";
		this._text_4.appendChild(this._text_4__text);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_4.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._text_4);
		this._image_5=document.createElement('div');
		this._image_5__img=document.createElement('img');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img.setAttribute('src',basePath + 'images/image_5.png');
		this._image_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_5__img);
		this._image_5.appendChild(this._image_5__img);
		this._image_5.ggId="Image 5";
		this._image_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_5.ggVisible=true;
		this._image_5.className='ggskin ggskin_image ';
		this._image_5.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		this._image_5.setAttribute('style',hs);
		this._image_5.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_5.onclick=function () {
			me.player.openNext("{node6}","");
		}
		this._image_5.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._image_5);
		this._text_5=document.createElement('div');
		this._text_5__text=document.createElement('div');
		this._text_5.className='ggskin ggskin_textdiv';
		this._text_5.ggTextDiv=this._text_5__text;
		this._text_5.ggId="Text 5";
		this._text_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_5.ggVisible=true;
		this._text_5.className='ggskin ggskin_text ';
		this._text_5.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		this._text_5.setAttribute('style',hs);
		this._text_5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 47px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_5__text.setAttribute('style',hs);
		this._text_5__text.innerHTML="\u4f4d\u7f6e4";
		this._text_5.appendChild(this._text_5__text);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_5.ggUpdatePosition=function () {
		}
		this._container_1.appendChild(this._text_5);
		this.divSkin.appendChild(this._container_1);
		me._map.style[domTransition]='none';
		me._map.style.visibility='hidden';
		me._map.ggVisible=false;
		me._dmtext.style[domTransition]='none';
		me._dmtext.style.visibility='hidden';
		me._dmtext.ggVisible=false;
		me._sstext.style[domTransition]='none';
		me._sstext.style.visibility='hidden';
		me._sstext.ggVisible=false;
		me._xqtext.style[domTransition]='none';
		me._xqtext.style.visibility='hidden';
		me._xqtext.ggVisible=false;
		me._hqtext.style[domTransition]='none';
		me._hqtext.style.visibility='hidden';
		me._hqtext.ggVisible=false;
		me.__22.style[domTransition]='none';
		me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
		me.__22.ggVisible=true;
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading_image.style[domTransition]='none';
			me._loading_image.style.visibility='hidden';
			me._loading_image.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._loading_text.ggUpdateText();
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseOver['_2']) {
			if (me.player.transitionsDisabled) {
				me.__2.style[domTransition]='none';
			} else {
				me.__2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__2.ggParameter.sx=1.5;me.__2.ggParameter.sy=1.5;
			me.__2.style[domTransform]=parameterToTransform(me.__2.ggParameter);
			me._dmtext.style[domTransition]='none';
			me._dmtext.style.visibility=(Number(me._dmtext.style.opacity)>0||!me._dmtext.style.opacity)?'inherit':'hidden';
			me._dmtext.ggVisible=true;
		}
		if (me.elementMouseOver['_1']) {
			if (me.player.transitionsDisabled) {
				me.__1.style[domTransition]='none';
			} else {
				me.__1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__1.ggParameter.sx=1.5;me.__1.ggParameter.sy=1.5;
			me.__1.style[domTransform]=parameterToTransform(me.__1.ggParameter);
			me._sstext.style[domTransition]='none';
			me._sstext.style.visibility=(Number(me._sstext.style.opacity)>0||!me._sstext.style.opacity)?'inherit':'hidden';
			me._sstext.ggVisible=true;
		}
		if (me.elementMouseOver['_0']) {
			if (me.player.transitionsDisabled) {
				me.__0.style[domTransition]='none';
			} else {
				me.__0.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__0.ggParameter.sx=1.5;me.__0.ggParameter.sy=1.5;
			me.__0.style[domTransform]=parameterToTransform(me.__0.ggParameter);
			me._xqtext.style[domTransition]='none';
			me._xqtext.style.visibility=(Number(me._xqtext.style.opacity)>0||!me._xqtext.style.opacity)?'inherit':'hidden';
			me._xqtext.ggVisible=true;
		}
		if (me.elementMouseOver['_']) {
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__.ggParameter.sx=1.5;me.__.ggParameter.sy=1.5;
			me.__.style[domTransform]=parameterToTransform(me.__.ggParameter);
			me._hqtext.style[domTransition]='none';
			me._hqtext.style.visibility=(Number(me._hqtext.style.opacity)>0||!me._hqtext.style.opacity)?'inherit':'hidden';
			me._hqtext.ggVisible=true;
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="\u4ea4\u4e92\u70ed\u70b9 17";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 168px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me._hs_text.style[domTransition]='none';
				me._hs_text.style.visibility=(Number(me._hs_text.style.opacity)>0||!me._hs_text.style.opacity)?'inherit':'hidden';
				me._hs_text.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me._hs_text.style[domTransition]='none';
				me._hs_text.style.visibility='hidden';
				me._hs_text.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hs_text=document.createElement('div');
			this._hs_text__text=document.createElement('div');
			this._hs_text.className='ggskin ggskin_textdiv';
			this._hs_text.ggTextDiv=this._hs_text__text;
			this._hs_text.ggId="hs text";
			this._hs_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hs_text.ggVisible=false;
			this._hs_text.className='ggskin ggskin_text ';
			this._hs_text.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 14px;';
			hs+='left : -30px;';
			hs+='position : absolute;';
			hs+='top : -38px;';
			hs+='visibility : hidden;';
			hs+='width : 55px;';
			this._hs_text.setAttribute('style',hs);
			this._hs_text.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #dadada;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hs_text__text.setAttribute('style',hs);
			this._hs_text__text.innerHTML=me.hotspot.title;
			this._hs_text.appendChild(this._hs_text__text);
			me._hs_text.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hs_text.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hs_text.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((59-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hs_text);
			this._image_1=document.createElement('div');
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_image ';
			this._image_1.ggType='image';
			hs ='';
			hs+='height : 34px;';
			hs+='left : -19px;';
			hs+='position : absolute;';
			hs+='top : -14px;';
			hs+='visibility : inherit;';
			hs+='width : 34px;';
			this._image_1.setAttribute('style',hs);
			this._image_1.style[domTransform + 'Origin']='50% 50%';
			me._image_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_1);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};