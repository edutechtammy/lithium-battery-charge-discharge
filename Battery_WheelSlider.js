(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib = {}; var ss = {}; var img = {};
	var rect; // used to reference frame bounds
	lib.ssMetadata = [];


	(lib.AnMovieClip = function () {
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
		}
		this.play = function () {
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
		}
		this.stop = function () {
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}

	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}


	(lib.textDis = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FF0000").s().p("AgSAsQgIgDgGgFIAFgGIABgCIACgBIAEABIAEAEIAHACQADACAGgBQAEABADgCIAGgDIAEgFIABgGQAAgEgCgCQgCgCgEgCIgIgDIgIgDIgIgDQgFgBgDgDQgDgDgCgDQgCgFAAgFQAAgGACgEQACgFAFgEQADgEAHgCQAGgCAGAAQAJAAAHADQAHADAGAEIgEAHQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDAAIgEgDIgGgCIgJgBIgGABQgDABgCACQgCABgCADIgBAFQAAADACADQACACADACIAHADIAJADIAJADIAHADIAFAHQACAEABAFQAAAHgDAFQgCAFgEAEQgFAFgHABQgFADgIAAQgJAAgIgDg");
		this.shape.setTransform(20.2, 2.4);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FF0000").s().p("AgHBCIAAhaIAPAAIAABagAgDgrIgEgCIgDgEIAAgEIAAgFIADgDIAEgDIADgBIAFABIADADIACADIACAFIgCAEIgCAEIgDACIgFABg");
		this.shape_1.setTransform(14.2, 0.375);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FF0000").s().p("AgTBAQgGgDgFgGQgEgGgDgIQgCgJAAgMQAAgKADgIQACgIAFgGQAFgHAIgDQAHgEAJAAQAIAAAGADQAGADAEAFIAAgzIAQAAIAACEIgJAAQgEAAAAgEIgCgLQgGAHgHAFQgIAEgJAAQgHAAgHgDgAgQgEQgGAIAAAQQAAAJABAHQACAGADAEQADAEAEACQAEACAFAAQAIAAAGgEQAFgDAFgHIAAgrQgEgGgFgCQgGgCgGAAQgMAAgHAJg");
		this.shape_2.setTransform(6.775, 0.375);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(0, -12.8, 26.3, 25.6);
	p.frameBounds = [rect];


	(lib.textCharge3 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgNAsQgIgDgGgHQgGgGgDgJQgDgJAAgLQAAgJADgIQADgJAFgGQAGgGAIgDQAHgEAJAAQAJAAAGADQAHADAGAFQAFAFADAIQACAHAAAKIAAAFQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIg7AAQAAAJACAGQACAHAEAEQAEAEAFACQAFACAGAAIAKgBIAHgDIAGgDIADgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAFAGIgHAGIgJAFIgKACIgKABQgIAAgIgDgAAagJQAAgFgCgFQgBgFgDgDQgDgDgFgCQgEgCgFAAQgLAAgHAHQgGAGgCAMIAxAAIAAAAg");
		this.shape.setTransform(50.125, 2.375);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AgTA9QgHgCgFgEQgFgDgCgEQgDgFAAgFQAAgGAEgFQAEgFAIgCQgEgCgCgDQgDgDAAgFIABgEIACgEIADgEIAGgDQgHgEgEgGQgDgGgBgJQABgGACgGQACgFAFgEQAEgEAHgCQAGgCAIAAIAKABIAJAEIAZAAIAAAGQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAIgLABQADAGAAAHQAAAHgDAGQgCAFgEAEQgFAEgHACQgFACgHAAQgGAAgGgCIgFAEIgBADQAAADACACIAHADIAKAAIALABIALABQAGABAEADQAFACACAEQACAEABAGQAAAGgEAFQgCAGgGAEQgFAEgIADQgIADgJAAQgKAAgIgCgAgXAcQgEAEAAAEQAAAEABACIAGAFIAIADIALABIALgBQAFgBADgDQAEgCACgDQACgDAAgDQAAgEgCgCIgFgDIgHgCIgJAAIgJgBIgKgBQgEADgDADgAgRgtQgFAEAAAJQAAAEACADQABAEACACIAGAEQAEABAFAAQAEAAAEgBIAGgEIADgGIABgHQAAgJgEgEQgGgFgIAAQgKAAgFAFg");
		this.shape_1.setTransform(40.75, 3.975);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("AgZAuIAAhaIAKAAIADABIACAEIABANQAEgJAFgFQAHgFAJAAIAFAAIAFACIgBANQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIgEgBIgFAAIgIABIgFADIgFAHIgDAIIAAA4g");
		this.shape_2.setTransform(33.275, 2.3);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#000000").s().p("AgUAuQgEgCgEgDQgDgDgCgEQgCgFAAgGQAAgFADgFQADgFAHgEQAGgEALgCQAJgCAQAAIAAgIQAAgKgFgGQgEgFgJAAQgFAAgEABIgHAEIgFADIgEACIgDgBIgCgCIgCgGQAHgHAJgDQAIgEAKAAQAIAAAFACQAGADAFAFQAEAEABAGQADAHAAAHIAAA6IgHAAIgEgBIgCgDIgBgJIgIAGIgHAFIgHACIgKABQgFAAgFgBgAABAGQgGACgGACQgEACgDADQgCAEAAADIABAGQACADACACIAEACIAHABIAGgBIAGgCIAGgEIAGgFIAAgTIgTABg");
		this.shape_3.setTransform(24.75, 2.375);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("AAWBCIAAg6QAAgJgEgGQgGgGgJAAQgGAAgGAEQgGADgGAGIAABCIgQAAIAAiDIAQAAIAAA1QAGgGAHgEQAIgDAIAAQAHAAAGACQAFADAEAEQAEAFACAGQACAFAAAIIAAA6g");
		this.shape_4.setTransform(15.6, 0.325);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("AgLAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgIAFgHQAFgGAJgDQAIgEAJAAQAKAAAHADQAHADAGAGIgEAGIgCABIgCABIgCgBIgFgDIgFgCIgJgBQgHAAgEACQgFACgDAFQgEAEgCAHQgCAGABAHQAAAIABAHQACAGAEAFQADAEAFACQAEADAGAAQAGAAAEgCIAGgDIAEgDIADgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAEAGIgHAGIgIAFIgJACIgKABQgIAAgGgDg");
		this.shape_5.setTransform(6.45, 2.375);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(0, -12.8, 57.1, 25.6);
	p.frameBounds = [rect];


	(lib.textCharge = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#B7B7B7").s().p("AgNAsQgIgDgGgHQgGgGgDgJQgDgJAAgLQAAgJADgIQADgJAFgGQAGgGAIgDQAHgEAJAAQAJAAAGADQAHADAGAFQAFAFADAIQACAHAAAKIAAAFQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIg7AAQAAAJACAGQACAHAEAEQAEAEAFACQAFACAGAAIAKgBIAHgDIAGgDIADgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAFAGIgHAGIgJAFIgKACIgKABQgIAAgIgDgAAagJQAAgFgCgFQgBgFgDgDQgDgDgFgCQgEgCgFAAQgLAAgHAHQgGAGgCAMIAxAAIAAAAg");
		this.shape.setTransform(50.125, 2.375);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#B7B7B7").s().p("AgTA9QgHgCgFgEQgFgDgCgEQgDgFAAgFQAAgGAEgFQAEgFAIgCQgEgCgCgDQgDgDAAgFIABgEIACgEIADgEIAGgDQgHgEgEgGQgDgGgBgJQABgGACgGQACgFAFgEQAEgEAHgCQAGgCAIAAIAKABIAJAEIAZAAIAAAGQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAIgLABQADAGAAAHQAAAHgDAGQgCAFgEAEQgFAEgHACQgFACgHAAQgGAAgGgCIgFAEIgBADQAAADACACIAHADIAKAAIALABIALABQAGABAEADQAFACACAEQACAEABAGQAAAGgEAFQgCAGgGAEQgFAEgIADQgIADgJAAQgKAAgIgCgAgXAcQgEAEAAAEQAAAEABACIAGAFIAIADIALABIALgBQAFgBADgDQAEgCACgDQACgDAAgDQAAgEgCgCIgFgDIgHgCIgJAAIgJgBIgKgBQgEADgDADgAgRgtQgFAEAAAJQAAAEACADQABAEACACIAGAEQAEABAFAAQAEAAAEgBIAGgEIADgGIABgHQAAgJgEgEQgGgFgIAAQgKAAgFAFg");
		this.shape_1.setTransform(40.75, 3.975);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#B7B7B7").s().p("AgZAuIAAhaIAKAAIADABIACAEIABANQAEgJAFgFQAHgFAJAAIAFAAIAFACIgBANQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIgEgBIgFAAIgIABIgFADIgFAHIgDAIIAAA4g");
		this.shape_2.setTransform(33.275, 2.3);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#B7B7B7").s().p("AgUAuQgEgCgEgDQgDgDgCgEQgCgFAAgGQAAgFADgFQADgFAHgEQAGgEALgCQAJgCAQAAIAAgIQAAgKgFgGQgEgFgJAAQgFAAgEABIgHAEIgFADIgEACIgDgBIgCgCIgCgGQAHgHAJgDQAIgEAKAAQAIAAAFACQAGADAFAFQAEAEABAGQADAHAAAHIAAA6IgHAAIgEgBIgCgDIgBgJIgIAGIgHAFIgHACIgKABQgFAAgFgBgAABAGQgGACgGACQgEACgDADQgCAEAAADIABAGQACADACACIAEACIAHABIAGgBIAGgCIAGgEIAGgFIAAgTIgTABg");
		this.shape_3.setTransform(24.75, 2.375);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#B7B7B7").s().p("AAWBCIAAg6QAAgJgEgGQgGgGgJAAQgGAAgGAEQgGADgGAGIAABCIgQAAIAAiDIAQAAIAAA1QAGgGAHgEQAIgDAIAAQAHAAAGACQAFADAEAEQAEAFACAGQACAFAAAIIAAA6g");
		this.shape_4.setTransform(15.6, 0.325);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#B7B7B7").s().p("AgLAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgIAFgHQAFgGAJgDQAIgEAJAAQAKAAAHADQAHADAGAGIgEAGIgCABIgCABIgCgBIgFgDIgFgCIgJgBQgHAAgEACQgFACgDAFQgEAEgCAHQgCAGABAHQAAAIABAHQACAGAEAFQADAEAFACQAEADAGAAQAGAAAEgCIAGgDIAEgDIADgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAEAGIgHAGIgIAFIgJACIgKABQgIAAgGgDg");
		this.shape_5.setTransform(6.45, 2.375);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(0, -12.8, 57.1, 25.6);
	p.frameBounds = [rect];


	(lib.rail = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#383838").ss(4, 1, 1).p("A2piBMAtTAAAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAMgtTAAAQg2AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA2AAg");
		this.shape.setTransform(157.975, 2);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.lf(["#19773F", "#228044", "#479348", "#9BBE47", "#FAB231", "#EF6C2F", "#FAB231", "#F3E233", "#95BB47", "#4C9548", "#228044", "#19773F"], [0, 0.161, 0.314, 0.459, 0.584, 0.686, 0.765, 0.804, 0.851, 0.902, 0.949, 1], -157.9, 0, 158, 0).s().p("A2pCCQg2AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA2AAMAtTAAAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAg");
		this.shape_1.setTransform(157.975, 2);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.rail, rect = new cjs.Rectangle(-2, -13, 320, 30), [rect]);


	(lib.chargingStation = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#231F20").ss(0.5).p("AisiDIAgCAQAoCAApADQAoADAegfQAagbAdg+QARgjAugDQAXgCAUAF");
		this.shape.setTransform(76.0074, -2.4724);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#231F20").s().p("AARAkIAAgsQAAgIgDgEQgEgFgIAAQgEAAgGACIgIAIIAAAzIgNAAIAAhGIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABAIIAFgEIAGgEIAFgCIAHgBQAFAAAFACQAFACACAEQADADACAFQACAFAAAGIAAAsg");
		this.shape_1.setTransform(48.95, 9.05);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#231F20").s().p("AgNAiQgGgCgFgFQgEgFgDgHQgCgHAAgIQAAgIACgGQADgHAEgEQAFgFAGgDQAGgCAHAAQAIAAAGACQAGADAFAFQAEAEACAHQADAGAAAIQAAAIgDAHQgCAHgEAFQgFAFgGACQgGADgIAAQgHAAgGgDgAgIgYQgEACgDADIgEAIQgBAGAAAFQAAAMAFAIQAFAHAKAAQAKAAAGgHQAFgIAAgMQAAgLgFgIQgGgGgKAAQgEAAgEABg");
		this.shape_2.setTransform(41.075, 9.1);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#231F20").s().p("AgFAzIAAhGIALAAIAABGgAgCghIgDgCIgCgDIgBgDIABgEIACgCIADgCIACgBIADABIADACIACACIABAEIgBADIgCADIgDACIgDABg");
		this.shape_3.setTransform(35.425, 7.55);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#231F20").s().p("AgGArQgFgFAAgIIAAgrIgIAAIgCAAIgBgCIAAgGIAMgBIADgWIABgCIABgBIAGAAIAAAZIAUAAIAAAJIgUAAIAAAqQgBAEADACQACADAEAAIADgBIACgCIACgBIACAAIABABIAEAGIgIAFQgEACgGAAQgHAAgEgFg");
		this.shape_4.setTransform(31.35, 8);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#231F20").s().p("AgPAkQgEgCgCgCQgDgDgBgDQgCgEAAgEQAAgEACgEQADgEAFgDQAFgDAIgBQAIgCAMgBIAAgFQAAgIgEgFQgEgDgGAAIgHABIgFACIgFACIgCACIgCgBIgCgCIgDgDQAHgGAGgDQAHgCAHAAQAGAAAFACQAEACADADQAEADACAFQABAFAAAGIAAAtIgGAAIgDgBIgBgDIgBgGIgGAEIgGAEIgFACIgHABIgIgBgAABAFIgIACQgEADgCACQgCADAAACIABAFIACADIAEADIAEAAIAFgBIAGgCIAEgDIAFgDIAAgQIgPACg");
		this.shape_5.setTransform(25.05, 9.1);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#231F20").s().p("AgHArQgEgFAAgIIAAgrIgIAAIgCAAIgBgCIAAgGIAMgBIACgWIABgCIACgBIAFAAIAAAZIAVAAIAAAJIgVAAIAAAqQABAEACACQACADAEAAIADgBIADgCIABgBIABAAIACABIAEAGIgIAFQgEACgFAAQgIAAgFgFg");
		this.shape_6.setTransform(19.4, 8);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#231F20").s().p("AgSAwQgHgEgGgGIADgGIACgBIACgBIACABIACACIAEACIAEADIAGABIAGABQAFAAADgBIAGgEIAEgGQACgDAAgEQAAgFgCgDQgCgDgDgCIgIgDIgIgDIgJgDIgIgEQgDgDgCgEQgCgFAAgHQAAgFACgFQACgFAEgEQAEgEAFgCQAHgCAGAAQAIAAAHACQAHADAGAFIgEAHIgBABIgCABIgDgBIgEgDIgFgDIgJgBIgHABIgGAEQgCACgBADQgBACAAAEQAAAEACADIAFAEIAHAEIAIADIAJADIAIAEQAEADACAEQABAFAAAGQAAAGgBAGQgDAGgEAEQgFAEgFADQgHACgHAAQgJAAgJgDg");
		this.shape_7.setTransform(12.95, 7.625);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#231F20").s().p("AgOAvIgKgEQgEgCgCgEQgBgDAAgEQAAgFACgEQAEgDAFgDIgEgDQgCgDAAgEIABgDIABgCIADgDIAEgDQgFgDgDgFQgEgFAAgGQAAgFACgEQADgFADgDQAEgDAFgBQAFgCAFAAIAIABIAIADIASAAIAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgIABQACAEAAAGQAAAFgCAEQgCAFgEADQgDADgFABQgEACgGAAIgJgBIgDADIgBACQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFACIAIAAIAHABIAJABIAIACQAEACACADQABADAAAFQAAAFgCAEQgCAEgFAEQgDADgHACQgGACgHAAQgHAAgGgCgAgSAWQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAEADIAGADIAJABIAIgBIAHgDIAFgEIABgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgFgDIgFgBIgHgBIgGAAIgIgBQgEACgCADgAgNgjQgEAEAAAGIABAGIADAFIAFADIAGABIAGgBIAFgDIADgFIABgGQAAgGgEgEQgEgEgHAAQgHAAgEAEg");
		this.shape_8.setTransform(54.9, -6.475);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#231F20").s().p("AARAkIAAgsQAAgIgEgFQgDgEgIAAQgEAAgFADIgJAHIAAAzIgNAAIAAhGIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIABAIIAFgGIAGgDIAFgCIAHgBQAGAAAEACQAEACADADQADAEACAFQABAFABAGIAAAsg");
		this.shape_9.setTransform(47.35, -7.75);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#231F20").s().p("AgFAzIAAhGIALAAIAABGgAgCghIgDgCIgCgDIgBgDIABgDIACgEIADgCIACAAIADAAIADACIACAEIABADIgBADIgCADIgDACIgDAAg");
		this.shape_10.setTransform(41.725, -9.25);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#231F20").s().p("AgPAvIgJgEQgEgCgBgEQgCgDgBgEQABgFADgEQADgDAGgDIgGgDQgBgDAAgEIAAgDIACgCIADgDIAEgDQgGgDgDgFQgCgFAAgGQAAgFABgEQADgFADgDQAEgDAFgBQAEgCAHAAIAHABIAIADIATAAIAAAFQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgJABQADAEAAAGQAAAFgCAEQgCAFgDADQgEADgFABQgEACgFAAIgKgBIgEADIgBACQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIAGACIAIAAIAIABIAJABIAHACQADACACADQACADABAFQAAAFgDAEQgCAEgEAEQgFADgGACQgGACgGAAQgIAAgHgCgAgSAWQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIADADIAHADIAJABIAIgBIAHgDIADgEIACgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgDgDIgGgBIgHgBIgHAAIgHgBQgEACgCADgAgNgjQgEAEAAAGIABAGIADAFIAFADIAHABIAFgBIAFgDIADgFIABgGQAAgGgEgEQgEgEgGAAQgIAAgEAEg");
		this.shape_11.setTransform(36.5, -6.475);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#231F20").s().p("AgTAkIAAhGIAHAAIADABIABADIAAAKQAEgHAEgEQAFgEAHAAIAEAAIAEACIgBAJQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgDAAIgEgBIgGABIgEADIgDAFIgEAGIAAAsg");
		this.shape_12.setTransform(30.75, -7.75);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#231F20").s().p("AgPAkQgEgCgCgCQgDgCgBgEQgCgDAAgFQAAgFADgEQACgDAFgDQAFgDAIgBQAIgCAMgBIAAgFQAAgIgEgFQgEgEgGAAIgHABIgGADIgEADIgCABIgDAAIgBgCIgCgFQAFgFAHgDQAHgDAHABQAGAAAFABQAEACADAEQAEADACAFQABAFAAAGIAAAtIgGAAIgCgBIgCgCIgBgHIgGAEIgGAEIgFACIgHAAIgIAAgAABAFIgIADQgFACgBACQgCACAAADIABAFIACAEIAEABIAEABIAGgBIAFgCIAEgDIAFgEIAAgPIgPACg");
		this.shape_13.setTransform(24.05, -7.7);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#231F20").s().p("AARA0IAAgtQAAgIgEgEQgEgEgHgBQgFABgEACIgJAHIAAA0IgMAAIAAhnIAMAAIAAAqQAFgFAFgDQAFgCAHAAQAFAAAFABQAEACADAEQAEADABAGQACADgBAHIAAAtg");
		this.shape_14.setTransform(16.95, -9.3);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#231F20").s().p("AgNAwQgIgEgGgHQgHgHgDgJQgEgKAAgLQAAgKAEgKQADgJAHgHQAGgHAKgDQAIgEAKAAQALAAAIADQAJAEAFAGIgEAGIgBABIgCAAIgDgBIgEgDIgIgDIgLgBQgHAAgGACQgGADgFAFQgFAFgDAIQgCAHAAAIQAAAKACAHQADAHAFAFQAFAFAGADQAGADAHAAIAIgBIAGgBIAGgDIAGgEIACgBIABAAIAGAGQgGAHgJAEQgIAEgNAAQgKAAgJgDg");
		this.shape_15.setTransform(8.5, -9.175);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f().s("#012054").ss(0.8).p("AFHEcIqNAAIAAo3IKNAAg");
		this.shape_16.setTransform(32.7, 0.025);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#ADC4E5").s().p("AlGEcIAAo3IKNAAIAAI3g");
		this.shape_17.setTransform(32.7, 0.025);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-1, -29.4, 95.3, 58.9);
	p.frameBounds = [rect];


	(lib.chargeLevel9 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#02783D").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel8 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#108241").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel7 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#459744").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel6 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#98C03D").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel5 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F3E504").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel4 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FCB316").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel3 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F36B21").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel2 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EF3C24").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.chargeLevel1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EE2F24").s().p("Ag7DZIABmxIB2AAIgBGxg");
		this.shape.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-5.9, -21.7, 12, 43.5);
	p.frameBounds = [rect];


	(lib.wheel = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(0.2).p("AAmAAQAAAQgLALQgLALgQAAQgPAAgLgLQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALAMAAAOg");
		this.shape.setTransform(-0.025, 0.025);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#253876").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgPAAgLgLg");
		this.shape_1.setTransform(-0.025, 0.025);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#FFFFFF").ss(0.4).p("AACgyQAJABADAFQACAFAAALIAMA/QAAAQgcAAQgKAAgIgEQgJgEAAgJIAOg/QAAgKADgFQADgGAJAAg");
		this.shape_2.setTransform(-0.25, -4.65);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#ACC3E6").s().p("AgRAvQgJgFAAgIIANg/QABgKACgFQADgGAJAAQAJABACAFQADAFAAALIAMA/QgBAQgbAAQgKAAgHgEg");
		this.shape_3.setTransform(-0.25, -4.65);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f().s("#FFFFFF").ss(0.4).p("AAwgZQAEAJgEAFQgDAEgKAEIg1AkQgPAHgLgZQgLgZAPgGIA/gOQAKgEAFABQAHAAADAIg");
		this.shape_4.setTransform(4.3405, -0.2607);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#ACC3E6").s().p("AgsAPQgLgZAPgGIA/gOQAKgEAFABQAHAAADAIQAEAJgEAFQgDAEgKAEIg1AkIgGABQgMAAgIgTg");
		this.shape_5.setTransform(4.3405, -0.2607);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#FFFFFF").ss(0.4).p("AAhAsQgHAFgGgDQgFgCgGgJIgugsQgKgNAXgRQAXgPAJAOIAaA6QAGAJAAAFQABAHgIAFg");
		this.shape_6.setTransform(1.9, 3.6115);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#ACC3E6").s().p("AAUAuQgFgCgFgJIgvgsQgJgNAXgRQAXgPAIAOIAaA6QAGAJAAAFQABAHgIAFQgEAEgEAAIgFgCg");
		this.shape_7.setTransform(1.9, 3.6115);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#FFFFFF").ss(0.4).p("AggAtQgIgFABgHQAAgFAGgJIAag7QAIgOAXAQQAJAGAFAHQAEAJgFAHIgtAtQgGAJgFACQgGADgHgFg");
		this.shape_8.setTransform(-2.295, 3.597);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#ACC3E6").s().p("AggAtQgIgFABgHQAAgFAGgJIAag7QAIgOAXAQQAJAGAFAHQAEAJgFAHIgtAtQgGAJgFACIgEABQgEAAgFgDg");
		this.shape_9.setTransform(-2.295, 3.597);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f().s("#FFFFFF").ss(0.4).p("AgvgYQADgIAGgBQAFgBALAEIA/AMQAIADABAKQABAIgFAKQgKAagQgHIg1giQgKgEgEgEQgEgFAEgJg");
		this.shape_10.setTransform(-4.3226, -0.694);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#ACC3E6").s().p("AAUAgIg1giQgKgEgEgEQgEgFAEgJQADgIAGgBQAFgBALAEIA/AMQAIADABAKQABAIgFAKQgIAVgMAAIgGgCg");
		this.shape_11.setTransform(-4.3226, -0.694);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f().s("#FFFFFF").ss(0.2).p("AAAAzQgHAAgEgGQgCgEAAgLIgOg/QAAgRAbAAQAcAAAAARIgNA/QAAALgCAEQgEAGgJAAg");
		this.shape_12.setTransform(-0.2, -6.35);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#253876").s().p("AgLAtQgCgEAAgLIgOg/QABgRAaAAQAbAAAAARIgMA/QAAALgCAEQgEAGgJAAQgHAAgEgGg");
		this.shape_13.setTransform(-0.2, -6.35);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f().s("#FFFFFF").ss(0.2).p("AgxATQgCgJAFgFQAEgDAKgCIA6gcQAIgCAHAHQAFAHADAKQADAKgCAIQgCAKgJACIg/AEQgLADgFgCQgHgCgCgIg");
		this.shape_14.setTransform(6.2442, -2.2711);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#253876").s().p("AgoAdQgHgCgCgIQgCgJAFgFQAEgDAKgCIA6gcQAIgCAHAHQAFAHADAKQADAKgCAIQgCAKgJACIg/AEQgHACgFAAIgEgBg");
		this.shape_15.setTransform(6.2442, -2.2711);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f().s("#FFFFFF").ss(0.2).p("AghgrQAHgFAGADQAFACAGAJIAvAqQAKAOgWARQgWAQgJgOIgcg6QgGgJgBgFQgBgGAIgGg");
		this.shape_16.setTransform(3.6397, 5.3922);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#253876").s().p("AgFApIgcg6QgGgJgBgFQgBgGAIgGQAHgFAGADQAFACAGAJIAvAqQAKAOgWARQgMAIgJAAQgGAAgEgGg");
		this.shape_17.setTransform(3.6397, 5.3922);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f().s("#FFFFFF").ss(0.2).p("AAhgrQAIAFgBAGQAAAFgGAJIgaA7QgIAOgYgQQgJgGgEgHQgFgJAFgHIAugsQAGgJAFgDQAGgCAHAFg");
		this.shape_18.setTransform(-4.0234, 5.385);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#253876").s().p("AgYAnQgJgGgEgHQgFgJAFgHIAugsQAGgJAFgDQAGgCAHAFQAIAFgBAGQAAAFgGAJIgaA7QgEAHgHAAQgIAAgNgJg");
		this.shape_19.setTransform(-4.0234, 5.385);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f().s("#FFFFFF").ss(0.2).p("AAyAUQgDAJgHABQgFACgKgEIhAgFQgQgFAIgaQADgKAGgGQAHgIAIADIA4AdQALADAEAEQAEAFgCAIg");
		this.shape_20.setTransform(-6.625, -2.6837);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#253876").s().p("AAZAcIhAgFQgQgFAIgaQADgKAGgGQAHgIAIADIA4AdQALADAEAEQAEAFgCAIQgDAJgHABIgDABQgFAAgHgDg");
		this.shape_21.setTransform(-6.625, -2.6837);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f().s("#FFFFFF").ss(0.2).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
		this.shape_22.setTransform(0.025, 0.025);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#253876").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
		this.shape_23.setTransform(0.025, 0.025);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f().s("#FFFFFF").ss(0.4).p("AB1AAQAAAwgjAiQgiAjgwAAQgwAAgigjQgigiAAgwQAAgwAigiQAigiAwAAQAwAAAiAiQAjAiAAAwg");
		this.shape_24.setTransform(-0.025, -0.025);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#ACC3E6").s().p("AhSBSQgigiAAgwQAAgwAigiQAigiAwAAQAwAAAiAiQAjAiAAAwQAAAwgjAiQgiAjgwAAQgwAAgigjg");
		this.shape_25.setTransform(-0.025, -0.025);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f().s("#FFFFFF").ss(0.4).p("AChAAQAABDgvAvQgvAvhDAAQhCAAgvgvQgvgvAAhDQAAhCAvgvQAvgvBCAAQBDAAAvAvQAvAvAABCg");
		this.shape_26.setTransform(0.025, 0.025);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#231F20").s().p("AhxByQgvgvAAhDQAAhCAvgvQAvgvBCAAQBDAAAvAvQAvAvAABCQAABDgvAvQgvAvhDAAQhCAAgvgvg");
		this.shape_27.setTransform(0.025, 0.025);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-17.1, -17.1, 34.3, 34.3);
	p.frameBounds = [rect];


	(lib.litiomIon = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgDAYIAAgVIgUAAIAAgGIAUAAIAAgUIAHAAIAAAUIAUAAIAAAGIgUAAIAAAVg");
		this.shape.setTransform(5.175, -2.6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AgFAwIAAhCIALAAIAABCgAgCgfIgDgCIgCgCIAAgEIAAgDIACgDIADgBIACgBIADABIADABIACADIAAADIAAAEIgCACIgDACIgDABg");
		this.shape_1.setTransform(1.525, 0.375);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("AgaAvIAAhdIANAAIAABSIAoAAIAAALg");
		this.shape_2.setTransform(-2.925, 0.475);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f().s("#231F20").ss(1.4).p("ABaAAQAAAlgaAbQgaAagmAAQgkAAgbgaQgagbAAglQAAglAagaQAbgaAkAAQAmAAAaAaQAaAaAAAlg");
		this.shape_3.setTransform(0, 0.05);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#66FF00").s().p("Ag/A/QgagaAAglQAAgkAagbQAbgaAkAAQAmAAAaAaQAaAbAAAkQAAAlgaAaQgaAbgmAAQgkAAgbgbg");
		this.shape_4.setTransform(0, 0.05);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-10, -11, 20.5, 22.6);
	p.frameBounds = [rect];


	(lib.lithiumAtom = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgEAsIAAg8IAJAAIAAA8gAgCgcIgCgCIgCgCIgBgDIABgDIACgDIACgBIACgBIADABIACABIACADIAAADIAAADIgCACIgCACIgDAAg");
		this.shape.setTransform(11.5, 0.125);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AgXArIAAhVIALAAIAABLIAkAAIAAAKg");
		this.shape_1.setTransform(7.45, 0.2);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#000000").ss(1, 1, 1).p("AADhZQAjABAZAZQAbAaAAAlQAAAlgbAbQgaAaglAAQglAAgagaQgagbAAglQAAglAagaQAZgZAlgB");
		this.shape_2.setTransform(9, 0.4);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BAQgagbAAglQAAgkAagbQAagZAkgBIAEAAQAjABAZAZQAbAbAAAkQAAAlgbAbQgaAaglAAQglAAgagag");
		this.shape_3.setTransform(9, 0.4);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-1, -9.6, 20, 20);
	p.frameBounds = [rect];


	(lib.electron = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgZArIAAhVIA0AAIAAAKIgpAAIAAAcIAhAAIAAAIIghAAIAAAdIApAAIAAAKg");
		this.shape.setTransform(9.2, 0.1);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#000000").ss(1, 1, 1).p("ABaAAQAAAlgaAaQgaAbgmAAQgkAAgbgbQgagaAAglQAAgkAagbQAbgaAkAAQAmAAAaAaQAaAbAAAkg");
		this.shape_1.setTransform(9, 0.45);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFF00").s().p("Ag/A/QgagaAAglQAAglAagaQAbgaAkAAQAmAAAaAaQAaAaAAAlQAAAlgaAaQgaAbgmAAQgkAAgbgbg");
		this.shape_2.setTransform(9, 0.45);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(-1, -9.5, 20, 20);
	p.frameBounds = [rect];


	// stage content:
	(lib.Battery_WheelSlider = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = false; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		this.actionFrames = [0];
		// timeline functions:
		this.frame_0 = function () {
			this.stop();

			var _this = this;
			this.railX = this.rail.x;
			this.railW = this.rail.frameBounds[0].width;

			_this.thumb.on("pressmove", function (e) {

				var newX = e.stageX / _this.stage.scaleX;

				if (newX >= _this.railX && newX <= (_this.railW + _this.railX)) {
					e.currentTarget.x = newX;
					var frameRatio = (e.target.parent.x - _this.railX) / _this.railW;
					var newFrame = Math.round(frameRatio * (_this.totalFrames - 1));
					const value = newFrame / 100 //This is calculating the percentage travel of the thumb on the rail
					_this.thumb.rotation = value * 360 //This is taking the thumbs travel percentage and calculating the rotation percentage
					_this.gotoAndStop(newFrame);

					// Update accessibility info when slider is moved
					if (typeof updateAccessibilityInfo === 'function') {
						updateAccessibilityInfo(newFrame);
					}
					if (typeof window !== 'undefined' && window.currentFrame !== undefined) {
						window.currentFrame = newFrame;
					}
				}
			});
		}

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(450));

		// slider
		this.thumb = new lib.wheel();
		this.thumb.name = "thumb";
		this.thumb.setTransform(571.2, 602.35, 1.6741, 1.6735);

		this.rail = new lib.rail();
		this.rail.name = "rail";
		this.rail.setTransform(549.15, 600, 1.038, 1);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.rail }, { t: this.thumb }] }).to({ state: [] }, 449).wait(1));

		// chargingStation
		this.instance = new lib.chargingStation("synched", 0);
		this.instance.setTransform(261.25, 81.5, 1.5999, 1.5999, 0, 0, 0, 46.6, 0.1);
		this.instance.alpha = 0;

		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#231F20").ss(0.5).p("AisiDIAgCAQAoCAApADQAoADAegfQAagbAdg+QARgjAugDQAXgCAUAF");
		this.shape.setTransform(308.2395, 75.6476, 1.5991, 1.5991);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#231F20").s().p("AAbA6IAAhHQAAgNgGgIQgFgHgMAAQgJAAgHAEQgHAFgHAHIAABTIgVAAIAAhxIANAAQAEAAABAEIABANIAIgIIAJgGIAKgDIALgBQAIAAAIACQAHADAFAGQAEAGADAIQACAHABALIAABHg");
		this.shape_1.setTransform(264.25, 95.1);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#231F20").s().p("AgWA2QgJgEgIgHQgGgIgFgLQgDgLAAgNQAAgMADgLQAFgLAGgIQAIgHAJgEQALgEALAAQAMAAAKAEQAKAEAIAHQAHAIADALQAEALAAAMQAAANgEALQgDALgHAIQgIAHgKAEQgKAEgMAAQgLAAgLgEgAgOgnQgGADgEAGQgFAFgCAIQgBAIAAAJQAAAUAIALQAIAMAQAAQARAAAIgMQAJgLgBgUQABgTgJgLQgIgMgRAAQgIAAgGADg");
		this.shape_2.setTransform(251.65, 95.175);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#231F20").s().p("AgJBSIAAhxIATAAIAABxgAgFg1IgEgDIgDgFIgBgFIABgGIADgEIAEgEIAFgBIAFABIAFAEIADAEIABAGIgBAFIgDAFIgFADIgFABg");
		this.shape_3.setTransform(242.625, 92.675);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#231F20").s().p("AgKBFQgIgIAAgOIAAhFIgOAAIgCAAIgBgEIAAgIIASgCIAEgjIACgDIADgBIAJAAIAAAnIAhAAIAAAOIghAAIAABEQAAAHADADQAEAEAFAAIAGgBIAEgCIADgCIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAHAKQgFAFgIACQgHADgIAAQgNAAgGgHg");
		this.shape_4.setTransform(236.1, 93.425);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#231F20").s().p("AgYA5QgGgCgFgEQgEgEgCgFQgDgGAAgHQAAgHAEgGQADgGAJgGQAIgEANgCQANgDATgBIAAgJQAAgNgGgGQgFgIgLABQgHgBgFACIgIAFIgHAEIgFABIgDgBIgDgCIgDgHQAJgIALgFQALgEAMgBQAJAAAIAEQAHADAFAGQAFAFADAIQADAIAAAJIAABIIgJAAIgFgBIgCgDIgDgMIgIAIIgJAGIgJACIgMABQgHABgFgCgAACAIQgJACgGACQgGAEgDAEQgDADAAAFQAAAEACAEIAEAFIAGADIAHABIAJgBIAIgEIAHgEIAHgHIAAgXIgXACg");
		this.shape_5.setTransform(226.025, 95.15);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#231F20").s().p("AgKBFQgIgIAAgOIAAhFIgOAAIgDAAIAAgEIAAgIIASgCIAFgjIABgDIADgBIAJAAIAAAnIAhAAIAAAOIghAAIAABEQAAAHAEADQADAEAGAAIAFgBIAEgCIADgCIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAGAKQgEAFgIACQgHADgIAAQgNAAgGgHg");
		this.shape_6.setTransform(216.95, 93.425);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#231F20").s().p("AgdBMQgNgFgJgKIAGgKIACgCIADgBIADABIAEADIAGAEIAHAEIAJADIALACQAGgBAHgCQAGgCAEgEQAEgDACgGQADgGAAgGQAAgIgEgEQgDgFgGgDIgMgFIgNgFIgOgFQgHgCgGgEQgFgGgDgHQgDgHgBgLQABgIADgIQADgIAHgGQAGgGAJgEQAKgEALAAQANAAALAEQALAFAJAIIgGAKIgCADIgDABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIgHgFIgJgEQgGgBgHAAQgHAAgFACQgFABgFADQgDAEgCAEQgCAFAAAFQAAAHAEAFQADAEAFADIAMAFIAOAFIANAFQAIAEAFAEQAFAEAEAHQADAHAAAKQAAAKgDAJQgFAKgGAGQgHAIgKADQgKAEgMAAQgPAAgNgGg");
		this.shape_7.setTransform(206.7, 92.8);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#231F20").s().p("AgYBMQgJgDgGgEQgGgEgDgGQgDgFAAgGQAAgIAFgGQAFgGAJgDQgFgDgDgDQgDgEAAgHIABgFIADgEIAFgFIAGgEQgIgFgFgIQgFgHAAgLQAAgIADgHQADgGAGgFQAGgFAIgCQAIgDAJAAQAGAAAHACQAGABAFADIAfAAIAAAIQAAADgEABIgNACQADAHAAAJQAAAJgDAHQgDAGgGAFQgFAFgIACQgIADgIAAQgIAAgHgCQgEACgBADQgCABAAADQAAAEADACQADACAGABIAMABIANABIAOACQAHABAFADQAGACADAFQADAFAAAIQAAAHgDAHQgEAHgHAFQgHAGgKADQgJADgMAAQgMAAgKgCgAgeAjQgEAFAAAGQAAADACAEQACADAEACQAEADAGABQAGACAJAAQAHAAAGgCQAGgBAFgDQAEgDADgDQACgEAAgFQAAgEgCgCQgDgDgEgBIgJgCIgLgBIgLgBIgMgBQgGADgEAEgAgVg5QgHAHAAAKQAAAFACAEIAFAHQADADAEACQAFACAGAAQAFAAAFgCQAEgCADgDQAEgDABgEQACgEAAgFQAAgKgHgHQgGgGgLAAQgMAAgGAGg");
		this.shape_8.setTransform(273.775, 70.225);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#231F20").s().p("AAbA6IAAhHQAAgNgGgIQgFgHgNAAQgIAAgHAEQgHAFgHAHIAABTIgVAAIAAhxIANAAQAEAAABAFIACAMIAHgIIAJgGIAKgEIALAAQAIAAAIACQAHADAFAGQAEAGADAIQACAHAAALIAABHg");
		this.shape_9.setTransform(261.65, 68.2);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#231F20").s().p("AgJBSIAAhxIATAAIAABxgAgFg1IgEgDIgDgFIgBgFIABgGIADgEIAEgEIAFgBIAFABIAFAEIADAEIABAGIgBAFIgDAFIgFADIgFABg");
		this.shape_10.setTransform(252.675, 65.775);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#231F20").s().p("AgYBMQgJgDgGgEQgGgEgDgGQgDgFAAgGQAAgIAFgGQAFgGAJgDQgFgDgDgDQgDgEAAgHIABgFIADgEIAFgFIAGgEQgIgFgFgIQgFgHAAgLQAAgIADgHQADgGAGgFQAGgFAIgCQAIgDAJAAQAGAAAHACQAGABAFADIAfAAIAAAIQAAADgEABIgNACQADAHAAAJQAAAJgDAHQgDAGgGAFQgFAFgIACQgIADgIAAQgIAAgHgCQgEACgBADQgCABAAADQAAAEADACQADACAGABIAMABIANABIAOACQAHABAFADQAGACADAFQADAFAAAIQAAAHgDAHQgEAHgHAFQgHAGgKADQgJADgMAAQgMAAgKgCgAgeAjQgEAFAAAGQAAADACAEQACADAEACQAEADAGABQAGACAJAAQAHAAAGgCQAGgBAFgDQAEgDADgDQACgEAAgFQAAgEgCgCQgDgDgEgBIgJgCIgLgBIgLgBIgMgBQgGADgEAEgAgVg5QgHAHAAAKQAAAFACAEIAFAHQADADAEACQAFACAGAAQAFAAAFgCQAEgCADgDQAEgDABgEQACgEAAgFQAAgKgHgHQgGgGgLAAQgMAAgGAGg");
		this.shape_11.setTransform(244.325, 70.225);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#231F20").s().p("AgfA6IAAhxIALAAQABAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAABIABARQAFgMAHgGQAIgHALAAIAHABIAGADIgBAOQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgEAAIgHgBQgGAAgEACQgEABgCADQgEADgCAFIgFAKIAABHg");
		this.shape_12.setTransform(235.125, 68.175);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#231F20").s().p("AgYA5QgGgCgFgDQgEgFgCgFQgDgFAAgJQAAgGAEgGQADgGAJgGQAIgEANgCQANgDATgBIAAgJQAAgNgGgGQgFgIgLAAQgHAAgFACIgIAFIgHAEIgFABIgDgBIgDgCIgDgHQAJgIALgFQALgFAMAAQAJAAAIAEQAHADAFAGQAFAFADAIQADAIAAAJIAABIIgJAAIgFgBIgCgDIgDgMIgIAIIgJAGIgJACIgMABQgHAAgFgBgAACAIQgJACgGACQgGADgDAEQgDAEAAAFQAAAFACADIAEAFIAGADIAHABIAJgBIAIgEIAHgEIAHgHIAAgXIgXACg");
		this.shape_13.setTransform(224.425, 68.25);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#231F20").s().p("AAbBTIAAhIQAAgMgGgIQgFgHgNAAQgIAAgHAEQgHAFgHAHIAABTIgVAAIAAilIAVAAIAABDQAHgHAJgFQAJgEALAAQAIAAAIACQAHADAFAGQAEAGADAIQACAGABALIAABIg");
		this.shape_14.setTransform(213.05, 65.7);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#231F20").s().p("AgVBMQgOgFgKgMQgKgKgGgQQgFgPAAgRQAAgSAGgPQAFgPALgLQAKgKAOgHQAPgGAQAAQASAAANAFQANAHAKAJIgIAJIgBACIgDABIgFgCIgIgFIgLgFQgHgCgLAAQgLAAgKAEQgLAFgHAIQgIAIgEAMQgEAMAAAOQAAAOAEAMQAFAMAHAIQAIAIAKAEQAKAFALAAIAMgBIALgDIAJgEIAJgHQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAJAJQgKAMgOAGQgOAGgUAAQgQAAgOgGg");
		this.shape_15.setTransform(199.575, 65.9);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f().s("#012054").ss(0.8).p("AFHEcIqNAAIAAo3IKNAAg");
		this.shape_16.setTransform(238.9864, 79.6412, 1.5991, 1.5991);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#ADC4E5").s().p("AlGEcIAAo3IKNAAIAAI3g");
		this.shape_17.setTransform(238.9864, 79.6412, 1.5991, 1.5991);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [] }, 299).to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }, 16).to({ state: [] }, 121).wait(14));

		// disOfDischarge
		this.instance_1 = new lib.textDis("synched", 0);
		this.instance_1.setTransform(39.55, 51.35, 1.5999, 1.5999, 0, 0, 0, 13.2, 0.2);
		this.instance_1.alpha = 0;

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FF0000").s().p("AgeBHQgMgGgJgIIAGgJIADgDIAEgBQADAAADACIAGAFIAKAEQAHACAIAAQAHAAAFgCQAGgCAEgEQAEgDABgEQACgFAAgEQAAgGgEgEQgCgEgGgDIgMgFIgNgEIgOgGQgHgCgFgEQgGgFgDgGQgDgHAAgJQAAgIADgIQAEgIAGgGQAHgFAKgDQAJgEAMAAQAOAAAMAEQALAFAJAIIgGAJQgCADgDABIgGgCIgGgEIgKgDQgFgCgHAAQgGAAgFACIgJAEQgDADgCAEQgCADAAAFQAAAGACADIAJAHIALAFIAOAFIAOAEQAHAEAFACQAFAFAEAGQADAGAAAJQAAALgDAIQgEAIgHAHQgIAGgJAEQgLADgMAAQgQAAgMgEg");
		this.shape_18.setTransform(50.65, 54.85);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FF0000").s().p("AgMBpIAAiRIAZAAIAACRgAgGhFIgGgEIgEgFIgBgHIABgIIAEgGIAGgDIAGgCIAHACIAFADIAFAGIABAIIgBAHIgFAFIgFAEIgHACg");
		this.shape_19.setTransform(41.125, 51.65);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#FF0000").s().p("AgfBmQgKgFgHgJQgIgJgDgOQgEgOAAgTQAAgPAEgOQAEgNAIgLQAIgKAMgGQAMgFAPAAQAMgBAKAFQAJAFAIAHIAAhQIAZAAIAADTIgPAAQgGAAgBgGIgCgRQgKALgMAHQgMAHgOAAQgNAAgKgFgAgagIQgLANAAAbQAAAPADAKQACAKAFAHQAFAGAGADQAHADAJAAQAMABAJgHQAKgFAIgLIAAhFQgIgKgIgEQgIgDgLAAQgTAAgLAOg");
		this.shape_20.setTransform(29.225, 51.65);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("rgba(255,0,0,0)").s().p("AgeBHQgMgGgJgIIAGgJIADgDIAEgBQADAAADACIAGAFIAKAEQAHACAIAAQAHAAAFgCQAGgCAEgEQAEgDABgEQACgFAAgEQAAgGgEgEQgCgEgGgDIgMgFIgNgEIgOgGQgHgCgFgEQgGgFgDgGQgDgHAAgJQAAgIADgIQAEgIAGgGQAHgFAKgDQAJgEAMAAQAOAAAMAEQALAFAJAIIgGAJQgCADgDABIgGgCIgGgEIgKgDQgFgCgHAAQgGAAgFACIgJAEQgDADgCAEQgCADAAAFQAAAGACADIAJAHIALAFIAOAFIAOAEQAHAEAFACQAFAFAEAGQADAGAAAJQAAALgDAIQgEAIgHAHQgIAGgJAEQgLADgMAAQgQAAgMgEg");
		this.shape_21.setTransform(50.65, 54.85);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("rgba(255,0,0,0)").s().p("AgMBpIAAiRIAZAAIAACRgAgGhFIgGgEIgEgFIgBgHIABgIIAEgGIAGgDIAGgCIAHACIAFADIAFAGIABAIIgBAHIgFAFIgFAEIgHACg");
		this.shape_22.setTransform(41.125, 51.65);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("rgba(255,0,0,0)").s().p("AgfBmQgKgFgHgJQgIgJgDgOQgEgOAAgTQAAgPAEgOQAEgNAIgLQAIgKAMgGQAMgFAPAAQAMgBAKAFQAJAFAIAHIAAhQIAZAAIAADTIgPAAQgGAAgBgGIgCgRQgKALgMAHQgMAHgOAAQgNAAgKgFgAgagIQgLANAAAbQAAAPADAKQACAKAFAHQAFAGAGADQAHADAJAAQAMABAJgHQAKgFAIgLIAAhFQgIgKgIgEQgIgDgLAAQgTAAgLAOg");
		this.shape_23.setTransform(29.225, 51.65);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }] }).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }] }, 1).to({ state: [{ t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }] }, 307).wait(134));
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ regX: 13.1, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 39.35, y: 51.65, alpha: 0.125 }, 0).wait(1).to({ alpha: 0.25 }, 0).wait(1).to({ alpha: 0.375 }, 0).wait(1).to({ alpha: 0.5 }, 0).wait(1).to({ alpha: 0.625 }, 0).wait(1).to({ alpha: 0.75 }, 0).wait(1).to({ alpha: 0.875 }, 0).wait(1).to({ alpha: 1 }, 0).to({ _off: true }, 1).wait(441));

		// frontWheel
		this.instance_2 = new lib.wheel("synched", 0);
		this.instance_2.setTransform(572.2, 104.45, 1.6005, 1.6005, 0, 0, 0, 0.2, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({ regX: 0, regY: 0, scaleX: 1.5995, scaleY: 1.5995, rotation: 6.0403, x: 571.9609, y: 103.7665 }, 0).wait(1).to({ scaleX: 1.5984, scaleY: 1.5984, rotation: 12.0805, x: 572.0246, y: 103.7396 }, 0).wait(1).to({ scaleX: 1.5974, scaleY: 1.5974, rotation: 18.1208, x: 572.0904, y: 103.7195 }, 0).wait(1).to({ scaleX: 1.5963, scaleY: 1.5963, rotation: 24.1611, x: 572.1575, y: 103.7064 }, 0).wait(1).to({ scaleX: 1.5953, scaleY: 1.5953, rotation: 30.2013, x: 572.2252, y: 103.7005 }, 0).wait(1).to({ scaleX: 1.5942, scaleY: 1.5942, rotation: 36.2416, x: 572.2928, y: 103.7017 }, 0).wait(1).to({ scaleX: 1.5932, scaleY: 1.5931, rotation: 42.2819, x: 572.3595, y: 103.7099 }, 0).wait(1).to({ scaleX: 1.5921, scaleY: 1.5921, rotation: 48.3221, x: 572.4246, y: 103.7252 }, 0).wait(1).to({ scaleX: 1.5911, scaleY: 1.591, rotation: 54.3624, x: 572.4873, y: 103.7471 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, rotation: 60.4027, x: 572.5469, y: 103.7755 }, 0).wait(1).to({ scaleX: 1.589, scaleY: 1.5889, rotation: 66.443, x: 572.6029, y: 103.8099 }, 0).wait(1).to({ scaleX: 1.5879, scaleY: 1.5879, rotation: 72.4832, x: 572.6545, y: 103.85 }, 0).wait(1).to({ scaleX: 1.5868, scaleY: 1.5868, rotation: 78.5235, x: 572.7012, y: 103.8953 }, 0).wait(1).to({ scaleX: 1.5858, scaleY: 1.5858, rotation: 84.5638, x: 572.7426, y: 103.9452 }, 0).wait(1).to({ scaleX: 1.5848, scaleY: 1.5848, rotation: 90.604, x: 572.7781, y: 103.9991 }, 0).wait(1).to({ scaleX: 1.5838, scaleY: 1.5837, rotation: 96.6443, x: 572.8073, y: 104.0564 }, 0).wait(1).to({ scaleX: 1.5827, scaleY: 1.5827, rotation: 102.6846, x: 572.83, y: 104.1163 }, 0).wait(1).to({ scaleX: 1.5816, scaleY: 1.5816, rotation: 108.7248, x: 572.8459, y: 104.1783 }, 0).wait(1).to({ scaleX: 1.5806, scaleY: 1.5805, rotation: 114.7651, x: 572.8548, y: 104.2415 }, 0).wait(1).to({ scaleX: 1.5795, scaleY: 1.5795, rotation: 120.8054, x: 572.8567, y: 104.3053 }, 0).wait(1).to({ scaleX: 1.5784, scaleY: 1.5784, rotation: 126.8456, x: 572.8515, y: 104.3688 }, 0).wait(1).to({ scaleX: 1.5774, scaleY: 1.5774, rotation: 132.8859, x: 572.8393, y: 104.4314 }, 0).wait(1).to({ scaleX: 1.5764, scaleY: 1.5763, rotation: 138.9262, x: 572.8203, y: 104.4923 }, 0).wait(1).to({ scaleX: 1.5753, scaleY: 1.5753, rotation: 144.9664, x: 572.7946, y: 104.5508 }, 0).wait(1).to({ scaleX: 1.5743, scaleY: 1.5742, rotation: 151.0067, x: 572.7626, y: 104.6062 }, 0).wait(1).to({ scaleX: 1.5732, scaleY: 1.5732, rotation: 157.047, x: 572.7246, y: 104.6578 }, 0).wait(1).to({ scaleX: 1.5722, scaleY: 1.5721, rotation: 163.0872, x: 572.681, y: 104.7051 }, 0).wait(1).to({ scaleX: 1.5711, scaleY: 1.5711, rotation: 169.1275, x: 572.6324, y: 104.7476 }, 0).wait(1).to({ scaleX: 1.5701, scaleY: 1.57, rotation: 175.1678, x: 572.5793, y: 104.7846 }, 0).wait(1).to({ scaleX: 1.569, scaleY: 1.569, rotation: 181.2081, x: 572.5223, y: 104.8158 }, 0).wait(1).to({ scaleX: 1.568, scaleY: 1.5679, rotation: 187.2483, x: 572.462, y: 104.8408 }, 0).wait(1).to({ scaleX: 1.5669, scaleY: 1.5668, rotation: 193.2886, x: 572.399, y: 104.8593 }, 0).wait(1).to({ scaleX: 1.5659, scaleY: 1.5658, rotation: 199.3289, x: 572.3342, y: 104.871 }, 0).wait(1).to({ scaleX: 1.5648, scaleY: 1.5647, rotation: 205.3691, x: 572.2682, y: 104.8758 }, 0).wait(1).to({ scaleX: 1.5638, scaleY: 1.5637, rotation: 211.4094, x: 572.2018, y: 104.8736 }, 0).wait(1).to({ scaleX: 1.5627, scaleY: 1.5626, rotation: 217.4497, x: 572.1357, y: 104.8644 }, 0).wait(1).to({ scaleX: 1.5617, scaleY: 1.5616, rotation: 223.4899, x: 572.0705, y: 104.8483 }, 0).wait(1).to({ scaleX: 1.5606, scaleY: 1.5605, rotation: 229.5302, x: 572.0072, y: 104.8255 }, 0).wait(1).to({ scaleX: 1.5596, scaleY: 1.5595, rotation: 235.5705, x: 571.9463, y: 104.796 }, 0).wait(1).to({ scaleX: 1.5585, scaleY: 1.5584, rotation: 241.6107, x: 571.8885, y: 104.7604 }, 0).wait(1).to({ scaleX: 1.5575, scaleY: 1.5574, rotation: 247.651, x: 571.8344, y: 104.7189 }, 0).wait(1).to({ scaleX: 1.5564, scaleY: 1.5563, rotation: 253.6913, x: 571.7847, y: 104.6719 }, 0).wait(1).to({ scaleX: 1.5554, scaleY: 1.5553, rotation: 259.7315, x: 571.7399, y: 104.62 }, 0).wait(1).to({ scaleX: 1.5543, scaleY: 1.5542, rotation: 265.7718, x: 571.7005, y: 104.5636 }, 0).wait(1).to({ scaleX: 1.5532, scaleY: 1.5531, rotation: 271.8121, x: 571.6669, y: 104.5035 }, 0).wait(1).to({ scaleX: 1.5522, scaleY: 1.5521, rotation: 277.8523, x: 571.6395, y: 104.4402 }, 0).wait(1).to({ scaleX: 1.5512, scaleY: 1.5511, rotation: 283.8926, x: 571.6186, y: 104.3743 }, 0).wait(1).to({ scaleX: 1.5501, scaleY: 1.55, rotation: 289.9329, x: 571.6044, y: 104.3067 }, 0).wait(1).to({ scaleX: 1.5491, scaleY: 1.549, rotation: 295.9732, x: 571.597, y: 104.2379 }, 0).wait(1).to({ scaleX: 1.548, scaleY: 1.5479, rotation: 302.0134, x: 571.5966, y: 104.1688 }, 0).wait(1).to({ scaleX: 1.5469, scaleY: 1.5468, rotation: 308.0537, x: 571.6031, y: 104.1001 }, 0).wait(1).to({ scaleX: 1.5459, scaleY: 1.5458, rotation: 314.094, x: 571.6164, y: 104.0324 }, 0).wait(1).to({ scaleX: 1.5449, scaleY: 1.5447, rotation: 320.1342, x: 571.6364, y: 103.9666 }, 0).wait(1).to({ scaleX: 1.5438, scaleY: 1.5437, rotation: 326.1745, x: 571.6628, y: 103.9032 }, 0).wait(1).to({ scaleX: 1.5427, scaleY: 1.5426, rotation: 332.2148, x: 571.6954, y: 103.843 }, 0).wait(1).to({ scaleX: 1.5417, scaleY: 1.5416, rotation: 338.255, x: 571.7338, y: 103.7866 }, 0).wait(1).to({ scaleX: 1.5406, scaleY: 1.5405, rotation: 344.2953, x: 571.7775, y: 103.7345 }, 0).wait(1).to({ scaleX: 1.5396, scaleY: 1.5395, rotation: 350.3356, x: 571.8261, y: 103.6874 }, 0).wait(1).to({ scaleX: 1.5385, scaleY: 1.5384, rotation: 356.3758, x: 571.879, y: 103.6456 }, 0).wait(1).to({ scaleX: 1.5375, scaleY: 1.5374, rotation: 362.4161, x: 571.9356, y: 103.6096 }, 0).wait(1).to({ scaleX: 1.5365, scaleY: 1.5364, rotation: 368.4564, x: 571.9952, y: 103.5798 }, 0).wait(1).to({ scaleX: 1.5354, scaleY: 1.5353, rotation: 374.4966, x: 572.0573, y: 103.5564 }, 0).wait(1).to({ scaleX: 1.5343, scaleY: 1.5342, rotation: 380.5369, x: 572.1211, y: 103.5397 }, 0).wait(1).to({ scaleX: 1.5333, scaleY: 1.5332, rotation: 386.5772, x: 572.1859, y: 103.5297 }, 0).wait(1).to({ scaleX: 1.5322, scaleY: 1.5321, rotation: 392.6174, x: 572.251, y: 103.5267 }, 0).wait(1).to({ scaleX: 1.5312, scaleY: 1.531, rotation: 398.6577, x: 572.3157, y: 103.5304 }, 0).wait(1).to({ scaleX: 1.5301, scaleY: 1.53, rotation: 404.698, x: 572.3792, y: 103.5409 }, 0).wait(1).to({ scaleX: 1.5291, scaleY: 1.529, rotation: 410.7383, x: 572.4409, y: 103.5581 }, 0).wait(1).to({ scaleX: 1.528, scaleY: 1.5279, rotation: 416.7785, x: 572.5, y: 103.5815 }, 0).wait(1).to({ scaleX: 1.527, scaleY: 1.5269, rotation: 422.8188, x: 572.556, y: 103.6111 }, 0).wait(1).to({ scaleX: 1.526, scaleY: 1.5258, rotation: 428.8591, x: 572.6081, y: 103.6463 }, 0).wait(1).to({ scaleX: 1.5249, scaleY: 1.5248, rotation: 434.8993, x: 572.6559, y: 103.6867 }, 0).wait(1).to({ scaleX: 1.5239, scaleY: 1.5237, rotation: 440.9396, x: 572.6987, y: 103.7319 }, 0).wait(1).to({ scaleX: 1.5228, scaleY: 1.5227, rotation: 446.9799, x: 572.7362, y: 103.7813 }, 0).wait(1).to({ scaleX: 1.5218, scaleY: 1.5216, rotation: 453.0201, x: 572.768, y: 103.8343 }, 0).wait(1).to({ scaleX: 1.5221, scaleY: 1.522, rotation: 459.0604, x: 572.7941, y: 103.8934 }, 0).wait(1).to({ scaleX: 1.5225, scaleY: 1.5223, rotation: 465.1007, x: 572.8138, y: 103.955 }, 0).wait(1).to({ scaleX: 1.5228, scaleY: 1.5227, rotation: 471.1409, x: 572.827, y: 104.0183 }, 0).wait(1).to({ scaleX: 1.5232, scaleY: 1.523, rotation: 477.1812, x: 572.8334, y: 104.0827 }, 0).wait(1).to({ scaleX: 1.5235, scaleY: 1.5233, rotation: 483.2215, x: 572.8331, y: 104.1474 }, 0).wait(1).to({ scaleX: 1.5239, scaleY: 1.5237, rotation: 489.2617, x: 572.8259, y: 104.2117 }, 0).wait(1).to({ scaleX: 1.5242, scaleY: 1.5241, rotation: 495.302, x: 572.812, y: 104.2749 }, 0).wait(1).to({ scaleX: 1.5246, scaleY: 1.5244, rotation: 501.3423, x: 572.7915, y: 104.3363 }, 0).wait(1).to({ scaleX: 1.5249, scaleY: 1.5248, rotation: 507.3826, x: 572.7647, y: 104.3953 }, 0).wait(1).to({ scaleX: 1.5253, scaleY: 1.5251, rotation: 513.4228, x: 572.7317, y: 104.4511 }, 0).wait(1).to({ scaleX: 1.5256, scaleY: 1.5255, rotation: 519.4631, x: 572.6931, y: 104.5031 }, 0).wait(1).to({ scaleX: 1.526, scaleY: 1.5259, rotation: 525.5034, x: 572.6493, y: 104.5508 }, 0).wait(1).to({ scaleX: 1.5264, scaleY: 1.5262, rotation: 531.5436, x: 572.6006, y: 104.5936 }, 0).wait(1).to({ scaleX: 1.5267, scaleY: 1.5266, rotation: 537.5839, x: 572.5477, y: 104.6311 }, 0).wait(1).to({ scaleX: 1.5271, scaleY: 1.5269, rotation: 543.6242, x: 572.4911, y: 104.6628 }, 0).wait(1).to({ scaleX: 1.5274, scaleY: 1.5273, rotation: 549.6644, x: 572.4315, y: 104.6884 }, 0).wait(1).to({ scaleX: 1.5278, scaleY: 1.5276, rotation: 555.7047, x: 572.3695, y: 104.7076 }, 0).wait(1).to({ scaleX: 1.5282, scaleY: 1.528, rotation: 561.745, x: 572.3059, y: 104.7201 }, 0).wait(1).to({ scaleX: 1.5285, scaleY: 1.5283, rotation: 567.7852, x: 572.2412, y: 104.7259 }, 0).wait(1).to({ scaleX: 1.5288, scaleY: 1.5287, rotation: 573.8255, x: 572.1763, y: 104.7249 }, 0).wait(1).to({ scaleX: 1.5292, scaleY: 1.529, rotation: 579.8658, x: 572.1118, y: 104.717 }, 0).wait(1).to({ scaleX: 1.5295, scaleY: 1.5294, rotation: 585.906, x: 572.0485, y: 104.7023 }, 0).wait(1).to({ scaleX: 1.5299, scaleY: 1.5297, rotation: 591.9463, x: 571.9871, y: 104.6811 }, 0).wait(1).to({ scaleX: 1.5302, scaleY: 1.5301, rotation: 597.9866, x: 571.9283, y: 104.6536 }, 0).wait(1).to({ scaleX: 1.5306, scaleY: 1.5304, rotation: 604.0268, x: 571.8726, y: 104.62 }, 0).wait(1).to({ scaleX: 1.531, scaleY: 1.5308, rotation: 610.0671, x: 571.8208, y: 104.5807 }, 0).wait(1).to({ scaleX: 1.5313, scaleY: 1.5311, rotation: 616.1074, x: 571.7734, y: 104.5362 }, 0).wait(1).to({ scaleX: 1.5317, scaleY: 1.5315, rotation: 622.1477, x: 571.731, y: 104.4869 }, 0).wait(1).to({ scaleX: 1.532, scaleY: 1.5318, rotation: 628.1879, x: 571.6939, y: 104.4334 }, 0).wait(1).to({ scaleX: 1.5324, scaleY: 1.5322, rotation: 634.2282, x: 571.6627, y: 104.3763 }, 0).wait(1).to({ scaleX: 1.5328, scaleY: 1.5326, rotation: 640.2685, x: 571.6377, y: 104.3162 }, 0).wait(1).to({ scaleX: 1.5331, scaleY: 1.5329, rotation: 646.3087, x: 571.6191, y: 104.2538 }, 0).wait(1).to({ scaleX: 1.5335, scaleY: 1.5333, rotation: 652.349, x: 571.6072, y: 104.1898 }, 0).wait(1).to({ scaleX: 1.5338, scaleY: 1.5336, rotation: 658.3893, x: 571.602, y: 104.1248 }, 0).wait(1).to({ scaleX: 1.5342, scaleY: 1.534, rotation: 664.4295, x: 571.6038, y: 104.0597 }, 0).wait(1).to({ scaleX: 1.5345, scaleY: 1.5343, rotation: 670.4698, x: 571.6124, y: 103.9951 }, 0).wait(1).to({ scaleX: 1.5349, scaleY: 1.5347, rotation: 676.5101, x: 571.6277, y: 103.9318 }, 0).wait(1).to({ scaleX: 1.5352, scaleY: 1.535, rotation: 682.5503, x: 571.6497, y: 103.8704 }, 0).wait(1).to({ scaleX: 1.5356, scaleY: 1.5354, rotation: 688.5906, x: 571.6779, y: 103.8116 }, 0).wait(1).to({ scaleX: 1.5359, scaleY: 1.5357, rotation: 694.6309, x: 571.7122, y: 103.7561 }, 0).wait(1).to({ scaleX: 1.5363, scaleY: 1.5361, rotation: 700.6711, x: 571.7522, y: 103.7046 }, 0).wait(1).to({ scaleX: 1.5366, scaleY: 1.5364, rotation: 706.7114, x: 571.7974, y: 103.6575 }, 0).wait(1).to({ scaleX: 1.537, scaleY: 1.5368, rotation: 712.7517, x: 571.8473, y: 103.6154 }, 0).wait(1).to({ scaleX: 1.5374, scaleY: 1.5372, rotation: 718.7919, x: 571.9014, y: 103.5788 }, 0).wait(1).to({ scaleX: 1.5377, scaleY: 1.5375, rotation: 724.8322, x: 571.959, y: 103.5481 }, 0).wait(1).to({ scaleX: 1.5381, scaleY: 1.5379, rotation: 730.8725, x: 572.0195, y: 103.5236 }, 0).wait(1).to({ scaleX: 1.5384, scaleY: 1.5382, rotation: 736.9128, x: 572.0823, y: 103.5056 }, 0).wait(1).to({ scaleX: 1.5388, scaleY: 1.5386, rotation: 742.953, x: 572.1467, y: 103.4943 }, 0).wait(1).to({ scaleX: 1.5391, scaleY: 1.5389, rotation: 748.9933, x: 572.2119, y: 103.4899 }, 0).wait(1).to({ scaleX: 1.5395, scaleY: 1.5393, rotation: 755.0336, x: 572.2773, y: 103.4923 }, 0).wait(1).to({ scaleX: 1.5398, scaleY: 1.5396, rotation: 761.0738, x: 572.342, y: 103.5016 }, 0).wait(1).to({ scaleX: 1.5402, scaleY: 1.54, rotation: 767.1141, x: 572.4054, y: 103.5177 }, 0).wait(1).to({ scaleX: 1.5405, scaleY: 1.5403, rotation: 773.1544, x: 572.4668, y: 103.5403 }, 0).wait(1).to({ scaleX: 1.5409, scaleY: 1.5407, rotation: 779.1946, x: 572.5254, y: 103.5693 }, 0).wait(1).to({ scaleX: 1.5413, scaleY: 1.541, rotation: 785.2349, x: 572.5807, y: 103.6043 }, 0).wait(1).to({ scaleX: 1.5416, scaleY: 1.5414, rotation: 791.2752, x: 572.6321, y: 103.645 }, 0).wait(1).to({ scaleX: 1.542, scaleY: 1.5418, rotation: 797.3154, x: 572.6788, y: 103.6908 }, 0).wait(1).to({ scaleX: 1.5423, scaleY: 1.5421, rotation: 803.3557, x: 572.7205, y: 103.7413 }, 0).wait(1).to({ scaleX: 1.5427, scaleY: 1.5425, rotation: 809.396, x: 572.7567, y: 103.796 }, 0).wait(1).to({ scaleX: 1.543, scaleY: 1.5428, rotation: 815.4362, x: 572.7869, y: 103.8541 }, 0).wait(1).to({ scaleX: 1.5433, scaleY: 1.5431, rotation: 821.4765, x: 572.8108, y: 103.9151 }, 0).wait(1).to({ scaleX: 1.5437, scaleY: 1.5435, rotation: 827.5168, x: 572.8282, y: 103.9784 }, 0).wait(1).to({ scaleX: 1.5441, scaleY: 1.5439, rotation: 833.557, x: 572.8388, y: 104.0431 }, 0).wait(1).to({ scaleX: 1.5444, scaleY: 1.5442, rotation: 839.5973, x: 572.8426, y: 104.1085 }, 0).wait(1).to({ scaleX: 1.5448, scaleY: 1.5446, rotation: 845.6376, x: 572.8395, y: 104.1741 }, 0).wait(1).to({ scaleX: 1.5451, scaleY: 1.5449, rotation: 851.6779, x: 572.8294, y: 104.2389 }, 0).wait(1).to({ scaleX: 1.5455, scaleY: 1.5453, rotation: 857.7181, x: 572.8127, y: 104.3024 }, 0).wait(1).to({ scaleX: 1.5458, scaleY: 1.5456, rotation: 863.7584, x: 572.7893, y: 104.3637 }, 0).wait(1).to({ scaleX: 1.5462, scaleY: 1.546, rotation: 869.7987, x: 572.7596, y: 104.4223 }, 0).wait(1).to({ scaleX: 1.5466, scaleY: 1.5463, rotation: 875.8389, x: 572.7238, y: 104.4774 }, 0).wait(1).to({ scaleX: 1.5469, scaleY: 1.5467, rotation: 881.8792, x: 572.6825, y: 104.5284 }, 0).wait(1).to({ scaleX: 1.5473, scaleY: 1.5471, rotation: 887.9195, x: 572.636, y: 104.5749 }, 0).wait(1).to({ scaleX: 1.5477, scaleY: 1.5474, rotation: 893.9597, x: 572.5849, y: 104.6162 }, 0).wait(1).to({ scaleX: 1.548, scaleY: 1.5477, rotation: 900, x: 572.5297, y: 104.6519 }, 0).wait(1).to({ scaleX: 1.5484, scaleY: 1.5481, rotation: 906.0403, x: 572.471, y: 104.6816 }, 0).wait(1).to({ scaleX: 1.5487, scaleY: 1.5485, rotation: 912.0805, x: 572.4096, y: 104.705 }, 0).wait(1).to({ scaleX: 1.549, scaleY: 1.5488, rotation: 918.1208, x: 572.3459, y: 104.7217 }, 0).wait(1).to({ scaleX: 1.5494, scaleY: 1.5492, rotation: 924.1611, x: 572.2809, y: 104.7317 }, 0).wait(1).to({ scaleX: 1.5498, scaleY: 1.5495, rotation: 930.2013, x: 572.2152, y: 104.7348 }, 0).wait(1).to({ scaleX: 1.5501, scaleY: 1.5499, rotation: 936.2416, x: 572.1495, y: 104.731 }, 0).wait(1).to({ scaleX: 1.5505, scaleY: 1.5502, rotation: 942.2819, x: 572.0845, y: 104.7202 }, 0).wait(1).to({ scaleX: 1.5508, scaleY: 1.5506, rotation: 948.3221, x: 572.021, y: 104.7027 }, 0).wait(1).to({ scaleX: 1.5512, scaleY: 1.5509, rotation: 954.3624, x: 571.9597, y: 104.6786 }, 0).wait(1).to({ scaleX: 1.5515, scaleY: 1.5513, rotation: 960.4027, x: 571.9013, y: 104.6482 }, 0).wait(1).to({ scaleX: 1.5519, scaleY: 1.5516, rotation: 966.443, x: 571.8463, y: 104.6117 }, 0).wait(1).to({ scaleX: 1.5522, scaleY: 1.552, rotation: 972.4832, x: 571.7955, y: 104.5697 }, 0).wait(1).to({ scaleX: 1.5526, scaleY: 1.5523, rotation: 978.5235, x: 571.7494, y: 104.5226 }, 0).wait(1).to({ scaleX: 1.5529, scaleY: 1.5527, rotation: 984.5638, x: 571.7085, y: 104.4709 }, 0).wait(1).to({ scaleX: 1.5533, scaleY: 1.5531, rotation: 990.604, x: 571.6733, y: 104.4151 }, 0).wait(1).to({ scaleX: 1.5537, scaleY: 1.5534, rotation: 996.6443, x: 571.6441, y: 104.3559 }, 0).wait(1).to({ scaleX: 1.554, scaleY: 1.5538, rotation: 1002.6846, x: 571.6213, y: 104.294 }, 0).wait(1).to({ scaleX: 1.5544, scaleY: 1.5541, rotation: 1008.7248, x: 571.6052, y: 104.23 }, 0).wait(1).to({ scaleX: 1.5547, scaleY: 1.5545, rotation: 1014.7651, x: 571.5958, y: 104.1646 }, 0).wait(1).to({ scaleX: 1.5551, scaleY: 1.5548, rotation: 1020.8054, x: 571.5934, y: 104.0986 }, 0).wait(1).to({ scaleX: 1.5554, scaleY: 1.5551, rotation: 1026.8456, x: 571.598, y: 104.0327 }, 0).wait(1).to({ scaleX: 1.5558, scaleY: 1.5555, rotation: 1032.8859, x: 571.6094, y: 103.9677 }, 0).wait(1).to({ scaleX: 1.5561, scaleY: 1.5559, rotation: 1038.9262, x: 571.6277, y: 103.9041 }, 0).wait(1).to({ scaleX: 1.5565, scaleY: 1.5562, rotation: 1044.9664, x: 571.6525, y: 103.8429 }, 0).wait(1).to({ scaleX: 1.5569, scaleY: 1.5566, rotation: 1051.0067, x: 571.6837, y: 103.7846 }, 0).wait(1).to({ scaleX: 1.5572, scaleY: 1.5569, rotation: 1057.047, x: 571.7208, y: 103.7299 }, 0).wait(1).to({ scaleX: 1.5576, scaleY: 1.5573, rotation: 1063.0872, x: 571.7635, y: 103.6793 }, 0).wait(1).to({ scaleX: 1.5579, scaleY: 1.5577, rotation: 1069.1275, x: 571.8113, y: 103.6336 }, 0).wait(1).to({ scaleX: 1.5583, scaleY: 1.558, rotation: 1075.1678, x: 571.8636, y: 103.5931 }, 0).wait(1).to({ scaleX: 1.5586, scaleY: 1.5584, rotation: 1081.2081, x: 571.9199, y: 103.5583 }, 0).wait(1).to({ scaleX: 1.559, scaleY: 1.5587, rotation: 1087.2483, x: 571.9796, y: 103.5297 }, 0).wait(1).to({ scaleX: 1.5593, scaleY: 1.5591, rotation: 1093.2886, x: 572.042, y: 103.5074 }, 0).wait(1).to({ scaleX: 1.5597, scaleY: 1.5594, rotation: 1099.3289, x: 572.1064, y: 103.4919 }, 0).wait(1).to({ scaleX: 1.56, scaleY: 1.5598, rotation: 1105.3691, x: 572.1721, y: 103.4832 }, 0).wait(1).to({ scaleX: 1.5604, scaleY: 1.5601, rotation: 1111.4094, x: 572.2383, y: 103.4815 }, 0).wait(1).to({ scaleX: 1.5607, scaleY: 1.5605, rotation: 1117.4497, x: 572.3044, y: 103.4868 }, 0).wait(1).to({ scaleX: 1.5611, scaleY: 1.5608, rotation: 1123.4899, x: 572.3696, y: 103.499 }, 0).wait(1).to({ scaleX: 1.5615, scaleY: 1.5612, rotation: 1129.5302, x: 572.4331, y: 103.518 }, 0).wait(1).to({ scaleX: 1.5618, scaleY: 1.5615, rotation: 1135.5705, x: 572.4943, y: 103.5435 }, 0).wait(1).to({ scaleX: 1.5622, scaleY: 1.5619, rotation: 1141.6107, x: 572.5525, y: 103.5754 }, 0).wait(1).to({ scaleX: 1.5625, scaleY: 1.5622, rotation: 1147.651, x: 572.607, y: 103.6132 }, 0).wait(1).to({ scaleX: 1.5629, scaleY: 1.5626, rotation: 1153.6913, x: 572.6572, y: 103.6566 }, 0).wait(1).to({ scaleX: 1.5633, scaleY: 1.563, rotation: 1159.7315, x: 572.7026, y: 103.705 }, 0).wait(1).to({ scaleX: 1.5636, scaleY: 1.5633, rotation: 1165.7718, x: 572.7427, y: 103.758 }, 0).wait(1).to({ scaleX: 1.5639, scaleY: 1.5636, rotation: 1171.8121, x: 572.777, y: 103.8149 }, 0).wait(1).to({ scaleX: 1.5643, scaleY: 1.564, rotation: 1177.8523, x: 572.8051, y: 103.875 }, 0).wait(1).to({ scaleX: 1.5646, scaleY: 1.5644, rotation: 1183.8926, x: 572.8267, y: 103.9379 }, 0).wait(1).to({ scaleX: 1.565, scaleY: 1.5647, rotation: 1189.9329, x: 572.8416, y: 104.0026 }, 0).wait(1).to({ scaleX: 1.5654, scaleY: 1.5651, rotation: 1195.9732, x: 572.8497, y: 104.0686 }, 0).wait(1).to({ scaleX: 1.5657, scaleY: 1.5654, rotation: 1202.0134, x: 572.8507, y: 104.1351 }, 0).wait(1).to({ scaleX: 1.5661, scaleY: 1.5658, rotation: 1208.0537, x: 572.8447, y: 104.2013 }, 0).wait(1).to({ scaleX: 1.5664, scaleY: 1.5661, rotation: 1214.094, x: 572.8318, y: 104.2666 }, 0).wait(1).to({ scaleX: 1.5668, scaleY: 1.5665, rotation: 1220.1342, x: 572.812, y: 104.3301 }, 0).wait(1).to({ scaleX: 1.5671, scaleY: 1.5668, rotation: 1226.1745, x: 572.7857, y: 104.3913 }, 0).wait(1).to({ scaleX: 1.5675, scaleY: 1.5672, rotation: 1232.2148, x: 572.7531, y: 104.4493 }, 0).wait(1).to({ scaleX: 1.5679, scaleY: 1.5676, rotation: 1238.255, x: 572.7146, y: 104.5036 }, 0).wait(1).to({ scaleX: 1.5682, scaleY: 1.5679, rotation: 1244.2953, x: 572.6706, y: 104.5536 }, 0).wait(1).to({ scaleX: 1.5686, scaleY: 1.5683, rotation: 1250.3356, x: 572.6215, y: 104.5986 }, 0).wait(1).to({ scaleX: 1.5689, scaleY: 1.5686, rotation: 1256.3758, x: 572.568, y: 104.6383 }, 0).wait(1).to({ scaleX: 1.5693, scaleY: 1.569, rotation: 1262.4161, x: 572.5105, y: 104.6721 }, 0).wait(1).to({ scaleX: 1.5696, scaleY: 1.5693, rotation: 1268.4564, x: 572.4498, y: 104.6996 }, 0).wait(1).to({ scaleX: 1.57, scaleY: 1.5697, rotation: 1274.4966, x: 572.3866, y: 104.7207 }, 0).wait(1).to({ scaleX: 1.5703, scaleY: 1.57, rotation: 1280.5369, x: 572.3214, y: 104.7349 }, 0).wait(1).to({ scaleX: 1.5707, scaleY: 1.5704, rotation: 1286.5772, x: 572.2551, y: 104.7423 }, 0).wait(1).to({ scaleX: 1.571, scaleY: 1.5707, rotation: 1292.6174, x: 572.1884, y: 104.7426 }, 0).wait(1).to({ scaleX: 1.5714, scaleY: 1.5711, rotation: 1298.6577, x: 572.122, y: 104.7359 }, 0).wait(1).to({ scaleX: 1.5717, scaleY: 1.5714, rotation: 1304.698, x: 572.0567, y: 104.7222 }, 0).wait(1).to({ scaleX: 1.5721, scaleY: 1.5718, rotation: 1310.7383, x: 571.9931, y: 104.7018 }, 0).wait(1).to({ scaleX: 1.5724, scaleY: 1.5721, rotation: 1316.7785, x: 571.9321, y: 104.6747 }, 0).wait(1).to({ scaleX: 1.5728, scaleY: 1.5725, rotation: 1322.8188, x: 571.8742, y: 104.6414 }, 0).wait(1).to({ scaleX: 1.5732, scaleY: 1.5729, rotation: 1328.8591, x: 571.8201, y: 104.6022 }, 0).wait(1).to({ scaleX: 1.5735, scaleY: 1.5732, rotation: 1334.8993, x: 571.7705, y: 104.5575 }, 0).wait(1).to({ scaleX: 1.5739, scaleY: 1.5736, rotation: 1340.9396, x: 571.7258, y: 104.5078 }, 0).wait(1).to({ scaleX: 1.5742, scaleY: 1.5739, rotation: 1346.9799, x: 571.6866, y: 104.4536 }, 0).wait(1).to({ scaleX: 1.5746, scaleY: 1.5743, rotation: 1353.0201, x: 571.6533, y: 104.3956 }, 0).wait(1).to({ scaleX: 1.5749, scaleY: 1.5746, rotation: 1359.0604, x: 571.6263, y: 104.3344 }, 0).wait(1).to({ scaleX: 1.5753, scaleY: 1.575, rotation: 1365.1007, x: 571.6058, y: 104.2708 }, 0).wait(1).to({ scaleX: 1.5757, scaleY: 1.5753, rotation: 1371.1409, x: 571.5922, y: 104.2052 }, 0).wait(1).to({ scaleX: 1.576, scaleY: 1.5757, rotation: 1377.1812, x: 571.5855, y: 104.1386 }, 0).wait(1).to({ scaleX: 1.5763, scaleY: 1.576, rotation: 1383.2215, x: 571.5859, y: 104.0717 }, 0).wait(1).to({ scaleX: 1.5767, scaleY: 1.5764, rotation: 1389.2617, x: 571.5934, y: 104.0052 }, 0).wait(1).to({ scaleX: 1.5771, scaleY: 1.5767, rotation: 1395.302, x: 571.6077, y: 103.9398 }, 0).wait(1).to({ scaleX: 1.5774, scaleY: 1.5771, rotation: 1401.3423, x: 571.6289, y: 103.8762 }, 0).wait(1).to({ scaleX: 1.5778, scaleY: 1.5774, rotation: 1407.3826, x: 571.6567, y: 103.8152 }, 0).wait(1).to({ scaleX: 1.5781, scaleY: 1.5778, rotation: 1413.4228, x: 571.6908, y: 103.7575 }, 0).wait(1).to({ scaleX: 1.5785, scaleY: 1.5781, rotation: 1419.4631, x: 571.7307, y: 103.7037 }, 0).wait(1).to({ scaleX: 1.5788, scaleY: 1.5785, rotation: 1425.5034, x: 571.7761, y: 103.6543 }, 0).wait(1).to({ scaleX: 1.5792, scaleY: 1.5789, rotation: 1431.5436, x: 571.8264, y: 103.61 }, 0).wait(1).to({ scaleX: 1.5796, scaleY: 1.5792, rotation: 1437.5839, x: 571.8812, y: 103.5713 }, 0).wait(1).to({ scaleX: 1.5799, scaleY: 1.5795, rotation: 1443.6242, x: 571.9397, y: 103.5385 }, 0).wait(1).to({ scaleX: 1.5803, scaleY: 1.5799, rotation: 1449.6644, x: 572.0014, y: 103.512 }, 0).wait(1).to({ scaleX: 1.5806, scaleY: 1.5802, rotation: 1455.7047, x: 572.0655, y: 103.4922 }, 0).wait(1).to({ scaleX: 1.581, scaleY: 1.5806, rotation: 1461.745, x: 572.1314, y: 103.4792 }, 0).wait(1).to({ scaleX: 1.5813, scaleY: 1.581, rotation: 1467.7852, x: 572.1982, y: 103.4732 }, 0).wait(1).to({ scaleX: 1.5817, scaleY: 1.5813, rotation: 1473.8255, x: 572.2654, y: 103.4743 }, 0).wait(1).to({ scaleX: 1.582, scaleY: 1.5817, rotation: 1479.8658, x: 572.3321, y: 103.4825 }, 0).wait(1).to({ scaleX: 1.5824, scaleY: 1.582, rotation: 1485.906, x: 572.3976, y: 103.4976 }, 0).wait(1).to({ scaleX: 1.5827, scaleY: 1.5824, rotation: 1491.9463, x: 572.4611, y: 103.5195 }, 0).wait(1).to({ scaleX: 1.5831, scaleY: 1.5827, rotation: 1497.9866, x: 572.522, y: 103.5481 }, 0).wait(1).to({ scaleX: 1.5834, scaleY: 1.5831, rotation: 1504.0268, x: 572.5795, y: 103.5828 }, 0).wait(1).to({ scaleX: 1.5838, scaleY: 1.5835, rotation: 1510.0671, x: 572.6331, y: 103.6235 }, 0).wait(1).to({ scaleX: 1.5841, scaleY: 1.5838, rotation: 1516.1074, x: 572.6821, y: 103.6695 }, 0).wait(1).to({ scaleX: 1.5845, scaleY: 1.5842, rotation: 1522.1477, x: 572.7261, y: 103.7205 }, 0).wait(1).to({ scaleX: 1.5848, scaleY: 1.5845, rotation: 1528.1879, x: 572.7644, y: 103.7758 }, 0).wait(1).to({ scaleX: 1.5852, scaleY: 1.5849, rotation: 1534.2282, x: 572.7967, y: 103.8349 }, 0).wait(1).to({ scaleX: 1.5856, scaleY: 1.5852, rotation: 1540.2685, x: 572.8226, y: 103.897 }, 0).wait(1).to({ scaleX: 1.5859, scaleY: 1.5856, rotation: 1546.3087, x: 572.8418, y: 103.9616 }, 0).wait(1).to({ scaleX: 1.5863, scaleY: 1.5859, rotation: 1552.349, x: 572.8541, y: 104.0278 }, 0).wait(1).to({ scaleX: 1.5866, scaleY: 1.5863, rotation: 1558.3893, x: 572.8594, y: 104.095 }, 0).wait(1).to({ scaleX: 1.587, scaleY: 1.5866, rotation: 1564.4295, x: 572.8576, y: 104.1624 }, 0).wait(1).to({ scaleX: 1.5873, scaleY: 1.587, rotation: 1570.4698, x: 572.8487, y: 104.2292 }, 0).wait(1).to({ scaleX: 1.5877, scaleY: 1.5873, rotation: 1576.5101, x: 572.8328, y: 104.2947 }, 0).wait(1).to({ scaleX: 1.588, scaleY: 1.5877, rotation: 1582.5503, x: 572.8101, y: 104.3582 }, 0).wait(1).to({ scaleX: 1.5884, scaleY: 1.588, rotation: 1588.5906, x: 572.7809, y: 104.419 }, 0).wait(1).to({ scaleX: 1.5888, scaleY: 1.5884, rotation: 1594.6309, x: 572.7454, y: 104.4764 }, 0).wait(1).to({ scaleX: 1.5891, scaleY: 1.5888, rotation: 1600.6711, x: 572.7041, y: 104.5297 }, 0).wait(1).to({ scaleX: 1.5895, scaleY: 1.5891, rotation: 1606.7114, x: 572.6573, y: 104.5784 }, 0).wait(1).to({ scaleX: 1.5898, scaleY: 1.5894, rotation: 1612.7517, x: 572.6057, y: 104.6219 }, 0).wait(1).to({ scaleX: 1.5902, scaleY: 1.5898, rotation: 1618.7919, x: 572.5498, y: 104.6598 }, 0).wait(1).to({ scaleX: 1.5906, scaleY: 1.5902, rotation: 1624.8322, x: 572.4902, y: 104.6915 }, 0).wait(1).to({ scaleX: 1.5909, scaleY: 1.5905, rotation: 1630.8725, x: 572.4276, y: 104.7169 }, 0).wait(1).to({ scaleX: 1.5913, scaleY: 1.5909, rotation: 1636.9128, x: 572.3626, y: 104.7355 }, 0).wait(1).to({ scaleX: 1.5916, scaleY: 1.5912, rotation: 1642.953, x: 572.296, y: 104.7471 }, 0).wait(1).to({ scaleX: 1.592, scaleY: 1.5916, rotation: 1648.9933, x: 572.2286, y: 104.7517 }, 0).wait(1).to({ scaleX: 1.5923, scaleY: 1.5919, rotation: 1655.0336, x: 572.161, y: 104.7492 }, 0).wait(1).to({ scaleX: 1.5926, scaleY: 1.5923, rotation: 1661.0738, x: 572.0941, y: 104.7396 }, 0).wait(1).to({ scaleX: 1.593, scaleY: 1.5926, rotation: 1667.1141, x: 572.0285, y: 104.723 }, 0).wait(1).to({ scaleX: 1.5933, scaleY: 1.593, rotation: 1673.1544, x: 571.965, y: 104.6995 }, 0).wait(1).to({ scaleX: 1.5937, scaleY: 1.5933, rotation: 1679.1946, x: 571.9044, y: 104.6695 }, 0).wait(1).to({ scaleX: 1.5941, scaleY: 1.5937, rotation: 1685.2349, x: 571.8472, y: 104.6333 }, 0).wait(1).to({ scaleX: 1.5944, scaleY: 1.594, rotation: 1691.2752, x: 571.7941, y: 104.5913 }, 0).wait(1).to({ scaleX: 1.5948, scaleY: 1.5944, rotation: 1697.3154, x: 571.7457, y: 104.5439 }, 0).wait(1).to({ scaleX: 1.5952, scaleY: 1.5948, rotation: 1703.3557, x: 571.7026, y: 104.4916 }, 0).wait(1).to({ scaleX: 1.5955, scaleY: 1.5951, rotation: 1709.396, x: 571.6652, y: 104.4351 }, 0).wait(1).to({ scaleX: 1.5958, scaleY: 1.5954, rotation: 1715.4362, x: 571.634, y: 104.375 }, 0).wait(1).to({ scaleX: 1.5962, scaleY: 1.5958, rotation: 1721.4765, x: 571.6092, y: 104.3119 }, 0).wait(1).to({ scaleX: 1.5966, scaleY: 1.5962, rotation: 1727.5168, x: 571.5912, y: 104.2465 }, 0).wait(1).to({ scaleX: 1.5969, scaleY: 1.5965, rotation: 1733.557, x: 571.5802, y: 104.1796 }, 0).wait(1).to({ scaleX: 1.5973, scaleY: 1.5969, rotation: 1739.5973, x: 571.5763, y: 104.1119 }, 0).wait(1).to({ scaleX: 1.5976, scaleY: 1.5972, rotation: 1745.6376, x: 571.5796, y: 104.0441 }, 0).wait(1).to({ scaleX: 1.598, scaleY: 1.5976, rotation: 1751.6779, x: 571.59, y: 103.9771 }, 0).wait(1).to({ scaleX: 1.5983, scaleY: 1.5979, rotation: 1757.7181, x: 571.6073, y: 103.9115 }, 0).wait(1).to({ scaleX: 1.5987, scaleY: 1.5983, rotation: 1763.7584, x: 571.6315, y: 103.848 }, 0).wait(1).to({ scaleX: 1.599, scaleY: 1.5986, rotation: 1769.7987, x: 571.6622, y: 103.7875 }, 0).wait(1).to({ scaleX: 1.5994, scaleY: 1.599, rotation: 1775.8389, x: 571.6992, y: 103.7305 }, 0).wait(1).to({ scaleX: 1.5997, scaleY: 1.5993, rotation: 1781.8792, x: 571.7419, y: 103.6777 }, 0).wait(1).to({ scaleX: 1.6001, scaleY: 1.5997, rotation: 1787.9195, x: 571.79, y: 103.6297 }, 0).wait(1).to({ scaleX: 1.6005, scaleY: 1.6001, rotation: 1793.9597, x: 571.8429, y: 103.587 }, 0).wait(1).to({ scaleX: 1.6008, scaleY: 1.6004, rotation: 1800, x: 571.8999, y: 103.55 }, 0).wait(1).to({ scaleX: 1.5999, scaleY: 1.5999, x: 572, y: 104.15 }, 0).wait(151));

		// backWheel
		this.instance_3 = new lib.wheel("synched", 0);
		this.instance_3.setTransform(372.15, 103.95, 1.6741, 1.6735);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({ scaleX: 1.673, scaleY: 1.6724, rotation: 6.0426, x: 372.1341, y: 103.9515 }, 0).wait(1).to({ scaleX: 1.6719, scaleY: 1.6713, rotation: 12.0852, x: 372.1174, y: 103.9528 }, 0).wait(1).to({ scaleX: 1.6707, scaleY: 1.6702, rotation: 18.1278, x: 372.0997, y: 103.954 }, 0).wait(1).to({ scaleX: 1.6695, scaleY: 1.6691, rotation: 24.1704, x: 372.0811, y: 103.9548 }, 0).wait(1).to({ scaleX: 1.6684, scaleY: 1.668, rotation: 30.213, x: 372.0617, y: 103.9553 }, 0).wait(1).to({ scaleX: 1.6672, scaleY: 1.6669, rotation: 36.2556, x: 372.0415 }, 0).wait(1).to({ scaleX: 1.6661, scaleY: 1.6659, rotation: 42.2982, x: 372.0206, y: 103.9547 }, 0).wait(1).to({ scaleX: 1.6649, scaleY: 1.6647, rotation: 48.3408, x: 371.999, y: 103.9535 }, 0).wait(1).to({ scaleX: 1.6638, scaleY: 1.6637, rotation: 54.3834, x: 371.9768, y: 103.9516 }, 0).wait(1).to({ scaleX: 1.6626, scaleY: 1.6626, rotation: 60.426, x: 371.954, y: 103.9489 }, 0).wait(1).to({ scaleX: 1.6614, scaleY: 1.6615, rotation: 66.4686, x: 371.9308, y: 103.9455 }, 0).wait(1).to({ scaleX: 1.6603, scaleY: 1.6604, rotation: 72.5112, x: 371.9073, y: 103.9412 }, 0).wait(1).to({ scaleX: 1.6591, scaleY: 1.6593, rotation: 78.5538, x: 371.8835, y: 103.936 }, 0).wait(1).to({ scaleX: 1.658, scaleY: 1.6582, rotation: 84.5964, x: 371.8595, y: 103.9299 }, 0).wait(1).to({ scaleX: 1.6569, scaleY: 1.6572, rotation: 90.639, x: 371.8354, y: 103.9228 }, 0).wait(1).to({ scaleX: 1.6557, scaleY: 1.6561, rotation: 96.6816, x: 371.8114, y: 103.9149 }, 0).wait(1).to({ scaleX: 1.6546, scaleY: 1.655, rotation: 102.7242, x: 371.7875, y: 103.906 }, 0).wait(1).to({ scaleX: 1.6534, scaleY: 1.6539, rotation: 108.7668, x: 371.7638, y: 103.8963 }, 0).wait(1).to({ scaleX: 1.6522, scaleY: 1.6528, rotation: 114.8094, x: 371.7404, y: 103.8857 }, 0).wait(1).to({ scaleX: 1.6511, scaleY: 1.6517, rotation: 0, skewX: 120.852, skewY: 120.8012, x: 371.7174, y: 103.8742 }, 0).wait(1).to({ scaleX: 1.6499, scaleY: 1.6506, skewX: 126.8946, skewY: 126.8412, x: 371.6948, y: 103.862 }, 0).wait(1).to({ scaleX: 1.6487, scaleY: 1.6495, skewX: 132.9372, skewY: 132.8813, x: 371.6729, y: 103.8491 }, 0).wait(1).to({ scaleX: 1.6476, scaleY: 1.6484, skewX: 138.9798, skewY: 138.9214, x: 371.6515, y: 103.8355 }, 0).wait(1).to({ scaleX: 1.6464, scaleY: 1.6473, skewX: 145.0224, skewY: 144.9614, x: 371.6309, y: 103.8213 }, 0).wait(1).to({ scaleX: 1.6453, scaleY: 1.6463, skewX: 151.065, skewY: 151.0015, x: 371.611, y: 103.8065 }, 0).wait(1).to({ scaleX: 1.6441, scaleY: 1.6452, skewX: 157.1076, skewY: 157.0415, x: 371.5919, y: 103.7914 }, 0).wait(1).to({ scaleX: 1.643, scaleY: 1.6441, skewX: 163.1502, skewY: 163.0816, x: 371.5737, y: 103.7759 }, 0).wait(1).to({ scaleX: 1.6418, scaleY: 1.643, skewX: 169.1928, skewY: 169.1216, x: 371.5563, y: 103.7602 }, 0).wait(1).to({ scaleX: 1.6407, scaleY: 1.6419, skewX: 175.2354, skewY: 175.1617, x: 371.5399, y: 103.7443 }, 0).wait(1).to({ scaleX: 1.6395, scaleY: 1.6409, skewX: 181.278, skewY: 181.2018, x: 371.5243, y: 103.7283 }, 0).wait(1).to({ scaleX: 1.6384, scaleY: 1.6397, skewX: 187.3206, skewY: 187.2418, x: 371.5097, y: 103.7123 }, 0).wait(1).to({ scaleX: 1.6372, scaleY: 1.6386, skewX: 193.3632, skewY: 193.2819, x: 371.496, y: 103.6965 }, 0).wait(1).to({ scaleX: 1.6361, scaleY: 1.6376, skewX: 199.4058, skewY: 199.3219, x: 371.4831, y: 103.6809 }, 0).wait(1).to({ scaleX: 1.6349, scaleY: 1.6365, skewX: 205.4484, skewY: 205.362, x: 371.4711, y: 103.6657 }, 0).wait(1).to({ scaleX: 1.6337, scaleY: 1.6354, skewX: 211.491, skewY: 211.4021, x: 371.4599, y: 103.6508 }, 0).wait(1).to({ scaleX: 1.6326, scaleY: 1.6343, skewX: 217.5336, skewY: 217.4421, x: 371.4495, y: 103.6364 }, 0).wait(1).to({ scaleX: 1.6314, scaleY: 1.6332, skewX: 223.5762, skewY: 223.4822, x: 371.4398, y: 103.6225 }, 0).wait(1).to({ scaleX: 1.6303, scaleY: 1.6321, skewX: 229.6188, skewY: 229.5222, x: 371.4307, y: 103.6093 }, 0).wait(1).to({ scaleX: 1.6291, scaleY: 1.631, skewX: 235.6614, skewY: 235.5623, x: 371.4222, y: 103.5968 }, 0).wait(1).to({ scaleX: 1.628, scaleY: 1.6299, skewX: 241.704, skewY: 241.6023, x: 371.4142, y: 103.5851 }, 0).wait(1).to({ scaleX: 1.6268, scaleY: 1.6288, skewX: 247.7466, skewY: 247.6424, x: 371.4067, y: 103.5741 }, 0).wait(1).to({ scaleX: 1.6257, scaleY: 1.6278, skewX: 253.7892, skewY: 253.6825, x: 371.3995, y: 103.564 }, 0).wait(1).to({ scaleX: 1.6245, scaleY: 1.6267, skewX: 259.8318, skewY: 259.7225, x: 371.3925, y: 103.5547 }, 0).wait(1).to({ scaleX: 1.6234, scaleY: 1.6256, skewX: 265.8744, skewY: 265.7626, x: 371.3856, y: 103.5464 }, 0).wait(1).to({ scaleX: 1.6222, scaleY: 1.6245, skewX: 271.917, skewY: 271.8026, x: 371.3788, y: 103.5389 }, 0).wait(1).to({ scaleX: 1.621, scaleY: 1.6234, skewX: 277.9596, skewY: 277.8427, x: 371.372, y: 103.5324 }, 0).wait(1).to({ scaleX: 1.6199, scaleY: 1.6223, skewX: 284.0022, skewY: 283.8828, x: 371.3651, y: 103.5267 }, 0).wait(1).to({ scaleX: 1.6187, scaleY: 1.6212, skewX: 290.0448, skewY: 289.9228, x: 371.3579, y: 103.5219 }, 0).wait(1).to({ scaleX: 1.6176, scaleY: 1.6201, skewX: 296.0874, skewY: 295.9629, x: 371.3504, y: 103.518 }, 0).wait(1).to({ scaleX: 1.6164, scaleY: 1.619, skewX: 302.13, skewY: 302.0029, x: 371.3425, y: 103.5148 }, 0).wait(1).to({ scaleX: 1.6153, scaleY: 1.6179, skewX: 308.1726, skewY: 308.043, x: 371.3341, y: 103.5124 }, 0).wait(1).to({ scaleX: 1.6141, scaleY: 1.6168, skewX: 314.2152, skewY: 314.0831, x: 371.3251, y: 103.5107 }, 0).wait(1).to({ scaleX: 1.6129, scaleY: 1.6158, skewX: 320.2578, skewY: 320.1231, x: 371.3155, y: 103.5096 }, 0).wait(1).to({ scaleX: 1.6118, scaleY: 1.6147, skewX: 326.3004, skewY: 326.1632, x: 371.3052, y: 103.5091 }, 0).wait(1).to({ scaleX: 1.6106, scaleY: 1.6136, skewX: 332.343, skewY: 332.2032, x: 371.2942 }, 0).wait(1).to({ scaleX: 1.6095, scaleY: 1.6125, skewX: 338.3856, skewY: 338.2433, x: 371.2824, y: 103.5095 }, 0).wait(1).to({ scaleX: 1.6083, scaleY: 1.6114, skewX: 344.4282, skewY: 344.2833, x: 371.2697, y: 103.5102 }, 0).wait(1).to({ scaleX: 1.6072, scaleY: 1.6103, skewX: 350.4708, skewY: 350.3234, x: 371.2562, y: 103.5112 }, 0).wait(1).to({ scaleX: 1.606, scaleY: 1.6092, skewX: 356.5134, skewY: 356.3635, x: 371.2418, y: 103.5122 }, 0).wait(1).to({ scaleX: 1.6049, scaleY: 1.6082, skewX: 362.556, skewY: 362.4035, x: 371.2265, y: 103.5134 }, 0).wait(1).to({ scaleX: 1.6038, scaleY: 1.6071, skewX: 368.5986, skewY: 368.4436, x: 371.2103, y: 103.5144 }, 0).wait(1).to({ scaleX: 1.6026, scaleY: 1.606, skewX: 374.6412, skewY: 374.4836, x: 371.1932, y: 103.5154 }, 0).wait(1).to({ scaleX: 1.6014, scaleY: 1.6049, skewX: 380.6838, skewY: 380.5237, x: 371.1753, y: 103.5161 }, 0).wait(1).to({ scaleX: 1.6002, scaleY: 1.6038, skewX: 386.7264, skewY: 386.5638, x: 371.1565, y: 103.5164 }, 0).wait(1).to({ scaleX: 1.5991, scaleY: 1.6027, skewX: 392.769, skewY: 392.6038, x: 371.137 }, 0).wait(1).to({ scaleX: 1.5979, scaleY: 1.6016, skewX: 398.8116, skewY: 398.6439, x: 371.1167, y: 103.5159 }, 0).wait(1).to({ scaleX: 1.5968, scaleY: 1.6005, skewX: 404.8542, skewY: 404.6839, x: 371.0957, y: 103.5148 }, 0).wait(1).to({ scaleX: 1.5956, scaleY: 1.5994, skewX: 410.8968, skewY: 410.724, x: 371.0741, y: 103.5131 }, 0).wait(1).to({ scaleX: 1.5945, scaleY: 1.5983, skewX: 416.9394, skewY: 416.7641, x: 371.052, y: 103.5107 }, 0).wait(1).to({ scaleX: 1.5933, scaleY: 1.5973, skewX: 422.982, skewY: 422.8041, x: 371.0294, y: 103.5075 }, 0).wait(1).to({ scaleX: 1.5922, scaleY: 1.5962, skewX: 429.0246, skewY: 428.8442, x: 371.0064, y: 103.5036 }, 0).wait(1).to({ scaleX: 1.591, scaleY: 1.5951, skewX: 435.0672, skewY: 434.8842, x: 370.983, y: 103.4988 }, 0).wait(1).to({ scaleX: 1.5899, scaleY: 1.594, skewX: 441.1098, skewY: 440.9243, x: 370.9595, y: 103.4932 }, 0).wait(1).to({ scaleX: 1.5887, scaleY: 1.5929, skewX: 447.1524, skewY: 446.9643, x: 370.9358, y: 103.4867 }, 0).wait(1).to({ scaleX: 1.5876, scaleY: 1.5918, skewX: 453.195, skewY: 453.0044, x: 370.9121, y: 103.4793 }, 0).wait(1).to({ scaleX: 1.5879, scaleY: 1.5922, skewX: 459.2352, skewY: 459.0447, x: 370.9038, y: 103.4784 }, 0).wait(1).to({ scaleX: 1.5883, scaleY: 1.5926, skewX: 465.2754, skewY: 465.0851, x: 370.8956, y: 103.4767 }, 0).wait(1).to({ scaleX: 1.5886, scaleY: 1.5929, skewX: 471.3157, skewY: 471.1254, x: 370.8877, y: 103.4741 }, 0).wait(1).to({ scaleX: 1.589, scaleY: 1.5933, skewX: 477.3559, skewY: 477.1657, x: 370.88, y: 103.4707 }, 0).wait(1).to({ scaleX: 1.5893, scaleY: 1.5936, skewX: 483.3961, skewY: 483.206, x: 370.8728, y: 103.4665 }, 0).wait(1).to({ scaleX: 1.5897, scaleY: 1.594, skewX: 489.4363, skewY: 489.2464, x: 370.866, y: 103.4616 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.5944, skewX: 495.4766, skewY: 495.2867, x: 370.8598, y: 103.4559 }, 0).wait(1).to({ scaleX: 1.5904, scaleY: 1.5947, skewX: 501.5168, skewY: 501.327, x: 370.8542, y: 103.4497 }, 0).wait(1).to({ scaleX: 1.5908, scaleY: 1.5951, skewX: 507.557, skewY: 507.3673, x: 370.8493, y: 103.4429 }, 0).wait(1).to({ scaleX: 1.5911, scaleY: 1.5955, skewX: 513.5972, skewY: 513.4077, x: 370.8452, y: 103.4356 }, 0).wait(1).to({ scaleX: 1.5915, scaleY: 1.5959, skewX: 519.6375, skewY: 519.448, x: 370.8418, y: 103.4279 }, 0).wait(1).to({ scaleX: 1.5919, scaleY: 1.5962, skewX: 525.6777, skewY: 525.4883, x: 370.8392, y: 103.4199 }, 0).wait(1).to({ scaleX: 1.5922, scaleY: 1.5966, skewX: 531.7179, skewY: 531.5287, x: 370.8376, y: 103.4117 }, 0).wait(1).to({ scaleX: 1.5926, scaleY: 1.597, skewX: 537.7581, skewY: 537.569, x: 370.8367, y: 103.4034 }, 0).wait(1).to({ scaleX: 1.5929, scaleY: 1.5973, skewX: 543.7984, skewY: 543.6093, x: 370.8368, y: 103.395 }, 0).wait(1).to({ scaleX: 1.5933, scaleY: 1.5977, skewX: 549.8386, skewY: 549.6496, x: 370.8378, y: 103.3866 }, 0).wait(1).to({ scaleX: 1.5936, scaleY: 1.5981, skewX: 555.8788, skewY: 555.69, x: 370.8396, y: 103.3785 }, 0).wait(1).to({ scaleX: 1.594, scaleY: 1.5984, skewX: 561.919, skewY: 561.7303, x: 370.8423, y: 103.3705 }, 0).wait(1).to({ scaleX: 1.5944, scaleY: 1.5988, skewX: 567.9593, skewY: 567.7706, x: 370.8458, y: 103.3629 }, 0).wait(1).to({ scaleX: 1.5947, scaleY: 1.5992, skewX: 573.9995, skewY: 573.8109, x: 370.85, y: 103.3556 }, 0).wait(1).to({ scaleX: 1.5951, scaleY: 1.5995, skewX: 580.0397, skewY: 579.8513, x: 370.8551, y: 103.3489 }, 0).wait(1).to({ scaleX: 1.5954, scaleY: 1.5999, skewX: 586.0799, skewY: 585.8916, x: 370.8608, y: 103.3427 }, 0).wait(1).to({ scaleX: 1.5958, scaleY: 1.6002, skewX: 592.1202, skewY: 591.9319, x: 370.8671, y: 103.3372 }, 0).wait(1).to({ scaleX: 1.5961, scaleY: 1.6006, skewX: 598.1604, skewY: 597.9723, x: 370.874, y: 103.3323 }, 0).wait(1).to({ scaleX: 1.5965, scaleY: 1.601, skewX: 604.2006, skewY: 604.0126, x: 370.8813, y: 103.3282 }, 0).wait(1).to({ scaleX: 1.5969, scaleY: 1.6013, skewX: 610.2408, skewY: 610.0529, x: 370.8891, y: 103.3249 }, 0).wait(1).to({ scaleX: 1.5972, scaleY: 1.6018, skewX: 616.2811, skewY: 616.0932, x: 370.8971, y: 103.3225 }, 0).wait(1).to({ scaleX: 1.5976, scaleY: 1.6021, skewX: 622.3213, skewY: 622.1336, x: 370.9054, y: 103.3209 }, 0).wait(1).to({ scaleX: 1.5979, scaleY: 1.6025, skewX: 628.3615, skewY: 628.1739, x: 370.9137, y: 103.3201 }, 0).wait(1).to({ scaleX: 1.5983, scaleY: 1.6028, skewX: 634.4017, skewY: 634.2142, x: 370.9222, y: 103.3203 }, 0).wait(1).to({ scaleX: 1.5987, scaleY: 1.6032, skewX: 640.442, skewY: 640.2545, x: 370.9305, y: 103.3213 }, 0).wait(1).to({ scaleX: 1.599, scaleY: 1.6036, skewX: 646.4822, skewY: 646.2949, x: 370.9387, y: 103.3233 }, 0).wait(1).to({ scaleX: 1.5994, scaleY: 1.604, skewX: 652.5224, skewY: 652.3352, x: 370.9467, y: 103.326 }, 0).wait(1).to({ scaleX: 1.5997, scaleY: 1.6043, skewX: 658.5626, skewY: 658.3755, x: 370.9543, y: 103.3296 }, 0).wait(1).to({ scaleX: 1.6001, scaleY: 1.6047, skewX: 664.6029, skewY: 664.4159, x: 370.9615, y: 103.334 }, 0).wait(1).to({ scaleX: 1.6004, scaleY: 1.605, skewX: 670.6431, skewY: 670.4562, x: 370.9682, y: 103.3391 }, 0).wait(1).to({ scaleX: 1.6008, scaleY: 1.6054, skewX: 676.6833, skewY: 676.4965, x: 370.9743, y: 103.3449 }, 0).wait(1).to({ scaleX: 1.6012, scaleY: 1.6058, skewX: 682.7235, skewY: 682.5368, x: 370.9798, y: 103.3513 }, 0).wait(1).to({ scaleX: 1.6015, scaleY: 1.6061, skewX: 688.7638, skewY: 688.5772, x: 370.9846, y: 103.3583 }, 0).wait(1).to({ scaleX: 1.6019, scaleY: 1.6065, skewX: 694.804, skewY: 694.6175, x: 370.9887, y: 103.3657 }, 0).wait(1).to({ scaleX: 1.6023, scaleY: 1.6069, skewX: 700.8442, skewY: 700.6578, x: 370.9919, y: 103.3735 }, 0).wait(1).to({ scaleX: 1.6026, scaleY: 1.6072, skewX: 706.8844, skewY: 706.6981, x: 370.9943, y: 103.3816 }, 0).wait(1).to({ scaleX: 1.603, scaleY: 1.6076, skewX: 712.9247, skewY: 712.7385, x: 370.9958, y: 103.3899 }, 0).wait(1).to({ scaleX: 1.6033, scaleY: 1.608, skewX: 718.9649, skewY: 718.7788, x: 370.9964, y: 103.3983 }, 0).wait(1).to({ scaleX: 1.6037, scaleY: 1.6084, skewX: 725.0051, skewY: 724.8191, x: 370.9962, y: 103.4067 }, 0).wait(1).to({ scaleX: 1.6041, scaleY: 1.6087, skewX: 731.0454, skewY: 730.8595, x: 370.9951, y: 103.4151 }, 0).wait(1).to({ scaleX: 1.6044, scaleY: 1.6091, skewX: 737.0856, skewY: 736.8998, x: 370.993, y: 103.4233 }, 0).wait(1).to({ scaleX: 1.6047, scaleY: 1.6095, skewX: 743.1258, skewY: 742.9401, x: 370.9902, y: 103.4313 }, 0).wait(1).to({ scaleX: 1.6051, scaleY: 1.6098, skewX: 749.166, skewY: 748.9804, x: 370.9865, y: 103.4389 }, 0).wait(1).to({ scaleX: 1.6055, scaleY: 1.6102, skewX: 755.2063, skewY: 755.0208, x: 370.982, y: 103.4461 }, 0).wait(1).to({ scaleX: 1.6058, scaleY: 1.6105, skewX: 761.2465, skewY: 761.0611, x: 370.9768, y: 103.4527 }, 0).wait(1).to({ scaleX: 1.6062, scaleY: 1.6109, skewX: 767.2867, skewY: 767.1014, x: 370.971, y: 103.4588 }, 0).wait(1).to({ scaleX: 1.6065, scaleY: 1.6113, skewX: 773.3269, skewY: 773.1417, x: 370.9645, y: 103.4643 }, 0).wait(1).to({ scaleX: 1.6069, scaleY: 1.6116, skewX: 779.3672, skewY: 779.1821, x: 370.9575, y: 103.469 }, 0).wait(1).to({ scaleX: 1.6073, scaleY: 1.612, skewX: 785.4074, skewY: 785.2224, x: 370.95, y: 103.473 }, 0).wait(1).to({ scaleX: 1.6077, scaleY: 1.6124, skewX: 791.4476, skewY: 791.2627, x: 370.9421, y: 103.4761 }, 0).wait(1).to({ scaleX: 1.608, scaleY: 1.6128, skewX: 797.4878, skewY: 797.3031, x: 370.934, y: 103.4784 }, 0).wait(1).to({ scaleX: 1.6084, scaleY: 1.6131, skewX: 803.5281, skewY: 803.3434, x: 370.9256, y: 103.4799 }, 0).wait(1).to({ scaleX: 1.6087, scaleY: 1.6135, skewX: 809.5683, skewY: 809.3837, x: 370.9172, y: 103.4804 }, 0).wait(1).to({ scaleX: 1.6091, scaleY: 1.6139, skewX: 815.6085, skewY: 815.424, x: 370.9087, y: 103.4801 }, 0).wait(1).to({ scaleX: 1.6094, scaleY: 1.6143, skewX: 821.6487, skewY: 821.4644, x: 370.9003, y: 103.4789 }, 0).wait(1).to({ scaleX: 1.6098, scaleY: 1.6146, skewX: 827.689, skewY: 827.5047, x: 370.8921, y: 103.4768 }, 0).wait(1).to({ scaleX: 1.6101, scaleY: 1.615, skewX: 833.7292, skewY: 833.545, x: 370.8841, y: 103.4738 }, 0).wait(1).to({ scaleX: 1.6105, scaleY: 1.6153, skewX: 839.7694, skewY: 839.5853, x: 370.8765, y: 103.47 }, 0).wait(1).to({ scaleX: 1.6108, scaleY: 1.6157, skewX: 845.8096, skewY: 845.6257, x: 370.8694, y: 103.4655 }, 0).wait(1).to({ scaleX: 1.6112, scaleY: 1.6161, skewX: 851.8499, skewY: 851.666, x: 370.8627, y: 103.4602 }, 0).wait(1).to({ scaleX: 1.6116, scaleY: 1.6164, skewX: 857.8901, skewY: 857.7063, x: 370.8567, y: 103.4542 }, 0).wait(1).to({ scaleX: 1.6119, scaleY: 1.6168, skewX: 863.9303, skewY: 863.7467, x: 370.8513, y: 103.4477 }, 0).wait(1).to({ scaleX: 1.6123, scaleY: 1.6172, skewX: 869.9705, skewY: 869.787, x: 370.8466, y: 103.4406 }, 0).wait(1).to({ scaleX: 1.6126, scaleY: 1.6176, skewX: 876.0108, skewY: 875.8273, x: 370.8427, y: 103.433 }, 0).wait(1).to({ scaleX: 1.613, scaleY: 1.6179, skewX: 882.051, skewY: 881.8676, x: 370.8396, y: 103.4251 }, 0).wait(1).to({ scaleX: 1.6134, scaleY: 1.6183, skewX: 888.0912, skewY: 887.908, x: 370.8374, y: 103.4169 }, 0).wait(1).to({ scaleX: 1.6137, scaleY: 1.6187, skewX: 894.1314, skewY: 893.9483, x: 370.8361, y: 103.4085 }, 0).wait(1).to({ scaleX: 1.6141, scaleY: 1.619, skewX: 900.1717, skewY: 899.9886, x: 370.8356, y: 103.4 }, 0).wait(1).to({ scaleX: 1.6144, scaleY: 1.6194, skewX: 906.2119, skewY: 906.0289, x: 370.836, y: 103.3915 }, 0).wait(1).to({ scaleX: 1.6148, scaleY: 1.6198, skewX: 912.2521, skewY: 912.0693, x: 370.8373, y: 103.3831 }, 0).wait(1).to({ scaleX: 1.6151, scaleY: 1.6201, skewX: 918.2923, skewY: 918.1096, x: 370.8395, y: 103.3749 }, 0).wait(1).to({ scaleX: 1.6155, scaleY: 1.6205, skewX: 924.3326, skewY: 924.1499, x: 370.8426, y: 103.367 }, 0).wait(1).to({ scaleX: 1.6159, scaleY: 1.6209, skewX: 930.3728, skewY: 930.1903, x: 370.8465, y: 103.3594 }, 0).wait(1).to({ scaleX: 1.6162, scaleY: 1.6212, skewX: 936.413, skewY: 936.2306, x: 370.8511, y: 103.3522 }, 0).wait(1).to({ scaleX: 1.6166, scaleY: 1.6216, skewX: 942.4532, skewY: 942.2709, x: 370.8565, y: 103.3456 }, 0).wait(1).to({ scaleX: 1.6169, scaleY: 1.622, skewX: 948.4935, skewY: 948.3112, x: 370.8625, y: 103.3396 }, 0).wait(1).to({ scaleX: 1.6173, scaleY: 1.6223, skewX: 954.5337, skewY: 954.3516, x: 370.8692, y: 103.3343 }, 0).wait(1).to({ scaleX: 1.6177, scaleY: 1.6227, skewX: 960.5739, skewY: 960.3919, x: 370.8763, y: 103.3297 }, 0).wait(1).to({ scaleX: 1.618, scaleY: 1.6231, skewX: 966.6141, skewY: 966.4322, x: 370.8839, y: 103.3258 }, 0).wait(1).to({ scaleX: 1.6184, scaleY: 1.6234, skewX: 972.6544, skewY: 972.4725, x: 370.8919, y: 103.3228 }, 0).wait(1).to({ scaleX: 1.6187, scaleY: 1.6238, skewX: 978.6946, skewY: 978.5129, x: 370.9002, y: 103.3207 }, 0).wait(1).to({ scaleX: 1.6191, scaleY: 1.6242, skewX: 984.7348, skewY: 984.5532, x: 370.9086, y: 103.3194 }, 0).wait(1).to({ scaleX: 1.6195, scaleY: 1.6245, skewX: 990.775, skewY: 990.5935, x: 370.9171, y: 103.319 }, 0).wait(1).to({ scaleX: 1.6198, scaleY: 1.6249, skewX: 996.8153, skewY: 996.6339, x: 370.9256, y: 103.3196 }, 0).wait(1).to({ scaleX: 1.6202, scaleY: 1.6253, skewX: 1002.8555, skewY: 1002.6742, x: 370.9341, y: 103.321 }, 0).wait(1).to({ scaleX: 1.6205, scaleY: 1.6256, skewX: 1008.8957, skewY: 1008.7145, x: 370.9423, y: 103.3233 }, 0).wait(1).to({ scaleX: 1.6209, scaleY: 1.626, skewX: 1014.9359, skewY: 1014.7548, x: 370.9502, y: 103.3264 }, 0).wait(1).to({ scaleX: 1.6212, scaleY: 1.6264, skewX: 1020.9762, skewY: 1020.7952, x: 370.9578, y: 103.3304 }, 0).wait(1).to({ scaleX: 1.6216, scaleY: 1.6267, skewX: 1027.0164, skewY: 1026.8355, x: 370.9649, y: 103.3351 }, 0).wait(1).to({ scaleX: 1.622, scaleY: 1.6271, skewX: 1033.0566, skewY: 1032.8758, x: 370.9715, y: 103.3406 }, 0).wait(1).to({ scaleX: 1.6223, scaleY: 1.6275, skewX: 1039.0968, skewY: 1038.9161, x: 370.9774, y: 103.3467 }, 0).wait(1).to({ scaleX: 1.6227, scaleY: 1.6278, skewX: 1045.1371, skewY: 1044.9565, x: 370.9827, y: 103.3534 }, 0).wait(1).to({ scaleX: 1.6231, scaleY: 1.6282, skewX: 1051.1773, skewY: 1050.9968, x: 370.9873, y: 103.3607 }, 0).wait(1).to({ scaleX: 1.6234, scaleY: 1.6286, skewX: 1057.2175, skewY: 1057.0371, x: 370.991, y: 103.3683 }, 0).wait(1).to({ scaleX: 1.6238, scaleY: 1.629, skewX: 1063.2577, skewY: 1063.0775, x: 370.994, y: 103.3764 }, 0).wait(1).to({ scaleX: 1.6241, scaleY: 1.6293, skewX: 1069.298, skewY: 1069.1178, x: 370.996, y: 103.3847 }, 0).wait(1).to({ scaleX: 1.6245, scaleY: 1.6297, skewX: 1075.3382, skewY: 1075.1581, x: 370.9972, y: 103.3931 }, 0).wait(1).to({ scaleX: 1.6249, scaleY: 1.6301, skewX: 1081.3784, skewY: 1081.1984, x: 370.9975, y: 103.4017 }, 0).wait(1).to({ scaleX: 1.6252, scaleY: 1.6304, skewX: 1087.4186, skewY: 1087.2388, x: 370.9969, y: 103.4102 }, 0).wait(1).to({ scaleX: 1.6255, scaleY: 1.6308, skewX: 1093.4589, skewY: 1093.2791, x: 370.9954, y: 103.4187 }, 0).wait(1).to({ scaleX: 1.6259, scaleY: 1.6312, skewX: 1099.4991, skewY: 1099.3194, x: 370.993, y: 103.4269 }, 0).wait(1).to({ scaleX: 1.6263, scaleY: 1.6315, skewX: 1105.5393, skewY: 1105.3597, x: 370.9898, y: 103.4348 }, 0).wait(1).to({ scaleX: 1.6266, scaleY: 1.6319, skewX: 1111.5795, skewY: 1111.4001, x: 370.9857, y: 103.4424 }, 0).wait(1).to({ scaleX: 1.627, scaleY: 1.6322, skewX: 1117.6198, skewY: 1117.4404, x: 370.9809, y: 103.4495 }, 0).wait(1).to({ scaleX: 1.6273, scaleY: 1.6326, skewX: 1123.66, skewY: 1123.4807, x: 370.9753, y: 103.456 }, 0).wait(1).to({ scaleX: 1.6277, scaleY: 1.633, skewX: 1129.7002, skewY: 1129.5211, x: 370.9691, y: 103.4619 }, 0).wait(1).to({ scaleX: 1.6281, scaleY: 1.6334, skewX: 1135.7404, skewY: 1135.5614, x: 370.9623, y: 103.4671 }, 0).wait(1).to({ scaleX: 1.6284, scaleY: 1.6337, skewX: 1141.7807, skewY: 1141.6017, x: 370.955, y: 103.4716 }, 0).wait(1).to({ scaleX: 1.6288, scaleY: 1.6341, skewX: 1147.8209, skewY: 1147.642, x: 370.9473, y: 103.4753 }, 0).wait(1).to({ scaleX: 1.6291, scaleY: 1.6345, skewX: 1153.8611, skewY: 1153.6824, x: 370.9392, y: 103.4782 }, 0).wait(1).to({ scaleX: 1.6295, scaleY: 1.6349, skewX: 1159.9014, skewY: 1159.7227, x: 370.9308, y: 103.4802 }, 0).wait(1).to({ scaleX: 1.6299, scaleY: 1.6352, skewX: 1165.9416, skewY: 1165.763, x: 370.9223, y: 103.4813 }, 0).wait(1).to({ scaleX: 1.6302, scaleY: 1.6356, skewX: 1171.9818, skewY: 1171.8033, x: 370.9137, y: 103.4815 }, 0).wait(1).to({ scaleX: 1.6306, scaleY: 1.6359, skewX: 1178.022, skewY: 1177.8437, x: 370.9052, y: 103.4808 }, 0).wait(1).to({ scaleX: 1.6309, scaleY: 1.6363, skewX: 1184.0623, skewY: 1183.884, x: 370.8967, y: 103.4792 }, 0).wait(1).to({ scaleX: 1.6313, scaleY: 1.6367, skewX: 1190.1025, skewY: 1189.9243, x: 370.8885, y: 103.4767 }, 0).wait(1).to({ scaleX: 1.6317, scaleY: 1.637, skewX: 1196.1427, skewY: 1195.9647, x: 370.8806, y: 103.4733 }, 0).wait(1).to({ scaleX: 1.632, scaleY: 1.6374, skewX: 1202.1829, skewY: 1202.005, x: 370.873, y: 103.4692 }, 0).wait(1).to({ scaleX: 1.6323, scaleY: 1.6378, skewX: 1208.2232, skewY: 1208.0453, x: 370.866, y: 103.4643 }, 0).wait(1).to({ scaleX: 1.6327, scaleY: 1.6381, skewX: 1214.2634, skewY: 1214.0856, x: 370.8595, y: 103.4586 }, 0).wait(1).to({ scaleX: 1.6331, scaleY: 1.6385, skewX: 1220.3036, skewY: 1220.126, x: 370.8536, y: 103.4523 }, 0).wait(1).to({ scaleX: 1.6334, scaleY: 1.6389, skewX: 1226.3438, skewY: 1226.1663, x: 370.8485, y: 103.4455 }, 0).wait(1).to({ scaleX: 1.6338, scaleY: 1.6393, skewX: 1232.3841, skewY: 1232.2066, x: 370.844, y: 103.4381 }, 0).wait(1).to({ scaleX: 1.6342, scaleY: 1.6396, skewX: 1238.4243, skewY: 1238.2469, x: 370.8404, y: 103.4303 }, 0).wait(1).to({ scaleX: 1.6345, scaleY: 1.64, skewX: 1244.4645, skewY: 1244.2873, x: 370.8376, y: 103.4221 }, 0).wait(1).to({ scaleX: 1.6349, scaleY: 1.6404, skewX: 1250.5047, skewY: 1250.3276, x: 370.8357, y: 103.4137 }, 0).wait(1).to({ scaleX: 1.6352, scaleY: 1.6407, skewX: 1256.545, skewY: 1256.3679, x: 370.8347, y: 103.4052 }, 0).wait(1).to({ scaleX: 1.6356, scaleY: 1.6411, skewX: 1262.5852, skewY: 1262.4083, x: 370.8346, y: 103.3966 }, 0).wait(1).to({ scaleX: 1.636, scaleY: 1.6415, skewX: 1268.6254, skewY: 1268.4486, x: 370.8354, y: 103.388 }, 0).wait(1).to({ scaleX: 1.6363, scaleY: 1.6418, skewX: 1274.6656, skewY: 1274.4889, x: 370.8371, y: 103.3795 }, 0).wait(1).to({ scaleX: 1.6367, scaleY: 1.6422, skewX: 1280.7059, skewY: 1280.5292, x: 370.8397, y: 103.3713 }, 0).wait(1).to({ scaleX: 1.637, scaleY: 1.6426, skewX: 1286.7461, skewY: 1286.5696, x: 370.8431, y: 103.3634 }, 0).wait(1).to({ scaleX: 1.6374, scaleY: 1.6429, skewX: 1292.7863, skewY: 1292.6099, x: 370.8473, y: 103.3559 }, 0).wait(1).to({ scaleX: 1.6377, scaleY: 1.6433, skewX: 1298.8265, skewY: 1298.6502, x: 370.8523, y: 103.3489 }, 0).wait(1).to({ scaleX: 1.6381, scaleY: 1.6437, skewX: 1304.8668, skewY: 1304.6905, x: 370.8581, y: 103.3424 }, 0).wait(1).to({ scaleX: 1.6385, scaleY: 1.644, skewX: 1310.907, skewY: 1310.7309, x: 370.8644, y: 103.3366 }, 0).wait(1).to({ scaleX: 1.6388, scaleY: 1.6444, skewX: 1316.9472, skewY: 1316.7712, x: 370.8714, y: 103.3315 }, 0).wait(1).to({ scaleX: 1.6392, scaleY: 1.6448, skewX: 1322.9874, skewY: 1322.8115, x: 370.8788, y: 103.3271 }, 0).wait(1).to({ scaleX: 1.6395, scaleY: 1.6451, skewX: 1329.0277, skewY: 1328.8519, x: 370.8867, y: 103.3235 }, 0).wait(1).to({ scaleX: 1.6399, scaleY: 1.6455, skewX: 1335.0679, skewY: 1334.8922, x: 370.8949, y: 103.3208 }, 0).wait(1).to({ scaleX: 1.6403, scaleY: 1.6459, skewX: 1341.1081, skewY: 1340.9325, x: 370.9034, y: 103.319 }, 0).wait(1).to({ scaleX: 1.6406, scaleY: 1.6462, skewX: 1347.1483, skewY: 1346.9728, x: 370.912, y: 103.3181 }, 0).wait(1).to({ scaleX: 1.641, scaleY: 1.6466, skewX: 1353.1886, skewY: 1353.0132, x: 370.9206 }, 0).wait(1).to({ scaleX: 1.6413, scaleY: 1.647, skewX: 1359.2288, skewY: 1359.0535, x: 370.9292, y: 103.319 }, 0).wait(1).to({ scaleX: 1.6417, scaleY: 1.6474, skewX: 1365.269, skewY: 1365.0938, x: 370.9377, y: 103.3207 }, 0).wait(1).to({ scaleX: 1.6421, scaleY: 1.6477, skewX: 1371.3092, skewY: 1371.1341, x: 370.9459, y: 103.3234 }, 0).wait(1).to({ scaleX: 1.6424, scaleY: 1.6481, skewX: 1377.3495, skewY: 1377.1745, x: 370.9538, y: 103.3269 }, 0).wait(1).to({ scaleX: 1.6428, scaleY: 1.6484, skewX: 1383.3897, skewY: 1383.2148, x: 370.9613, y: 103.3313 }, 0).wait(1).to({ scaleX: 1.6431, scaleY: 1.6488, skewX: 1389.4299, skewY: 1389.2551, x: 370.9683, y: 103.3364 }, 0).wait(1).to({ scaleX: 1.6435, scaleY: 1.6492, skewX: 1395.4701, skewY: 1395.2955, x: 370.9747, y: 103.3422 }, 0).wait(1).to({ scaleX: 1.6438, scaleY: 1.6495, skewX: 1401.5104, skewY: 1401.3358, x: 370.9805, y: 103.3487 }, 0).wait(1).to({ scaleX: 1.6442, scaleY: 1.6499, skewX: 1407.5506, skewY: 1407.3761, x: 370.9855, y: 103.3557 }, 0).wait(1).to({ scaleX: 1.6445, scaleY: 1.6503, skewX: 1413.5908, skewY: 1413.4164, x: 370.9898, y: 103.3632 }, 0).wait(1).to({ scaleX: 1.6449, scaleY: 1.6507, skewX: 1419.631, skewY: 1419.4568, x: 370.9933, y: 103.3711 }, 0).wait(1).to({ scaleX: 1.6453, scaleY: 1.651, skewX: 1425.6713, skewY: 1425.4971, x: 370.9959, y: 103.3794 }, 0).wait(1).to({ scaleX: 1.6457, scaleY: 1.6514, skewX: 1431.7115, skewY: 1431.5374, x: 370.9977, y: 103.3879 }, 0).wait(1).to({ scaleX: 1.646, scaleY: 1.6518, skewX: 1437.7517, skewY: 1437.5777, x: 370.9985, y: 103.3965 }, 0).wait(1).to({ scaleX: 1.6463, scaleY: 1.6521, skewX: 1443.7919, skewY: 1443.6181, x: 370.9984, y: 103.4052 }, 0).wait(1).to({ scaleX: 1.6467, scaleY: 1.6525, skewX: 1449.8322, skewY: 1449.6584, x: 370.9975, y: 103.4138 }, 0).wait(1).to({ scaleX: 1.6471, scaleY: 1.6529, skewX: 1455.8724, skewY: 1455.6987, x: 370.9956, y: 103.4223 }, 0).wait(1).to({ scaleX: 1.6474, scaleY: 1.6532, skewX: 1461.9126, skewY: 1461.7391, x: 370.9928, y: 103.4305 }, 0).wait(1).to({ scaleX: 1.6478, scaleY: 1.6536, skewX: 1467.9528, skewY: 1467.7794, x: 370.9892, y: 103.4384 }, 0).wait(1).to({ scaleX: 1.6481, scaleY: 1.6539, skewX: 1473.9931, skewY: 1473.8197, x: 370.9848, y: 103.4459 }, 0).wait(1).to({ scaleX: 1.6485, scaleY: 1.6543, skewX: 1480.0333, skewY: 1479.86, x: 370.9796, y: 103.4528 }, 0).wait(1).to({ scaleX: 1.6489, scaleY: 1.6547, skewX: 1486.0735, skewY: 1485.9004, x: 370.9737, y: 103.4592 }, 0).wait(1).to({ scaleX: 1.6492, scaleY: 1.6551, skewX: 1492.1137, skewY: 1491.9407, x: 370.9671, y: 103.4649 }, 0).wait(1).to({ scaleX: 1.6496, scaleY: 1.6554, skewX: 1498.154, skewY: 1497.981, x: 370.96, y: 103.4699 }, 0).wait(1).to({ scaleX: 1.6499, scaleY: 1.6558, skewX: 1504.1942, skewY: 1504.0213, x: 370.9524, y: 103.4742 }, 0).wait(1).to({ scaleX: 1.6503, scaleY: 1.6561, skewX: 1510.2344, skewY: 1510.0617, x: 370.9444, y: 103.4776 }, 0).wait(1).to({ scaleX: 1.6507, scaleY: 1.6565, skewX: 1516.2746, skewY: 1516.102, x: 370.9361, y: 103.4801 }, 0).wait(1).to({ scaleX: 1.651, scaleY: 1.6569, skewX: 1522.3149, skewY: 1522.1423, x: 370.9276, y: 103.4818 }, 0).wait(1).to({ scaleX: 1.6514, scaleY: 1.6573, skewX: 1528.3551, skewY: 1528.1826, x: 370.9189, y: 103.4825 }, 0).wait(1).to({ scaleX: 1.6517, scaleY: 1.6576, skewX: 1534.3953, skewY: 1534.223, x: 370.9102, y: 103.4824 }, 0).wait(1).to({ scaleX: 1.6521, scaleY: 1.658, skewX: 1540.4355, skewY: 1540.2633, x: 370.9016, y: 103.4813 }, 0).wait(1).to({ scaleX: 1.6525, scaleY: 1.6584, skewX: 1546.4758, skewY: 1546.3036, x: 370.8931, y: 103.4793 }, 0).wait(1).to({ scaleX: 1.6528, scaleY: 1.6588, skewX: 1552.516, skewY: 1552.344, x: 370.8849, y: 103.4764 }, 0).wait(1).to({ scaleX: 1.6532, scaleY: 1.6591, skewX: 1558.5562, skewY: 1558.3843, x: 370.877, y: 103.4727 }, 0).wait(1).to({ scaleX: 1.6535, scaleY: 1.6595, skewX: 1564.5964, skewY: 1564.4246, x: 370.8696, y: 103.4682 }, 0).wait(1).to({ scaleX: 1.6539, scaleY: 1.6598, skewX: 1570.6367, skewY: 1570.4649, x: 370.8626, y: 103.4629 }, 0).wait(1).to({ scaleX: 1.6542, scaleY: 1.6602, skewX: 1576.6769, skewY: 1576.5053, x: 370.8563, y: 103.4569 }, 0).wait(1).to({ scaleX: 1.6546, scaleY: 1.6606, skewX: 1582.7171, skewY: 1582.5456, x: 370.8506, y: 103.4503 }, 0).wait(1).to({ scaleX: 1.655, scaleY: 1.6609, skewX: 1588.7573, skewY: 1588.5859, x: 370.8457, y: 103.4431 }, 0).wait(1).to({ scaleX: 1.6553, scaleY: 1.6613, skewX: 1594.7976, skewY: 1594.6262, x: 370.8415, y: 103.4355 }, 0).wait(1).to({ scaleX: 1.6557, scaleY: 1.6617, skewX: 1600.8378, skewY: 1600.6666, x: 370.8382, y: 103.4274 }, 0).wait(1).to({ scaleX: 1.656, scaleY: 1.662, skewX: 1606.878, skewY: 1606.7069, x: 370.8357, y: 103.419 }, 0).wait(1).to({ scaleX: 1.6564, scaleY: 1.6624, skewX: 1612.9183, skewY: 1612.7472, x: 370.8341, y: 103.4105 }, 0).wait(1).to({ scaleX: 1.6568, scaleY: 1.6628, skewX: 1618.9585, skewY: 1618.7876, x: 370.8335, y: 103.4018 }, 0).wait(1).to({ scaleX: 1.6571, scaleY: 1.6632, skewX: 1624.9987, skewY: 1624.8279, x: 370.8337, y: 103.393 }, 0).wait(1).to({ scaleX: 1.6575, scaleY: 1.6636, skewX: 1631.0389, skewY: 1630.8682, x: 370.8349, y: 103.3844 }, 0).wait(1).to({ scaleX: 1.6578, scaleY: 1.6639, skewX: 1637.0792, skewY: 1636.9085, x: 370.837, y: 103.3759 }, 0).wait(1).to({ scaleX: 1.6582, scaleY: 1.6643, skewX: 1643.1194, skewY: 1642.9489, x: 370.8399, y: 103.3677 }, 0).wait(1).to({ scaleX: 1.6586, scaleY: 1.6646, skewX: 1649.1596, skewY: 1648.9892, x: 370.8438, y: 103.3598 }, 0).wait(1).to({ scaleX: 1.6589, scaleY: 1.665, skewX: 1655.1998, skewY: 1655.0295, x: 370.8484, y: 103.3524 }, 0).wait(1).to({ scaleX: 1.6592, scaleY: 1.6653, skewX: 1661.2401, skewY: 1661.0698, x: 370.8537, y: 103.3455 }, 0).wait(1).to({ scaleX: 1.6596, scaleY: 1.6657, skewX: 1667.2803, skewY: 1667.1102, x: 370.8598, y: 103.3392 }, 0).wait(1).to({ scaleX: 1.6599, scaleY: 1.6661, skewX: 1673.3205, skewY: 1673.1505, x: 370.8665, y: 103.3336 }, 0).wait(1).to({ scaleX: 1.6603, scaleY: 1.6664, skewX: 1679.3607, skewY: 1679.1908, x: 370.8738, y: 103.3287 }, 0).wait(1).to({ scaleX: 1.6607, scaleY: 1.6668, skewX: 1685.401, skewY: 1685.2312, x: 370.8815, y: 103.3246 }, 0).wait(1).to({ scaleX: 1.6611, scaleY: 1.6672, skewX: 1691.4412, skewY: 1691.2715, x: 370.8896, y: 103.3213 }, 0).wait(1).to({ scaleX: 1.6614, scaleY: 1.6676, skewX: 1697.4814, skewY: 1697.3118, x: 370.898, y: 103.319 }, 0).wait(1).to({ scaleX: 1.6618, scaleY: 1.6679, skewX: 1703.5216, skewY: 1703.3521, x: 370.9067, y: 103.3175 }, 0).wait(1).to({ scaleX: 1.6622, scaleY: 1.6683, skewX: 1709.5619, skewY: 1709.3925, x: 370.9154, y: 103.3169 }, 0).wait(1).to({ scaleX: 1.6625, scaleY: 1.6687, skewX: 1715.6021, skewY: 1715.4328, x: 370.9242, y: 103.3172 }, 0).wait(1).to({ scaleX: 1.6628, scaleY: 1.669, skewX: 1721.6423, skewY: 1721.4731, x: 370.9328, y: 103.3185 }, 0).wait(1).to({ scaleX: 1.6632, scaleY: 1.6694, skewX: 1727.6825, skewY: 1727.5134, x: 370.9413, y: 103.3207 }, 0).wait(1).to({ scaleX: 1.6635, scaleY: 1.6698, skewX: 1733.7228, skewY: 1733.5538, x: 370.9495, y: 103.3238 }, 0).wait(1).to({ scaleX: 1.6639, scaleY: 1.6701, skewX: 1739.763, skewY: 1739.5941, x: 370.9574, y: 103.3277 }, 0).wait(1).to({ scaleX: 1.6643, scaleY: 1.6705, skewX: 1745.8032, skewY: 1745.6344, x: 370.9648, y: 103.3324 }, 0).wait(1).to({ scaleX: 1.6646, scaleY: 1.6709, skewX: 1751.8434, skewY: 1751.6748, x: 370.9716, y: 103.3378 }, 0).wait(1).to({ scaleX: 1.665, scaleY: 1.6712, skewX: 1757.8837, skewY: 1757.7151, x: 370.9779, y: 103.344 }, 0).wait(1).to({ scaleX: 1.6653, scaleY: 1.6716, skewX: 1763.9239, skewY: 1763.7554, x: 370.9834, y: 103.3508 }, 0).wait(1).to({ scaleX: 1.6657, scaleY: 1.672, skewX: 1769.9641, skewY: 1769.7957, x: 370.9883, y: 103.3581 }, 0).wait(1).to({ scaleX: 1.6661, scaleY: 1.6723, skewX: 1776.0043, skewY: 1775.8361, x: 370.9923, y: 103.3659 }, 0).wait(1).to({ scaleX: 1.6664, scaleY: 1.6727, skewX: 1782.0446, skewY: 1781.8764, x: 370.9955, y: 103.3741 }, 0).wait(1).to({ scaleX: 1.6668, scaleY: 1.6731, skewX: 1788.0848, skewY: 1787.9167, x: 370.9978, y: 103.3826 }, 0).wait(1).to({ scaleX: 1.6672, scaleY: 1.6735, skewX: 1794.125, skewY: 1793.957, x: 370.9992, y: 103.3912 }, 0).wait(1).to({ scaleX: 1.6675, scaleY: 1.6738, skewX: 1800.1652, skewY: 1799.9974, x: 370.9997, y: 103.4 }, 0).wait(1).to({ regX: 0.1, regY: 0.1, scaleX: 1.6743, scaleY: 1.6743, skewX: 1800, skewY: 1800, x: 372.15, y: 104.25 }, 0).wait(151));

		// chargeLevel01
		this.instance_4 = new lib.chargeLevel1("synched", 0);
		this.instance_4.setTransform(690.45, 82.95, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(450));

		// chargeLevel02
		this.instance_5 = new lib.chargeLevel2("synched", 0);
		this.instance_5.setTransform(711.55, 82.9, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(450));

		// chargeLevel03
		this.instance_6 = new lib.chargeLevel3("synched", 0);
		this.instance_6.setTransform(732.75, 83.05, 1.5999, 1.5999, 0, 0, 0, 0.1, 0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(299).to({ alpha: 0 }, 0).wait(20).to({ alpha: 1 }, 0).wait(130).to({ startPosition: 0 }, 0).wait(1));

		// chargeLevel04
		this.instance_7 = new lib.chargeLevel4("synched", 0);
		this.instance_7.setTransform(753.8, 82.95, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(250).to({ alpha: 0 }, 0).wait(89).to({ alpha: 1 }, 0).wait(110).to({ startPosition: 0 }, 0).wait(1));

		// chargeLevel05
		this.instance_8 = new lib.chargeLevel5("synched", 0);
		this.instance_8.setTransform(775, 83.05, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200).to({ alpha: 0 }, 0).wait(164).to({ alpha: 1 }, 0).wait(85).to({ startPosition: 0 }, 0).wait(1));

		// chargeLevel06
		this.instance_9 = new lib.chargeLevel6("synched", 0);
		this.instance_9.setTransform(796.15, 83.2, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(152).to({ alpha: 0 }, 0).wait(230).to({ alpha: 1 }, 0).wait(67).to({ startPosition: 0 }, 0).wait(1));

		// chargeLevel07
		this.instance_10 = new lib.chargeLevel7("synched", 0);
		this.instance_10.setTransform(817.75, 82.9, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(108).to({ alpha: 0 }, 0).wait(294).to({ alpha: 1 }, 0).wait(47).to({ startPosition: 0 }, 0).wait(1));

		// chargeLevel08
		this.instance_11 = new lib.chargeLevel8("synched", 0);
		this.instance_11.setTransform(839.4, 83.05, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(71).to({ alpha: 0 }, 0).wait(350).to({ alpha: 1 }, 0).wait(28).to({ startPosition: 0 }, 0).wait(1));

		// chargeLevel09
		this.instance_12 = new lib.chargeLevel9("synched", 0);
		this.instance_12.setTransform(861.4, 83.35, 1.5999, 1.5999);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(37).to({ alpha: 0 }, 0).wait(399).to({ alpha: 1 }, 0).wait(14));

		// lithiumAtom01
		this.instance_13 = new lib.lithiumAtom("synched", 0);
		this.instance_13.setTransform(206.9, 275.95, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);
		this.instance_13.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({ regY: 0.3, x: 206.3, y: 275.5, alpha: 1 }, 0).wait(293).to({ alpha: 0 }, 0).wait(23).to({ x: 525.8, y: 276.05, alpha: 1 }, 0).wait(111));

		// lithiumAtom02
		this.instance_14 = new lib.lithiumAtom("synched", 0);
		this.instance_14.setTransform(524.1, 314.15, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f().s("#000000").ss(1, 1, 1).p("AgDAAIAHAA");
		this.shape_24.setTransform(523.925, 299.55);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_24 }, { t: this.instance_14, p: { alpha: 1, x: 524.1, regY: 0.4, y: 314.15 } }] }).to({ state: [{ t: this.shape_24 }, { t: this.instance_14, p: { alpha: 0, x: 524.1, regY: 0.4, y: 314.15 } }] }, 10).to({ state: [{ t: this.shape_24 }, { t: this.instance_14, p: { alpha: 1, x: 206.3, regY: 0.4, y: 314.15 } }] }, 24).to({ state: [{ t: this.shape_24 }, { t: this.instance_14, p: { alpha: 0, x: 206.3, regY: 0.4, y: 314.15 } }] }, 286).to({ state: [{ t: this.shape_24 }, { t: this.instance_14, p: { alpha: 1, x: 525.8, regY: 0.3, y: 313.6 } }] }, 23).wait(107));

		// lithiumAtom03
		this.instance_15 = new lib.lithiumAtom("synched", 0);
		this.instance_15.setTransform(524.8, 354.85, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(23).to({ alpha: 0 }, 0).wait(24).to({ x: 205.5, y: 354.15, alpha: 1 }, 0).wait(277).to({ alpha: 0 }, 0).wait(23).to({ x: 525.8, y: 354.4, alpha: 1 }, 0).wait(103));

		// lithiumAtom04
		this.instance_16 = new lib.lithiumAtom("synched", 0);
		this.instance_16.setTransform(524.8, 393.45, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(33).to({ alpha: 0 }, 0).wait(24).to({ x: 203.9, y: 392.7, alpha: 1 }, 0).wait(271).to({ alpha: 0 }, 0).wait(23).to({ x: 525.8, y: 393.5, alpha: 1 }, 0).wait(99));

		// lithiumAtom05
		this.instance_17 = new lib.lithiumAtom("synched", 0);
		this.instance_17.setTransform(524.3, 429.3, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(47).to({ alpha: 0 }, 0).wait(24).to({ regY: 0.3, x: 205.6, y: 430.5, alpha: 1 }, 0).wait(261).to({ alpha: 0 }, 0).wait(23).to({ x: 525.8, y: 431.2, alpha: 1 }, 0).wait(95));

		// lithiumAtom06
		this.instance_18 = new lib.lithiumAtom("synched", 0);
		this.instance_18.setTransform(523.8, 468.75, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(57).to({ alpha: 0 }, 0).wait(28).to({ x: 206.3, alpha: 1 }, 0).wait(251).to({ alpha: 0 }, 0).wait(24).to({ x: 525.8, alpha: 1 }, 0).wait(90));

		// lithiumAtom07
		this.instance_19 = new lib.lithiumAtom("synched", 0);
		this.instance_19.setTransform(568, 275.5, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(71).to({ alpha: 0 }, 0).wait(24).to({ x: 249.65, y: 275.2, alpha: 1 }, 0).wait(245).to({ x: 568.65, alpha: 0 }, 0).wait(23).to({ x: 566.3, alpha: 1 }, 0).wait(87));

		// lithiumAtom08
		this.instance_20 = new lib.lithiumAtom("synched", 0);
		this.instance_20.setTransform(568.8, 314, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(85).to({ alpha: 0 }, 0).wait(23).to({ regX: 9, x: 249.95, y: 314.3, alpha: 1 }, 0).wait(236).to({ alpha: 0 }, 0).wait(23).to({ regX: 9.1, regY: 0.3, x: 568.65, y: 314.4, alpha: 1 }, 0).wait(83));

		// lithiumAtom09
		this.instance_21 = new lib.lithiumAtom("synched", 0);
		this.instance_21.setTransform(568.8, 354.7, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(95).to({ alpha: 0 }, 0).wait(24).to({ x: 249.4, y: 354.15, alpha: 1 }, 0).wait(229).to({ alpha: 0 }, 0).wait(23).to({ x: 568.65, y: 353.9, alpha: 1 }, 0).wait(79));

		// lithiumatom10
		this.instance_22 = new lib.lithiumAtom("synched", 0);
		this.instance_22.setTransform(568, 393.25, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(108).to({ alpha: 0 }, 0).wait(22).to({ regX: 9, x: 249.95, y: 393.5, alpha: 1 }, 0).wait(222).to({ alpha: 0 }, 0).wait(22).to({ regX: 9.1, x: 567.75, y: 392.45, alpha: 1 }, 0).wait(76));

		// lithiumAtom11
		this.instance_23 = new lib.lithiumAtom("synched", 0);
		this.instance_23.setTransform(568, 429.15, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(119).to({ alpha: 0 }, 0).wait(24).to({ regX: 9, x: 249.95, y: 430.25, alpha: 1 }, 0).wait(213).to({ alpha: 0 }, 0).wait(21).to({ regX: 9.1, x: 570.45, y: 429.8, alpha: 1 }, 0).wait(73));

		// lithiumAtom12
		this.instance_24 = new lib.lithiumAtom("synched", 0);
		this.instance_24.setTransform(568.8, 467.6, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(130).to({ alpha: 0 }, 0).wait(26).to({ regX: 9, regY: 0.3, x: 249.95, alpha: 1 }, 0).wait(203).to({ alpha: 0 }, 0).wait(22).to({ regX: 9.1, x: 568.65, alpha: 1 }, 0).wait(69));

		// lithiumAtom13
		this.instance_25 = new lib.lithiumAtom("synched", 0);
		this.instance_25.setTransform(612.8, 275.5, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(143).to({ alpha: 0 }, 0).wait(24).to({ x: 294, y: 276.05, alpha: 1 }, 0).wait(196).to({ alpha: 0 }, 0).wait(20).to({ x: 612.35, y: 274.95, alpha: 1 }, 0).wait(67));

		// lithiumAtom14
		this.instance_26 = new lib.lithiumAtom("synched", 0);
		this.instance_26.setTransform(612.8, 314.7, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(156).to({ alpha: 0 }, 0).wait(24).to({ x: 294, y: 314.4, alpha: 1 }, 0).wait(186).to({ alpha: 0 }, 0).wait(19).to({ x: 612.35, alpha: 1 }, 0).wait(65));

		// litiumAtom15
		this.instance_27 = new lib.lithiumAtom("synched", 0);
		this.instance_27.setTransform(612.8, 354.7, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(167).to({ alpha: 0 }, 0).wait(24).to({ x: 294, y: 354.4, alpha: 1 }, 0).wait(178).to({ alpha: 0 }, 0).wait(19).to({ x: 612.35, y: 353.9, alpha: 1 }, 0).wait(62));

		// lithiumAtom16
		this.instance_28 = new lib.lithiumAtom("synched", 0);
		this.instance_28.setTransform(612.8, 393.25, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(180).to({ alpha: 0 }, 0).wait(24).to({ x: 294, y: 392.95, alpha: 1 }, 0).wait(169).to({ alpha: 0 }, 0).wait(17).to({ regY: 0.3, x: 612.35, y: 390.55, alpha: 1 }, 0).wait(60));

		// lithiumAtom17
		this.instance_29 = new lib.lithiumAtom("synched", 0);
		this.instance_29.setTransform(612, 429.95, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(191).to({ alpha: 0 }, 0).wait(24).to({ regY: 0.2, x: 294, y: 429.3, alpha: 1 }, 0).wait(161).to({ alpha: 0 }, 0).wait(16).to({ regY: 0.3, x: 612.35, y: 430.25, alpha: 1 }, 0).wait(58));

		// lithiumAtom18
		this.instance_30 = new lib.lithiumAtom("synched", 0);
		this.instance_30.setTransform(612.8, 467.6, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(204).to({ alpha: 0 }, 0).wait(24).to({ x: 294, y: 467.95, alpha: 1 }, 0).wait(152).to({ alpha: 0 }, 0).wait(16).to({ regY: 0.3, x: 614.7, y: 467.6, alpha: 1 }, 0).wait(54));

		// lithiumatom19
		this.instance_31 = new lib.lithiumAtom("synched", 0);
		this.instance_31.setTransform(657.6, 274.7, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(215).to({ alpha: 0 }, 0).wait(24).to({ x: 338.2, y: 275.2, alpha: 1 }, 0).wait(146).to({ alpha: 0 }, 0).wait(18).to({ x: 656.5, y: 274.95, alpha: 1 }, 0).wait(47));

		// lithiumAtom20
		this.instance_32 = new lib.lithiumAtom("synched", 0);
		this.instance_32.setTransform(656.8, 314, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(228).to({ alpha: 0 }, 0).wait(25).to({ regY: 0.3, x: 338.3, y: 314.4, alpha: 1 }, 0).wait(138).to({ alpha: 0 }, 0).wait(22).to({ x: 656.5, alpha: 1 }, 0).wait(37));

		// lithiumAtom21
		this.instance_33 = new lib.lithiumAtom("synched", 0);
		this.instance_33.setTransform(656.8, 354.7, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(239).to({ alpha: 0 }, 0).wait(24).to({ x: 338.3, y: 354.95, alpha: 1 }, 0).wait(134).to({ alpha: 0 }, 0).wait(23).to({ x: 656.5, y: 353.9, alpha: 1 }, 0).wait(30));

		// lithiumatom22
		this.instance_34 = new lib.lithiumAtom("synched", 0);
		this.instance_34.setTransform(656.8, 393.25, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(253).to({ alpha: 0 }, 0).wait(23).to({ x: 337.25, alpha: 1 }, 0).wait(128).to({ alpha: 0 }, 0).wait(22).to({ x: 656.5, y: 392.45, alpha: 1 }, 0).wait(24));

		// lithiumAtom23
		this.instance_35 = new lib.lithiumAtom("synched", 0);
		this.instance_35.setTransform(656.8, 429.95, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(263).to({ alpha: 0 }, 0).wait(24).to({ x: 338.3, y: 430.25, alpha: 1 }, 0).wait(123).to({ alpha: 0 }, 0).wait(21).to({ x: 656.5, alpha: 1 }, 0).wait(19));

		// lithiumAtom24
		this.instance_36 = new lib.lithiumAtom("synched", 0);
		this.instance_36.setTransform(656.8, 467.8, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(276).to({ y: 467.6, alpha: 0 }, 0).wait(24).to({ regY: 0.3, x: 338.6, alpha: 1 }, 0).wait(116).to({ alpha: 0 }, 0).wait(20).to({ x: 656.5, alpha: 1 }, 0).wait(14));

		// lithiumIon01
		this.instance_37 = new lib.litiomIon("synched", 0);
		this.instance_37.setTransform(525.35, 276.4, 1.5999, 1.5999, 0, 0, 0, 0.6, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 510.0023, y: 275.6 }, 0).wait(1).to({ x: 495.6045 }, 0).wait(1).to({ x: 481.2068 }, 0).wait(1).to({ x: 466.8091 }, 0).wait(1).to({ x: 452.4114 }, 0).wait(1).to({ x: 438.0136 }, 0).wait(1).to({ x: 423.6159 }, 0).wait(1).to({ x: 409.2182 }, 0).wait(1).to({ x: 394.8205 }, 0).wait(1).to({ x: 380.4227 }, 0).wait(1).to({ x: 366.025 }, 0).wait(1).to({ x: 351.6273 }, 0).wait(1).to({ x: 337.2295 }, 0).wait(1).to({ x: 322.8318 }, 0).wait(1).to({ x: 308.4341 }, 0).wait(1).to({ x: 294.0364 }, 0).wait(1).to({ x: 279.6386 }, 0).wait(1).to({ x: 265.2409 }, 0).wait(1).to({ x: 250.8432 }, 0).wait(1).to({ x: 236.4455 }, 0).wait(1).to({ x: 222.0477 }, 0).wait(1).to({ x: 207.65 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 206, y: 276.25 }, 0).wait(293).to({ regY: 0.5, y: 276.4 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 219.6091, y: 275.5091 }, 0).wait(1).to({ x: 234.0182, y: 275.4182 }, 0).wait(1).to({ x: 248.4273, y: 275.3273 }, 0).wait(1).to({ x: 262.8364, y: 275.2364 }, 0).wait(1).to({ x: 277.2455, y: 275.1455 }, 0).wait(1).to({ x: 291.6545, y: 275.0545 }, 0).wait(1).to({ x: 306.0636, y: 274.9636 }, 0).wait(1).to({ x: 320.4727, y: 274.8727 }, 0).wait(1).to({ x: 334.8818, y: 274.7818 }, 0).wait(1).to({ x: 349.2909, y: 274.6909 }, 0).wait(1).to({ x: 363.7, y: 274.6 }, 0).wait(1).to({ x: 378.1091, y: 274.5091 }, 0).wait(1).to({ x: 392.5182, y: 274.4182 }, 0).wait(1).to({ x: 406.9273, y: 274.3273 }, 0).wait(1).to({ x: 421.3364, y: 274.2364 }, 0).wait(1).to({ x: 435.7455, y: 274.1455 }, 0).wait(1).to({ x: 450.1545, y: 274.0545 }, 0).wait(1).to({ x: 464.5636, y: 273.9636 }, 0).wait(1).to({ x: 478.9727, y: 273.8727 }, 0).wait(1).to({ x: 493.3818, y: 273.7818 }, 0).wait(1).to({ x: 507.7909, y: 273.6909 }, 0).wait(1).to({ x: 522.2, y: 273.6 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 526.45, y: 275.9 }, 0).wait(111));

		// lithiumIon02
		this.instance_38 = new lib.litiomIon("synched", 0);
		this.instance_38.setTransform(524.45, 314.4, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(10).to({ regY: 0.5, x: 525.4, y: 314.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 510.7391, y: 313.75 }, 0).wait(1).to({ x: 496.8783 }, 0).wait(1).to({ x: 483.0174 }, 0).wait(1).to({ x: 469.1565 }, 0).wait(1).to({ x: 455.2956 }, 0).wait(1).to({ x: 441.4348 }, 0).wait(1).to({ x: 427.5739 }, 0).wait(1).to({ x: 413.713 }, 0).wait(1).to({ x: 399.8522 }, 0).wait(1).to({ x: 385.9913 }, 0).wait(1).to({ x: 372.1304 }, 0).wait(1).to({ x: 358.2696 }, 0).wait(1).to({ x: 344.4087 }, 0).wait(1).to({ x: 330.5478 }, 0).wait(1).to({ x: 316.687 }, 0).wait(1).to({ x: 302.8261 }, 0).wait(1).to({ x: 288.9652 }, 0).wait(1).to({ x: 275.1043 }, 0).wait(1).to({ x: 261.2435 }, 0).wait(1).to({ x: 247.3826 }, 0).wait(1).to({ x: 233.5217 }, 0).wait(1).to({ x: 219.6609 }, 0).wait(1).to({ x: 205.8 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 206, y: 314.4 }, 0).wait(286).to({ regY: 0.5, y: 314.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 219.6273, y: 313.75 }, 0).wait(1).to({ x: 234.0545 }, 0).wait(1).to({ x: 248.4818 }, 0).wait(1).to({ x: 262.9091 }, 0).wait(1).to({ x: 277.3364 }, 0).wait(1).to({ x: 291.7636 }, 0).wait(1).to({ x: 306.1909 }, 0).wait(1).to({ x: 320.6182 }, 0).wait(1).to({ x: 335.0455 }, 0).wait(1).to({ x: 349.4727 }, 0).wait(1).to({ x: 363.9 }, 0).wait(1).to({ x: 378.3273 }, 0).wait(1).to({ x: 392.7545 }, 0).wait(1).to({ x: 407.1818 }, 0).wait(1).to({ x: 421.6091 }, 0).wait(1).to({ x: 436.0364 }, 0).wait(1).to({ x: 450.4636 }, 0).wait(1).to({ x: 464.8909 }, 0).wait(1).to({ x: 479.3182 }, 0).wait(1).to({ x: 493.7455 }, 0).wait(1).to({ x: 508.1727 }, 0).wait(1).to({ x: 522.6 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 526.45, y: 314.35 }, 0).wait(107));

		// lithiumion03
		this.instance_39 = new lib.litiomIon("synched", 0);
		this.instance_39.setTransform(525.35, 355.6, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(23).to({ regX: 0.6, regY: 0.5, y: 355.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 510.5456, y: 354.95 }, 0).wait(1).to({ x: 496.6913 }, 0).wait(1).to({ x: 482.837 }, 0).wait(1).to({ x: 468.9826 }, 0).wait(1).to({ x: 455.1283 }, 0).wait(1).to({ x: 441.2739 }, 0).wait(1).to({ x: 427.4196 }, 0).wait(1).to({ x: 413.5652 }, 0).wait(1).to({ x: 399.7109 }, 0).wait(1).to({ x: 385.8565 }, 0).wait(1).to({ x: 372.0022 }, 0).wait(1).to({ x: 358.1478 }, 0).wait(1).to({ x: 344.2935 }, 0).wait(1).to({ x: 330.4391 }, 0).wait(1).to({ x: 316.5848 }, 0).wait(1).to({ x: 302.7304 }, 0).wait(1).to({ x: 288.8761 }, 0).wait(1).to({ x: 275.0217 }, 0).wait(1).to({ x: 261.1674 }, 0).wait(1).to({ x: 247.313 }, 0).wait(1).to({ x: 233.4587 }, 0).wait(1).to({ x: 219.6043 }, 0).wait(1).to({ x: 205.75 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 206, y: 355.6 }, 0).wait(277).to({ regY: 0.5, y: 355.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 219.7705, y: 354.95 }, 0).wait(1).to({ x: 234.3409 }, 0).wait(1).to({ x: 248.9114 }, 0).wait(1).to({ x: 263.4818 }, 0).wait(1).to({ x: 278.0523 }, 0).wait(1).to({ x: 292.6227 }, 0).wait(1).to({ x: 307.1932 }, 0).wait(1).to({ x: 321.7636 }, 0).wait(1).to({ x: 336.3341 }, 0).wait(1).to({ x: 350.9045 }, 0).wait(1).to({ x: 365.475 }, 0).wait(1).to({ x: 380.0455 }, 0).wait(1).to({ x: 394.6159 }, 0).wait(1).to({ x: 409.1864 }, 0).wait(1).to({ x: 423.7568 }, 0).wait(1).to({ x: 438.3273 }, 0).wait(1).to({ x: 452.8977 }, 0).wait(1).to({ x: 467.4682 }, 0).wait(1).to({ x: 482.0386 }, 0).wait(1).to({ x: 496.6091 }, 0).wait(1).to({ x: 511.1795 }, 0).wait(1).to({ x: 525.75 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 526.45, y: 353.45 }, 0).wait(103));

		// lithiumIon04
		this.instance_40 = new lib.litiomIon("synched", 0);
		this.instance_40.setTransform(525.35, 394.1, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(33).to({ regX: 0.6, regY: 0.5, y: 394.15 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 511.1229, y: 393.35 }, 0).wait(1).to({ x: 497.8458 }, 0).wait(1).to({ x: 484.5687 }, 0).wait(1).to({ x: 471.2917 }, 0).wait(1).to({ x: 458.0146 }, 0).wait(1).to({ x: 444.7375 }, 0).wait(1).to({ x: 431.4604 }, 0).wait(1).to({ x: 418.1833 }, 0).wait(1).to({ x: 404.9062 }, 0).wait(1).to({ x: 391.6292 }, 0).wait(1).to({ x: 378.3521 }, 0).wait(1).to({ x: 365.075 }, 0).wait(1).to({ x: 351.7979 }, 0).wait(1).to({ x: 338.5208 }, 0).wait(1).to({ x: 325.2437 }, 0).wait(1).to({ x: 311.9667 }, 0).wait(1).to({ x: 298.6896 }, 0).wait(1).to({ x: 285.4125 }, 0).wait(1).to({ x: 272.1354 }, 0).wait(1).to({ x: 258.8583 }, 0).wait(1).to({ x: 245.5812 }, 0).wait(1).to({ x: 232.3042 }, 0).wait(1).to({ x: 219.0271 }, 0).wait(1).to({ x: 205.75 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 206, y: 394.1 }, 0).wait(270).to({ regY: 0.5, y: 394.15 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 219.7705, y: 393.35 }, 0).wait(1).to({ x: 234.3409 }, 0).wait(1).to({ x: 248.9114 }, 0).wait(1).to({ x: 263.4818 }, 0).wait(1).to({ x: 278.0523 }, 0).wait(1).to({ x: 292.6227 }, 0).wait(1).to({ x: 307.1932 }, 0).wait(1).to({ x: 321.7636 }, 0).wait(1).to({ x: 336.3341 }, 0).wait(1).to({ x: 350.9045 }, 0).wait(1).to({ x: 365.475 }, 0).wait(1).to({ x: 380.0455 }, 0).wait(1).to({ x: 394.6159 }, 0).wait(1).to({ x: 409.1864 }, 0).wait(1).to({ x: 423.7568 }, 0).wait(1).to({ x: 438.3273 }, 0).wait(1).to({ x: 452.8977 }, 0).wait(1).to({ x: 467.4682 }, 0).wait(1).to({ x: 482.0386 }, 0).wait(1).to({ x: 496.6091 }, 0).wait(1).to({ x: 511.1795 }, 0).wait(1).to({ x: 525.75 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 526.45, y: 393.45 }, 0).wait(99));

		// lithiumIon05
		this.instance_41 = new lib.litiomIon("synched", 0);
		this.instance_41.setTransform(525.35, 430.85, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(46).to({ regX: 0.6, regY: 0.5, y: 431.05 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 511.1229, y: 430.25 }, 0).wait(1).to({ x: 497.8458 }, 0).wait(1).to({ x: 484.5687 }, 0).wait(1).to({ x: 471.2917 }, 0).wait(1).to({ x: 458.0146 }, 0).wait(1).to({ x: 444.7375 }, 0).wait(1).to({ x: 431.4604 }, 0).wait(1).to({ x: 418.1833 }, 0).wait(1).to({ x: 404.9062 }, 0).wait(1).to({ x: 391.6292 }, 0).wait(1).to({ x: 378.3521 }, 0).wait(1).to({ x: 365.075 }, 0).wait(1).to({ x: 351.7979 }, 0).wait(1).to({ x: 338.5208 }, 0).wait(1).to({ x: 325.2437 }, 0).wait(1).to({ x: 311.9667 }, 0).wait(1).to({ x: 298.6896 }, 0).wait(1).to({ x: 285.4125 }, 0).wait(1).to({ x: 272.1354 }, 0).wait(1).to({ x: 258.8583 }, 0).wait(1).to({ x: 245.5812 }, 0).wait(1).to({ x: 232.3042 }, 0).wait(1).to({ x: 219.0271 }, 0).wait(1).to({ x: 205.75 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 206, y: 430.85 }, 0).wait(261).to({ regY: 0.5, y: 431.05 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 219.7159, y: 430.2159 }, 0).wait(1).to({ x: 234.2318, y: 430.1818 }, 0).wait(1).to({ x: 248.7477, y: 430.1477 }, 0).wait(1).to({ x: 263.2636, y: 430.1136 }, 0).wait(1).to({ x: 277.7795, y: 430.0795 }, 0).wait(1).to({ x: 292.2955, y: 430.0455 }, 0).wait(1).to({ x: 306.8114, y: 430.0114 }, 0).wait(1).to({ x: 321.3273, y: 429.9773 }, 0).wait(1).to({ x: 335.8432, y: 429.9432 }, 0).wait(1).to({ x: 350.3591, y: 429.9091 }, 0).wait(1).to({ x: 364.875, y: 429.875 }, 0).wait(1).to({ x: 379.3909, y: 429.8409 }, 0).wait(1).to({ x: 393.9068, y: 429.8068 }, 0).wait(1).to({ x: 408.4227, y: 429.7727 }, 0).wait(1).to({ x: 422.9386, y: 429.7386 }, 0).wait(1).to({ x: 437.4545, y: 429.7045 }, 0).wait(1).to({ x: 451.9705, y: 429.6705 }, 0).wait(1).to({ x: 466.4864, y: 429.6364 }, 0).wait(1).to({ x: 481.0023, y: 429.6023 }, 0).wait(1).to({ x: 495.5182, y: 429.5682 }, 0).wait(1).to({ x: 510.0341, y: 429.5341 }, 0).wait(1).to({ x: 524.55, y: 429.5 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 526.45, y: 431.85 }, 0).wait(95));

		// lithiumIon06
		this.instance_42 = new lib.litiomIon("synched", 0);
		this.instance_42.setTransform(522.55, 467.8, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(58).to({ regY: 0.5, y: 467.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 509.112, y: 467.05 }, 0).wait(1).to({ x: 496.474 }, 0).wait(1).to({ x: 483.836 }, 0).wait(1).to({ x: 471.198 }, 0).wait(1).to({ x: 458.56 }, 0).wait(1).to({ x: 445.922 }, 0).wait(1).to({ x: 433.284 }, 0).wait(1).to({ x: 420.646 }, 0).wait(1).to({ x: 408.008 }, 0).wait(1).to({ x: 395.37 }, 0).wait(1).to({ x: 382.732 }, 0).wait(1).to({ x: 370.094 }, 0).wait(1).to({ x: 357.456 }, 0).wait(1).to({ x: 344.818 }, 0).wait(1).to({ x: 332.18 }, 0).wait(1).to({ x: 319.542 }, 0).wait(1).to({ x: 306.904 }, 0).wait(1).to({ x: 294.266 }, 0).wait(1).to({ x: 281.628 }, 0).wait(1).to({ x: 268.99 }, 0).wait(1).to({ x: 256.352 }, 0).wait(1).to({ x: 243.714 }, 0).wait(1).to({ x: 231.076 }, 0).wait(1).to({ x: 218.438 }, 0).wait(1).to({ x: 205.8 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 206, y: 467.8 }, 0).wait(252).to({ regY: 0.5, y: 467.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 219, y: 467.05 }, 0).wait(1).to({ x: 232.8 }, 0).wait(1).to({ x: 246.6 }, 0).wait(1).to({ x: 260.4 }, 0).wait(1).to({ x: 274.2 }, 0).wait(1).to({ x: 288 }, 0).wait(1).to({ x: 301.8 }, 0).wait(1).to({ x: 315.6 }, 0).wait(1).to({ x: 329.4 }, 0).wait(1).to({ x: 343.2 }, 0).wait(1).to({ x: 357 }, 0).wait(1).to({ x: 370.8 }, 0).wait(1).to({ x: 384.6 }, 0).wait(1).to({ x: 398.4 }, 0).wait(1).to({ x: 412.2 }, 0).wait(1).to({ x: 426 }, 0).wait(1).to({ x: 439.8 }, 0).wait(1).to({ x: 453.6 }, 0).wait(1).to({ x: 467.4 }, 0).wait(1).to({ x: 481.2 }, 0).wait(1).to({ x: 495 }, 0).wait(1).to({ x: 508.8 }, 0).wait(1).to({ x: 522.6 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 526.45, y: 467.8 }, 0).wait(90));

		// lithiumIon07
		this.instance_43 = new lib.litiomIon("synched", 0);
		this.instance_43.setTransform(569.15, 276.25, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(71).to({ regY: 0.5, x: 568.65, y: 276.4 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 553.425, y: 275.6 }, 0).wait(1).to({ x: 539 }, 0).wait(1).to({ x: 524.575 }, 0).wait(1).to({ x: 510.15 }, 0).wait(1).to({ x: 495.725 }, 0).wait(1).to({ x: 481.3 }, 0).wait(1).to({ x: 466.875 }, 0).wait(1).to({ x: 452.45 }, 0).wait(1).to({ x: 438.025 }, 0).wait(1).to({ x: 423.6 }, 0).wait(1).to({ x: 409.175 }, 0).wait(1).to({ x: 394.75 }, 0).wait(1).to({ x: 380.325 }, 0).wait(1).to({ x: 365.9 }, 0).wait(1).to({ x: 351.475 }, 0).wait(1).to({ x: 337.05 }, 0).wait(1).to({ x: 322.625 }, 0).wait(1).to({ x: 308.2 }, 0).wait(1).to({ x: 293.775 }, 0).wait(1).to({ x: 279.35 }, 0).wait(1).to({ x: 264.925 }, 0).wait(1).to({ x: 250.5 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 250.6, y: 276.25 }, 0).wait(246).to({ regX: 0.7, regY: 0.5, x: 250.7, y: 276.4 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 264.0545, y: 275.5432 }, 0).wait(1).to({ x: 278.5091, y: 275.4864 }, 0).wait(1).to({ x: 292.9636, y: 275.4295 }, 0).wait(1).to({ x: 307.4182, y: 275.3727 }, 0).wait(1).to({ x: 321.8727, y: 275.3159 }, 0).wait(1).to({ x: 336.3273, y: 275.2591 }, 0).wait(1).to({ x: 350.7818, y: 275.2023 }, 0).wait(1).to({ x: 365.2364, y: 275.1455 }, 0).wait(1).to({ x: 379.6909, y: 275.0886 }, 0).wait(1).to({ x: 394.1455, y: 275.0318 }, 0).wait(1).to({ x: 408.6, y: 274.975 }, 0).wait(1).to({ x: 423.0545, y: 274.9182 }, 0).wait(1).to({ x: 437.5091, y: 274.8614 }, 0).wait(1).to({ x: 451.9636, y: 274.8045 }, 0).wait(1).to({ x: 466.4182, y: 274.7477 }, 0).wait(1).to({ x: 480.8727, y: 274.6909 }, 0).wait(1).to({ x: 495.3273, y: 274.6341 }, 0).wait(1).to({ x: 509.7818, y: 274.5773 }, 0).wait(1).to({ x: 524.2364, y: 274.5205 }, 0).wait(1).to({ x: 538.6909, y: 274.4636 }, 0).wait(1).to({ x: 553.1455, y: 274.4068 }, 0).wait(1).to({ x: 567.6, y: 274.35 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 566.95, y: 275.05 }, 0).wait(87));

		// lithiumIon08
		this.instance_44 = new lib.litiomIon("synched", 0);
		this.instance_44.setTransform(569.15, 314.4, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(83).to({ regY: 0.5, y: 314.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 555.0854, y: 313.75 }, 0).wait(1).to({ x: 541.8208 }, 0).wait(1).to({ x: 528.5562 }, 0).wait(1).to({ x: 515.2917 }, 0).wait(1).to({ x: 502.0271 }, 0).wait(1).to({ x: 488.7625 }, 0).wait(1).to({ x: 475.4979 }, 0).wait(1).to({ x: 462.2333 }, 0).wait(1).to({ x: 448.9687 }, 0).wait(1).to({ x: 435.7042 }, 0).wait(1).to({ x: 422.4396 }, 0).wait(1).to({ x: 409.175 }, 0).wait(1).to({ x: 395.9104 }, 0).wait(1).to({ x: 382.6458 }, 0).wait(1).to({ x: 369.3812 }, 0).wait(1).to({ x: 356.1167 }, 0).wait(1).to({ x: 342.8521 }, 0).wait(1).to({ x: 329.5875 }, 0).wait(1).to({ x: 316.3229 }, 0).wait(1).to({ x: 303.0583 }, 0).wait(1).to({ x: 289.7937 }, 0).wait(1).to({ x: 276.5292 }, 0).wait(1).to({ x: 263.2646 }, 0).wait(1).to({ x: 250 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 250.6, y: 314.4 }, 0).wait(236).to({ regX: 0.7, regY: 0.5, x: 250.7, y: 314.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 263.9068, y: 313.6705 }, 0).wait(1).to({ x: 278.2136, y: 313.5909 }, 0).wait(1).to({ x: 292.5205, y: 313.5114 }, 0).wait(1).to({ x: 306.8273, y: 313.4318 }, 0).wait(1).to({ x: 321.1341, y: 313.3523 }, 0).wait(1).to({ x: 335.4409, y: 313.2727 }, 0).wait(1).to({ x: 349.7477, y: 313.1932 }, 0).wait(1).to({ x: 364.0545, y: 313.1136 }, 0).wait(1).to({ x: 378.3614, y: 313.0341 }, 0).wait(1).to({ x: 392.6682, y: 312.9545 }, 0).wait(1).to({ x: 406.975, y: 312.875 }, 0).wait(1).to({ x: 421.2818, y: 312.7955 }, 0).wait(1).to({ x: 435.5886, y: 312.7159 }, 0).wait(1).to({ x: 449.8955, y: 312.6364 }, 0).wait(1).to({ x: 464.2023, y: 312.5568 }, 0).wait(1).to({ x: 478.5091, y: 312.4773 }, 0).wait(1).to({ x: 492.8159, y: 312.3977 }, 0).wait(1).to({ x: 507.1227, y: 312.3182 }, 0).wait(1).to({ x: 521.4295, y: 312.2386 }, 0).wait(1).to({ x: 535.7364, y: 312.1591 }, 0).wait(1).to({ x: 550.0432, y: 312.0795 }, 0).wait(1).to({ x: 564.35, y: 312 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 568.75, y: 314.4 }, 0).wait(83));

		// lithiumIon09
		this.instance_45 = new lib.litiomIon("synched", 0);
		this.instance_45.setTransform(569.15, 355.6, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(94).to({ regY: 0.5, y: 355.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 555.1062, y: 354.95 }, 0).wait(1).to({ x: 541.8625 }, 0).wait(1).to({ x: 528.6187 }, 0).wait(1).to({ x: 515.375 }, 0).wait(1).to({ x: 502.1312 }, 0).wait(1).to({ x: 488.8875 }, 0).wait(1).to({ x: 475.6437 }, 0).wait(1).to({ x: 462.4 }, 0).wait(1).to({ x: 449.1562 }, 0).wait(1).to({ x: 435.9125 }, 0).wait(1).to({ x: 422.6687 }, 0).wait(1).to({ x: 409.425 }, 0).wait(1).to({ x: 396.1812 }, 0).wait(1).to({ x: 382.9375 }, 0).wait(1).to({ x: 369.6937 }, 0).wait(1).to({ x: 356.45 }, 0).wait(1).to({ x: 343.2062 }, 0).wait(1).to({ x: 329.9625 }, 0).wait(1).to({ x: 316.7187 }, 0).wait(1).to({ x: 303.475 }, 0).wait(1).to({ x: 290.2312 }, 0).wait(1).to({ x: 276.9875 }, 0).wait(1).to({ x: 263.7437 }, 0).wait(1).to({ x: 250.5 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 250.6, y: 355.6 }, 0).wait(229).to({ regX: 0.7, regY: 0.5, x: 250.7, y: 355.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 264.0068, y: 354.9341 }, 0).wait(1).to({ x: 278.4136, y: 354.9182 }, 0).wait(1).to({ x: 292.8205, y: 354.9023 }, 0).wait(1).to({ x: 307.2273, y: 354.8864 }, 0).wait(1).to({ x: 321.6341, y: 354.8705 }, 0).wait(1).to({ x: 336.0409, y: 354.8545 }, 0).wait(1).to({ x: 350.4477, y: 354.8386 }, 0).wait(1).to({ x: 364.8545, y: 354.8227 }, 0).wait(1).to({ x: 379.2614, y: 354.8068 }, 0).wait(1).to({ x: 393.6682, y: 354.7909 }, 0).wait(1).to({ x: 408.075, y: 354.775 }, 0).wait(1).to({ x: 422.4818, y: 354.7591 }, 0).wait(1).to({ x: 436.8886, y: 354.7432 }, 0).wait(1).to({ x: 451.2955, y: 354.7273 }, 0).wait(1).to({ x: 465.7023, y: 354.7114 }, 0).wait(1).to({ x: 480.1091, y: 354.6955 }, 0).wait(1).to({ x: 494.5159, y: 354.6795 }, 0).wait(1).to({ x: 508.9227, y: 354.6636 }, 0).wait(1).to({ x: 523.3295, y: 354.6477 }, 0).wait(1).to({ x: 537.7364, y: 354.6318 }, 0).wait(1).to({ x: 552.1432, y: 354.6159 }, 0).wait(1).to({ x: 566.55, y: 354.6 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 568.45, y: 353.45 }, 0).wait(79));

		// lithiumIon10
		this.instance_46 = new lib.litiomIon("synched", 0);
		this.instance_46.setTransform(569.15, 394.1, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(107).to({ regY: 0.5, y: 394.15 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 553.9023, y: 393.35 }, 0).wait(1).to({ x: 539.4545 }, 0).wait(1).to({ x: 525.0068 }, 0).wait(1).to({ x: 510.5591 }, 0).wait(1).to({ x: 496.1114 }, 0).wait(1).to({ x: 481.6636 }, 0).wait(1).to({ x: 467.2159 }, 0).wait(1).to({ x: 452.7682 }, 0).wait(1).to({ x: 438.3205 }, 0).wait(1).to({ x: 423.8727 }, 0).wait(1).to({ x: 409.425 }, 0).wait(1).to({ x: 394.9773 }, 0).wait(1).to({ x: 380.5295 }, 0).wait(1).to({ x: 366.0818 }, 0).wait(1).to({ x: 351.6341 }, 0).wait(1).to({ x: 337.1864 }, 0).wait(1).to({ x: 322.7386 }, 0).wait(1).to({ x: 308.2909 }, 0).wait(1).to({ x: 293.8432 }, 0).wait(1).to({ x: 279.3955 }, 0).wait(1).to({ x: 264.9477 }, 0).wait(1).to({ x: 250.5 }, 0).wait(1).to({ regX: 0.4, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 250.6, y: 394.1 }, 0).wait(222).to({ regX: 0.7, regY: 0.5, x: 250.7, y: 394.15 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 264.6262, y: 393.2619 }, 0).wait(1).to({ x: 279.6524, y: 393.1738 }, 0).wait(1).to({ x: 294.6786, y: 393.0857 }, 0).wait(1).to({ x: 309.7048, y: 392.9976 }, 0).wait(1).to({ x: 324.7309, y: 392.9095 }, 0).wait(1).to({ x: 339.7571, y: 392.8214 }, 0).wait(1).to({ x: 354.7833, y: 392.7333 }, 0).wait(1).to({ x: 369.8095, y: 392.6452 }, 0).wait(1).to({ x: 384.8357, y: 392.5571 }, 0).wait(1).to({ x: 399.8619, y: 392.469 }, 0).wait(1).to({ x: 414.8881, y: 392.381 }, 0).wait(1).to({ x: 429.9143, y: 392.2929 }, 0).wait(1).to({ x: 444.9405, y: 392.2048 }, 0).wait(1).to({ x: 459.9667, y: 392.1167 }, 0).wait(1).to({ x: 474.9929, y: 392.0286 }, 0).wait(1).to({ x: 490.019, y: 391.9405 }, 0).wait(1).to({ x: 505.0452, y: 391.8524 }, 0).wait(1).to({ x: 520.0714, y: 391.7643 }, 0).wait(1).to({ x: 535.0976, y: 391.6762 }, 0).wait(1).to({ x: 550.1238, y: 391.5881 }, 0).wait(1).to({ x: 565.15, y: 391.5 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 567.8, y: 392.25 }, 0).wait(76));

		// lithiumIon11
		this.instance_47 = new lib.litiomIon("synched", 0);
		this.instance_47.setTransform(567.7, 429.15, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(118).to({ regY: 0.4, y: 429.2 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 553.7187, y: 428.5687 }, 0).wait(1).to({ x: 540.5375, y: 428.5875 }, 0).wait(1).to({ x: 527.3562, y: 428.6062 }, 0).wait(1).to({ x: 514.175, y: 428.625 }, 0).wait(1).to({ x: 500.9937, y: 428.6437 }, 0).wait(1).to({ x: 487.8125, y: 428.6625 }, 0).wait(1).to({ x: 474.6312, y: 428.6812 }, 0).wait(1).to({ x: 461.45, y: 428.7 }, 0).wait(1).to({ x: 448.2687, y: 428.7187 }, 0).wait(1).to({ x: 435.0875, y: 428.7375 }, 0).wait(1).to({ x: 421.9062, y: 428.7562 }, 0).wait(1).to({ x: 408.725, y: 428.775 }, 0).wait(1).to({ x: 395.5437, y: 428.7937 }, 0).wait(1).to({ x: 382.3625, y: 428.8125 }, 0).wait(1).to({ x: 369.1812, y: 428.8312 }, 0).wait(1).to({ x: 356, y: 428.85 }, 0).wait(1).to({ x: 342.8187, y: 428.8687 }, 0).wait(1).to({ x: 329.6375, y: 428.8875 }, 0).wait(1).to({ x: 316.4562, y: 428.9062 }, 0).wait(1).to({ x: 303.275, y: 428.925 }, 0).wait(1).to({ x: 290.0937, y: 428.9437 }, 0).wait(1).to({ x: 276.9125, y: 428.9625 }, 0).wait(1).to({ x: 263.7312, y: 428.9812 }, 0).wait(1).to({ x: 250.55, y: 429 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 250.6, y: 430.1 }, 0).wait(213).to({ regX: 0.7, regY: 0.5, x: 250.7, y: 430.25 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 265.455, y: 429.45 }, 0).wait(1).to({ x: 281.31 }, 0).wait(1).to({ x: 297.165 }, 0).wait(1).to({ x: 313.02 }, 0).wait(1).to({ x: 328.875 }, 0).wait(1).to({ x: 344.73 }, 0).wait(1).to({ x: 360.585 }, 0).wait(1).to({ x: 376.44 }, 0).wait(1).to({ x: 392.295 }, 0).wait(1).to({ x: 408.15 }, 0).wait(1).to({ x: 424.005 }, 0).wait(1).to({ x: 439.86 }, 0).wait(1).to({ x: 455.715 }, 0).wait(1).to({ x: 471.57 }, 0).wait(1).to({ x: 487.425 }, 0).wait(1).to({ x: 503.28 }, 0).wait(1).to({ x: 519.135 }, 0).wait(1).to({ x: 534.99 }, 0).wait(1).to({ x: 550.845 }, 0).wait(1).to({ x: 566.7 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 571.1, y: 430.1 }, 0).wait(73));

		// lithiumIon12
		this.instance_48 = new lib.litiomIon("synched", 0);
		this.instance_48.setTransform(569.15, 467.8, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(130).to({ regY: 0.5, y: 467.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 555.1062, y: 467.05 }, 0).wait(1).to({ x: 541.8625 }, 0).wait(1).to({ x: 528.6187 }, 0).wait(1).to({ x: 515.375 }, 0).wait(1).to({ x: 502.1312 }, 0).wait(1).to({ x: 488.8875 }, 0).wait(1).to({ x: 475.6437 }, 0).wait(1).to({ x: 462.4 }, 0).wait(1).to({ x: 449.1562 }, 0).wait(1).to({ x: 435.9125 }, 0).wait(1).to({ x: 422.6687 }, 0).wait(1).to({ x: 409.425 }, 0).wait(1).to({ x: 396.1812 }, 0).wait(1).to({ x: 382.9375 }, 0).wait(1).to({ x: 369.6937 }, 0).wait(1).to({ x: 356.45 }, 0).wait(1).to({ x: 343.2062 }, 0).wait(1).to({ x: 329.9625 }, 0).wait(1).to({ x: 316.7187 }, 0).wait(1).to({ x: 303.475 }, 0).wait(1).to({ x: 290.2312 }, 0).wait(1).to({ x: 276.9875 }, 0).wait(1).to({ x: 263.7437 }, 0).wait(1).to({ x: 250.5 }, 0).wait(1).to({ regX: 0.4, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 250.6, y: 467.8 }, 0).wait(204).to({ regX: 0.7, regY: 0.5, x: 250.7, y: 467.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 264.669, y: 467.05 }, 0).wait(1).to({ x: 279.7381 }, 0).wait(1).to({ x: 294.8071 }, 0).wait(1).to({ x: 309.8762 }, 0).wait(1).to({ x: 324.9452 }, 0).wait(1).to({ x: 340.0143 }, 0).wait(1).to({ x: 355.0833 }, 0).wait(1).to({ x: 370.1524 }, 0).wait(1).to({ x: 385.2214 }, 0).wait(1).to({ x: 400.2905 }, 0).wait(1).to({ x: 415.3595 }, 0).wait(1).to({ x: 430.4286 }, 0).wait(1).to({ x: 445.4976 }, 0).wait(1).to({ x: 460.5667 }, 0).wait(1).to({ x: 475.6357 }, 0).wait(1).to({ x: 490.7048 }, 0).wait(1).to({ x: 505.7738 }, 0).wait(1).to({ x: 520.8429 }, 0).wait(1).to({ x: 535.9119 }, 0).wait(1).to({ x: 550.9809 }, 0).wait(1).to({ x: 566.05 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 568.45, y: 467.8 }, 0).wait(69));

		// lithiumIon13
		this.instance_49 = new lib.litiomIon("synched", 0);
		this.instance_49.setTransform(612.95, 275.9, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(143).to({ regY: 0.5, x: 612.9, y: 276 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 598.2522, y: 275.2022 }, 0).wait(1).to({ x: 584.4043, y: 275.2043 }, 0).wait(1).to({ x: 570.5565, y: 275.2065 }, 0).wait(1).to({ x: 556.7087, y: 275.2087 }, 0).wait(1).to({ x: 542.8609, y: 275.2109 }, 0).wait(1).to({ x: 529.013, y: 275.213 }, 0).wait(1).to({ x: 515.1652, y: 275.2152 }, 0).wait(1).to({ x: 501.3174, y: 275.2174 }, 0).wait(1).to({ x: 487.4696, y: 275.2196 }, 0).wait(1).to({ x: 473.6217, y: 275.2217 }, 0).wait(1).to({ x: 459.7739, y: 275.2239 }, 0).wait(1).to({ x: 445.9261, y: 275.2261 }, 0).wait(1).to({ x: 432.0783, y: 275.2283 }, 0).wait(1).to({ x: 418.2304, y: 275.2304 }, 0).wait(1).to({ x: 404.3826, y: 275.2326 }, 0).wait(1).to({ x: 390.5348, y: 275.2348 }, 0).wait(1).to({ x: 376.687, y: 275.237 }, 0).wait(1).to({ x: 362.8391, y: 275.2391 }, 0).wait(1).to({ x: 348.9913, y: 275.2413 }, 0).wait(1).to({ x: 335.1435, y: 275.2435 }, 0).wait(1).to({ x: 321.2956, y: 275.2456 }, 0).wait(1).to({ x: 307.4478, y: 275.2478 }, 0).wait(1).to({ x: 293.6, y: 275.25 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 294.45, y: 275.9 }, 0).wait(196).to({ regX: 0.5, regY: 0.5, x: 294.55, y: 276 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 310.4763, y: 275.15 }, 0).wait(1).to({ x: 327.2026, y: 275.1 }, 0).wait(1).to({ x: 343.9289, y: 275.05 }, 0).wait(1).to({ x: 360.6553, y: 275 }, 0).wait(1).to({ x: 377.3816, y: 274.95 }, 0).wait(1).to({ x: 394.1079, y: 274.9 }, 0).wait(1).to({ x: 410.8342, y: 274.85 }, 0).wait(1).to({ x: 427.5605, y: 274.8 }, 0).wait(1).to({ x: 444.2868, y: 274.75 }, 0).wait(1).to({ x: 461.0132, y: 274.7 }, 0).wait(1).to({ x: 477.7395, y: 274.65 }, 0).wait(1).to({ x: 494.4658, y: 274.6 }, 0).wait(1).to({ x: 511.1921, y: 274.55 }, 0).wait(1).to({ x: 527.9184, y: 274.5 }, 0).wait(1).to({ x: 544.6447, y: 274.45 }, 0).wait(1).to({ x: 561.3711, y: 274.4 }, 0).wait(1).to({ x: 578.0974, y: 274.35 }, 0).wait(1).to({ x: 594.8237, y: 274.3 }, 0).wait(1).to({ x: 611.55, y: 274.25 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 613, y: 275.05 }, 0).wait(67));

		// lithiumIon14
		this.instance_50 = new lib.litiomIon("synched", 0);
		this.instance_50.setTransform(613.25, 314.35, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(155).to({ regX: 0.7, regY: 0.5, y: 314.4 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 598.8958, y: 313.6042 }, 0).wait(1).to({ x: 585.6417, y: 313.6083 }, 0).wait(1).to({ x: 572.3875, y: 313.6125 }, 0).wait(1).to({ x: 559.1333, y: 313.6167 }, 0).wait(1).to({ x: 545.8792, y: 313.6208 }, 0).wait(1).to({ x: 532.625, y: 313.625 }, 0).wait(1).to({ x: 519.3708, y: 313.6292 }, 0).wait(1).to({ x: 506.1167, y: 313.6333 }, 0).wait(1).to({ x: 492.8625, y: 313.6375 }, 0).wait(1).to({ x: 479.6083, y: 313.6417 }, 0).wait(1).to({ x: 466.3542, y: 313.6458 }, 0).wait(1).to({ x: 453.1, y: 313.65 }, 0).wait(1).to({ x: 439.8458, y: 313.6542 }, 0).wait(1).to({ x: 426.5917, y: 313.6583 }, 0).wait(1).to({ x: 413.3375, y: 313.6625 }, 0).wait(1).to({ x: 400.0833, y: 313.6667 }, 0).wait(1).to({ x: 386.8292, y: 313.6708 }, 0).wait(1).to({ x: 373.575, y: 313.675 }, 0).wait(1).to({ x: 360.3208, y: 313.6792 }, 0).wait(1).to({ x: 347.0667, y: 313.6833 }, 0).wait(1).to({ x: 333.8125, y: 313.6875 }, 0).wait(1).to({ x: 320.5583, y: 313.6917 }, 0).wait(1).to({ x: 307.3042, y: 313.6958 }, 0).wait(1).to({ x: 294.05, y: 313.7 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 294.45, y: 314.4 }, 0).wait(186).to({ regX: 0.5, regY: 0.5, x: 294.55, y: 314.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 311.4056, y: 313.7417 }, 0).wait(1).to({ x: 329.0611, y: 313.7333 }, 0).wait(1).to({ x: 346.7167, y: 313.725 }, 0).wait(1).to({ x: 364.3722, y: 313.7167 }, 0).wait(1).to({ x: 382.0278, y: 313.7083 }, 0).wait(1).to({ x: 399.6833, y: 313.7 }, 0).wait(1).to({ x: 417.3389, y: 313.6917 }, 0).wait(1).to({ x: 434.9944, y: 313.6833 }, 0).wait(1).to({ x: 452.65, y: 313.675 }, 0).wait(1).to({ x: 470.3056, y: 313.6667 }, 0).wait(1).to({ x: 487.9611, y: 313.6583 }, 0).wait(1).to({ x: 505.6167, y: 313.65 }, 0).wait(1).to({ x: 523.2722, y: 313.6417 }, 0).wait(1).to({ x: 540.9278, y: 313.6333 }, 0).wait(1).to({ x: 558.5833, y: 313.625 }, 0).wait(1).to({ x: 576.2389, y: 313.6167 }, 0).wait(1).to({ x: 593.8944, y: 313.6083 }, 0).wait(1).to({ x: 611.55, y: 313.6 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 613, y: 314.35 }, 0).wait(65));

		// lithiumIon15
		this.instance_51 = new lib.litiomIon("synched", 0);
		this.instance_51.setTransform(612.95, 355.15, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(167).to({ regY: 0.5, x: 613, y: 355.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 598.3826, y: 354.95 }, 0).wait(1).to({ x: 584.5652 }, 0).wait(1).to({ x: 570.7478 }, 0).wait(1).to({ x: 556.9304 }, 0).wait(1).to({ x: 543.113 }, 0).wait(1).to({ x: 529.2956 }, 0).wait(1).to({ x: 515.4783 }, 0).wait(1).to({ x: 501.6609 }, 0).wait(1).to({ x: 487.8435 }, 0).wait(1).to({ x: 474.0261 }, 0).wait(1).to({ x: 460.2087 }, 0).wait(1).to({ x: 446.3913 }, 0).wait(1).to({ x: 432.5739 }, 0).wait(1).to({ x: 418.7565 }, 0).wait(1).to({ x: 404.9391 }, 0).wait(1).to({ x: 391.1217 }, 0).wait(1).to({ x: 377.3043 }, 0).wait(1).to({ x: 363.487 }, 0).wait(1).to({ x: 349.6696 }, 0).wait(1).to({ x: 335.8522 }, 0).wait(1).to({ x: 322.0348 }, 0).wait(1).to({ x: 308.2174 }, 0).wait(1).to({ x: 294.4 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 294.45, y: 355.6 }, 0).wait(178).to({ regX: 0.6, regY: 0.5, x: 290.55, y: 353.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 307.4528, y: 352.9444 }, 0).wait(1).to({ x: 325.3056, y: 352.9389 }, 0).wait(1).to({ x: 343.1583, y: 352.9333 }, 0).wait(1).to({ x: 361.0111, y: 352.9278 }, 0).wait(1).to({ x: 378.8639, y: 352.9222 }, 0).wait(1).to({ x: 396.7167, y: 352.9167 }, 0).wait(1).to({ x: 414.5694, y: 352.9111 }, 0).wait(1).to({ x: 432.4222, y: 352.9056 }, 0).wait(1).to({ x: 450.275, y: 352.9 }, 0).wait(1).to({ x: 468.1278, y: 352.8944 }, 0).wait(1).to({ x: 485.9806, y: 352.8889 }, 0).wait(1).to({ x: 503.8333, y: 352.8833 }, 0).wait(1).to({ x: 521.6861, y: 352.8778 }, 0).wait(1).to({ x: 539.5389, y: 352.8722 }, 0).wait(1).to({ x: 557.3917, y: 352.8667 }, 0).wait(1).to({ x: 575.2444, y: 352.8611 }, 0).wait(1).to({ x: 593.0972, y: 352.8556 }, 0).wait(1).to({ x: 610.95, y: 352.85 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 613, y: 353.45 }, 0).wait(62));

		// lithiumIon16
		this.instance_52 = new lib.litiomIon("synched", 0);
		this.instance_52.setTransform(612.65, 393.9, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(180).to({ regY: 0.5, x: 612.75, y: 393.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 598.1435, y: 393.0283 }, 0).wait(1).to({ x: 584.337, y: 393.0065 }, 0).wait(1).to({ x: 570.5304, y: 392.9848 }, 0).wait(1).to({ x: 556.7239, y: 392.963 }, 0).wait(1).to({ x: 542.9174, y: 392.9413 }, 0).wait(1).to({ x: 529.1109, y: 392.9196 }, 0).wait(1).to({ x: 515.3043, y: 392.8978 }, 0).wait(1).to({ x: 501.4978, y: 392.8761 }, 0).wait(1).to({ x: 487.6913, y: 392.8543 }, 0).wait(1).to({ x: 473.8848, y: 392.8326 }, 0).wait(1).to({ x: 460.0783, y: 392.8109 }, 0).wait(1).to({ x: 446.2717, y: 392.7891 }, 0).wait(1).to({ x: 432.4652, y: 392.7674 }, 0).wait(1).to({ x: 418.6587, y: 392.7456 }, 0).wait(1).to({ x: 404.8522, y: 392.7239 }, 0).wait(1).to({ x: 391.0456, y: 392.7022 }, 0).wait(1).to({ x: 377.2391, y: 392.6804 }, 0).wait(1).to({ x: 363.4326, y: 392.6587 }, 0).wait(1).to({ x: 349.6261, y: 392.637 }, 0).wait(1).to({ x: 335.8196, y: 392.6152 }, 0).wait(1).to({ x: 322.013, y: 392.5935 }, 0).wait(1).to({ x: 308.2065, y: 392.5717 }, 0).wait(1).to({ x: 294.4, y: 392.55 }, 0).wait(1).to({ regX: 0.4, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 294.45, y: 393.45 }, 0).wait(169).to({ regX: 0.5, regY: 0.5, x: 294.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 313.5937, y: 392.5812 }, 0).wait(1).to({ x: 333.4375, y: 392.5125 }, 0).wait(1).to({ x: 353.2812, y: 392.4437 }, 0).wait(1).to({ x: 373.125, y: 392.375 }, 0).wait(1).to({ x: 392.9687, y: 392.3062 }, 0).wait(1).to({ x: 412.8125, y: 392.2375 }, 0).wait(1).to({ x: 432.6562, y: 392.1687 }, 0).wait(1).to({ x: 452.5, y: 392.1 }, 0).wait(1).to({ x: 472.3437, y: 392.0312 }, 0).wait(1).to({ x: 492.1875, y: 391.9625 }, 0).wait(1).to({ x: 512.0312, y: 391.8937 }, 0).wait(1).to({ x: 531.875, y: 391.825 }, 0).wait(1).to({ x: 551.7187, y: 391.7562 }, 0).wait(1).to({ x: 571.5625, y: 391.6875 }, 0).wait(1).to({ x: 591.4062, y: 391.6187 }, 0).wait(1).to({ x: 611.25, y: 391.55 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 613, y: 392.25 }, 0).wait(60));

		// lithiumIon17
		this.instance_53 = new lib.litiomIon("synched", 0);
		this.instance_53.setTransform(612.75, 430.4, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(191).to({ regX: 0.6, regY: 0.5, x: 612.7, y: 430.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 597.3182, y: 429.7682 }, 0).wait(1).to({ x: 582.8864, y: 429.7864 }, 0).wait(1).to({ x: 568.4545, y: 429.8045 }, 0).wait(1).to({ x: 554.0227, y: 429.8227 }, 0).wait(1).to({ x: 539.5909, y: 429.8409 }, 0).wait(1).to({ x: 525.1591, y: 429.8591 }, 0).wait(1).to({ x: 510.7273, y: 429.8773 }, 0).wait(1).to({ x: 496.2955, y: 429.8955 }, 0).wait(1).to({ x: 481.8636, y: 429.9136 }, 0).wait(1).to({ x: 467.4318, y: 429.9318 }, 0).wait(1).to({ x: 453, y: 429.95 }, 0).wait(1).to({ x: 438.5682, y: 429.9682 }, 0).wait(1).to({ x: 424.1364, y: 429.9864 }, 0).wait(1).to({ x: 409.7045, y: 430.0045 }, 0).wait(1).to({ x: 395.2727, y: 430.0227 }, 0).wait(1).to({ x: 380.8409, y: 430.0409 }, 0).wait(1).to({ x: 366.4091, y: 430.0591 }, 0).wait(1).to({ x: 351.9773, y: 430.0773 }, 0).wait(1).to({ x: 337.5455, y: 430.0955 }, 0).wait(1).to({ x: 323.1136, y: 430.1136 }, 0).wait(1).to({ x: 308.6818, y: 430.1318 }, 0).wait(1).to({ x: 294.25, y: 430.15 }, 0).wait(1).to({ regX: 0.4, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 294.45, y: 430.1 }, 0).wait(162).to({ regX: 0.5, regY: 0.5, x: 294.55, y: 430.25 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 314.9367, y: 429.45 }, 0).wait(1).to({ x: 336.1233 }, 0).wait(1).to({ x: 357.31 }, 0).wait(1).to({ x: 378.4967 }, 0).wait(1).to({ x: 399.6833 }, 0).wait(1).to({ x: 420.87 }, 0).wait(1).to({ x: 442.0567 }, 0).wait(1).to({ x: 463.2433 }, 0).wait(1).to({ x: 484.43 }, 0).wait(1).to({ x: 505.6167 }, 0).wait(1).to({ x: 526.8033 }, 0).wait(1).to({ x: 547.99 }, 0).wait(1).to({ x: 569.1767 }, 0).wait(1).to({ x: 590.3633 }, 0).wait(1).to({ x: 611.55 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 613, y: 430.1 }, 0).wait(58));

		// lithiumIon18
		this.instance_54 = new lib.litiomIon("synched", 0);
		this.instance_54.setTransform(612.35, 468.75, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(204).to({ regY: 0.5, y: 468.8 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 597.1318, y: 467.9568 }, 0).wait(1).to({ x: 582.7136, y: 467.9136 }, 0).wait(1).to({ x: 568.2955, y: 467.8705 }, 0).wait(1).to({ x: 553.8773, y: 467.8273 }, 0).wait(1).to({ x: 539.4591, y: 467.7841 }, 0).wait(1).to({ x: 525.0409, y: 467.7409 }, 0).wait(1).to({ x: 510.6227, y: 467.6977 }, 0).wait(1).to({ x: 496.2045, y: 467.6545 }, 0).wait(1).to({ x: 481.7864, y: 467.6114 }, 0).wait(1).to({ x: 467.3682, y: 467.5682 }, 0).wait(1).to({ x: 452.95, y: 467.525 }, 0).wait(1).to({ x: 438.5318, y: 467.4818 }, 0).wait(1).to({ x: 424.1136, y: 467.4386 }, 0).wait(1).to({ x: 409.6955, y: 467.3955 }, 0).wait(1).to({ x: 395.2773, y: 467.3523 }, 0).wait(1).to({ x: 380.8591, y: 467.3091 }, 0).wait(1).to({ x: 366.4409, y: 467.2659 }, 0).wait(1).to({ x: 352.0227, y: 467.2227 }, 0).wait(1).to({ x: 337.6045, y: 467.1795 }, 0).wait(1).to({ x: 323.1864, y: 467.1364 }, 0).wait(1).to({ x: 308.7682, y: 467.0932 }, 0).wait(1).to({ x: 294.35, y: 467.05 }, 0).wait(1).to({ regX: 0.4, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 294.45, y: 467.8 }, 0).wait(153).to({ regX: 0.5, regY: 0.5, x: 294.55, y: 467.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 314.7, y: 467.05 }, 0).wait(1).to({ x: 335.65 }, 0).wait(1).to({ x: 356.6 }, 0).wait(1).to({ x: 377.55 }, 0).wait(1).to({ x: 398.5 }, 0).wait(1).to({ x: 419.45 }, 0).wait(1).to({ x: 440.4 }, 0).wait(1).to({ x: 461.35 }, 0).wait(1).to({ x: 482.3 }, 0).wait(1).to({ x: 503.25 }, 0).wait(1).to({ x: 524.2 }, 0).wait(1).to({ x: 545.15 }, 0).wait(1).to({ x: 566.1 }, 0).wait(1).to({ x: 587.05 }, 0).wait(1).to({ x: 608 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 614.25, y: 467.8 }, 0).wait(54));

		// lithiumIon19
		this.instance_55 = new lib.litiomIon("synched", 0);
		this.instance_55.setTransform(657.8, 275.2, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(214).to({ regY: 0.5, y: 275.3 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 643.7437, y: 274.4917 }, 0).wait(1).to({ x: 630.4875, y: 274.4833 }, 0).wait(1).to({ x: 617.2312, y: 274.475 }, 0).wait(1).to({ x: 603.975, y: 274.4667 }, 0).wait(1).to({ x: 590.7187, y: 274.4583 }, 0).wait(1).to({ x: 577.4625, y: 274.45 }, 0).wait(1).to({ x: 564.2062, y: 274.4417 }, 0).wait(1).to({ x: 550.95, y: 274.4333 }, 0).wait(1).to({ x: 537.6937, y: 274.425 }, 0).wait(1).to({ x: 524.4375, y: 274.4167 }, 0).wait(1).to({ x: 511.1812, y: 274.4083 }, 0).wait(1).to({ x: 497.925, y: 274.4 }, 0).wait(1).to({ x: 484.6687, y: 274.3917 }, 0).wait(1).to({ x: 471.4125, y: 274.3833 }, 0).wait(1).to({ x: 458.1562, y: 274.375 }, 0).wait(1).to({ x: 444.9, y: 274.3667 }, 0).wait(1).to({ x: 431.6437, y: 274.3583 }, 0).wait(1).to({ x: 418.3875, y: 274.35 }, 0).wait(1).to({ x: 405.1312, y: 274.3417 }, 0).wait(1).to({ x: 391.875, y: 274.3333 }, 0).wait(1).to({ x: 378.6187, y: 274.325 }, 0).wait(1).to({ x: 365.3625, y: 274.3167 }, 0).wait(1).to({ x: 352.1062, y: 274.3083 }, 0).wait(1).to({ x: 338.85, y: 274.3 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.95, y: 275.05 }, 0).wait(146).to({ regY: 0.5, y: 275.2 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 356.8765, y: 274.4 }, 0).wait(1).to({ x: 375.6029 }, 0).wait(1).to({ x: 394.3294 }, 0).wait(1).to({ x: 413.0559 }, 0).wait(1).to({ x: 431.7824 }, 0).wait(1).to({ x: 450.5088 }, 0).wait(1).to({ x: 469.2353 }, 0).wait(1).to({ x: 487.9618 }, 0).wait(1).to({ x: 506.6882 }, 0).wait(1).to({ x: 525.4147 }, 0).wait(1).to({ x: 544.1412 }, 0).wait(1).to({ x: 562.8676 }, 0).wait(1).to({ x: 581.5941 }, 0).wait(1).to({ x: 600.3206 }, 0).wait(1).to({ x: 619.0471 }, 0).wait(1).to({ x: 637.7735 }, 0).wait(1).to({ x: 656.5 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 275.05 }, 0).wait(47));

		// lithiumIon20
		this.instance_56 = new lib.litiomIon("synched", 0);
		this.instance_56.setTransform(656.95, 314.15, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(227).to({ regY: 0.6 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 642.9, y: 313.2125 }, 0).wait(1).to({ x: 629.65, y: 313.225 }, 0).wait(1).to({ x: 616.4, y: 313.2375 }, 0).wait(1).to({ x: 603.15, y: 313.25 }, 0).wait(1).to({ x: 589.9, y: 313.2625 }, 0).wait(1).to({ x: 576.65, y: 313.275 }, 0).wait(1).to({ x: 563.4, y: 313.2875 }, 0).wait(1).to({ x: 550.15, y: 313.3 }, 0).wait(1).to({ x: 536.9, y: 313.3125 }, 0).wait(1).to({ x: 523.65, y: 313.325 }, 0).wait(1).to({ x: 510.4, y: 313.3375 }, 0).wait(1).to({ x: 497.15, y: 313.35 }, 0).wait(1).to({ x: 483.9, y: 313.3625 }, 0).wait(1).to({ x: 470.65, y: 313.375 }, 0).wait(1).to({ x: 457.4, y: 313.3875 }, 0).wait(1).to({ x: 444.15, y: 313.4 }, 0).wait(1).to({ x: 430.9, y: 313.4125 }, 0).wait(1).to({ x: 417.65, y: 313.425 }, 0).wait(1).to({ x: 404.4, y: 313.4375 }, 0).wait(1).to({ x: 391.15, y: 313.45 }, 0).wait(1).to({ x: 377.9, y: 313.4625 }, 0).wait(1).to({ x: 364.65, y: 313.475 }, 0).wait(1).to({ x: 351.4, y: 313.4875 }, 0).wait(1).to({ x: 338.15, y: 313.5 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.95, y: 314.4 }, 0).wait(139).to({ regY: 0.5, y: 314.55 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 353.2714, y: 313.7429 }, 0).wait(1).to({ x: 368.3929, y: 313.7357 }, 0).wait(1).to({ x: 383.5143, y: 313.7286 }, 0).wait(1).to({ x: 398.6357, y: 313.7214 }, 0).wait(1).to({ x: 413.7571, y: 313.7143 }, 0).wait(1).to({ x: 428.8786, y: 313.7071 }, 0).wait(1).to({ x: 444, y: 313.7 }, 0).wait(1).to({ x: 459.1214, y: 313.6929 }, 0).wait(1).to({ x: 474.2429, y: 313.6857 }, 0).wait(1).to({ x: 489.3643, y: 313.6786 }, 0).wait(1).to({ x: 504.4857, y: 313.6714 }, 0).wait(1).to({ x: 519.6071, y: 313.6643 }, 0).wait(1).to({ x: 534.7286, y: 313.6571 }, 0).wait(1).to({ x: 549.85, y: 313.65 }, 0).wait(1).to({ x: 564.9714, y: 313.6429 }, 0).wait(1).to({ x: 580.0929, y: 313.6357 }, 0).wait(1).to({ x: 595.2143, y: 313.6286 }, 0).wait(1).to({ x: 610.3357, y: 313.6214 }, 0).wait(1).to({ x: 625.4571, y: 313.6143 }, 0).wait(1).to({ x: 640.5786, y: 313.6071 }, 0).wait(1).to({ x: 655.7, y: 313.6 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 314.35 }, 0).wait(37));

		// lithiumIon21
		this.instance_57 = new lib.litiomIon("synched", 0);
		this.instance_57.setTransform(657.3, 354.95, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(239).to({ regY: 0.5, x: 613, y: 355.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 600.8021, y: 354.95 }, 0).wait(1).to({ x: 589.4042 }, 0).wait(1).to({ x: 578.0062 }, 0).wait(1).to({ x: 566.6083 }, 0).wait(1).to({ x: 555.2104 }, 0).wait(1).to({ x: 543.8125 }, 0).wait(1).to({ x: 532.4146 }, 0).wait(1).to({ x: 521.0167 }, 0).wait(1).to({ x: 509.6187 }, 0).wait(1).to({ x: 498.2208 }, 0).wait(1).to({ x: 486.8229 }, 0).wait(1).to({ x: 475.425 }, 0).wait(1).to({ x: 464.0271 }, 0).wait(1).to({ x: 452.6292 }, 0).wait(1).to({ x: 441.2312 }, 0).wait(1).to({ x: 429.8333 }, 0).wait(1).to({ x: 418.4354 }, 0).wait(1).to({ x: 407.0375 }, 0).wait(1).to({ x: 395.6396 }, 0).wait(1).to({ x: 384.2417 }, 0).wait(1).to({ x: 372.8437 }, 0).wait(1).to({ x: 361.4458 }, 0).wait(1).to({ x: 350.0479 }, 0).wait(1).to({ x: 338.65 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.95, y: 355.6 }, 0).wait(133).to({ regY: 0.5, y: 355.75 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 352.5841, y: 354.8864 }, 0).wait(1).to({ x: 367.0182, y: 354.8227 }, 0).wait(1).to({ x: 381.4523, y: 354.7591 }, 0).wait(1).to({ x: 395.8864, y: 354.6955 }, 0).wait(1).to({ x: 410.3205, y: 354.6318 }, 0).wait(1).to({ x: 424.7545, y: 354.5682 }, 0).wait(1).to({ x: 439.1886, y: 354.5045 }, 0).wait(1).to({ x: 453.6227, y: 354.4409 }, 0).wait(1).to({ x: 468.0568, y: 354.3773 }, 0).wait(1).to({ x: 482.4909, y: 354.3136 }, 0).wait(1).to({ x: 496.925, y: 354.25 }, 0).wait(1).to({ x: 511.3591, y: 354.1864 }, 0).wait(1).to({ x: 525.7932, y: 354.1227 }, 0).wait(1).to({ x: 540.2273, y: 354.0591 }, 0).wait(1).to({ x: 554.6614, y: 353.9955 }, 0).wait(1).to({ x: 569.0955, y: 353.9318 }, 0).wait(1).to({ x: 583.5295, y: 353.8682 }, 0).wait(1).to({ x: 597.9636, y: 353.8045 }, 0).wait(1).to({ x: 612.3977, y: 353.7409 }, 0).wait(1).to({ x: 626.8318, y: 353.6773 }, 0).wait(1).to({ x: 641.2659, y: 353.6136 }, 0).wait(1).to({ x: 655.7, y: 353.55 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 353.45 }, 0).wait(30));

		// lithiumIon22
		this.instance_58 = new lib.litiomIon("synched", 0);
		this.instance_58.setTransform(657.25, 393.8, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(252).to({ regX: 0.7, regY: 0.5, y: 393.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 642.9167, y: 393.0625 }, 0).wait(1).to({ x: 629.6833, y: 393.075 }, 0).wait(1).to({ x: 616.45, y: 393.0875 }, 0).wait(1).to({ x: 603.2167, y: 393.1 }, 0).wait(1).to({ x: 589.9833, y: 393.1125 }, 0).wait(1).to({ x: 576.75, y: 393.125 }, 0).wait(1).to({ x: 563.5167, y: 393.1375 }, 0).wait(1).to({ x: 550.2833, y: 393.15 }, 0).wait(1).to({ x: 537.05, y: 393.1625 }, 0).wait(1).to({ x: 523.8167, y: 393.175 }, 0).wait(1).to({ x: 510.5833, y: 393.1875 }, 0).wait(1).to({ x: 497.35, y: 393.2 }, 0).wait(1).to({ x: 484.1167, y: 393.2125 }, 0).wait(1).to({ x: 470.8833, y: 393.225 }, 0).wait(1).to({ x: 457.65, y: 393.2375 }, 0).wait(1).to({ x: 444.4167, y: 393.25 }, 0).wait(1).to({ x: 431.1833, y: 393.2625 }, 0).wait(1).to({ x: 417.95, y: 393.275 }, 0).wait(1).to({ x: 404.7167, y: 393.2875 }, 0).wait(1).to({ x: 391.4833, y: 393.3 }, 0).wait(1).to({ x: 378.25, y: 393.3125 }, 0).wait(1).to({ x: 365.0167, y: 393.325 }, 0).wait(1).to({ x: 351.7833, y: 393.3375 }, 0).wait(1).to({ x: 338.55, y: 393.35 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 338.95, y: 394.1 }, 0).wait(127).to({ regY: 0.5, y: 394.15 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 353.2714, y: 393.2619 }, 0).wait(1).to({ x: 368.3929, y: 393.1738 }, 0).wait(1).to({ x: 383.5143, y: 393.0857 }, 0).wait(1).to({ x: 398.6357, y: 392.9976 }, 0).wait(1).to({ x: 413.7571, y: 392.9095 }, 0).wait(1).to({ x: 428.8786, y: 392.8214 }, 0).wait(1).to({ x: 444, y: 392.7333 }, 0).wait(1).to({ x: 459.1214, y: 392.6452 }, 0).wait(1).to({ x: 474.2429, y: 392.5571 }, 0).wait(1).to({ x: 489.3643, y: 392.469 }, 0).wait(1).to({ x: 504.4857, y: 392.381 }, 0).wait(1).to({ x: 519.6071, y: 392.2929 }, 0).wait(1).to({ x: 534.7286, y: 392.2048 }, 0).wait(1).to({ x: 549.85, y: 392.1167 }, 0).wait(1).to({ x: 564.9714, y: 392.0286 }, 0).wait(1).to({ x: 580.0929, y: 391.9405 }, 0).wait(1).to({ x: 595.2143, y: 391.8524 }, 0).wait(1).to({ x: 610.3357, y: 391.7643 }, 0).wait(1).to({ x: 625.4571, y: 391.6762 }, 0).wait(1).to({ x: 640.5786, y: 391.5881 }, 0).wait(1).to({ x: 655.7, y: 391.5 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 392.25 }, 0).wait(24));

		// lithiumIon23
		this.instance_59 = new lib.litiomIon("synched", 0);
		this.instance_59.setTransform(657.25, 430.25, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(264).to({ regX: 0.7, regY: 0.5, y: 430.4 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 641.7273, y: 429.5909 }, 0).wait(1).to({ x: 627.3045, y: 429.5818 }, 0).wait(1).to({ x: 612.8818, y: 429.5727 }, 0).wait(1).to({ x: 598.4591, y: 429.5636 }, 0).wait(1).to({ x: 584.0364, y: 429.5545 }, 0).wait(1).to({ x: 569.6136, y: 429.5455 }, 0).wait(1).to({ x: 555.1909, y: 429.5364 }, 0).wait(1).to({ x: 540.7682, y: 429.5273 }, 0).wait(1).to({ x: 526.3455, y: 429.5182 }, 0).wait(1).to({ x: 511.9227, y: 429.5091 }, 0).wait(1).to({ x: 497.5, y: 429.5 }, 0).wait(1).to({ x: 483.0773, y: 429.4909 }, 0).wait(1).to({ x: 468.6545, y: 429.4818 }, 0).wait(1).to({ x: 454.2318, y: 429.4727 }, 0).wait(1).to({ x: 439.8091, y: 429.4636 }, 0).wait(1).to({ x: 425.3864, y: 429.4545 }, 0).wait(1).to({ x: 410.9636, y: 429.4455 }, 0).wait(1).to({ x: 396.5409, y: 429.4364 }, 0).wait(1).to({ x: 382.1182, y: 429.4273 }, 0).wait(1).to({ x: 367.6955, y: 429.4182 }, 0).wait(1).to({ x: 353.2727, y: 429.4091 }, 0).wait(1).to({ x: 338.85, y: 429.4 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.95, y: 430.1 }, 0).wait(123).to({ regY: 0.5, y: 430.25 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 354.0275, y: 429.45 }, 0).wait(1).to({ x: 369.905 }, 0).wait(1).to({ x: 385.7825 }, 0).wait(1).to({ x: 401.66 }, 0).wait(1).to({ x: 417.5375 }, 0).wait(1).to({ x: 433.415 }, 0).wait(1).to({ x: 449.2925 }, 0).wait(1).to({ x: 465.17 }, 0).wait(1).to({ x: 481.0475 }, 0).wait(1).to({ x: 496.925 }, 0).wait(1).to({ x: 512.8025 }, 0).wait(1).to({ x: 528.68 }, 0).wait(1).to({ x: 544.5575 }, 0).wait(1).to({ x: 560.435 }, 0).wait(1).to({ x: 576.3125 }, 0).wait(1).to({ x: 592.19 }, 0).wait(1).to({ x: 608.0675 }, 0).wait(1).to({ x: 623.945 }, 0).wait(1).to({ x: 639.8225 }, 0).wait(1).to({ x: 655.7 }, 0).wait(1).to({ regX: 0.5, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 430.1 }, 0).wait(19));

		// lithiumIon24
		this.instance_60 = new lib.litiomIon("synched", 0);
		this.instance_60.setTransform(657.3, 468.85, 1.5999, 1.5999, 0, 0, 0, 0.5, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(277).to({ regY: 0.5, y: 468.8 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 641.3714, y: 467.9524 }, 0).wait(1).to({ x: 626.2429, y: 467.9048 }, 0).wait(1).to({ x: 611.1143, y: 467.8571 }, 0).wait(1).to({ x: 595.9857, y: 467.8095 }, 0).wait(1).to({ x: 580.8571, y: 467.7619 }, 0).wait(1).to({ x: 565.7286, y: 467.7143 }, 0).wait(1).to({ x: 550.6, y: 467.6667 }, 0).wait(1).to({ x: 535.4714, y: 467.619 }, 0).wait(1).to({ x: 520.3429, y: 467.5714 }, 0).wait(1).to({ x: 505.2143, y: 467.5238 }, 0).wait(1).to({ x: 490.0857, y: 467.4762 }, 0).wait(1).to({ x: 474.9571, y: 467.4286 }, 0).wait(1).to({ x: 459.8286, y: 467.381 }, 0).wait(1).to({ x: 444.7, y: 467.3333 }, 0).wait(1).to({ x: 429.5714, y: 467.2857 }, 0).wait(1).to({ x: 414.4429, y: 467.2381 }, 0).wait(1).to({ x: 399.3143, y: 467.1905 }, 0).wait(1).to({ x: 384.1857, y: 467.1429 }, 0).wait(1).to({ x: 369.0571, y: 467.0952 }, 0).wait(1).to({ x: 353.9286, y: 467.0476 }, 0).wait(1).to({ x: 338.8, y: 467 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 339.3, y: 467.8 }, 0).wait(117).to({ regY: 0.5, y: 467.85 }, 0).wait(1).to({ regX: 0, regY: 0, scaleX: 1.6, scaleY: 1.6, x: 355.1974, y: 467.05 }, 0).wait(1).to({ x: 371.8947 }, 0).wait(1).to({ x: 388.5921 }, 0).wait(1).to({ x: 405.2895 }, 0).wait(1).to({ x: 421.9868 }, 0).wait(1).to({ x: 438.6842 }, 0).wait(1).to({ x: 455.3816 }, 0).wait(1).to({ x: 472.0789 }, 0).wait(1).to({ x: 488.7763 }, 0).wait(1).to({ x: 505.4737 }, 0).wait(1).to({ x: 522.1711 }, 0).wait(1).to({ x: 538.8684 }, 0).wait(1).to({ x: 555.5658 }, 0).wait(1).to({ x: 572.2632 }, 0).wait(1).to({ x: 588.9605 }, 0).wait(1).to({ x: 605.6579 }, 0).wait(1).to({ x: 622.3553 }, 0).wait(1).to({ x: 639.0526 }, 0).wait(1).to({ x: 655.75 }, 0).wait(1).to({ regX: 0.5, regY: 0.4, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 467.8 }, 0).wait(14));

		// electron01
		this.instance_61 = new lib.electron("synched", 0);
		this.instance_61.setTransform(524.55, 276, 1.5999, 1.5999, 0, 0, 0, 9.2, 0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 600.85, y: 295.65 }, 0).wait(1).to({ x: 677.5, y: 315.55 }, 0).wait(1).to({ x: 754.05, y: 335.35 }, 0).wait(1).to({ x: 830.75, y: 355.2 }, 0).wait(1).to({ x: 862.2, y: 316.7 }, 0).wait(1).to({ x: 862.1, y: 237.6 }, 0).wait(1).to({ x: 845.25, y: 175.15 }, 0).wait(1).to({ x: 766.1 }, 0).wait(1).to({ x: 687 }, 0).wait(1).to({ x: 607.75 }, 0).wait(1).to({ x: 528.6 }, 0).wait(1).to({ x: 449.35 }, 0).wait(1).to({ x: 370.25 }, 0).wait(1).to({ x: 291.05 }, 0).wait(1).to({ x: 211.95 }, 0).wait(1).to({ x: 132.7 }, 0).wait(1).to({ x: 53.55 }, 0).wait(1).to({ x: 34.75, y: 235.95 }, 0).wait(1).to({ x: 34.15, y: 315.2 }, 0).wait(1).to({ x: 64.55, y: 344.9 }, 0).wait(1).to({ x: 135.55, y: 309.75 }, 0).wait(1).to({ x: 206.5, y: 274.6 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 205.35, y: 275.9 }, 0).wait(293).to({ regY: 0.5, y: 276 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 133.95, y: 310.6 }, 0).wait(1).to({ x: 62.8, y: 345.35 }, 0).wait(1).to({ x: 33.5, y: 313.4 }, 0).wait(1).to({ x: 34.1, y: 234.2 }, 0).wait(1).to({ x: 54, y: 174.35 }, 0).wait(1).to({ x: 133.3 }, 0).wait(1).to({ x: 212.5, y: 174.4 }, 0).wait(1).to({ x: 291.85 }, 0).wait(1).to({ x: 371.1, y: 174.45 }, 0).wait(1).to({ x: 450.35 }, 0).wait(1).to({ x: 529.55 }, 0).wait(1).to({ x: 608.9, y: 174.5 }, 0).wait(1).to({ x: 688.1 }, 0).wait(1).to({ x: 767.45, y: 174.55 }, 0).wait(1).to({ x: 846.7 }, 0).wait(1).to({ x: 862, y: 238.6 }, 0).wait(1).to({ x: 862.05, y: 317.85 }, 0).wait(1).to({ x: 828.8, y: 354.05 }, 0).wait(1).to({ x: 752.2, y: 333.9 }, 0).wait(1).to({ x: 675.55, y: 313.75 }, 0).wait(1).to({ x: 598.85, y: 293.6 }, 0).wait(1).to({ x: 522.1, y: 273.4 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 524.45, y: 275.45 }, 0).wait(111));

		// electron02
		this.instance_62 = new lib.electron("synched", 0);
		this.instance_62.setTransform(524.1, 314.15, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(10).to({ regX: 9.2, regY: 0.6, x: 524.05 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 598.1, y: 324.65 }, 0).wait(1).to({ x: 672.55, y: 335.5 }, 0).wait(1).to({ x: 746.9, y: 346.3 }, 0).wait(1).to({ x: 821.35, y: 357.15 }, 0).wait(1).to({ x: 862.3, y: 329.35 }, 0).wait(1).to({ x: 862.25, y: 254.1 }, 0).wait(1).to({ x: 862.2, y: 178.9 }, 0).wait(1).to({ x: 790.9, y: 175 }, 0).wait(1).to({ x: 715.7 }, 0).wait(1).to({ x: 640.55 }, 0).wait(1).to({ x: 565.35 }, 0).wait(1).to({ x: 490.15 }, 0).wait(1).to({ x: 414.9 }, 0).wait(1).to({ x: 339.75 }, 0).wait(1).to({ x: 264.6 }, 0).wait(1).to({ x: 189.35 }, 0).wait(1).to({ x: 114.1 }, 0).wait(1).to({ x: 38.9 }, 0).wait(1).to({ x: 35.5, y: 246.3 }, 0).wait(1).to({ x: 36, y: 321.6 }, 0).wait(1).to({ x: 62.4, y: 360.7 }, 0).wait(1).to({ x: 133.85, y: 337.3 }, 0).wait(1).to({ x: 205.35, y: 313.85 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, y: 314.15 }, 0).wait(286).to({ regY: 0.6 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 129.6, y: 333.8 }, 0).wait(1).to({ x: 53.9, y: 353.8 }, 0).wait(1).to({ x: 33.6, y: 302.5 }, 0).wait(1).to({ x: 34.15, y: 224.3 }, 0).wait(1).to({ x: 62.45, y: 173.9 }, 0).wait(1).to({ x: 140.65, y: 173.95 }, 0).wait(1).to({ x: 218.85 }, 0).wait(1).to({ x: 297.15, y: 174 }, 0).wait(1).to({ x: 375.45, y: 174.05 }, 0).wait(1).to({ x: 453.6, y: 174.1 }, 0).wait(1).to({ x: 531.85 }, 0).wait(1).to({ x: 610.15, y: 174.15 }, 0).wait(1).to({ x: 688.45, y: 174.2 }, 0).wait(1).to({ x: 766.65, y: 174.25 }, 0).wait(1).to({ x: 844.95 }, 0).wait(1).to({ x: 861.95, y: 235.5 }, 0).wait(1).to({ x: 862.05, y: 313.8 }, 0).wait(1).to({ x: 832.8, y: 358.25 }, 0).wait(1).to({ x: 755.3, y: 347.2 }, 0).wait(1).to({ x: 677.9, y: 336.2 }, 0).wait(1).to({ x: 600.4, y: 325.15 }, 0).wait(1).to({ x: 522.85, y: 314.1 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 524.75, y: 313.5 }, 0).wait(107));

		// electron03
		this.instance_63 = new lib.electron("synched", 0);
		this.instance_63.setTransform(524.8, 355.65, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(23).to({ regX: 9.2, regY: 0.5, x: 524.85, y: 355.75 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 598.8, y: 357.3 }, 0).wait(1).to({ x: 673.05, y: 359 }, 0).wait(1).to({ x: 747.4, y: 360.7 }, 0).wait(1).to({ x: 821.7, y: 362.45 }, 0).wait(1).to({ x: 862.35, y: 329.75 }, 0).wait(1).to({ x: 862.3, y: 255.45 }, 0).wait(1).to({ x: 862.25, y: 181.05 }, 0).wait(1).to({ x: 793.8, y: 175.15 }, 0).wait(1).to({ x: 719.5 }, 0).wait(1).to({ x: 645.2 }, 0).wait(1).to({ x: 570.85 }, 0).wait(1).to({ x: 496.55 }, 0).wait(1).to({ x: 422.2, y: 175.2 }, 0).wait(1).to({ x: 347.85 }, 0).wait(1).to({ x: 273.5 }, 0).wait(1).to({ x: 199.2 }, 0).wait(1).to({ x: 124.9 }, 0).wait(1).to({ x: 50.55 }, 0).wait(1).to({ x: 34.95, y: 234.4 }, 0).wait(1).to({ x: 34.4, y: 308.75 }, 0).wait(1).to({ x: 57, y: 359.1 }, 0).wait(1).to({ x: 131.3, y: 356.35 }, 0).wait(1).to({ x: 205.6, y: 353.6 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 206.3, y: 354.85 }, 0).wait(277).to({ regX: 9.2, regY: 0.5, y: 354.95 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 128.35, y: 357.15 }, 0).wait(1).to({ x: 50.65, y: 359.5 }, 0).wait(1).to({ x: 34.2, y: 299.2 }, 0).wait(1).to({ x: 34.8, y: 221.45 }, 0).wait(1).to({ x: 66.45, y: 175.05 }, 0).wait(1).to({ x: 144.2 }, 0).wait(1).to({ x: 221.85 }, 0).wait(1).to({ x: 299.65 }, 0).wait(1).to({ x: 377.4 }, 0).wait(1).to({ x: 455.1, y: 175.1 }, 0).wait(1).to({ x: 532.8 }, 0).wait(1).to({ x: 610.55 }, 0).wait(1).to({ x: 688.25 }, 0).wait(1).to({ x: 766 }, 0).wait(1).to({ x: 843.75 }, 0).wait(1).to({ x: 862.25, y: 234.3 }, 0).wait(1).to({ x: 862.35, y: 312.05 }, 0).wait(1).to({ x: 835.9, y: 362.7 }, 0).wait(1).to({ x: 758.25, y: 360.8 }, 0).wait(1).to({ x: 680.5, y: 358.95 }, 0).wait(1).to({ x: 602.8, y: 357.1 }, 0).wait(1).to({ x: 525, y: 355.2 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 524.4, y: 354.45 }, 0).wait(103));

		// electron04
		this.instance_64 = new lib.electron("synched", 0);
		this.instance_64.setTransform(524.8, 393.45, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(33).to({ regX: 9.2, regY: 0.5, x: 524.85 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 595.5, y: 387 }, 0).wait(1).to({ x: 666.5, y: 380.75 }, 0).wait(1).to({ x: 737.5, y: 374.5 }, 0).wait(1).to({ x: 808.5, y: 368.25 }, 0).wait(1).to({ x: 862.35, y: 346.3 }, 0).wait(1).to({ x: 862.3, y: 275 }, 0).wait(1).to({ x: 862.25, y: 203.7 }, 0).wait(1).to({ x: 819.35, y: 175.3 }, 0).wait(1).to({ x: 748.15 }, 0).wait(1).to({ x: 676.8 }, 0).wait(1).to({ x: 605.55 }, 0).wait(1).to({ x: 534.25 }, 0).wait(1).to({ x: 462.95 }, 0).wait(1).to({ x: 391.65 }, 0).wait(1).to({ x: 320.4 }, 0).wait(1).to({ x: 249.1 }, 0).wait(1).to({ x: 177.9 }, 0).wait(1).to({ x: 106.55 }, 0).wait(1).to({ x: 35.4, y: 175.5 }, 0).wait(1).to({ x: 34.85, y: 246.8 }, 0).wait(1).to({ x: 34.3, y: 318 }, 0).wait(1).to({ x: 62.65, y: 365.4 }, 0).wait(1).to({ x: 132.8, y: 378.35 }, 0).wait(1).to({ x: 202.9, y: 391.25 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 203.9, y: 393.45 }, 0).wait(270).to({ regX: 9.2, regY: 0.5 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 127.3, y: 378.4 }, 0).wait(1).to({ x: 51, y: 363.55 }, 0).wait(1).to({ x: 34.2, y: 300 }, 0).wait(1).to({ x: 34.7, y: 222.2 }, 0).wait(1).to({ x: 65.75, y: 175.2 }, 0).wait(1).to({ x: 143.45 }, 0).wait(1).to({ x: 221.25 }, 0).wait(1).to({ x: 299 }, 0).wait(1).to({ x: 376.7 }, 0).wait(1).to({ x: 454.5, y: 175.25 }, 0).wait(1).to({ x: 532.25 }, 0).wait(1).to({ x: 610.05 }, 0).wait(1).to({ x: 687.7 }, 0).wait(1).to({ x: 765.55 }, 0).wait(1).to({ x: 843.3 }, 0).wait(1).to({ x: 862.2, y: 234.2 }, 0).wait(1).to({ x: 862.25, y: 311.9 }, 0).wait(1).to({ x: 836.25, y: 365.9 }, 0).wait(1).to({ x: 758.85, y: 372.9 }, 0).wait(1).to({ x: 681.5, y: 379.95 }, 0).wait(1).to({ x: 603.95, y: 387 }, 0).wait(1).to({ x: 526.5, y: 394 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 524.3, y: 392.85 }, 0).wait(99));

		// electron05
		this.instance_65 = new lib.electron("synched", 0);
		this.instance_65.setTransform(524.45, 429, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(47).to({ regY: 0.5, x: 524.4, y: 429.85 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 598.05, y: 415.25 }, 0).wait(1).to({ x: 671.95, y: 400.8 }, 0).wait(1).to({ x: 745.8, y: 386.4 }, 0).wait(1).to({ x: 819.65, y: 371.95 }, 0).wait(1).to({ x: 862.45, y: 331.95 }, 0).wait(1).to({ x: 862.4, y: 256.7 }, 0).wait(1).to({ x: 862.35, y: 181.4 }, 0).wait(1).to({ x: 793.1, y: 175.4 }, 0).wait(1).to({ x: 717.75 }, 0).wait(1).to({ x: 642.6 }, 0).wait(1).to({ x: 567.25 }, 0).wait(1).to({ x: 492 }, 0).wait(1).to({ x: 416.8 }, 0).wait(1).to({ x: 341.45 }, 0).wait(1).to({ x: 266.2 }, 0).wait(1).to({ x: 190.95 }, 0).wait(1).to({ x: 115.7 }, 0).wait(1).to({ x: 40.4 }, 0).wait(1).to({ x: 34.85, y: 245.7 }, 0).wait(1).to({ x: 34.2, y: 321 }, 0).wait(1).to({ x: 67.2, y: 373.8 }, 0).wait(1).to({ x: 137, y: 402.1 }, 0).wait(1).to({ x: 206.75, y: 430.35 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 205.6, y: 430.4 }, 0).wait(261).to({ regX: 9.2, regY: 0.5, y: 430.55 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 132.6, y: 400.6 }, 0).wait(1).to({ x: 59.85, y: 370.75 }, 0).wait(1).to({ x: 34.25, y: 309.7 }, 0).wait(1).to({ x: 35.1, y: 231.15 }, 0).wait(1).to({ x: 59.1, y: 175.9 }, 0).wait(1).to({ x: 137.6, y: 175.85 }, 0).wait(1).to({ x: 216.3, y: 175.8 }, 0).wait(1).to({ x: 294.8, y: 175.7 }, 0).wait(1).to({ x: 373.5, y: 175.65 }, 0).wait(1).to({ x: 452, y: 175.6 }, 0).wait(1).to({ x: 530.6, y: 175.55 }, 0).wait(1).to({ x: 609.2, y: 175.45 }, 0).wait(1).to({ x: 687.8, y: 175.4 }, 0).wait(1).to({ x: 766.4, y: 175.35 }, 0).wait(1).to({ x: 845.05, y: 175.3 }, 0).wait(1).to({ x: 862.35, y: 236.6 }, 0).wait(1).to({ x: 862.4, y: 315.15 }, 0).wait(1).to({ x: 832.75, y: 369.4 }, 0).wait(1).to({ x: 755.65, y: 384.6 }, 0).wait(1).to({ x: 678.6, y: 399.8 }, 0).wait(1).to({ x: 601.45, y: 415 }, 0).wait(1).to({ x: 524.25, y: 430.2 }, 0).wait(1).to({ regX: 9.1, regY: 0.2, scaleX: 1.5999, scaleY: 1.5999, x: 524.45, y: 429.3 }, 0).wait(95));

		// electron06
		this.instance_66 = new lib.electron("synched", 0);
		this.instance_66.setTransform(524.1, 468.55, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(58).to({ regY: 0.5, x: 524.4, y: 466 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 591.45, y: 445.5 }, 0).wait(1).to({ x: 658.8, y: 425.15 }, 0).wait(1).to({ x: 726.15, y: 404.75 }, 0).wait(1).to({ x: 793.5, y: 384.4 }, 0).wait(1).to({ x: 860.8, y: 364.05 }, 0).wait(1).to({ x: 862.4, y: 295 }, 0).wait(1).to({ x: 862.35, y: 224.7 }, 0).wait(1).to({ x: 841.3, y: 175.35 }, 0).wait(1).to({ x: 770.95 }, 0).wait(1).to({ x: 700.65 }, 0).wait(1).to({ x: 630.3 }, 0).wait(1).to({ x: 560.05 }, 0).wait(1).to({ x: 489.7 }, 0).wait(1).to({ x: 419.35 }, 0).wait(1).to({ x: 349.1 }, 0).wait(1).to({ x: 278.7 }, 0).wait(1).to({ x: 208.4 }, 0).wait(1).to({ x: 138.05 }, 0).wait(1).to({ x: 67.7 }, 0).wait(1).to({ x: 35.15, y: 213.4 }, 0).wait(1).to({ x: 34.55, y: 283.8 }, 0).wait(1).to({ x: 33.95, y: 354.15 }, 0).wait(1).to({ x: 88.15, y: 394.55 }, 0).wait(1).to({ x: 147.55, y: 432.15 }, 0).wait(1).to({ x: 207, y: 469.75 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 206.3, y: 468.55 }, 0).wait(252).to({ regX: 9.2, regY: 0.5, y: 468.2 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 141.25, y: 427.4 }, 0).wait(1).to({ x: 76.6, y: 386.8 }, 0).wait(1).to({ x: 34.05, y: 334 }, 0).wait(1).to({ x: 34.85, y: 257.6 }, 0).wait(1).to({ x: 35.6, y: 181.15 }, 0).wait(1).to({ x: 106.75, y: 175.7 }, 0).wait(1).to({ x: 183.2, y: 175.65 }, 0).wait(1).to({ x: 259.5, y: 175.6 }, 0).wait(1).to({ x: 336, y: 175.5 }, 0).wait(1).to({ x: 412.35, y: 175.45 }, 0).wait(1).to({ x: 488.85, y: 175.4 }, 0).wait(1).to({ x: 565.2, y: 175.35 }, 0).wait(1).to({ x: 641.7, y: 175.25 }, 0).wait(1).to({ x: 718.05, y: 175.2 }, 0).wait(1).to({ x: 794.5, y: 175.15 }, 0).wait(1).to({ x: 862.25, y: 183.8 }, 0).wait(1).to({ x: 862.3, y: 260.2 }, 0).wait(1).to({ x: 862.35, y: 336.65 }, 0).wait(1).to({ x: 814.8, y: 377.95 }, 0).wait(1).to({ x: 741.8, y: 400.55 }, 0).wait(1).to({ x: 668.8, y: 423.2 }, 0).wait(1).to({ x: 595.75, y: 445.8 }, 0).wait(1).to({ x: 522.7, y: 468.4 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 524.45, y: 468.35 }, 0).wait(90));

		// electron07
		this.instance_67 = new lib.electron("synched", 0);
		this.instance_67.setTransform(566.4, 275.6, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(71).to({ regX: 9.2, regY: 0.5, x: 566.45, y: 275.7 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 638.5, y: 297 }, 0).wait(1).to({ x: 711, y: 318.5 }, 0).wait(1).to({ x: 783.55, y: 340 }, 0).wait(1).to({ x: 856.05, y: 361.5 }, 0).wait(1).to({ x: 861.55, y: 293.4 }, 0).wait(1).to({ x: 861.45, y: 217.85 }, 0).wait(1).to({ x: 828.2, y: 175.35 }, 0).wait(1).to({ x: 752.6 }, 0).wait(1).to({ x: 677.05 }, 0).wait(1).to({ x: 601.5, y: 175.3 }, 0).wait(1).to({ x: 525.8 }, 0).wait(1).to({ x: 450.25 }, 0).wait(1).to({ x: 374.6, y: 175.25 }, 0).wait(1).to({ x: 298.95 }, 0).wait(1).to({ x: 223.45, y: 175.2 }, 0).wait(1).to({ x: 147.8 }, 0).wait(1).to({ x: 72.15 }, 0).wait(1).to({ x: 35, y: 213.8 }, 0).wait(1).to({ x: 34.45, y: 289.45 }, 0).wait(1).to({ x: 38.65, y: 358.15 }, 0).wait(1).to({ x: 108.95, y: 330.4 }, 0).wait(1).to({ x: 179.3, y: 302.6 }, 0).wait(1).to({ x: 249.6, y: 274.8 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 249.65, y: 275.15 }, 0).wait(245).to({ regX: 9.2, regY: 0.5, x: 249.75, y: 274.8 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 175.8, y: 303.55 }, 0).wait(1).to({ x: 102.25, y: 332.5 }, 0).wait(1).to({ x: 32.8, y: 355.2 }, 0).wait(1).to({ x: 33.4, y: 276.15 }, 0).wait(1).to({ x: 33.95, y: 196.9 }, 0).wait(1).to({ x: 90.7, y: 174.4 }, 0).wait(1).to({ x: 169.85 }, 0).wait(1).to({ x: 248.9, y: 174.45 }, 0).wait(1).to({ x: 328.05 }, 0).wait(1).to({ x: 407.15 }, 0).wait(1).to({ x: 486.35, y: 174.5 }, 0).wait(1).to({ x: 565.4 }, 0).wait(1).to({ x: 644.65 }, 0).wait(1).to({ x: 723.7, y: 174.55 }, 0).wait(1).to({ x: 802.9 }, 0).wait(1).to({ x: 861.75, y: 194.85 }, 0).wait(1).to({ x: 861.8, y: 274 }, 0).wait(1).to({ x: 861.85, y: 353.2 }, 0).wait(1).to({ x: 795.3, y: 343 }, 0).wait(1).to({ x: 719.5, y: 320.35 }, 0).wait(1).to({ x: 643.65, y: 297.75 }, 0).wait(1).to({ x: 567.75, y: 275.1 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 568.1, y: 275.15 }, 0).wait(87));

		// electron08
		this.instance_68 = new lib.electron("synched", 0);
		this.instance_68.setTransform(568, 313.3, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(84).to({ regY: 0.5, y: 313.75 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 641.4, y: 326.05 }, 0).wait(1).to({ x: 714.95, y: 338.5 }, 0).wait(1).to({ x: 788.6, y: 351 }, 0).wait(1).to({ x: 861.75, y: 362.9 }, 0).wait(1).to({ x: 861.7, y: 288.3 }, 0).wait(1).to({ x: 861.65, y: 213.65 }, 0).wait(1).to({ x: 825, y: 175.55 }, 0).wait(1).to({ x: 750.3 }, 0).wait(1).to({ x: 675.65, y: 175.5 }, 0).wait(1).to({ x: 601 }, 0).wait(1).to({ x: 526.35, y: 175.45 }, 0).wait(1).to({ x: 451.75 }, 0).wait(1).to({ x: 377.05, y: 175.4 }, 0).wait(1).to({ x: 302.4, y: 175.35 }, 0).wait(1).to({ x: 227.75 }, 0).wait(1).to({ x: 153.05, y: 175.3 }, 0).wait(1).to({ x: 78.4 }, 0).wait(1).to({ x: 35.15, y: 206.9 }, 0).wait(1).to({ x: 34.65, y: 281.55 }, 0).wait(1).to({ x: 34.1, y: 356.3 }, 0).wait(1).to({ x: 103.35, y: 345.25 }, 0).wait(1).to({ x: 176.25, y: 329.6 }, 0).wait(1).to({ x: 249.3, y: 313.9 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 249.55, y: 313.5 }, 0).wait(236).to({ regY: 0.5, x: 249.6, y: 313.6 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 172.9, y: 329.7 }, 0).wait(1).to({ x: 96.1, y: 346 }, 0).wait(1).to({ x: 32.9, y: 345.9 }, 0).wait(1).to({ x: 33.5, y: 267.55 }, 0).wait(1).to({ x: 34.15, y: 189.1 }, 0).wait(1).to({ x: 97.6, y: 174.15 }, 0).wait(1).to({ x: 175.95, y: 174.2 }, 0).wait(1).to({ x: 254.4 }, 0).wait(1).to({ x: 332.7, y: 174.25 }, 0).wait(1).to({ x: 411.1 }, 0).wait(1).to({ x: 489.5, y: 174.3 }, 0).wait(1).to({ x: 567.85 }, 0).wait(1).to({ x: 646.15, y: 174.35 }, 0).wait(1).to({ x: 724.6, y: 174.4 }, 0).wait(1).to({ x: 802.95 }, 0).wait(1).to({ x: 861.8, y: 194.05 }, 0).wait(1).to({ x: 861.85, y: 272.35 }, 0).wait(1).to({ x: 861.9, y: 350.75 }, 0).wait(1).to({ x: 796.5, y: 351.55 }, 0).wait(1).to({ x: 719.2, y: 338.3 }, 0).wait(1).to({ x: 641.95, y: 325.1 }, 0).wait(1).to({ x: 564.65, y: 311.85 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 568.25, y: 313.5 }, 0).wait(83));

		// electron09
		this.instance_69 = new lib.electron("synched", 0);
		this.instance_69.setTransform(568, 354.05, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(95).to({ regY: 0.5, y: 353.75 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 642, y: 356.05 }, 0).wait(1).to({ x: 716.3, y: 358.55 }, 0).wait(1).to({ x: 790.55, y: 361.05 }, 0).wait(1).to({ x: 861.75, y: 360.35 }, 0).wait(1).to({ x: 861.7, y: 286.05 }, 0).wait(1).to({ x: 861.65, y: 211.8 }, 0).wait(1).to({ x: 823.6, y: 175.5 }, 0).wait(1).to({ x: 749.3 }, 0).wait(1).to({ x: 675.05, y: 175.45 }, 0).wait(1).to({ x: 600.7 }, 0).wait(1).to({ x: 526.45, y: 175.4 }, 0).wait(1).to({ x: 452.2 }, 0).wait(1).to({ x: 377.8, y: 175.35 }, 0).wait(1).to({ x: 303.5, y: 175.3 }, 0).wait(1).to({ x: 229.2 }, 0).wait(1).to({ x: 154.9, y: 175.25 }, 0).wait(1).to({ x: 80.6 }, 0).wait(1).to({ x: 35.15, y: 204.3 }, 0).wait(1).to({ x: 34.65, y: 278.55 }, 0).wait(1).to({ x: 34.15, y: 352.9 }, 0).wait(1).to({ x: 101.15, y: 358.2 }, 0).wait(1).to({ x: 175.35, y: 356.2 }, 0).wait(1).to({ x: 249.7, y: 354.1 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 249.4, y: 354.15 }, 0).wait(229).to({ regX: 9.2, regY: 0.4, x: 248.3, y: 356.05 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 170.3, y: 358.35 }, 0).wait(1).to({ x: 92.55, y: 360.65 }, 0).wait(1).to({ x: 32.7, y: 344.7 }, 0).wait(1).to({ x: 33.25, y: 266.9 }, 0).wait(1).to({ x: 33.8, y: 189.15 }, 0).wait(1).to({ x: 99.9, y: 177.45 }, 0).wait(1).to({ x: 177.6 }, 0).wait(1).to({ x: 255.4 }, 0).wait(1).to({ x: 333.1 }, 0).wait(1).to({ x: 410.9 }, 0).wait(1).to({ x: 488.7, y: 177.5 }, 0).wait(1).to({ x: 566.45 }, 0).wait(1).to({ x: 644.25 }, 0).wait(1).to({ x: 721.95 }, 0).wait(1).to({ x: 799.75 }, 0).wait(1).to({ x: 861.1, y: 193.9 }, 0).wait(1).to({ x: 861.15, y: 271.7 }, 0).wait(1).to({ x: 861.2, y: 349.45 }, 0).wait(1).to({ x: 799.85, y: 363.4 }, 0).wait(1).to({ x: 722.15, y: 360.35 }, 0).wait(1).to({ x: 644.5, y: 357.35 }, 0).wait(1).to({ x: 566.7, y: 354.3 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 567.75, y: 354.05 }, 0).wait(79));

		// electron10
		this.instance_70 = new lib.electron("synched", 0);
		this.instance_70.setTransform(568, 392.6, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(108).to({ regY: 0.5, y: 392.65 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 641.9, y: 385.2 }, 0).wait(1).to({ x: 715.9, y: 377.95 }, 0).wait(1).to({ x: 790.05, y: 370.65 }, 0).wait(1).to({ x: 861.75, y: 361.25 }, 0).wait(1).to({ x: 861.7, y: 286.85 }, 0).wait(1).to({ x: 861.65, y: 212.45 }, 0).wait(1).to({ x: 823.9, y: 175.7 }, 0).wait(1).to({ x: 749.45 }, 0).wait(1).to({ x: 675.05, y: 175.65 }, 0).wait(1).to({ x: 600.6, y: 175.6 }, 0).wait(1).to({ x: 526.2 }, 0).wait(1).to({ x: 451.8, y: 175.55 }, 0).wait(1).to({ x: 377.3, y: 175.5 }, 0).wait(1).to({ x: 302.9 }, 0).wait(1).to({ x: 228.45, y: 175.45 }, 0).wait(1).to({ x: 154 }, 0).wait(1).to({ x: 79.6, y: 175.4 }, 0).wait(1).to({ x: 35.15, y: 205.55 }, 0).wait(1).to({ x: 34.65, y: 280 }, 0).wait(1).to({ x: 34.1, y: 354.45 }, 0).wait(1).to({ x: 102, y: 370.25 }, 0).wait(1).to({ x: 175.65, y: 381.15 }, 0).wait(1).to({ x: 249.3, y: 392.05 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 249.4, y: 392.7 }, 0).wait(220).to({ regX: 9.2, regY: 0.5, x: 249.5, y: 392.65 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 168.45, y: 380.25 }, 0).wait(1).to({ x: 87.7, y: 368 }, 0).wait(1).to({ x: 35.35, y: 331.4 }, 0).wait(1).to({ x: 35.9, y: 249.75 }, 0).wait(1).to({ x: 43.45, y: 175 }, 0).wait(1).to({ x: 125.15 }, 0).wait(1).to({ x: 206.8 }, 0).wait(1).to({ x: 288.5 }, 0).wait(1).to({ x: 370.2 }, 0).wait(1).to({ x: 452 }, 0).wait(1).to({ x: 533.6 }, 0).wait(1).to({ x: 615.35 }, 0).wait(1).to({ x: 697.1 }, 0).wait(1).to({ x: 778.85 }, 0).wait(1).to({ x: 860.55 }, 0).wait(1).to({ x: 863.65, y: 253.65 }, 0).wait(1).to({ x: 863.75, y: 335.35 }, 0).wait(1).to({ x: 810.25, y: 368.6 }, 0).wait(1).to({ x: 728.95, y: 376.6 }, 0).wait(1).to({ x: 647.7, y: 384.6 }, 0).wait(1).to({ x: 566.25, y: 392.6 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 567.75 }, 0).wait(76));

		// electron11
		this.instance_71 = new lib.electron("synched", 0);
		this.instance_71.setTransform(568, 429.3, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(119).to({ regY: 0.5, x: 568.8, y: 429.45 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 641.8, y: 412.9 }, 0).wait(1).to({ x: 715.05, y: 396.5 }, 0).wait(1).to({ x: 788.25, y: 380.15 }, 0).wait(1).to({ x: 861.55, y: 363.75 }, 0).wait(1).to({ x: 861.7, y: 288.95 }, 0).wait(1).to({ x: 861.65, y: 213.95 }, 0).wait(1).to({ x: 824.6, y: 175.85 }, 0).wait(1).to({ x: 749.55, y: 175.8 }, 0).wait(1).to({ x: 674.5, y: 175.75 }, 0).wait(1).to({ x: 599.45, y: 175.7 }, 0).wait(1).to({ x: 524.5, y: 175.65 }, 0).wait(1).to({ x: 449.45 }, 0).wait(1).to({ x: 374.4, y: 175.6 }, 0).wait(1).to({ x: 299.35, y: 175.55 }, 0).wait(1).to({ x: 224.35, y: 175.5 }, 0).wait(1).to({ x: 149.25, y: 175.45 }, 0).wait(1).to({ x: 74.2, y: 175.4 }, 0).wait(1).to({ x: 35.1, y: 211.6 }, 0).wait(1).to({ x: 34.55, y: 286.6 }, 0).wait(1).to({ x: 35.45, y: 360.65 }, 0).wait(1).to({ x: 107, y: 383.35 }, 0).wait(1).to({ x: 178.5, y: 406.05 }, 0).wait(1).to({ x: 250, y: 428.7 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 249.4, y: 429.35 }, 0).wait(213).to({ regX: 9.2, regY: 0.4, x: 249.5, y: 429.4 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 171.05, y: 404.1 }, 0).wait(1).to({ x: 92.85, y: 378.8 }, 0).wait(1).to({ x: 35.35, y: 338.65 }, 0).wait(1).to({ x: 36.25, y: 256.5 }, 0).wait(1).to({ x: 38.8, y: 175.95 }, 0).wait(1).to({ x: 120.9, y: 175.9 }, 0).wait(1).to({ x: 203.1, y: 175.85 }, 0).wait(1).to({ x: 285.15, y: 175.8 }, 0).wait(1).to({ x: 367.35, y: 175.75 }, 0).wait(1).to({ x: 449.55, y: 175.7 }, 0).wait(1).to({ x: 531.65, y: 175.6 }, 0).wait(1).to({ x: 613.8, y: 175.55 }, 0).wait(1).to({ x: 696, y: 175.5 }, 0).wait(1).to({ x: 778.25, y: 175.45 }, 0).wait(1).to({ x: 860.4, y: 175.4 }, 0).wait(1).to({ x: 863.65, y: 254.25 }, 0).wait(1).to({ x: 863.75, y: 336.5 }, 0).wait(1).to({ x: 810.1, y: 375.65 }, 0).wait(1).to({ x: 729.9, y: 393.7 }, 0).wait(1).to({ x: 649.7, y: 411.75 }, 0).wait(1).to({ x: 569.5, y: 429.75 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 568.25, y: 429.35 }, 0).wait(72));

		// electron12
		this.instance_72 = new lib.electron("synched", 0);
		this.instance_72.setTransform(568, 468.1, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(132).to({ regY: 0.5, y: 468 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 639.65, y: 442.35 }, 0).wait(1).to({ x: 711.4, y: 416.9 }, 0).wait(1).to({ x: 783.3, y: 391.4 }, 0).wait(1).to({ x: 855.05, y: 365.95 }, 0).wait(1).to({ x: 861.7, y: 294.5 }, 0).wait(1).to({ x: 861.65, y: 218.3 }, 0).wait(1).to({ x: 827.95, y: 175.7 }, 0).wait(1).to({ x: 751.8, y: 175.65 }, 0).wait(1).to({ x: 675.6, y: 175.6 }, 0).wait(1).to({ x: 599.35, y: 175.5 }, 0).wait(1).to({ x: 523.2, y: 175.45 }, 0).wait(1).to({ x: 446.95, y: 175.4 }, 0).wait(1).to({ x: 370.8, y: 175.35 }, 0).wait(1).to({ x: 294.55, y: 175.3 }, 0).wait(1).to({ x: 218.4, y: 175.2 }, 0).wait(1).to({ x: 142.15, y: 175.15 }, 0).wait(1).to({ x: 65.95, y: 175.1 }, 0).wait(1).to({ x: 35.05, y: 220.65 }, 0).wait(1).to({ x: 34.5, y: 296.9 }, 0).wait(1).to({ x: 45.85, y: 365.9 }, 0).wait(1).to({ x: 113.6, y: 400.6 }, 0).wait(1).to({ x: 181.45, y: 435.35 }, 0).wait(1).to({ x: 249.3, y: 470.1 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 249.35, y: 467.9 }, 0).wait(203).to({ regY: 0.5, y: 467.4 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 174.6, y: 429.85 }, 0).wait(1).to({ x: 100.1, y: 392.45 }, 0).wait(1).to({ x: 36.05, y: 348.55 }, 0).wait(1).to({ x: 36.65, y: 265.2 }, 0).wait(1).to({ x: 37.3, y: 181.7 }, 0).wait(1).to({ x: 114.95, y: 175.8 }, 0).wait(1).to({ x: 198.4, y: 175.75 }, 0).wait(1).to({ x: 281.75, y: 175.65 }, 0).wait(1).to({ x: 365.25, y: 175.6 }, 0).wait(1).to({ x: 448.7, y: 175.5 }, 0).wait(1).to({ x: 532.05, y: 175.45 }, 0).wait(1).to({ x: 615.55, y: 175.35 }, 0).wait(1).to({ x: 698.95, y: 175.25 }, 0).wait(1).to({ x: 782.4, y: 175.2 }, 0).wait(1).to({ x: 863.7, y: 177.3 }, 0).wait(1).to({ x: 863.75, y: 260.75 }, 0).wait(1).to({ x: 863.85, y: 344.15 }, 0).wait(1).to({ x: 803.35, y: 384.7 }, 0).wait(1).to({ x: 724.65, y: 412.45 }, 0).wait(1).to({ x: 645.95, y: 440.2 }, 0).wait(1).to({ x: 567.2, y: 467.9 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 568.25 }, 0).wait(69));

		// electron13
		this.instance_73 = new lib.electron("synched", 0);
		this.instance_73.setTransform(612.25, 275.45, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(143).to({ regX: 9.2, regY: 0.5, x: 612.3, y: 275.6 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 683.15, y: 300.45 }, 0).wait(1).to({ x: 754.35, y: 325.5 }, 0).wait(1).to({ x: 825.6, y: 350.55 }, 0).wait(1).to({ x: 861.75, y: 326.2 }, 0).wait(1).to({ x: 861.65, y: 250.7 }, 0).wait(1).to({ x: 861.3, y: 175.45 }, 0).wait(1).to({ x: 785.85 }, 0).wait(1).to({ x: 710.3 }, 0).wait(1).to({ x: 634.85, y: 175.4 }, 0).wait(1).to({ x: 559.45 }, 0).wait(1).to({ x: 483.9 }, 0).wait(1).to({ x: 408.45, y: 175.35 }, 0).wait(1).to({ x: 333 }, 0).wait(1).to({ x: 257.5 }, 0).wait(1).to({ x: 182, y: 175.3 }, 0).wait(1).to({ x: 106.5 }, 0).wait(1).to({ x: 35.35, y: 179.65 }, 0).wait(1).to({ x: 34.75, y: 255.15 }, 0).wait(1).to({ x: 34.15, y: 330.6 }, 0).wait(1).to({ x: 77.55, y: 345.95 }, 0).wait(1).to({ x: 149.25, y: 322.55 }, 0).wait(1).to({ x: 221.1, y: 299.1 }, 0).wait(1).to({ x: 292.85, y: 275.65 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 294, y: 275.45 }, 0).wait(196).to({ regY: 0.5, y: 275.2 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 206.85, y: 303.4 }, 0).wait(1).to({ x: 119.85, y: 331.75 }, 0).wait(1).to({ x: 34.75, y: 357.5 }, 0).wait(1).to({ x: 35.45, y: 266 }, 0).wait(1).to({ x: 36.45, y: 174.65 }, 0).wait(1).to({ x: 127.9 }, 0).wait(1).to({ x: 219.4 }, 0).wait(1).to({ x: 310.9 }, 0).wait(1).to({ x: 402.5 }, 0).wait(1).to({ x: 494 }, 0).wait(1).to({ x: 585.6 }, 0).wait(1).to({ x: 677.05 }, 0).wait(1).to({ x: 768.6 }, 0).wait(1).to({ x: 860.2 }, 0).wait(1).to({ x: 862.85, y: 263.2 }, 0).wait(1).to({ x: 862.6, y: 354.85 }, 0).wait(1).to({ x: 784.25, y: 335.8 }, 0).wait(1).to({ x: 697.95, y: 305.5 }, 0).wait(1).to({ x: 611.5, y: 275.1 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 612.35, y: 275.45 }, 0).wait(67));

		// electron14
		this.instance_74 = new lib.electron("synched", 0);
		this.instance_74.setTransform(612.75, 315.3, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(156).to({ regY: 0.4, x: 612.7, y: 315.45 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 685.85, y: 329.6 }, 0).wait(1).to({ x: 759.2, y: 343.75 }, 0).wait(1).to({ x: 832.65, y: 357.95 }, 0).wait(1).to({ x: 861.85, y: 318.6 }, 0).wait(1).to({ x: 861.8, y: 243.85 }, 0).wait(1).to({ x: 855.1, y: 175.65 }, 0).wait(1).to({ x: 780.4 }, 0).wait(1).to({ x: 705.7 }, 0).wait(1).to({ x: 630.9, y: 175.6 }, 0).wait(1).to({ x: 556.15 }, 0).wait(1).to({ x: 481.45, y: 175.55 }, 0).wait(1).to({ x: 406.65 }, 0).wait(1).to({ x: 331.9, y: 175.5 }, 0).wait(1).to({ x: 257.15 }, 0).wait(1).to({ x: 182.45, y: 175.45 }, 0).wait(1).to({ x: 107.7 }, 0).wait(1).to({ x: 35.4, y: 177.95 }, 0).wait(1).to({ x: 34.85, y: 252.6 }, 0).wait(1).to({ x: 34.3, y: 327.45 }, 0).wait(1).to({ x: 75.3, y: 352.9 }, 0).wait(1).to({ x: 148.85, y: 339.75 }, 0).wait(1).to({ x: 222.5, y: 326.6 }, 0).wait(1).to({ x: 296.05, y: 313.4 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 294, y: 315.15 }, 0).wait(186).to({ regY: 0.4, y: 315.3 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 199.75, y: 331.35 }, 0).wait(1).to({ x: 105.55, y: 347.4 }, 0).wait(1).to({ x: 34.9, y: 335.8 }, 0).wait(1).to({ x: 35.65, y: 240.3 }, 0).wait(1).to({ x: 66.2, y: 174.75 }, 0).wait(1).to({ x: 161.7 }, 0).wait(1).to({ x: 257.25 }, 0).wait(1).to({ x: 352.8 }, 0).wait(1).to({ x: 448.25 }, 0).wait(1).to({ x: 543.8, y: 174.7 }, 0).wait(1).to({ x: 639.3 }, 0).wait(1).to({ x: 734.85 }, 0).wait(1).to({ x: 830.4 }, 0).wait(1).to({ x: 862.9, y: 237.45 }, 0).wait(1).to({ x: 862.65, y: 332.95 }, 0).wait(1).to({ x: 798.9, y: 350.95 }, 0).wait(1).to({ x: 705.35, y: 332.3 }, 0).wait(1).to({ x: 611.5, y: 313.6 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 612.35, y: 313.5 }, 0).wait(65));

		// electron15
		this.instance_75 = new lib.electron("synched", 0);
		this.instance_75.setTransform(612.75, 354.45, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(167).to({ x: 612.7 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 686.7, y: 357.15 }, 0).wait(1).to({ x: 760.95, y: 359.9 }, 0).wait(1).to({ x: 835.15, y: 362.65 }, 0).wait(1).to({ x: 861.85, y: 316.05 }, 0).wait(1).to({ x: 861.8, y: 241.8 }, 0).wait(1).to({ x: 853.55, y: 175.65 }, 0).wait(1).to({ x: 779.3 }, 0).wait(1).to({ x: 705.05 }, 0).wait(1).to({ x: 630.8, y: 175.6 }, 0).wait(1).to({ x: 556.55 }, 0).wait(1).to({ x: 482.2, y: 175.55 }, 0).wait(1).to({ x: 407.95 }, 0).wait(1).to({ x: 333.6, y: 175.5 }, 0).wait(1).to({ x: 259.4 }, 0).wait(1).to({ x: 185.05, y: 175.45 }, 0).wait(1).to({ x: 110.8 }, 0).wait(1).to({ x: 36.5 }, 0).wait(1).to({ x: 34.9, y: 248.55 }, 0).wait(1).to({ x: 34.35, y: 322.9 }, 0).wait(1).to({ x: 71, y: 359.45 }, 0).wait(1).to({ x: 145.3, y: 357.95 }, 0).wait(1).to({ x: 219.6, y: 356.45 }, 0).wait(1).to({ x: 293.85, y: 354.9 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 294, y: 354.45 }, 0).wait(178).to({ regY: 0.5, y: 354.15 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 198.95, y: 356.25 }, 0).wait(1).to({ x: 103.9, y: 358.6 }, 0).wait(1).to({ x: 36.15, y: 333.25 }, 0).wait(1).to({ x: 36.9, y: 238.35 }, 0).wait(1).to({ x: 69.9, y: 175.75 }, 0).wait(1).to({ x: 164.9, y: 175.7 }, 0).wait(1).to({ x: 259.95, y: 175.65 }, 0).wait(1).to({ x: 354.95, y: 175.6 }, 0).wait(1).to({ x: 449.9, y: 175.55 }, 0).wait(1).to({ x: 544.9, y: 175.45 }, 0).wait(1).to({ x: 639.9, y: 175.4 }, 0).wait(1).to({ x: 734.9, y: 175.35 }, 0).wait(1).to({ x: 829.9, y: 175.3 }, 0).wait(1).to({ x: 863.75, y: 236.4 }, 0).wait(1).to({ x: 863.85, y: 331.4 }, 0).wait(1).to({ x: 801.05, y: 361.1 }, 0).wait(1).to({ x: 706.2, y: 357.35 }, 0).wait(1).to({ x: 611.15, y: 353.55 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 612.35, y: 354.45 }, 0).wait(62));

		// electron16
		this.instance_76 = new lib.electron("synched", 0);
		this.instance_76.setTransform(612, 393, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(180).to({ regY: 0.5, x: 612.05, y: 393.05 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 685.8, y: 384.2 }, 0).wait(1).to({ x: 759.7, y: 375.55 }, 0).wait(1).to({ x: 833.65, y: 366.85 }, 0).wait(1).to({ x: 861.95, y: 317.7 }, 0).wait(1).to({ x: 861.9, y: 243.2 }, 0).wait(1).to({ x: 854.85, y: 175.7 }, 0).wait(1).to({ x: 780.45 }, 0).wait(1).to({ x: 706.05, y: 175.65 }, 0).wait(1).to({ x: 631.6, y: 175.6 }, 0).wait(1).to({ x: 557.15, y: 175.55 }, 0).wait(1).to({ x: 482.75, y: 175.5 }, 0).wait(1).to({ x: 408.25 }, 0).wait(1).to({ x: 333.9, y: 175.45 }, 0).wait(1).to({ x: 259.4, y: 175.4 }, 0).wait(1).to({ x: 184.95, y: 175.35 }, 0).wait(1).to({ x: 110.55, y: 175.3 }, 0).wait(1).to({ x: 36.05 }, 0).wait(1).to({ x: 34.95, y: 249.1 }, 0).wait(1).to({ x: 34.35, y: 323.6 }, 0).wait(1).to({ x: 71.65, y: 364.9 }, 0).wait(1).to({ x: 145.55, y: 374.3 }, 0).wait(1).to({ x: 219.35, y: 383.75 }, 0).wait(1).to({ x: 293.2, y: 393.15 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 294, y: 392.85 }, 0).wait(169).to({ regY: 0.5, y: 392.55 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 187.65, y: 379.1 }, 0).wait(1).to({ x: 81.4, y: 365.8 }, 0).wait(1).to({ x: 36.4, y: 298.85 }, 0).wait(1).to({ x: 37.25, y: 191.85 }, 0).wait(1).to({ x: 128.55, y: 175.8 }, 0).wait(1).to({ x: 235.55, y: 175.75 }, 0).wait(1).to({ x: 342.6, y: 175.65 }, 0).wait(1).to({ x: 449.75, y: 175.6 }, 0).wait(1).to({ x: 556.75, y: 175.5 }, 0).wait(1).to({ x: 663.85, y: 175.4 }, 0).wait(1).to({ x: 770.95, y: 175.35 }, 0).wait(1).to({ x: 863.75, y: 189.55 }, 0).wait(1).to({ x: 863.8, y: 296.65 }, 0).wait(1).to({ x: 823.9, y: 368.1 }, 0).wait(1).to({ x: 717.65, y: 380.4 }, 0).wait(1).to({ x: 611.15, y: 392.7 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 612.35, y: 392.85 }, 0).wait(60));

		// electron17
		this.instance_77 = new lib.electron("synched", 0);
		this.instance_77.setTransform(611.9, 428.85, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(191).to({ regY: 0.5, y: 429.05 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 684.5, y: 409.95 }, 0).wait(1).to({ x: 757.35, y: 390.95 }, 0).wait(1).to({ x: 830.15, y: 372.05 }, 0).wait(1).to({ x: 861.85, y: 321.25 }, 0).wait(1).to({ x: 861.8, y: 246.05 }, 0).wait(1).to({ x: 856.5, y: 175.9 }, 0).wait(1).to({ x: 781.3 }, 0).wait(1).to({ x: 706.05, y: 175.85 }, 0).wait(1).to({ x: 630.75, y: 175.8 }, 0).wait(1).to({ x: 555.5, y: 175.75 }, 0).wait(1).to({ x: 480.25, y: 175.7 }, 0).wait(1).to({ x: 404.95 }, 0).wait(1).to({ x: 329.75, y: 175.65 }, 0).wait(1).to({ x: 254.5, y: 175.6 }, 0).wait(1).to({ x: 179.2, y: 175.55 }, 0).wait(1).to({ x: 103.9, y: 175.5 }, 0).wait(1).to({ x: 35.4, y: 182.3 }, 0).wait(1).to({ x: 34.85, y: 257.45 }, 0).wait(1).to({ x: 34.3, y: 332.8 }, 0).wait(1).to({ x: 80.3, y: 372.6 }, 0).wait(1).to({ x: 152.95, y: 392 }, 0).wait(1).to({ x: 225.65, y: 411.45 }, 0).wait(1).to({ x: 298.4, y: 430.85 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 294, y: 429.35 }, 0).wait(161).to({ regX: 9.2, regY: 0.4, x: 250.55, y: 430.4 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 140.7, y: 394.65 }, 0).wait(1).to({ x: 35.8, y: 355.55 }, 0).wait(1).to({ x: 36.6, y: 240.45 }, 0).wait(1).to({ x: 87.95, y: 176 }, 0).wait(1).to({ x: 203.1, y: 175.9 }, 0).wait(1).to({ x: 318.35, y: 175.8 }, 0).wait(1).to({ x: 433.6, y: 175.7 }, 0).wait(1).to({ x: 548.75, y: 175.6 }, 0).wait(1).to({ x: 664.05, y: 175.55 }, 0).wait(1).to({ x: 779.35, y: 175.45 }, 0).wait(1).to({ x: 863.6, y: 206.3 }, 0).wait(1).to({ x: 863.7, y: 321.55 }, 0).wait(1).to({ x: 792.4, y: 379.45 }, 0).wait(1).to({ x: 679.8, y: 404.45 }, 0).wait(1).to({ x: 567.25, y: 429.4 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 612.35, y: 429.35 }, 0).wait(58));

		// electron18
		this.instance_78 = new lib.electron("synched", 0);
		this.instance_78.setTransform(612.75, 468.2, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(204).to({ regY: 0.5, x: 612.7, y: 468.25 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 682.75, y: 438.7 }, 0).wait(1).to({ x: 753, y: 409.3 }, 0).wait(1).to({ x: 823.25, y: 379.9 }, 0).wait(1).to({ x: 861.85, y: 329.4 }, 0).wait(1).to({ x: 861.8, y: 253.25 }, 0).wait(1).to({ x: 861.75, y: 177 }, 0).wait(1).to({ x: 786.65, y: 175.85 }, 0).wait(1).to({ x: 710.45, y: 175.8 }, 0).wait(1).to({ x: 634.4, y: 175.75 }, 0).wait(1).to({ x: 558.2, y: 175.7 }, 0).wait(1).to({ x: 482, y: 175.65 }, 0).wait(1).to({ x: 405.8, y: 175.55 }, 0).wait(1).to({ x: 329.65, y: 175.5 }, 0).wait(1).to({ x: 253.5, y: 175.45 }, 0).wait(1).to({ x: 177.35, y: 175.4 }, 0).wait(1).to({ x: 101.15, y: 175.35 }, 0).wait(1).to({ x: 35.35, y: 185.7 }, 0).wait(1).to({ x: 34.8, y: 261.9 }, 0).wait(1).to({ x: 34.25, y: 338.05 }, 0).wait(1).to({ x: 84, y: 381.15 }, 0).wait(1).to({ x: 154.15, y: 410.75 }, 0).wait(1).to({ x: 224.25, y: 440.35 }, 0).wait(1).to({ x: 294.5, y: 469.95 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 294, y: 467.9 }, 0).wait(152).to({ y: 429.05 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 182.65, y: 399.4 }, 0).wait(1).to({ x: 71.6, y: 369.85 }, 0).wait(1).to({ x: 36.55, y: 282.15 }, 0).wait(1).to({ x: 46.25, y: 175.9 }, 0).wait(1).to({ x: 161.25, y: 175.85 }, 0).wait(1).to({ x: 276.35, y: 175.75 }, 0).wait(1).to({ x: 391.3, y: 175.65 }, 0).wait(1).to({ x: 506.4, y: 175.55 }, 0).wait(1).to({ x: 621.4, y: 175.45 }, 0).wait(1).to({ x: 736.5, y: 175.4 }, 0).wait(1).to({ x: 851.55, y: 175.3 }, 0).wait(1).to({ x: 863.8, y: 278 }, 0).wait(1).to({ x: 835.25, y: 371.1 }, 0).wait(1).to({ x: 724.05, y: 400.75 }, 0).wait(1).to({ x: 612.8, y: 430.35 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 612.35, y: 467.9 }, 0).wait(54));

		// electron19
		this.instance_79 = new lib.electron("synched", 0);
		this.instance_79.setTransform(657.3, 273.75, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(215).to({ regY: 0.5, x: 657.25, y: 273.85 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 726.35, y: 303.95 }, 0).wait(1).to({ x: 795.7, y: 334.3 }, 0).wait(1).to({ x: 862.6, y: 360.9 }, 0).wait(1).to({ x: 862.55, y: 285.25 }, 0).wait(1).to({ x: 862.5, y: 209.6 }, 0).wait(1).to({ x: 821.35, y: 175.05 }, 0).wait(1).to({ x: 745.7 }, 0).wait(1).to({ x: 670.1 }, 0).wait(1).to({ x: 594.45, y: 175.1 }, 0).wait(1).to({ x: 518.8 }, 0).wait(1).to({ x: 443.05, y: 175.15 }, 0).wait(1).to({ x: 367.5 }, 0).wait(1).to({ x: 291.75 }, 0).wait(1).to({ x: 216.1, y: 175.2 }, 0).wait(1).to({ x: 140.45 }, 0).wait(1).to({ x: 64.8 }, 0).wait(1).to({ x: 34.95, y: 221.35 }, 0).wait(1).to({ x: 34.45, y: 297.05 }, 0).wait(1).to({ x: 46.15, y: 356.6 }, 0).wait(1).to({ x: 118.9, y: 335.85 }, 0).wait(1).to({ x: 191.7, y: 315.1 }, 0).wait(1).to({ x: 264.45, y: 294.35 }, 0).wait(1).to({ x: 337.2, y: 273.55 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.2, y: 275.15 }, 0).wait(146).to({ regX: 9.2, regY: 0.5, x: 338.3, y: 274.8 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 239.65, y: 302.4 }, 0).wait(1).to({ x: 141.2, y: 330.15 }, 0).wait(1).to({ x: 42.75, y: 357.95 }, 0).wait(1).to({ x: 36.65, y: 264.7 }, 0).wait(1).to({ x: 50.3, y: 175.45 }, 0).wait(1).to({ x: 152.5 }, 0).wait(1).to({ x: 254.8, y: 175.4 }, 0).wait(1).to({ x: 357, y: 175.35 }, 0).wait(1).to({ x: 459.2, y: 175.3 }, 0).wait(1).to({ x: 561.5 }, 0).wait(1).to({ x: 663.7, y: 175.25 }, 0).wait(1).to({ x: 766.05, y: 175.2 }, 0).wait(1).to({ x: 863.65, y: 179.85 }, 0).wait(1).to({ x: 863.7, y: 282.05 }, 0).wait(1).to({ x: 844.5, y: 355.15 }, 0).wait(1).to({ x: 750.4, y: 315.05 }, 0).wait(1).to({ x: 656.3, y: 274.95 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 656.5, y: 275.15 }, 0).wait(47));

		// electron20
		this.instance_80 = new lib.electron("synched", 0);
		this.instance_80.setTransform(656.8, 313.3, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(228).to({ regY: 0.4, x: 656.85, y: 313.45 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 729.35, y: 331.1 }, 0).wait(1).to({ x: 802.05, y: 348.85 }, 0).wait(1).to({ x: 862.75, y: 351.3 }, 0).wait(1).to({ x: 862.7, y: 276.5 }, 0).wait(1).to({ x: 862.65, y: 201.65 }, 0).wait(1).to({ x: 814.2, y: 175.25 }, 0).wait(1).to({ x: 739.35 }, 0).wait(1).to({ x: 664.6 }, 0).wait(1).to({ x: 589.75, y: 175.3 }, 0).wait(1).to({ x: 514.9 }, 0).wait(1).to({ x: 440.05, y: 175.35 }, 0).wait(1).to({ x: 365.25 }, 0).wait(1).to({ x: 290.45 }, 0).wait(1).to({ x: 215.6, y: 175.4 }, 0).wait(1).to({ x: 140.85 }, 0).wait(1).to({ x: 65.95 }, 0).wait(1).to({ x: 35.15, y: 219.75 }, 0).wait(1).to({ x: 34.6, y: 294.55 }, 0).wait(1).to({ x: 43.1, y: 358.95 }, 0).wait(1).to({ x: 117, y: 347.45 }, 0).wait(1).to({ x: 190.95, y: 335.95 }, 0).wait(1).to({ x: 264.85, y: 324.5 }, 0).wait(1).to({ x: 338.85, y: 312.95 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.2, y: 313.5 }, 0).wait(139).to({ regX: 9.2, regY: 0.5, x: 338.3, y: 313.2 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 257.15, y: 325.6 }, 0).wait(1).to({ x: 176.3, y: 338.15 }, 0).wait(1).to({ x: 95.35, y: 350.7 }, 0).wait(1).to({ x: 36.15, y: 338.2 }, 0).wait(1).to({ x: 36.7, y: 256.4 }, 0).wait(1).to({ x: 38.3, y: 175.5 }, 0).wait(1).to({ x: 120.15, y: 175.45 }, 0).wait(1).to({ x: 201.95 }, 0).wait(1).to({ x: 283.75, y: 175.4 }, 0).wait(1).to({ x: 365.65, y: 175.35 }, 0).wait(1).to({ x: 447.5, y: 175.3 }, 0).wait(1).to({ x: 529.3, y: 175.25 }, 0).wait(1).to({ x: 611.2, y: 175.2 }, 0).wait(1).to({ x: 693.1, y: 175.15 }, 0).wait(1).to({ x: 774.9, y: 175.1 }, 0).wait(1).to({ x: 856.8, y: 175.05 }, 0).wait(1).to({ x: 863.7, y: 249.95 }, 0).wait(1).to({ x: 863.75, y: 331.9 }, 0).wait(1).to({ x: 814.8, y: 351.6 }, 0).wait(1).to({ x: 735.15, y: 332.45 }, 0).wait(1).to({ x: 655.55, y: 313.35 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 656.5, y: 313.5 }, 0).wait(37));

		// electron21
		this.instance_81 = new lib.electron("synched", 0);
		this.instance_81.setTransform(656, 354.05, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(239).to({ regX: 9.2, regY: 0.5, x: 655.9, y: 354.15 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 729.8, y: 357.35 }, 0).wait(1).to({ x: 804.15, y: 360.7 }, 0).wait(1).to({ x: 862.35, y: 347.25 }, 0).wait(1).to({ x: 862.3, y: 272.95 }, 0).wait(1).to({ x: 862.25, y: 198.55 }, 0).wait(1).to({ x: 811.45, y: 175 }, 0).wait(1).to({ x: 737.05 }, 0).wait(1).to({ x: 662.65 }, 0).wait(1).to({ x: 588.3, y: 175.05 }, 0).wait(1).to({ x: 513.95 }, 0).wait(1).to({ x: 439.55, y: 175.1 }, 0).wait(1).to({ x: 365.25 }, 0).wait(1).to({ x: 290.85 }, 0).wait(1).to({ x: 216.5, y: 175.15 }, 0).wait(1).to({ x: 142.15 }, 0).wait(1).to({ x: 67.75 }, 0).wait(1).to({ x: 34.85, y: 216.95 }, 0).wait(1).to({ x: 34.3, y: 291.3 }, 0).wait(1).to({ x: 39.45, y: 359.9 }, 0).wait(1).to({ x: 113.75, y: 358.45 }, 0).wait(1).to({ x: 188.15, y: 357 }, 0).wait(1).to({ x: 262.5, y: 355.55 }, 0).wait(1).to({ x: 336.85, y: 354.05 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.05 }, 0).wait(134).to({ regX: 9.2, regY: 0.5, x: 338.15, y: 353.75 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 260.2, y: 355.25 }, 0).wait(1).to({ x: 182.65, y: 356.9 }, 0).wait(1).to({ x: 105.05, y: 358.6 }, 0).wait(1).to({ x: 36, y: 351.45 }, 0).wait(1).to({ x: 36.65, y: 273.9 }, 0).wait(1).to({ x: 37.25, y: 196.2 }, 0).wait(1).to({ x: 94.45, y: 175.55 }, 0).wait(1).to({ x: 172.05, y: 175.5 }, 0).wait(1).to({ x: 249.75, y: 175.45 }, 0).wait(1).to({ x: 327.3, y: 175.4 }, 0).wait(1).to({ x: 405, y: 175.35 }, 0).wait(1).to({ x: 482.7 }, 0).wait(1).to({ x: 560.25, y: 175.3 }, 0).wait(1).to({ x: 637.95, y: 175.25 }, 0).wait(1).to({ x: 715.55, y: 175.2 }, 0).wait(1).to({ x: 793.25, y: 175.15 }, 0).wait(1).to({ x: 863.65, y: 182.4 }, 0).wait(1).to({ y: 260.05 }, 0).wait(1).to({ x: 863.7, y: 337.7 }, 0).wait(1).to({ x: 811.85, y: 361.3 }, 0).wait(1).to({ x: 734.3, y: 358.15 }, 0).wait(1).to({ x: 656.65, y: 354.95 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 354.05 }, 0).wait(30));

		// electron22
		this.instance_82 = new lib.electron("synched", 0);
		this.instance_82.setTransform(656.8, 392.6, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(252).to({ regY: 0.5, x: 656.85, y: 392.65 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 724.55, y: 382.95 }, 0).wait(1).to({ x: 792.55, y: 373.4 }, 0).wait(1).to({ x: 860.55, y: 363.85 }, 0).wait(1).to({ x: 862.7, y: 297.15 }, 0).wait(1).to({ x: 862.65, y: 228.55 }, 0).wait(1).to({ x: 847.45, y: 175.05 }, 0).wait(1).to({ x: 778.85 }, 0).wait(1).to({ x: 710.2, y: 175.1 }, 0).wait(1).to({ x: 641.55 }, 0).wait(1).to({ x: 572.9, y: 175.15 }, 0).wait(1).to({ x: 504.35, y: 175.2 }, 0).wait(1).to({ x: 435.6 }, 0).wait(1).to({ x: 367, y: 175.25 }, 0).wait(1).to({ x: 298.45 }, 0).wait(1).to({ x: 229.7, y: 175.3 }, 0).wait(1).to({ x: 161.15 }, 0).wait(1).to({ x: 92.45, y: 175.35 }, 0).wait(1).to({ x: 35.4, y: 187.05 }, 0).wait(1).to({ x: 34.9, y: 255.65 }, 0).wait(1).to({ x: 34.4, y: 324.3 }, 0).wait(1).to({ x: 66.7, y: 363.65 }, 0).wait(1).to({ x: 134.95, y: 370.95 }, 0).wait(1).to({ x: 203.2, y: 378.2 }, 0).wait(1).to({ x: 271.4, y: 385.5 }, 0).wait(1).to({ x: 339.7, y: 392.75 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 338.05, y: 392.6 }, 0).wait(126).to({ regX: 9.2, regY: 0.5, x: 338.15, y: 392.15 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 256.75, y: 383.45 }, 0).wait(1).to({ x: 175.7, y: 374.9 }, 0).wait(1).to({ x: 94.7, y: 366.35 }, 0).wait(1).to({ x: 36.1, y: 337.7 }, 0).wait(1).to({ x: 36.75, y: 256.25 }, 0).wait(1).to({ x: 38.5, y: 175.7 }, 0).wait(1).to({ x: 120, y: 175.65 }, 0).wait(1).to({ x: 201.55, y: 175.6 }, 0).wait(1).to({ x: 283.05, y: 175.55 }, 0).wait(1).to({ x: 364.55, y: 175.5 }, 0).wait(1).to({ x: 446.05, y: 175.45 }, 0).wait(1).to({ x: 527.55, y: 175.4 }, 0).wait(1).to({ x: 609.1, y: 175.35 }, 0).wait(1).to({ x: 690.6, y: 175.3 }, 0).wait(1).to({ x: 772.2, y: 175.25 }, 0).wait(1).to({ x: 853.75, y: 175.2 }, 0).wait(1).to({ x: 863.65, y: 246.7 }, 0).wait(1).to({ x: 863.7, y: 328.35 }, 0).wait(1).to({ x: 817.7, y: 369.75 }, 0).wait(1).to({ x: 736.95, y: 381.05 }, 0).wait(1).to({ x: 656.15, y: 392.35 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 392.6 }, 0).wait(24));

		// electron23
		this.instance_83 = new lib.electron("synched", 0);
		this.instance_83.setTransform(656.8, 430.75, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(263).to({ regY: 0.4, x: 656.85, y: 430.8 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 728, y: 407.5 }, 0).wait(1).to({ x: 799.4, y: 384.15 }, 0).wait(1).to({ x: 862.75, y: 355 }, 0).wait(1).to({ x: 862.4, y: 279.95 }, 0).wait(1).to({ x: 862.05, y: 204.75 }, 0).wait(1).to({ x: 815.7, y: 175.85 }, 0).wait(1).to({ x: 740.65, y: 175.8 }, 0).wait(1).to({ x: 665.55, y: 175.75 }, 0).wait(1).to({ x: 590.4, y: 175.7 }, 0).wait(1).to({ x: 515.35, y: 175.65 }, 0).wait(1).to({ x: 440.25, y: 175.6 }, 0).wait(1).to({ x: 365.05, y: 175.55 }, 0).wait(1).to({ x: 289.95 }, 0).wait(1).to({ x: 214.9, y: 175.5 }, 0).wait(1).to({ x: 139.75, y: 175.45 }, 0).wait(1).to({ x: 64.65, y: 175.4 }, 0).wait(1).to({ x: 35.15, y: 221.3 }, 0).wait(1).to({ x: 34.6, y: 296.4 }, 0).wait(1).to({ x: 45.15, y: 362.75 }, 0).wait(1).to({ x: 118.35, y: 379.45 }, 0).wait(1).to({ x: 191.55, y: 396.1 }, 0).wait(1).to({ x: 264.75, y: 412.8 }, 0).wait(1).to({ x: 338.05, y: 429.5 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 338.2, y: 429.35 }, 0).wait(123).to({ regX: 9.2, regY: 0.4, x: 338.3, y: 429.05 }, 0).wait(1).to({ regX: 9, scaleX: 1.6, scaleY: 1.6, x: 253.9, y: 409.9 }, 0).wait(1).to({ x: 169.7, y: 390.75 }, 0).wait(1).to({ x: 85.55, y: 371.6 }, 0).wait(1).to({ x: 36.25, y: 324.85 }, 0).wait(1).to({ x: 36.85, y: 238.55 }, 0).wait(1).to({ x: 61.05, y: 175.9 }, 0).wait(1).to({ x: 147.3, y: 175.85 }, 0).wait(1).to({ x: 233.65, y: 175.75 }, 0).wait(1).to({ x: 319.95, y: 175.7 }, 0).wait(1).to({ x: 406.3, y: 175.65 }, 0).wait(1).to({ x: 492.65, y: 175.55 }, 0).wait(1).to({ x: 579, y: 175.5 }, 0).wait(1).to({ x: 665.3, y: 175.45 }, 0).wait(1).to({ x: 751.65, y: 175.35 }, 0).wait(1).to({ x: 837.95, y: 175.3 }, 0).wait(1).to({ x: 863.65, y: 235.85 }, 0).wait(1).to({ x: 863.75, y: 322.2 }, 0).wait(1).to({ x: 820.8, y: 377.1 }, 0).wait(1).to({ x: 738.6, y: 403.2 }, 0).wait(1).to({ x: 656.2, y: 429.35 }, 0).wait(1).to({ regX: 9.1, regY: 0.3, scaleX: 1.5999, scaleY: 1.5999, x: 657.15 }, 0).wait(19));

		// electron24
		this.instance_84 = new lib.electron("synched", 0);
		this.instance_84.setTransform(656.8, 467.6, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(278).to({ regY: 0.5, x: 656.85 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 731.15, y: 429.8 }, 0).wait(1).to({ x: 805.5, y: 392.25 }, 0).wait(1).to({ x: 862.7, y: 344 }, 0).wait(1).to({ x: 862.3, y: 260.65 }, 0).wait(1).to({ x: 861.95, y: 177.15 }, 0).wait(1).to({ x: 779.85, y: 175.8 }, 0).wait(1).to({ x: 696.45, y: 175.75 }, 0).wait(1).to({ x: 612.95, y: 175.7 }, 0).wait(1).to({ x: 529.55, y: 175.6 }, 0).wait(1).to({ x: 446.2, y: 175.55 }, 0).wait(1).to({ x: 362.8, y: 175.5 }, 0).wait(1).to({ x: 279.35, y: 175.4 }, 0).wait(1).to({ x: 195.85, y: 175.35 }, 0).wait(1).to({ x: 112.45, y: 175.3 }, 0).wait(1).to({ x: 35.45, y: 181.65 }, 0).wait(1).to({ x: 34.8, y: 265 }, 0).wait(1).to({ x: 34.2, y: 348.5 }, 0).wait(1).to({ x: 101.7, y: 384.25 }, 0).wait(1).to({ x: 180.25, y: 412.4 }, 0).wait(1).to({ x: 258.75, y: 440.5 }, 0).wait(1).to({ x: 337.35, y: 468.65 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 338.6, y: 467.9 }, 0).wait(116).to({ regX: 9.2, regY: 0.5, x: 335.35, y: 469.6 }, 0).wait(1).to({ regX: 9, regY: 0.4, scaleX: 1.6, scaleY: 1.6, x: 248.55, y: 437.85 }, 0).wait(1).to({ x: 162.05, y: 406.3 }, 0).wait(1).to({ x: 75.55, y: 374.7 }, 0).wait(1).to({ x: 36.25, y: 310.4 }, 0).wait(1).to({ x: 36.9, y: 218.25 }, 0).wait(1).to({ x: 86.8, y: 175.7 }, 0).wait(1).to({ x: 178.85, y: 175.6 }, 0).wait(1).to({ x: 271, y: 175.55 }, 0).wait(1).to({ x: 363.1, y: 175.5 }, 0).wait(1).to({ x: 455.05, y: 175.4 }, 0).wait(1).to({ x: 547.2, y: 175.35 }, 0).wait(1).to({ x: 639.35, y: 175.3 }, 0).wait(1).to({ x: 731.35, y: 175.2 }, 0).wait(1).to({ x: 823.55, y: 175.15 }, 0).wait(1).to({ x: 863.55, y: 227.25 }, 0).wait(1).to({ x: 863.65, y: 319.3 }, 0).wait(1).to({ x: 820.75, y: 384.95 }, 0).wait(1).to({ x: 738.45, y: 426.3 }, 0).wait(1).to({ x: 656.1, y: 467.65 }, 0).wait(1).to({ regX: 9.1, scaleX: 1.5999, scaleY: 1.5999, x: 657.15, y: 467.9 }, 0).wait(14));

		// Instructions
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#000000").s().p("AgFAOIgFgDIgDgFIgBgGIABgFIADgFIAFgDIAFgBIAGABIAEADIAEAFIABAFIgBAGIgEAFIgEADIgGABg");
		this.shape_25.setTransform(263.85, 637.375);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgPQAAgMAEgLQAEgLAHgIQAIgIAKgFQALgFAMAAQALAAAJAEQAJAEAHAHQAHAHAEAKQAEAKAAANQAAAFgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIhRAAQABAMACAJQADAIAFAFQAFAGAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEIAFgCQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAIAGAIQgEAFgGADQgFAEgHACIgNADIgNABQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_26.setTransform(254.725, 632.6);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#000000").s().p("AAdA+IAAhNQAAgNgGgIQgHgIgMAAQgJAAgIAFQgIAEgHAIIAABZIgWAAIAAh5IANAAQAFAAABAFIABANIAJgIIAJgGIALgEQAEgCAHAAQAKAAAIAEQAHADAFAGQAFAGADAJQADAIgBAKIAABNg");
		this.shape_27.setTransform(241.75, 632.525);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#000000").s().p("AgKBYIAAh5IAVAAIAAB5gAgFg6IgFgDIgDgEIgBgGIABgGIADgFIAFgEIAFgBIAGABIAFAEIADAFIABAGIgBAGIgDAEIgFADIgGACg");
		this.shape_28.setTransform(232.125, 629.95);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#000000").s().p("AgKBYIAAivIAVAAIAACvg");
		this.shape_29.setTransform(226.425, 629.875);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgPQAAgMAEgLQAEgLAHgIQAIgIAKgFQALgFAMAAQALAAAJAEQAJAEAHAHQAHAHAEAKQAEAKAAANQAAAFgBABQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIhRAAQABAMACAJQADAIAFAFQAFAGAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEIAFgCQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIAGAIQgEAFgGADQgFAEgHACIgNADIgNABQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_30.setTransform(217.325, 632.6);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#000000").s().p("AA9A+IAAhNQAAgOgHgHQgFgIgNAAQgFAAgFACQgEACgEAEQgDADgDAGQgCAFAAAHIAABNIgUAAIAAhNQAAgOgGgIQgGgHgLAAQgIAAgHAFQgGAEgGAHIAABaIgVAAIAAh5IAMAAQAFAAABAFIABAMQAHgIAJgFQAIgGALAAQAMAAAIAHQAHAHADAMQADgHADgFQAFgFAFgDQAFgDAGgBQAFgCAHAAQAJAAAIADQAIADAEAGQAGAGADAJQACAIAAALIAABNg");
		this.shape_31.setTransform(201.2, 632.525);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#000000").s().p("AgKBYIAAh5IAVAAIAAB5gAgFg6IgFgDIgDgEIgBgGIABgGIADgFIAFgEIAFgBIAGABIAFAEIADAFIABAGIgBAGIgDAEIgFADIgGACg");
		this.shape_32.setTransform(188.375, 629.95);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#000000").s().p("AgLBJQgIgIAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgIIAUgDIAFgmIABgCIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAHAEAEQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIAGALQgFAEgIAEQgIADgIAAQgNAAgIgJg");
		this.shape_33.setTransform(181.325, 630.75);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#000000").s().p("AAdA+IAAhNQAAgNgGgIQgGgIgNAAQgIAAgJAFQgIAEgHAIIAABZIgWAAIAAh5IAOAAQAEAAABAFIACANIAIgIIAKgGIAKgEQAFgCAGAAQAKAAAHAEQAJADAEAGQAGAGACAJQADAIAAAKIAABNg");
		this.shape_34.setTransform(164.2, 632.525);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#000000").s().p("AgXA7QgLgFgHgIQgIgJgEgLQgEgLAAgPQAAgNAEgLQAEgMAIgJQAHgHALgFQALgFAMAAQAOAAAKAFQALAFAHAHQAIAJAEAMQAEALAAANQAAAPgEALQgEALgIAJQgHAIgLAFQgKADgOAAQgMAAgLgDgAgOgpQgIACgEAHQgEAFgDAJQgCAJAAAJQAAAWAJAMQAJAMARAAQASAAAJgMQAJgMAAgWQAAgUgJgMQgJgNgSAAQgIAAgGAEg");
		this.shape_35.setTransform(150.65, 632.6);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#000000").s().p("AgKBYIAAh5IAVAAIAAB5gAgFg6IgFgDIgDgEIgBgGIABgGIADgFIAFgEIAFgBIAGABIAFAEIADAFIABAGIgBAGIgDAEIgFADIgGACg");
		this.shape_36.setTransform(140.975, 629.95);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#000000").s().p("AgLBJQgIgIAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgIIAUgDIAFgmIABgCIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAHAEAEQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIAGALQgFAEgIAEQgIADgIAAQgNAAgIgJg");
		this.shape_37.setTransform(133.925, 630.75);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#000000").s().p("AgaA9QgGgCgFgEQgFgEgCgGQgDgGAAgJQAAgHAEgGQAEgHAJgFQAJgFAOgDQANgDAVgBIAAgJQAAgOgGgHQgGgIgMAAQgHAAgFACIgJAFIgHAEQgDACgDAAIgDgBIgDgDIgEgHQAKgJAMgFQALgFAOAAQAKAAAIADQAIAEAFAGQAFAGADAIQADAJAAAKIAABNIgKAAIgEgBIgDgEIgCgMIgKAIIgJAGIgKADIgNACQgHAAgGgCgAACAIQgKACgGADQgHADgCAEQgDAEAAAFQAAAFABAEQACADACACQADADAEABIAIABIAJgBIAJgEIAIgFIAHgHIAAgZQgPAAgKACg");
		this.shape_38.setTransform(123.175, 632.625);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#000000").s().p("AA9A+IAAhNQAAgOgGgHQgHgIgLAAQgFAAgFACQgFACgDAEQgEADgDAGQgCAFABAHIAABNIgVAAIAAhNQAAgOgGgIQgGgHgLAAQgIAAgHAFQgHAEgFAHIAABaIgVAAIAAh5IAMAAQAFAAABAFIACAMQAGgIAJgFQAIgGALAAQANAAAHAHQAHAHADAMQADgHAEgFQAEgFAFgDQAFgDAGgBQAFgCAGAAQAKAAAIADQAHADAGAGQAFAGADAJQACAIAAALIAABNg");
		this.shape_39.setTransform(107.85, 632.525);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#000000").s().p("AgKBYIAAh5IAVAAIAAB5gAgFg6IgFgDIgDgEIgBgGIABgGIADgFIAFgEIAFgBIAGABIAFAEIADAFIABAGIgBAGIgDAEIgFADIgGACg");
		this.shape_40.setTransform(95.025, 629.95);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#000000").s().p("AAdA+IAAhNQAAgNgGgIQgGgIgNAAQgIAAgJAFQgIAEgHAIIAABZIgWAAIAAh5IAOAAQAEAAABAFIACANIAIgIIAKgGIAKgEQAFgCAGAAQAKAAAHAEQAIADAGAGQAFAGACAJQADAIAAAKIAABNg");
		this.shape_41.setTransform(85.55, 632.525);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#000000").s().p("AgaA9QgGgCgFgEQgFgEgCgGQgDgGAAgJQAAgHAEgGQAEgHAJgFQAJgFAOgDQANgDAVgBIAAgJQAAgOgGgHQgGgIgMAAQgHAAgFACIgJAFIgHAEQgDACgDAAIgDgBIgDgDIgEgHQAKgJAMgFQALgFAOAAQAKAAAIADQAIAEAFAGQAFAGADAIQADAJAAAKIAABNIgKAAIgEgBIgDgEIgCgMIgKAIIgJAGIgKADIgNACQgHAAgGgCgAACAIQgKACgGADQgHADgCAEQgDAEAAAFQAAAFABAEQACADACACQADADAEABIAIABIAJgBIAJgEIAIgFIAHgHIAAgZQgPAAgKACg");
		this.shape_42.setTransform(72.475, 632.625);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgOQAAgNAEgLQAEgLAHgIQAIgIAKgFQALgEAMgBQALABAJADQAJAEAHAHQAHAGAEALQAEAKAAANQAAAFgBABQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIhRAAQABAMACAIQADAJAFAGQAFAFAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEIAFgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAGAIQgEAFgGADQgFAEgHACIgNAEIgNAAQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_43.setTransform(467.525, 601.8);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#000000").s().p("AAdBYIAAhNQAAgNgGgIQgGgHgNAAQgIAAgJAEQgIAFgHAIIAABYIgWAAIAAivIAWAAIAABHQAIgIAJgFQAKgFALAAQAKAAAHADQAIADAGAGQAFAGACAJQADAHAAALIAABNg");
		this.shape_44.setTransform(454.55, 599.075);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#000000").s().p("AgLBKQgIgJAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIAUgCIAFglIABgDIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAIAEADQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAGAKQgFAGgIACQgIAEgIAAQgNgBgIgHg");
		this.shape_45.setTransform(443.625, 599.95);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#000000").s().p("AgSBUQgIgEgGgIIgCALQAAAFgFgBIgOAAIAAivIAWAAIAABJQAIgJAKgGQAJgFAMAAQAKAAAJAEQAIAEAHAIQAGAIADALQACAJAAAOQAAAPgDAMQgDAMgHAJQgHAJgJAEQgLAFgMAAQgLAAgIgFgAgRgNQgHAEgHAJIAAA6QAGAIAHADQAHAEAIAAQARgBAJgMQAIgLABgZQgBgWgHgJQgJgLgPAAQgJAAgIAFg");
		this.shape_46.setTransform(426.75, 599.15);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#000000").s().p("AgaA6QgIgDgFgGQgFgGgDgIQgDgJAAgKIAAhNIAWAAIAABNQAAAOAGAHQAGAIANAAQAJAAAIgFQAIgEAHgIIAAhZIAWAAIAAB5IgNAAQgFAAgBgFIgCgNQgHAJgKAFQgKAGgMAAQgKAAgHgEg");
		this.shape_47.setTransform(412.975, 601.925);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#000000").s().p("AghA+IAAh5IAMAAQADAAACACQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABIACATQAGgNAHgHQAJgHAMAAIAHABIAGADIgBAPQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAIgFgBIgHgBQgGAAgEACQgFABgCAEQgEADgDAFIgFALIAABMg");
		this.shape_48.setTransform(402.775, 601.725);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#000000").s().p("AgQA7QgKgFgHgIQgHgHgEgNQgEgLAAgPQAAgMAEgMQADgMAIgIQAHgIALgFQAKgEANgBQANAAAKAFQAJAEAIAHIgGAIIgCACIgCABIgEgCIgGgDIgHgEQgFgBgHAAQgJAAgGADQgGAEgFAFQgFAHgCAIQgCAIAAAKQAAALACAJQADAIAEAGQAFAGAGADQAGADAIAAQAIAAAFgCIAIgEIAGgEQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIAGAIQgEAFgFADIgLAGIgMAEIgNAAQgKAAgKgDg");
		this.shape_49.setTransform(392.125, 601.8);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#000000").s().p("AgZA7QgKgFgHgGIAFgIIACgDIAEgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAIAGAEIAIAEQAFABAHAAQAGAAAEgBQAFgCADgDQADgCACgEQABgEAAgEQAAgFgCgDIgIgGIgKgEIgKgDIgMgFQgGgBgEgEQgFgEgCgFQgDgGAAgHQAAgHADgHQADgGAFgFQAGgFAIgDQAIgDAJAAQAMAAAKAEQAJAEAHAGIgEAIQgCADgDAAIgEgBIgGgDIgIgDQgEgCgGAAQgFAAgEACQgEABgDACIgFAGIgCAHQAAAFADADIAHAFIAJAEIAMAEIALAEQAGADAEACQAFAEADAFQACAFAAAIQAAAIgDAHQgDAHgGAFQgFAGgJADQgIADgLAAQgMAAgLgEg");
		this.shape_50.setTransform(380.975, 601.825);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#000000").s().p("AgXA7QgLgFgHgIQgIgJgEgLQgEgLAAgPQAAgNAEgMQAEgMAIgIQAHgHALgFQALgEAMgBQAOABAKAEQALAFAHAHQAIAIAEAMQAEAMAAANQAAAPgEALQgEALgIAJQgHAIgLAFQgKADgOAAQgMAAgLgDgAgOgqQgIAEgEAFQgFAHgCAIQgCAIAAAKQAAAWAJAMQAJAMARAAQASAAAJgMQAJgMAAgWQAAgUgJgNQgJgLgSgBQgIAAgGADg");
		this.shape_51.setTransform(362.95, 601.8);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#000000").s().p("AgLBKQgIgJAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIAUgCIAFglIABgDIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAIAEADQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIAGAKQgFAGgIACQgIAEgIAAQgNgBgIgHg");
		this.shape_52.setTransform(351.975, 599.95);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#000000").s().p("AgLBKQgIgJAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIAUgCIAFglIABgDIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAIAEADQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAGAKQgFAGgIACQgIAEgIAAQgNgBgIgHg");
		this.shape_53.setTransform(337.275, 599.95);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#000000").s().p("AAdBYIAAhNQAAgNgGgIQgHgHgMAAQgIAAgJAEQgIAFgHAIIAABYIgVAAIAAivIAVAAIAABHQAHgIAKgFQAJgFAMAAQAKAAAIADQAIADAEAGQAFAGADAJQADAHgBALIAABNg");
		this.shape_54.setTransform(326.25, 599.075);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#000000").s().p("AgZBRQgKgDgHgEQgGgFgDgFQgEgGAAgHQAAgJAFgGQAHgGAJgEQgFgCgDgEQgDgEAAgHIABgGIACgEIAFgFIAGgFQgIgFgFgIQgFgJgBgLQABgJADgHQADgHAHgFQAGgFAIgDQAJgDAKAAQAGAAAIACQAGACAGADIAhAAIAAAIQAAAEgFABIgOACQAFAIgBAJQABAJgEAHQgEAIgFAFQgHAFgIADQgJADgIAAQgJAAgIgCQgDACgCADQgCABAAADQAAAEADADQAEACAGABIANABIAOABIAPACQAHABAGADQAGADADAFQAEAFAAAJQAAAIgEAHQgEAHgHAGQgIAGgKADQgKAEgNAAQgOAAgJgDgAggAmQgFAEABAHQAAAEACADQACAEAEACQAEADAHABQAHACAIAAQAIAAAHgCQAHgBAEgDQAGgDACgEQADgEAAgFQAAgEgDgDQgDgDgEgBIgKgCIgMgBIgLgBIgNgBQgHADgEAFgAgXg9QgHAHAAALQAAAFACAFQABAEAEAEQAEADAFACQAEABAHAAQAFAAAFgBQAFgCADgDQAEgEABgEQACgFAAgFQAAgLgHgHQgGgHgMAAQgNAAgHAHg");
		this.shape_55.setTransform(313.4, 603.925);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#000000").s().p("AgKBXIAAh4IAVAAIAAB4gAgFg6IgFgCIgDgGIgBgFIABgGIADgFIAFgEIAFgBIAGABIAFAEIADAFIABAGIgBAFIgDAGIgFACIgGACg");
		this.shape_56.setTransform(304.175, 599.15);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#000000").s().p("AghA+IAAh5IAMAAQADAAACACQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABIACATQAGgNAHgHQAJgHAMAAIAHABIAGADIgBAPQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAIgFgBIgHgBQgGAAgEACQgFABgCAEQgEADgDAFIgFALIAABMg");
		this.shape_57.setTransform(297.725, 601.725);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgOQAAgNAEgLQAEgLAHgIQAIgIAKgFQALgEAMgBQALABAJADQAJAEAHAHQAHAGAEALQAEAKAAANQAAAFgBABQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIhRAAQABAMACAIQADAJAFAGQAFAFAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEIAFgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAGAIQgEAFgGADQgFAEgHACIgNAEIgNAAQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_58.setTransform(280.225, 601.8);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#000000").s().p("AAdBYIAAhNQAAgNgGgIQgGgHgNAAQgJAAgIAEQgIAFgHAIIAABYIgWAAIAAivIAWAAIAABHQAHgIAKgFQAKgFALAAQAKAAAIADQAIADAEAGQAGAGACAJQADAHAAALIAABNg");
		this.shape_59.setTransform(267.25, 599.075);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#000000").s().p("AgLBKQgIgJAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIAUgCIAFglIABgDIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAIAEADQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIAGAKQgFAGgIACQgIAEgIAAQgNgBgIgHg");
		this.shape_60.setTransform(256.325, 599.95);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#000000").s().p("AgXA7QgKgFgJgIQgHgJgEgLQgEgLAAgPQAAgNAEgMQAEgMAHgIQAJgHAKgFQALgEAMgBQANABALAEQALAFAIAHQAHAIAEAMQAEAMAAANQAAAPgEALQgEALgHAJQgIAIgLAFQgLADgNAAQgMAAgLgDgAgPgqQgGAEgFAFQgFAHgCAIQgCAIAAAKQAAAWAJAMQAJAMARAAQASAAAJgMQAJgMAAgWQAAgUgJgNQgJgLgSgBQgIAAgHADg");
		this.shape_61.setTransform(239, 601.8);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#000000").s().p("AgLBKQgIgJAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIAUgCIAFglIABgDIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAIAEADQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAGAKQgFAGgIACQgIAEgIAAQgNgBgIgHg");
		this.shape_62.setTransform(228.025, 599.95);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#000000").s().p("AgKBYIAAivIAVAAIAACvg");
		this.shape_63.setTransform(214.675, 599.075);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgOQAAgNAEgLQAEgLAHgIQAIgIAKgFQALgEAMgBQALABAJADQAJAEAHAHQAHAGAEALQAEAKAAANQAAAFgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIhRAAQABAMACAIQADAJAFAGQAFAFAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEQADgCACAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABIAGAIQgEAFgGADQgFAEgHACIgNAEIgNAAQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_64.setTransform(205.575, 601.8);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgOQAAgNAEgLQAEgLAHgIQAIgIAKgFQALgEAMgBQALABAJADQAJAEAHAHQAHAGAEALQAEAKAAANQAAAFgBABQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIhRAAQABAMACAIQADAJAFAGQAFAFAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEIAFgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAGAIQgEAFgGADQgFAEgHACIgNAEIgNAAQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_65.setTransform(192.925, 601.8);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#000000").s().p("AAdBYIAAhNQAAgNgGgIQgGgHgNAAQgIAAgJAEQgIAFgHAIIAABYIgWAAIAAivIAWAAIAABHQAHgIAKgFQAKgFALAAQAKAAAHADQAJADAEAGQAGAGACAJQADAHAAALIAABNg");
		this.shape_66.setTransform(179.95, 599.075);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#000000").s().p("AAiA9QgDAAgBgEIgbhSIgCgFIgBgGIAAAGIgCAFIgbBSQgBAEgEAAIgQAAIgnh5IAQAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAIACADIAXBNIAEAQIACgHIACgJIAahNIACgDIAEgCIAIAAIAEACIACADIAZBNIADAJIACAHIABgHIACgJIAYhNIACgDIAEgCIAQAAIgnB5g");
		this.shape_67.setTransform(163.775, 601.8);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgOQAAgNAEgLQAEgLAHgIQAIgIAKgFQALgEAMgBQALABAJADQAJAEAHAHQAHAGAEALQAEAKAAANQAAAFgBABQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIhRAAQABAMACAIQADAJAFAGQAFAFAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEIAFgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAGAIQgEAFgGADQgFAEgHACIgNAEIgNAAQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_68.setTransform(141.975, 601.8);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#000000").s().p("AAdBYIAAhNQAAgNgGgIQgHgHgMAAQgJAAgIAEQgIAFgHAIIAABYIgWAAIAAivIAWAAIAABHQAIgIAJgFQAKgFALAAQAKAAAIADQAHADAFAGQAFAGADAJQACAHAAALIAABNg");
		this.shape_69.setTransform(129, 599.075);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#000000").s().p("AgLBKQgIgJAAgPIAAhJIgPAAIgDgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgJIAUgCIAFglIABgDIAEgBIAJAAIAAApIAkAAIAAAQIgkAAIAABIQAAAIAEADQAEAEAGAAIAGgBIAEgCIADgCIACgBQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIAGAKQgFAGgIACQgIAEgIAAQgNgBgIgHg");
		this.shape_70.setTransform(118.075, 599.95);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#000000").s().p("AgSA7QgLgFgHgIQgIgJgEgMQgFgMAAgOQAAgNAEgLQAEgLAHgIQAIgIAKgFQALgEAMgBQALABAJADQAJAEAHAHQAHAGAEALQAEAKAAANQAAAFgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIhRAAQABAMACAIQADAJAFAGQAFAFAHADQAHADAIAAQAIAAAGgCIAKgEIAHgEQADgCACAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABIAGAIQgEAFgGADQgFAEgHACIgNAEIgNAAQgLAAgLgDgAAjgMQAAgHgDgHQgCgGgEgFQgEgEgFgDQgGgCgIAAQgOAAgJAJQgJAJgCAQIBCAAIAAAAg");
		this.shape_71.setTransform(101.275, 601.8);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#000000").s().p("AgZA7QgKgFgHgGIAFgIIACgDIAEgBQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAIAGAEIAIAEQAFABAHAAQAGAAAEgBQAFgCADgDQADgCACgEQABgEAAgEQAAgFgCgDIgIgGIgKgEIgKgDIgMgFQgGgBgEgEQgFgEgCgFQgDgGAAgHQAAgHADgHQADgGAFgFQAGgFAIgDQAIgDAJAAQAMAAAKAEQAJAEAHAGIgEAIQgCADgDAAIgEgBIgGgDIgIgDQgEgCgGAAQgFAAgEACQgEABgDACIgFAGIgCAHQAAAFADADIAHAFIAJAEIAMAEIALAEQAGADAEACQAFAEADAFQACAFAAAIQAAAIgDAHQgDAHgGAFQgFAGgJADQgIADgLAAQgMAAgLgEg");
		this.shape_72.setTransform(89.675, 601.825);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#000000").s().p("AgbBSQgNgGgJgJQgJgJgFgNQgEgMAAgQIAAhnIAXAAIAABnQAAALADAJQADAJAGAHQAFAGAJAEQAIADAKABQALgBAIgDQAJgEAFgGQAGgHADgIQADgKAAgLIAAhnIAXAAIAABnQAAAQgEAMQgFANgJAJQgJAJgMAGQgNAFgQAAQgPAAgMgFg");
		this.shape_73.setTransform(75.725, 599.4);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }] }).wait(450));

		// cathode
		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#231F20").s().p("AgWBGQgNgFgJgKQgJgKgFgPQgGgOABgSQAAgPAEgNQAFgNAIgLQAKgJAMgGQANgFAPAAQANAAALAEQALAFAIAIQAJAIAEANQAFALgBAQQAAAGgBACQgBABgEAAIhgAAQAAAOADAKQAEALAGAGQAGAHAJAEQAIADAJAAQAKAAAHgCIAMgFIAIgFQADgCADAAQADAAACACIAHAKQgFAFgGAFQgHAEgIADIgPADIgQACQgOAAgNgFgAAqgPQgBgIgCgIQgCgIgFgFQgGgGgGgDQgHgCgJAAQgRgBgLAMQgLAKgCATIBPAAIAAAAg");
		this.shape_74.setTransform(316.05, 538.25);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#231F20").s().p("AgfBmQgKgFgHgJQgIgKgDgNQgEgPAAgSQAAgPAEgOQAEgNAIgLQAIgKAMgGQAMgFAPAAQAMgBAKAFQAJAEAIAJIAAhRIAZAAIAADTIgPAAQgGAAgBgFIgCgSQgKALgMAHQgMAHgOAAQgNAAgKgFgAgagIQgLANAAAbQAAAPADAKQACAKAFAHQAFAGAGADQAHADAJAAQAMABAJgHQAKgFAIgLIAAhFQgIgKgIgEQgIgDgLAAQgTAAgLAOg");
		this.shape_75.setTransform(300.025, 535.05);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#231F20").s().p("AgcBGQgNgFgIgLQgKgJgFgOQgEgNAAgSQAAgQAEgOQAFgOAKgKQAIgKANgFQANgFAPAAQAQAAANAFQANAFAJAKQAJAKAFAOQAEAOAAAQQAAASgEANQgFAOgJAJQgJALgNAFQgNAFgQAAQgPAAgNgFgAgSgzQgIAFgFAHQgGAGgCALQgDAKAAAMQAAAaALAPQAKAOAVAAQAWAAALgOQAKgPAAgaQAAgZgKgOQgLgPgWAAQgJAAgJADg");
		this.shape_76.setTransform(284.2, 538.25);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#231F20").s().p("AAjBqIAAhdQAAgPgIgJQgHgKgQAAQgKABgKAFQgKAGgIAIIAABrIgaAAIAAjTIAaAAIAABVQAJgKAMgGQALgFAOAAQAMAAAJADQAKAFAFAHQAHAHACAKQAEAJAAANIAABdg");
		this.shape_77.setTransform(268.15, 534.95);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#231F20").s().p("AgOBYQgJgJAAgSIAAhZIgSAAIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBIAAgKIAYgDIAGgtIACgEIAEgBIAMAAIAAAzIAqAAIAAASIgqAAIAABXQAAAJAEAEQAFAFAHAAIAHgCIAFgCIADgCIADgBQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIAHAMQgGAHgKADQgJADgKABQgQAAgKgKg");
		this.shape_78.setTransform(255.025, 536);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#231F20").s().p("AggBJQgHgCgGgFQgFgFgEgHQgCgHAAgKQgBgJAFgIQAFgIALgGQAKgGARgDQAQgEAagBIAAgLQAAgRgIgJQgIgIgOAAQgIAAgGACIgMAFIgHAGQgEACgDAAIgFgBIgDgEIgFgIQAMgMAOgFQAPgGAQAAQAMAAAJAEQAKAEAGAHQAHAHADALQADAKAAAMIAABcIgLAAIgFgBQgDgBgBgEIgDgOIgLAKIgMAHIgLAEIgQABQgIAAgIgCgAACAKQgMADgHADQgIAEgDAFQgEAFAAAGQAAAFACAFQABAEAEACQADADAFABIAJACIALgCIALgEIAKgGIAJgIIAAgeQgTAAgMACg");
		this.shape_79.setTransform(242.15, 538.225);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#231F20").s().p("AgTBGQgMgFgJgKQgIgKgFgNQgFgOAAgSQAAgQAEgNQAFgOAJgKQAIgKANgGQANgFAPAAQAQAAALAFQAMAFAJAJIgGAJIgDACIgDABIgFgBIgGgEIgJgFQgGgBgIAAQgLAAgHADQgIAFgGAHQgFAHgDAKQgDALAAALQAAANADALQADAKAGAHQAFAHAIAEQAHADAKAAQAJAAAGgCIAKgFIAHgFQACgCADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAHAKQgFAFgGAFIgNAHIgOADIgQACQgNAAgLgFg");
		this.shape_80.setTransform(228.925, 538.25);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }] }).wait(450));

		// anode
		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#231F20").s().p("AgWBGQgMgFgKgKQgJgKgGgPQgEgOgBgSQAAgPAFgNQAFgNAIgLQAJgJANgGQANgFAPAAQAMAAAMAEQALAFAIAIQAIAIAFANQAEAMABAPQgBAGgBACQgBABgEAAIhgAAQAAAOAEAKQADALAGAGQAGAHAIAEQAJADAJAAQAKAAAHgCIAMgFIAJgFQACgCADAAQADAAACACIAHAKQgFAFgGAFQgHAEgHADIgQADIgQACQgOAAgNgFgAApgPQABgIgDgIQgDgIgFgFQgEgGgHgDQgHgCgJAAQgSgBgKALQgKALgEATIBPAAIAAAAg");
		this.shape_81.setTransform(627.85, 536.45);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#231F20").s().p("AgfBmQgKgFgHgJQgIgJgDgOQgEgPAAgSQAAgPAEgOQAEgNAIgLQAIgKAMgGQAMgFAPAAQAMgBAKAFQAJAEAIAJIAAhRIAZAAIAADTIgPAAQgGAAgBgFIgCgSQgKALgMAHQgMAHgOAAQgNAAgKgFgAgagIQgLANAAAbQAAAPADAKQACAKAFAHQAFAGAGADQAHADAJAAQAMABAJgHQAKgFAIgLIAAhFQgIgKgIgEQgIgDgLAAQgTAAgLAOg");
		this.shape_82.setTransform(611.775, 533.25);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#231F20").s().p("AgcBGQgMgFgJgLQgKgJgFgOQgEgOgBgRQABgQAEgOQAFgOAKgKQAJgKAMgFQANgFAPAAQAQAAANAFQANAFAJAKQAJAKAFAOQAEAOABAQQgBARgEAOQgFAOgJAJQgJALgNAFQgNAFgQAAQgPAAgNgFgAgSgzQgIAFgFAHQgGAGgCALQgDAKAAAMQAAAaALAPQAKAOAVAAQAWAAALgOQAKgPAAgaQAAgZgKgOQgLgPgWAAQgKAAgIADg");
		this.shape_83.setTransform(595.95, 536.45);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#231F20").s().p("AAjBKIAAhcQAAgQgHgKQgIgJgQAAQgKABgJAFQgLAGgIAIIAABrIgaAAIAAiRIAQAAQAFAAACAGIACAPIAKgKIALgHIANgEQAFgCAIAAQAMAAAJADQAKAFAFAHQAHAIACAJQAEAKAAANIAABcg");
		this.shape_84.setTransform(579.9, 536.35);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#231F20").s().p("AggBJQgHgCgFgFQgGgFgDgHQgDgHAAgKQgBgJAFgIQAFgIALgGQAKgGASgDQAPgEAagBIAAgLQAAgRgIgJQgHgIgPAAQgIAAgGACIgMAFIgIAGQgDACgDAAIgFgBIgDgEIgFgIQAMgMAOgFQAOgGARAAQAMAAAJAEQAKAEAHAHQAGAHADALQAEAKgBAMIAABcIgLAAIgGgBQgBgBgCgEIgDgOIgLAKIgMAHIgLAEIgQABQgIAAgIgCgAACAKQgLADgIADQgIAEgDAFQgEAFAAAGQAAAFACAFQABAEAEACQADADAFABIAJACIALgCIALgEIAKgGIAJgIIAAgeQgTAAgMACg");
		this.shape_85.setTransform(564.25, 536.425);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }] }).wait(450));

		// charge
		this.instance_85 = new lib.textCharge("synched", 0);
		this.instance_85.setTransform(100.1, 51.35, 1.5999, 1.5999, 0, 0, 0, 28.6, 0.2);
		this.instance_85.alpha = 0;

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#000000").s().p("AgWBGQgMgFgKgKQgJgKgGgPQgEgOAAgSQgBgPAFgOQAFgNAJgJQAIgKANgGQANgFAOAAQANAAAMAEQALAEAIAJQAIAIAFANQAEAMAAAPQABAGgCACQgBABgEAAIhgAAQAAAOADAKQAEALAGAGQAGAHAJAEQAIADAJAAQAKAAAHgCIAMgFIAJgFQADgCACAAQADAAACACIAHAKQgEAGgHAEQgHAEgIADIgPADIgQACQgOAAgNgFgAAqgPQAAgJgDgHQgCgIgGgFQgFgGgGgDQgHgCgJAAQgSAAgKALQgLAKgCATIBPAAIAAAAg");
		this.shape_86.setTransform(134.5, 54.85);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#000000").s().p("AgfBiQgMgDgIgGQgHgFgEgIQgEgGAAgIQAAgLAGgHQAHgIAMgFQgGgCgEgFQgEgFAAgIIABgHIAEgGIAFgFIAIgGQgKgGgGgKQgGgKAAgNQAAgLAEgJQAEgJAHgGQAHgFALgEQAKgDAMAAQAIAAAJACQAIACAHAEIAnAAIAAAKQAAAEgGABIgQACQAEAKAAAMQAAALgEAIQgEAJgHAGQgHAGgKAEQgKACgLABQgKAAgJgCQgFACgDADQgCACAAAEQAAAFAEACQAFADAHABIAPACIARABIATACQAIACAHAEQAHADAEAHQAFAFAAALQAAAJgFAJQgFAJgIAGQgJAIgNADQgNAFgPAAQgQAAgMgDgAgnAuQgFAFAAAHQAAAFADAFQACAEAFADQAGADAHACQAIACALAAQAJAAAIgCQAJgCAFgEQAGgDADgFQADgEAAgGQAAgGgDgDQgDgDgFgCIgMgDIgOgBIgPAAIgPgCQgIADgFAHgAgchJQgIAIAAAOQAAAGACAFQACAGAEADQAEAFAGACQAGABAIAAQAHAAAGgBQAFgCAFgFIAGgJQACgFAAgGQAAgOgJgIQgIgIgOAAQgQAAgIAIg");
		this.shape_87.setTransform(119.525, 57.35);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#000000").s().p("AgoBKIAAiRIAPAAQAEAAACACIACAFIABAXQAHgPAJgJQAKgIAPAAIAJABIAHADIgBATQgBAEgEAAIgGgBIgIgBQgHAAgGACQgFACgDAEQgFAEgDAGIgGANIAABbg");
		this.shape_88.setTransform(107.525, 54.725);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#000000").s().p("AggBJQgHgCgFgFQgGgFgDgHQgDgHgBgKQAAgJAFgIQAFgIALgGQAKgGASgDQAQgEAYgBIAAgLQABgRgIgJQgHgIgPAAQgIAAgHACIgLAFIgIAGQgDACgDAAIgFgBIgDgEIgFgIQAMgMAOgFQAOgGARAAQAMAAAJAEQAKAEAHAHQAGAHADALQAEAKgBAMIAABcIgLAAIgGgBQgBgBgCgEIgDgOIgLAKIgMAHIgLAEIgQABQgIAAgIgCgAACAKQgLADgIADQgIAEgDAFQgEAFAAAGQAAAFACAFQABAEAEACQADADAFABIAJACIALgCIALgEIAJgGIAJgIIAAgeQgSAAgMACg");
		this.shape_89.setTransform(93.9, 54.825);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#000000").s().p("AAjBqIAAhdQAAgPgHgJQgIgKgQABQgKAAgJAFQgKAFgJAJIAABrIgaAAIAAjTIAaAAIAABWQAKgKALgHQALgFAOAAQAMAAAJAEQAJAEAHAHQAFAHADAKQAEAJAAANIAABdg");
		this.shape_90.setTransform(79.3, 51.55);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#000000").s().p("AgTBGQgMgFgJgKQgIgKgFgNQgFgOAAgSQAAgQAEgNQAFgOAJgKQAIgKANgGQANgFAPAAQAQAAALAFQAMAFAJAJIgGAJIgDACIgDABIgFgBIgGgFIgJgEQgGgBgIAAQgLAAgHADQgIAFgGAGQgFAIgDAKQgDALAAALQAAANADALQADAKAGAHQAFAHAIAEQAHADAKAAQAJAAAGgCIAKgFIAHgFQACgCADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAHAKQgFAGgGAEIgNAHIgOADIgQACQgNAAgLgFg");
		this.shape_91.setTransform(64.625, 54.85);

		this.instance_86 = new lib.textCharge3("synched", 0);
		this.instance_86.setTransform(100.1, 51.35, 1.5999, 1.5999, 0, 0, 0, 28.6, 0.2);
		this.instance_86._off = true;

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_85 }] }).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.instance_85 }] }, 1).to({ state: [{ t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 428).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).to({ state: [{ t: this.instance_86 }] }, 1).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(1).to({ regX: 28.4, regY: 2, scaleX: 1.6, scaleY: 1.6, x: 99.75, y: 54.2, alpha: 0.125 }, 0).wait(1).to({ alpha: 0.25 }, 0).wait(1).to({ alpha: 0.375 }, 0).wait(1).to({ alpha: 0.5 }, 0).wait(1).to({ alpha: 0.625 }, 0).wait(1).to({ alpha: 0.75 }, 0).wait(1).to({ alpha: 0.875 }, 0).wait(1).to({ alpha: 1 }, 0).to({ _off: true }, 1).wait(441));
		this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(437).to({ _off: false }, 0).wait(1).to({ regX: 28.4, regY: 2, scaleX: 1.6, scaleY: 1.6, x: 99.75, y: 54.2, alpha: 0.9167 }, 0).wait(1).to({ alpha: 0.8333 }, 0).wait(1).to({ alpha: 0.75 }, 0).wait(1).to({ alpha: 0.6667 }, 0).wait(1).to({ alpha: 0.5833 }, 0).wait(1).to({ alpha: 0.5 }, 0).wait(1).to({ alpha: 0.4167 }, 0).wait(1).to({ alpha: 0.3333 }, 0).wait(1).to({ alpha: 0.25 }, 0).wait(1).to({ alpha: 0.1667 }, 0).wait(1).to({ alpha: 0.0833 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));

		// remainingLithiumAtoms
		this.instance_87 = new lib.lithiumAtom("synched", 0);
		this.instance_87.setTransform(701.6, 468.4, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.instance_88 = new lib.lithiumAtom("synched", 0);
		this.instance_88.setTransform(701.6, 429.15, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.instance_89 = new lib.lithiumAtom("synched", 0);
		this.instance_89.setTransform(700.8, 393.25, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.4);

		this.instance_90 = new lib.lithiumAtom("synched", 0);
		this.instance_90.setTransform(700.8, 353.9, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.instance_91 = new lib.lithiumAtom("synched", 0);
		this.instance_91.setTransform(700.05, 315.5, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.instance_92 = new lib.lithiumAtom("synched", 0);
		this.instance_92.setTransform(700.05, 277.15, 1.5999, 1.5999, 0, 0, 0, 9.1, 0.3);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_92 }, { t: this.instance_91 }, { t: this.instance_90 }, { t: this.instance_89 }, { t: this.instance_88 }, { t: this.instance_87 }] }).wait(450));

		// Background
		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_92.setTransform(381.8265, 468.0183, 1.5991, 1.5991);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_93.setTransform(337.7711, 467.7784, 1.5991, 1.5991);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_94.setTransform(205.7649, 468.0183, 1.5991, 1.5991);

		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_95.setTransform(249.1807, 467.7784, 1.5991, 1.5991);

		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAcAcQAbAbAAAmg");
		this.shape_96.setTransform(293.5958, 468.0183, 1.5991, 1.5991);

		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_97.setTransform(381.8265, 429.6398, 1.5991, 1.5991);

		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_98.setTransform(337.7711, 429.3999, 1.5991, 1.5991);

		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_99.setTransform(205.7649, 429.6398, 1.5991, 1.5991);

		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_100.setTransform(249.1807, 429.3999, 1.5991, 1.5991);

		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAcAcQAbAbAAAmg");
		this.shape_101.setTransform(293.5958, 429.6398, 1.5991, 1.5991);

		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_102.setTransform(381.8265, 392.8603, 1.5991, 1.5991);

		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_103.setTransform(337.7711, 392.6205, 1.5991, 1.5991);

		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_104.setTransform(205.7649, 392.8603, 1.5991, 1.5991);

		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_105.setTransform(249.1807, 392.6205, 1.5991, 1.5991);

		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAcAcQAbAbAAAmg");
		this.shape_106.setTransform(293.5958, 392.8603, 1.5991, 1.5991);

		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_107.setTransform(381.8265, 354.4818, 1.5991, 1.5991);

		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_108.setTransform(337.7711, 354.2419, 1.5991, 1.5991);

		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_109.setTransform(205.7649, 354.4818, 1.5991, 1.5991);

		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_110.setTransform(249.1807, 354.2419, 1.5991, 1.5991);

		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAcAcQAbAbAAAmg");
		this.shape_111.setTransform(293.5958, 354.4818, 1.5991, 1.5991);

		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_112.setTransform(381.9065, 313.9045, 1.5991, 1.5991);

		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_113.setTransform(337.8911, 313.6246, 1.5991, 1.5991);

		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQglAAgdgcQgbgbAAgnQAAgmAbgcQAdgbAlAAQAnAAAcAbQAbAcAAAmg");
		this.shape_114.setTransform(205.8849, 313.9045, 1.5991, 1.5991);

		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_115.setTransform(249.3406, 313.6246, 1.5991, 1.5991);

		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_116.setTransform(293.7158, 313.9045, 1.5991, 1.5991);

		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_117.setTransform(381.9065, 275.5259, 1.5991, 1.5991);

		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_118.setTransform(337.8911, 275.2461, 1.5991, 1.5991);

		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQglAAgdgcQgbgbAAgnQAAgmAbgcQAdgbAlAAQAnAAAcAbQAbAcAAAmg");
		this.shape_119.setTransform(205.8849, 275.5259, 1.5991, 1.5991);

		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_120.setTransform(249.3406, 275.2461, 1.5991, 1.5991);

		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_121.setTransform(293.7158, 275.5259, 1.5991, 1.5991);

		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_122.setTransform(700.0486, 468.0183, 1.5991, 1.5991);

		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_123.setTransform(655.9932, 467.7784, 1.5991, 1.5991);

		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_124.setTransform(523.987, 468.0183, 1.5991, 1.5991);

		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_125.setTransform(567.4027, 467.7784, 1.5991, 1.5991);

		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_126.setTransform(611.8179, 468.0183, 1.5991, 1.5991);

		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_127.setTransform(700.0486, 429.6398, 1.5991, 1.5991);

		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_128.setTransform(655.9932, 429.3999, 1.5991, 1.5991);

		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_129.setTransform(523.987, 429.6398, 1.5991, 1.5991);

		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_130.setTransform(567.4027, 429.3999, 1.5991, 1.5991);

		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_131.setTransform(611.8179, 429.6398, 1.5991, 1.5991);

		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_132.setTransform(700.0486, 392.8603, 1.5991, 1.5991);

		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_133.setTransform(655.9932, 392.6205, 1.5991, 1.5991);

		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_134.setTransform(523.987, 392.8603, 1.5991, 1.5991);

		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_135.setTransform(567.4027, 392.6205, 1.5991, 1.5991);

		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_136.setTransform(611.8179, 392.8603, 1.5991, 1.5991);

		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_137.setTransform(700.0486, 354.4818, 1.5991, 1.5991);

		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_138.setTransform(655.9932, 354.2419, 1.5991, 1.5991);

		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_139.setTransform(523.987, 354.4818, 1.5991, 1.5991);

		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_140.setTransform(567.4027, 354.2419, 1.5991, 1.5991);

		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgcgcQgbgbAAgnQAAgmAbgbQAcgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_141.setTransform(611.8179, 354.4818, 1.5991, 1.5991);

		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_142.setTransform(700.1285, 313.9045, 1.5991, 1.5991);

		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAcAcQAbAbAAAmg");
		this.shape_143.setTransform(656.1131, 313.6246, 1.5991, 1.5991);

		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_144.setTransform(524.1069, 313.9045, 1.5991, 1.5991);

		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_145.setTransform(567.5626, 313.6246, 1.5991, 1.5991);

		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_146.setTransform(611.9378, 313.9045, 1.5991, 1.5991);

		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_147.setTransform(700.1285, 275.5259, 1.5991, 1.5991);

		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.f().s("#6D6E71").p("ABeAAQAAAngbAbQgcAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAcAcQAbAbAAAmg");
		this.shape_148.setTransform(656.1131, 275.2461, 1.5991, 1.5991);

		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_149.setTransform(524.1069, 275.5259, 1.5991, 1.5991);

		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmg");
		this.shape_150.setTransform(567.5626, 275.2461, 1.5991, 1.5991);

		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.f().s("#6D6E71").p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
		this.shape_151.setTransform(611.9378, 275.5259, 1.5991, 1.5991);

		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.f().s("#231F20").ss(0.3).p("ADcApQkRgghbgOIhEgNIA5gWIAYAKQAbAKAQACQAYADBfAKQBZAJAXAEQAuAJAjAOg");
		this.shape_152.setTransform(570.4715, 58.408, 1.5991, 1.5991);

		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.f().s("#231F20").ss(0.3).p("Aicg6IAhgcQAtgcA8ACQB2AEAnBxQAUA5gEA4");
		this.shape_153.setTransform(376.1427, 90.4473, 1.5991, 1.5991);

		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.f().s("#231F20").ss(0.3).p("Ai3B1QgGg/AWg8QAth8CPAFQCIAEAXB+QAMA/gQA+");
		this.shape_154.setTransform(570.8845, 92.5127, 1.5991, 1.5991);

		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.f().s("#231F20").ss(0.5).p("Ag1hHIAtgLQAwgGAPAVQACACgYAlQgZAugDAwQgBAKgfAFIggAE");
		this.shape_155.setTransform(342.1331, 91.3837, 1.5991, 1.5991);

		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.f().s("#231F20").ss(0.5).p("AgLgEQgEAKABAJQABAJAFACQAFACAFgHQAGgGAEgLQAEgJgBgJQgBgJgFgCQgFgCgFAHQgGAGgEAKg");
		this.shape_156.setTransform(617.8655, 95.7465, 1.5991, 1.5991);

		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.f().s("#231F20").ss(0.5).p("AgRgFQgFAOABANQABANAIADQAHACAIgJQAKgJAFgQQAFgPgBgMQgBgNgHgDQgIgCgIAJQgJAJgGAQg");
		this.shape_157.setTransform(343.9543, 61.3257, 1.5991, 1.5991);

		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.f().s("#231F20").ss(0.5).p("AATgQQAMAQACAQQACAQgKAHQgMAJgXgHQgZgHAIgQQAIgOgHgTQgHgVABgBQADgLATAIQARAIAMAQg");
		this.shape_158.setTransform(610.0029, 76.6799, 1.5991, 1.5991);

		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.f().s("#011D56").ss(0.5).p("AARAAQgcgMgIAFQgHADgBAGQgBADAAADg");
		this.shape_159.setTransform(501.0743, 18.0819, 1.5991, 1.5991);

		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.f("#ACC3E6").s().p("AgVACQABgGAHgDQAIgEAcALIgtAJIABgHg");
		this.shape_160.setTransform(500.107, 18.0146, 1.5991, 1.5991);

		this.shape_161 = new cjs.Shape();
		this.shape_161.graphics.f().s("#011D56").ss(0.4).p("ABnBeQhHhIgagXIhshc");
		this.shape_161.setTransform(528.3333, 34.4739, 1.5991, 1.5991);

		this.shape_162 = new cjs.Shape();
		this.shape_162.graphics.f().s("#011D56").ss(0.5).p("AgxABQgXACA2gIQAogHAPADQAEABAJAHIhFAMIgCAAg");
		this.shape_162.setTransform(503.8837, 19.677, 1.5991, 1.5991);

		this.shape_163 = new cjs.Shape();
		this.shape_163.graphics.f("#ACC3E6").s().p("AgRALIgcgKQgXACA2gIQAngHAQADQADABAJAHIhEAMg");
		this.shape_163.setTransform(503.3689, 19.677, 1.5991, 1.5991);

		this.shape_164 = new cjs.Shape();
		this.shape_164.graphics.f().s("#231F20").ss(0.3).p("Ak9hwIAPAFQAUAHAZADQBLALCjAVQCdAUA+AHQAyAFAlBJQATAlAJAk");
		this.shape_164.setTransform(572.902, 72.4639, 1.5991, 1.5991);

		this.shape_165 = new cjs.Shape();
		this.shape_165.graphics.f().s("#231F20").ss(0.3).p("AkVilQgKAIgKAMQgUAZgCAaQgCBEAUBgQAKAwAKAjIJOAMQAIgoACg2QAGhrgYhGQgGgSghgQIgggM");
		this.shape_165.setTransform(479.8715, 76.7642, 1.5991, 1.5991);

		this.shape_166 = new cjs.Shape();
		this.shape_166.graphics.f().s("#231F20").ss(0.5).p("AhbhsIC3DZ");
		this.shape_166.setTransform(505.8372, 36.2197, 1.5991, 1.5991);

		this.shape_167 = new cjs.Shape();
		this.shape_167.graphics.f().s("#011D56").ss(0.4).p("ADehZQhPgFhVgDQipgFgeANQgoARgWBXQgLAsgDAo");
		this.shape_167.setTransform(368.3793, 63.2535, 1.5991, 1.5991);

		this.shape_168 = new cjs.Shape();
		this.shape_168.graphics.f().s("#011D56").ss(0.5).p("AAuAGIhbAAQgHAAAAgGQAAgFAHAAIBbAAQAHAAAAAFQAAAGgHAAg");
		this.shape_168.setTransform(446.8701, 64.7238, 1.5991, 1.5991);

		this.shape_169 = new cjs.Shape();
		this.shape_169.graphics.f("#ACC3E6").s().p("AgtAGQgHAAABgGQgBgFAHAAIBbAAQAHAAgBAFQABAGgHAAg");
		this.shape_169.setTransform(446.8701, 64.7238, 1.5991, 1.5991);

		this.shape_170 = new cjs.Shape();
		this.shape_170.graphics.f().s("#011D56").ss(0.8).p("AA7ANQAAARgaAJQgUAHgZAAQgSAAgOgNQgNgOAAgTQAAgSANgOQAOgNASAAQAUAAAZAUQAaAUAAASg");
		this.shape_170.setTransform(505.1575, 51.6111, 1.5991, 1.5991);

		this.shape_171 = new cjs.Shape();
		this.shape_171.graphics.f("#ACC3E6").s().p("AgsAhQgOgOAAgTQAAgSAOgOQAOgNASAAQAUAAAYAUQAbAUAAASQAAARgbAJQgTAHgZAAQgSAAgOgNg");
		this.shape_171.setTransform(505.1575, 51.6111, 1.5991, 1.5991);

		this.shape_172 = new cjs.Shape();
		this.shape_172.graphics.f().s("#011D56").ss(0.8).p("ABFgeQgIgSg6gDIg3AAIgQBXIBVAQIAeghQAcgjgGgOg");
		this.shape_172.setTransform(614.1302, 109.292, 1.5991, 1.5991);

		this.shape_173 = new cjs.Shape();
		this.shape_173.graphics.f("#ACC3E6").s().p("AhEAkIAPhXIA4AAQA5ADAIASQAHAOgdAjIgeAhg");
		this.shape_173.setTransform(614.1931, 109.2589, 1.5991, 1.5991);

		this.shape_174 = new cjs.Shape();
		this.shape_174.graphics.f().s("#011D56").ss(0.5).p("Am7hyQhDgphMgjQiahIgzAbQgtAXgbCUQgNBJgHBFQgEAAgJAGQgKAGgCAFQgHANAAArQABAWABASQgDABgDADQgGAHAAAKQAAAVARAEQAIACAIgCIAJAVIAdAAIAIAJIF6AAIN3AMIANgGQAOgGADAAIFCAVIAVAQIAiAAIAIgQIAZgOQAbgQAHgIQANgQALgkQAKgjgBgWQgBgigYg1Qgag4gZgQQg2ggiRgQQiggQgmgPQgDgBgHgGIgHgGQhBAYgXgHQgngMhOhcQhFhZgDAAQAAAAgdgKQgbgJgCADQgOAOABAHQABAGAMAIQAGAEALAHQApAiBlCBg");
		this.shape_174.setTransform(474.9814, 67.3189, 1.5991, 1.5991);

		this.shape_175 = new cjs.Shape();
		this.shape_175.graphics.f("#ACC3E6").s().p("AMYEwIgVgQIlCgVQgDAAgOAGIgNAGIt3gMIl6AAIgIgJIgdAAIgJgVQgIACgIgCQgRgEAAgVQAAgKAGgHQADgDADgBIgCgoQAAgrAHgNQACgFAKgGQAJgGAEAAQAHhFANhJQAbiUAtgXQAzgbCaBIQBMAjBDApIK/AVQhliBgpgiIgRgLQgMgIgBgGQgBgHAOgOQACgDAbAJIAdAKQADAABFBZQBOBcAnAMQAXAHBBgYIAHAGQAHAGADABQAmAPCgAQQCRAQA2AgQAZAQAaA4QAYA1ABAiQABAWgKAjQgLAkgNAQQgHAIgbAQIgZAOIgIAQg");
		this.shape_175.setTransform(474.9814, 67.3189, 1.5991, 1.5991);

		this.shape_176 = new cjs.Shape();
		this.shape_176.graphics.f().s("#666666").ss(4, 1).p("EgocAI3IAJyCMBQvAAAIABSX");
		this.shape_176.setTransform(448.4246, 269.3906, 1.5999, 1.5999);

		this.shape_177 = new cjs.Shape();
		this.shape_177.graphics.f("#231F20").s().p("AgMBqIAAjTIAZAAIAADTg");
		this.shape_177.setTransform(859.05, 20.7);

		this.shape_178 = new cjs.Shape();
		this.shape_178.graphics.f("#231F20").s().p("AgWBGQgMgFgKgKQgJgKgGgOQgEgPAAgSQgBgPAFgNQAFgNAJgLQAIgJANgGQANgFAOAAQAOAAALAEQALAFAIAIQAJAIAEAMQAEAMAAAQQAAAGgBACQgBABgEAAIhgAAQAAAOAEAKQADALAGAGQAGAHAJAEQAIADAJAAQAKAAAHgCIAMgFIAJgFQADgCACAAQADAAACACIAHAKQgFAFgGAEQgHAFgHADIgQADIgQACQgOAAgNgFgAApgPQAAgIgCgIQgDgHgFgGQgFgGgGgDQgHgCgJAAQgSgBgKALQgKALgDATIBOAAIAAAAg");
		this.shape_178.setTransform(848.1, 24);

		this.shape_179 = new cjs.Shape();
		this.shape_179.graphics.f("#231F20").s().p("AgLBJIg7iRIAVAAQADAAACABIACAFIAmBcIADAKIABALIACgLIAEgKIAlhcIADgFIAFgBIAUAAIg8CRg");
		this.shape_179.setTransform(833.1, 24);

		this.shape_180 = new cjs.Shape();
		this.shape_180.graphics.f("#231F20").s().p("AgWBGQgNgFgJgKQgJgKgGgOQgEgPAAgSQAAgPAEgNQAFgNAJgLQAJgJAMgGQANgFAOAAQANAAAMAEQALAFAIAIQAIAIAFAMQAFAMgBAQQABAGgCACQgBABgEAAIhgAAQAAAOADAKQAEALAGAGQAGAHAJAEQAIADAJAAQAKAAAHgCIAMgFIAIgFQADgCADAAQAEAAABACIAHAKQgEAFgHAEQgHAFgIADIgPADIgQACQgOAAgNgFgAAqgPQAAgIgDgIQgCgHgFgGQgGgGgGgDQgHgCgJAAQgRgBgLALQgLALgCATIBPAAIAAAAg");
		this.shape_180.setTransform(818.15, 24);

		this.shape_181 = new cjs.Shape();
		this.shape_181.graphics.f("#231F20").s().p("Ag6BnIAAjNIAcAAIAAC2IBYAAIAAAXg");
		this.shape_181.setTransform(804.25, 20.975);

		this.shape_182 = new cjs.Shape();
		this.shape_182.graphics.f("#231F20").s().p("AgWBGQgMgFgKgKQgJgKgGgOQgEgPgBgSQAAgPAFgNQAFgNAIgLQAJgJANgGQANgFAPAAQAMAAAMAEQALAFAIAIQAIAIAFAMQAEAMABAQQgBAGgBACQgBABgEAAIhgAAQAAAOAEAKQADALAGAGQAGAHAIAEQAJADAJAAQAKAAAHgCIAMgFIAJgFQACgCADAAQADAAACACIAHAKQgEAFgHAEQgHAFgHADIgQADIgQACQgOAAgNgFgAApgPQABgIgDgIQgDgHgFgGQgEgGgHgDQgHgCgJAAQgSgBgKALQgKALgEATIBPAAIAAAAg");
		this.shape_182.setTransform(780.85, 24);

		this.shape_183 = new cjs.Shape();
		this.shape_183.graphics.f("#231F20").s().p("AgfBiQgMgDgIgGQgHgFgEgIQgEgGAAgIQAAgLAGgHQAHgIAMgFQgGgCgEgFQgEgFAAgIIABgHIAEgFIAFgHIAIgFQgKgGgGgKQgGgKAAgOQAAgKAEgJQAEgIAHgHQAHgFALgEQAKgEAMABQAIgBAJADQAIACAHAEIAnAAIAAAKQAAAEgGABIgQADQAEAJAAALQAAAMgEAIQgEAIgHAHQgHAGgKAEQgKACgLAAQgKAAgJgCQgFADgDAEQgCACAAADQAAAFAEACQAFADAHACIAPABIARABIATACQAIACAHAEQAHADAEAHQAFAFAAALQAAAJgFAJQgFAJgIAGQgJAHgNAFQgNADgPAAQgQAAgMgCgAgnAtQgFAGAAAHQAAAGADAEQACAEAFADQAGADAHACQAIACALAAQAJAAAIgCQAJgCAFgEQAGgDADgFQADgFAAgFQAAgGgDgDQgDgDgFgCIgMgDIgOgBIgPgBIgPgBQgIAEgFAFgAgchJQgIAIAAANQAAAHACAFQACAGAEADQAEAFAGABQAGACAIAAQAHAAAGgCQAFgBAFgFIAGgJQACgFAAgHQAAgNgJgIQgIgIgOAAQgQAAgIAIg");
		this.shape_183.setTransform(765.875, 26.5);

		this.shape_184 = new cjs.Shape();
		this.shape_184.graphics.f("#231F20").s().p("AgoBKIAAiRIAPAAQAEAAACACIACAFIABAXQAHgPAJgJQAKgIAPAAIAJABIAHADIgBATQgBAEgEAAIgGgBIgIgBQgHAAgGACQgFACgDAEQgFAEgDAGIgGANIAABbg");
		this.shape_184.setTransform(753.875, 23.875);

		this.shape_185 = new cjs.Shape();
		this.shape_185.graphics.f("#231F20").s().p("AggBJQgHgCgFgFQgGgFgDgHQgDgHAAgKQgBgJAFgIQAFgIALgGQAKgGASgDQAPgEAagBIAAgLQAAgRgIgJQgHgIgPAAQgIAAgGACIgMAFIgIAGQgDACgDAAIgFgBIgDgEIgFgIQAMgMAOgFQAOgGARAAQAMAAAJAEQAKAEAHAHQAGAHADALQAEAKgBAMIAABcIgLAAIgGgBQgBgBgCgEIgDgOIgLAKIgMAHIgLAEIgQABQgIAAgIgCgAACAKQgLADgIADQgIAEgDAFQgEAFAAAGQAAAFACAFQABAEAEACQADADAFABIAJACIALgCIALgEIAKgGIAJgIIAAgeQgTAAgMACg");
		this.shape_185.setTransform(740.2, 23.975);

		this.shape_186 = new cjs.Shape();
		this.shape_186.graphics.f("#231F20").s().p("AAjBqIAAhdQAAgPgHgKQgIgJgQAAQgKABgJAFQgLAGgIAIIAABrIgaAAIAAjTIAaAAIAABVQAKgKALgGQALgFAOAAQAMAAAJADQAKAFAFAHQAHAIACAJQAEAKAAAMIAABdg");
		this.shape_186.setTransform(725.6, 20.7);

		this.shape_187 = new cjs.Shape();
		this.shape_187.graphics.f("#231F20").s().p("AgcBiQgRgIgNgOQgNgOgHgTQgIgTABgYQAAgWAHgUQAIgTANgOQANgOATgIQASgHAVAAQAXAAAQAHQASAHAMAMIgJANIgDACIgDABQgDAAgEgDIgJgGQgGgEgJgCQgKgDgNAAQgPAAgNAFQgNAGgKAKQgJALgFAPQgGAPAAASQAAATAGAQQAFAPAKAKQAKALANAFQANAFANAAIARgBIAOgDIAMgGIALgIQABgCADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIALAMQgNAPgRAIQgTAIgZAAQgVAAgTgHg");
		this.shape_187.setTransform(708.3, 20.975);

		this.shape_188 = new cjs.Shape();
		this.shape_188.graphics.f("#231F20").s().p("AhXOiIAA9DICvAAIAAdDg");
		this.shape_188.setTransform(449.58, 368.893, 1.5743, 1.5749);

		this.shape_189 = new cjs.Shape();
		this.shape_189.graphics.lf(["rgba(0,0,0,0)", "rgba(63,102,176,0)", "#3F66B0", "#011D56", "#011D56"], [0, 0.867, 0.867, 0.996, 1], 0, 93.5, 0, -93.4).s().p("A8TOmQgShxgUiyQgolkgIk/QgGknAtlNQAPhoARhfIAPhKMA4GAAAIATBBQAWBWATBoQA7FOAAGGQAAGSg7EbQgeCOgeA9g");
		this.shape_189.setTransform(457.3593, 372.2272, 1.5999, 1.5999);

		this.shape_190 = new cjs.Shape();
		this.shape_190.graphics.lf(["#E5E2DF", "#D6D5D6", "#AFB3BF", "#707D99", "#1A3365", "#011D56", "#0B2965", "#26488C", "#3F66B0", "#57B2E4", "#52A3DA", "#467CBF", "#3F66B0", "rgba(63,102,176,0)", "rgba(0,0,0,0)"], [0, 0, 0, 0, 0, 0, 0.031, 0.09, 0.137, 0.506, 0.6, 0.776, 0.867, 0.867, 1], 0, 93.5, 0, -93.4).s().p("A8TOmQgShxgUiyQgolkgIk/QgGknAtlNQAPhoARhfIAPhKMA4GAAAIATBBQAWBWATBoQA7FOAAGGQAAGSg7EbQgeCOgeA9g");
		this.shape_190.setTransform(457.3593, 372.2272, 1.5999, 1.5999);

		this.shape_191 = new cjs.Shape();
		this.shape_191.graphics.lf(["#E5E2DF", "#DED9D6", "#CFCAC9", "#A8A4A7", "#8B878D", "#F3F4F4", "#E5E5E6", "#C0BEC0", "#858085", "#807B80", "#D1D3D4", "#A7A9AC"], [0, 0, 0.063, 0.184, 0.263, 0.522, 0.584, 0.702, 0.863, 0.875, 1, 1], 0, 93.5, 0, -93.4).s().p("A/uOmQgUhxgXiyQgtlkgIk/QgHknAzlNQAQhoAUhfIAQhKMA+4AAAIAVBBQAZBVAVBpQBDFOAAGGQAAGShDEbQghCOgiA9g");
		this.shape_191.setTransform(455.3874, 372.2272, 1.5999, 1.5999);

		this.shape_192 = new cjs.Shape();
		this.shape_192.graphics.lf(["#E5E2DF", "#D6D3D1", "#AFADAB", "#716F70", "#414042", "#343233", "#231F20", "#414042", "#6D6E71", "#414042", "#231F20", "#D1D3D4", "#231F20"], [0, 0, 0, 0, 0, 0.067, 0.133, 0.294, 0.502, 0.82, 0.902, 1, 1], 0, 93.5, 0, -93.4).s().p("EgjyAOmQgYhxgZiyQgzlkgJk/QgIknA5lNQAShnAXhgIAThKMBG8AAAIAYBBQAcBVAYBpQBLFOAAGGQAAGShLEbQgmCOgmA9g");
		this.shape_192.setTransform(466.2258, 372.2272, 1.5999, 1.5999);

		this.shape_193 = new cjs.Shape();
		this.shape_193.graphics.lf(["#E5E2DF", "#DED9D6", "#CFCAC9", "#A8A4A7", "#8B878D", "#F3F4F4", "#E5E5E6", "#C0BEC0", "#858085", "#807B80", "#D1D3D4", "#A7A9AC"], [0, 0, 0.063, 0.184, 0.263, 0.522, 0.584, 0.702, 0.863, 0.875, 1, 1], 0, 93.5, 0, -93.4).s().p("EgklAOmQgYhxgaiyQgzlkgKk/QgIknA7lNQAShoAXhfIAThKMBIhAAAIAYBBQAdBWAYBoQBNFOAAGGQAAGShNEbQgnCOgmA9g");
		this.shape_193.setTransform(457.4587, 372.2272, 1.5999, 1.5999);

		this.shape_194 = new cjs.Shape();
		this.shape_194.graphics.lf(["#E5E2DF", "#DED9D6", "#CFCAC9", "#A8A4A7", "#8B878D", "#F3F4F4", "#E5E5E6", "#C0BEC0", "#858085", "#807B80", "#D1D3D4", "#A7A9AC"], [0, 0, 0.063, 0.184, 0.263, 0.522, 0.584, 0.702, 0.863, 0.875, 1, 1], 0, 75.7, 0, -75.7).s().p("EglqAL1QgJgDgKgIQgUgRgGgZQgZhsgTisQgYjRgGjlQgFjKAejaQAYiwAfhkQAGgTARgPIAQgMMBK5AAAIAYAQQAaAYAOAkQAlBbAVCUQAcDIgDEWQgCEHgcC0QgUCFghBPQgOAhgbATIgXANg");
		this.shape_194.setTransform(456.0292, 372.5872, 1.5999, 1.5999);

		this.shape_195 = new cjs.Shape();
		this.shape_195.graphics.lf(["#E5E2DF", "#DED9D6", "#CFCAC9", "#A8A4A7", "#8B878D", "#F3F4F4", "#E5E5E6", "#C0BEC0", "#858085", "#807B80", "#D1D3D4", "#A7A9AC"], [0, 0, 0.063, 0.184, 0.263, 0.522, 0.584, 0.702, 0.863, 0.875, 1, 1], 0, 32.8, 0, -32.7).s().p("AnmFHQgHgEgCgSQgNhzgCjEQgBhWAGhfQAEhKAHgtQABgIAEgHIADgGIPIAAIAFAHQAFALADAQQASBkgBDSQgBDJgQBRQgFAYgIAEg");
		this.shape_195.setTransform(118.5487, 363.1875, 1.5999, 1.5999);

		this.shape_196 = new cjs.Shape();
		this.shape_196.graphics.f("#231F20").s().p("Ap0EMIACoaITmADIAAIag");
		this.shape_196.setTransform(776.5333, 83.5171, 1.5999, 1.5999);

		this.shape_197 = new cjs.Shape();
		this.shape_197.graphics.f("#FFF6D5").s().p("Egr2gf1MBXfAAAMAAOA/mMhXtAAFg");
		this.shape_197.setTransform(467.3479, 327.4837, 1.6564, 1.6069);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_197 }, { t: this.shape_196 }, { t: this.shape_195 }, { t: this.shape_194 }, { t: this.shape_193 }, { t: this.shape_192 }, { t: this.shape_191 }, { t: this.shape_190 }, { t: this.shape_189 }, { t: this.shape_188 }, { t: this.shape_187 }, { t: this.shape_186 }, { t: this.shape_185 }, { t: this.shape_184 }, { t: this.shape_183 }, { t: this.shape_182 }, { t: this.shape_181 }, { t: this.shape_180 }, { t: this.shape_179 }, { t: this.shape_178 }, { t: this.shape_177 }, { t: this.shape_176 }, { t: this.shape_175 }, { t: this.shape_174 }, { t: this.shape_173 }, { t: this.shape_172 }, { t: this.shape_171 }, { t: this.shape_170 }, { t: this.shape_169 }, { t: this.shape_168 }, { t: this.shape_167 }, { t: this.shape_166 }, { t: this.shape_165 }, { t: this.shape_164 }, { t: this.shape_163 }, { t: this.shape_162 }, { t: this.shape_161 }, { t: this.shape_160 }, { t: this.shape_159 }, { t: this.shape_158 }, { t: this.shape_157 }, { t: this.shape_156 }, { t: this.shape_155 }, { t: this.shape_154 }, { t: this.shape_153 }, { t: this.shape_152 }, { t: this.shape_151 }, { t: this.shape_150 }, { t: this.shape_149 }, { t: this.shape_148 }, { t: this.shape_147 }, { t: this.shape_146 }, { t: this.shape_145 }, { t: this.shape_144 }, { t: this.shape_143 }, { t: this.shape_142 }, { t: this.shape_141 }, { t: this.shape_140 }, { t: this.shape_139 }, { t: this.shape_138 }, { t: this.shape_137 }, { t: this.shape_136 }, { t: this.shape_135 }, { t: this.shape_134 }, { t: this.shape_133 }, { t: this.shape_132 }, { t: this.shape_131 }, { t: this.shape_130 }, { t: this.shape_129 }, { t: this.shape_128 }, { t: this.shape_127 }, { t: this.shape_126 }, { t: this.shape_125 }, { t: this.shape_124 }, { t: this.shape_123 }, { t: this.shape_122 }, { t: this.shape_121 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }] }).wait(450));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = rect = new cjs.Rectangle(466.9, 325.8, 1282.1, 655.2);
	p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
	// library properties:
	lib.properties = {
		id: 'D23673CD031C41E3A8D95A73CFD73AF0',
		width: 929,
		height: 652,
		fps: 24,
		color: "#F0F0F0",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

	p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['D23673CD031C41E3A8D95A73CFD73AF0'] = {
		getStage: function () { return exportRoot.stage; },
		getLibrary: function () { return lib; },
		getSpriteSheet: function () { return ss; },
		getImages: function () { return img; }
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}


	an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				}
				else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			domContainers[0].width = w * pRatio * sRatio;
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function (container) {
				container.style.width = w * sRatio + 'px';
				container.style.height = h * sRatio + 'px';
			});
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	an.handleSoundStreamOnTick = function (event) {
		if (!event.paused) {
			var stageChild = stage.getChildAt(0);
			if (!stageChild.paused || stageChild.ignorePause) {
				stageChild.syncStreamSounds();
			}
		}
	}


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;