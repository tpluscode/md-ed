System.register("src/md-ed.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js", [], function() { return { setters: [], execute: function() {} } });

System.register("src/DefaultMdBehavior.ts", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DefaultMdBehavior;
    return {
        setters:[],
        execute: function() {
            exports_1("DefaultMdBehavior", DefaultMdBehavior = {
                // I'm here just for show but for the sake of this example
                // I will set some default markdown content
                ready: function () {
                    this.markdown = "# This is a markdown editor\n\n* As you **see**, this is some _markdown_\n\nYou can use the tabs above to switch between editor and preview";
                }
            });
        }
    }
});

System.register("src/md-ed.ts", ["src/md-ed.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js", "src/DefaultMdBehavior.ts", "npm:marked@0.3.6.js"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var DefaultMdBehavior_1, marked;
    var MdEd;
    return {
        setters:[
            function (_1) {},
            function (DefaultMdBehavior_1_1) {
                DefaultMdBehavior_1 = DefaultMdBehavior_1_1;
            },
            function (marked_1) {
                marked = marked_1;
            }],
        execute: function() {
            MdEd = (function (_super) {
                __extends(MdEd, _super);
                function MdEd() {
                    _super.apply(this, arguments);
                }
                MdEd.prototype.ready = function () {
                    this.selectedTab = 0;
                };
                MdEd.prototype._markdownChanged = function (md) {
                    this._setMdHtml(marked.default(md));
                };
                __decorate([
                    property({ notify: true })
                ], MdEd.prototype, "markdown", void 0);
                __decorate([
                    property({ notify: true, readOnly: true })
                ], MdEd.prototype, "mdHtml", void 0);
                __decorate([
                    observe('markdown')
                ], MdEd.prototype, "_markdownChanged", null);
                MdEd = __decorate([
                    component('md-ed'),
                    behavior(DefaultMdBehavior_1.DefaultMdBehavior)
                ], MdEd);
                return MdEd;
            }(polymer.Base));
            MdEd.register();
        }
    }
});

System.register('src/md-ed.html!github:Hypercubed/systemjs-plugin-html@0.0.8.js', [], false, function() {});
//# sourceMappingURL=md-ed.js.map