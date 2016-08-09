import './md-ed.html!'
import {DefaultMdBehavior} from './DefaultMdBehavior';
import 'marked';

@component('md-ed')
@behavior(DefaultMdBehavior)
class MdEd extends polymer.Base {

    @property({ notify: true })
    markdown:String;

    @property({ notify: true, readOnly: true })
    mdHtml:String;

    ready() {
        this.selectedTab = 0;
    }

    @observe('markdown')
    _markdownChanged(md) {
        this._setMdHtml(marked(md));
    }
}

MdEd.register();