// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__6770_SHARP_,p2__6769_SHARP_){
var or__4563__auto__ = p2__6769_SHARP_.call(null,path,value,p1__6770_SHARP_);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return p1__6770_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4423__auto__)){
var in_fn = temp__4423__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4423__auto__)){
var out_fn = temp__4423__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__5476__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5477__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5478__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5479__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5480__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__,hierarchy__5480__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__,hierarchy__5480__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5480__auto__,method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__4551__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__4551__auto__){
return fmt;
} else {
return and__4551__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__5476__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5477__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5478__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5479__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5480__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__,hierarchy__5480__auto__){
return (function (p__6771,_){
var map__6772 = p__6771;
var map__6772__$1 = ((((!((map__6772 == null)))?((((map__6772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6772):map__6772);
var field = cljs.core.get.call(null,map__6772__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__,hierarchy__5480__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5480__auto__,method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__6775,p__6776){
var map__6777 = p__6775;
var map__6777__$1 = ((((!((map__6777 == null)))?((((map__6777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6777):map__6777);
var field = cljs.core.get.call(null,map__6777__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__6777__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__6777__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__6778 = p__6776;
var map__6778__$1 = ((((!((map__6778 == null)))?((((map__6778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6778):map__6778);
var get = cljs.core.get.call(null,map__6778__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6778__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__6778__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__4563__auto__ = get.call(null,id);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__6777,map__6777__$1,field,id,fmt,map__6778,map__6778__$1,get,save_BANG_,doc){
return (function (p1__6774_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__6774_SHARP_)));
});})(map__6777,map__6777__$1,field,id,fmt,map__6778,map__6778__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__6781,p__6782){
var map__6783 = p__6781;
var map__6783__$1 = ((((!((map__6783 == null)))?((((map__6783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6783):map__6783);
var id = cljs.core.get.call(null,map__6783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__6784 = p__6782;
var map__6784__$1 = ((((!((map__6784 == null)))?((((map__6784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6784):map__6784);
var get = cljs.core.get.call(null,map__6784__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6784__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__6783,map__6783__$1,id,map__6784,map__6784__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__6783,map__6783__$1,id,map__6784,map__6784__$1,get,save_BANG_))
], null),(cljs.core.truth_(get.call(null,id))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),"checked"], null):null));
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__5628__auto__ = [];
var len__5621__auto___6794 = arguments.length;
var i__5622__auto___6795 = (0);
while(true){
if((i__5622__auto___6795 < len__5621__auto___6794)){
args__5628__auto__.push((arguments[i__5622__auto___6795]));

var G__6796 = (i__5622__auto___6795 + (1));
i__5622__auto___6795 = G__6796;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((2) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5629__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__6790,opts,p__6791){
var vec__6792 = p__6790;
var type = cljs.core.nth.call(null,vec__6792,(0),null);
var attrs = cljs.core.nth.call(null,vec__6792,(1),null);
var body = cljs.core.nthnext.call(null,vec__6792,(2));
var vec__6793 = p__6791;
var default_attrs = cljs.core.nth.call(null,vec__6793,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq6787){
var G__6788 = cljs.core.first.call(null,seq6787);
var seq6787__$1 = cljs.core.next.call(null,seq6787);
var G__6789 = cljs.core.first.call(null,seq6787__$1);
var seq6787__$2 = cljs.core.next.call(null,seq6787__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__6788,G__6789,seq6787__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__5476__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5477__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5478__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5479__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5480__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__,hierarchy__5480__auto__){
return (function (p__6797,_){
var vec__6798 = p__6797;
var ___$1 = cljs.core.nth.call(null,vec__6798,(0),null);
var map__6799 = cljs.core.nth.call(null,vec__6798,(1),null);
var map__6799__$1 = ((((!((map__6799 == null)))?((((map__6799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6799):map__6799);
var field = cljs.core.get.call(null,map__6799__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__,hierarchy__5480__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5480__auto__,method_table__5476__auto__,prefer_table__5477__auto__,method_cache__5478__auto__,cached_hierarchy__5479__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__6802,p__6803){
var vec__6804 = p__6802;
var type = cljs.core.nth.call(null,vec__6804,(0),null);
var map__6805 = cljs.core.nth.call(null,vec__6804,(1),null);
var map__6805__$1 = ((((!((map__6805 == null)))?((((map__6805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6805):map__6805);
var attrs = map__6805__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__6805__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var body = cljs.core.nthnext.call(null,vec__6804,(2));
var map__6806 = p__6803;
var map__6806__$1 = ((((!((map__6806 == null)))?((((map__6806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6806):map__6806);
var doc = cljs.core.get.call(null,map__6806__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__6804,type,map__6805,map__6805__$1,attrs,valid_QMARK_,body,map__6806,map__6806__$1,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4423__auto____$1,visible__6172__auto__,temp__4423__auto__,vec__6804,type,map__6805,map__6805__$1,attrs,valid_QMARK_,body,map__6806,map__6806__$1,doc){
return (function (p1__6801_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__6801_SHARP_))){
return [cljs.core.str(p1__6801_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,visible__6172__auto__,temp__4423__auto__,vec__6804,type,map__6805,map__6805__$1,attrs,valid_QMARK_,body,map__6806,map__6806__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4423__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4423__auto____$1)){
var valid_class = temp__4423__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__6804,type,map__6805,map__6805__$1,attrs,valid_QMARK_,body,map__6806,map__6806__$1,doc){
return (function (p1__6801_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__6801_SHARP_))){
return [cljs.core.str(p1__6801_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4423__auto____$1,temp__4423__auto__,vec__6804,type,map__6805,map__6805__$1,attrs,valid_QMARK_,body,map__6806,map__6806__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__6804,type,map__6805,map__6805__$1,attrs,valid_QMARK_,body,map__6806,map__6806__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__6809,p__6810){
var vec__6811 = p__6809;
var _ = cljs.core.nth.call(null,vec__6811,(0),null);
var map__6812 = cljs.core.nth.call(null,vec__6811,(1),null);
var map__6812__$1 = ((((!((map__6812 == null)))?((((map__6812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6812):map__6812);
var attrs = map__6812__$1;
var field = cljs.core.get.call(null,map__6812__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__6811;
var map__6813 = p__6810;
var map__6813__$1 = ((((!((map__6813 == null)))?((((map__6813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6813):map__6813);
var opts = map__6813__$1;
var doc = cljs.core.get.call(null,map__6813__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__6811,_,map__6812,map__6812__$1,attrs,field,component,map__6813,map__6813__$1,opts,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__6811,_,map__6812,map__6812__$1,attrs,field,component,map__6813,map__6813__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__6818,p__6819){
var vec__6820 = p__6818;
var type = cljs.core.nth.call(null,vec__6820,(0),null);
var map__6821 = cljs.core.nth.call(null,vec__6820,(1),null);
var map__6821__$1 = ((((!((map__6821 == null)))?((((map__6821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6821):map__6821);
var attrs = map__6821__$1;
var id = cljs.core.get.call(null,map__6821__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__6821__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__6822 = p__6819;
var map__6822__$1 = ((((!((map__6822 == null)))?((((map__6822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6822):map__6822);
var doc = cljs.core.get.call(null,map__6822__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6822__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6822__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4563__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6172__auto__,temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_){
return (function (p1__6816_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__6816_SHARP_));
});})(visible__6172__auto__,temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__6172__auto__,temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_){
return (function (p1__6817_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__6817_SHARP_))));
});})(visible__6172__auto__,temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4563__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_){
return (function (p1__6816_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__6816_SHARP_));
});})(temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_){
return (function (p1__6817_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__6817_SHARP_))));
});})(temp__4423__auto__,input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__6820,type,map__6821,map__6821__$1,attrs,id,fmt,map__6822,map__6822__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__6826,p__6827){
var vec__6828 = p__6826;
var _ = cljs.core.nth.call(null,vec__6828,(0),null);
var map__6829 = cljs.core.nth.call(null,vec__6828,(1),null);
var map__6829__$1 = ((((!((map__6829 == null)))?((((map__6829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6829):map__6829);
var attrs = map__6829__$1;
var id = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var lang = cljs.core.get.call(null,map__6829__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var map__6830 = p__6827;
var map__6830__$1 = ((((!((map__6830 == null)))?((((map__6830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6830):map__6830);
var doc = cljs.core.get.call(null,map__6830__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6830__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6830__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var selected_date = get.call(null,id);
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__4563__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__4563__auto__ = selected_month;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__4563__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4425__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
,((function (visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (p1__6825_SHARP_){
return save_BANG_.call(null,id,p1__6825_SHARP_);
});})(visible__6172__auto__,temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4425__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4425__auto__)){
var date = temp__4425__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,expanded_QMARK_,auto_close_QMARK_,((function (temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
,((function (temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_){
return (function (p1__6825_SHARP_){
return save_BANG_.call(null,id,p1__6825_SHARP_);
});})(temp__4423__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
,inline,lang], null)], null);
}
});
;})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,vec__6828,_,map__6829,map__6829__$1,attrs,id,date_format,inline,auto_close_QMARK_,lang,map__6830,map__6830__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__6833,p__6834){
var vec__6835 = p__6833;
var _ = cljs.core.nth.call(null,vec__6835,(0),null);
var map__6836 = cljs.core.nth.call(null,vec__6835,(1),null);
var map__6836__$1 = ((((!((map__6836 == null)))?((((map__6836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6836):map__6836);
var attrs = map__6836__$1;
var id = cljs.core.get.call(null,map__6836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__6836__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__6836__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__6836__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__6835;
var map__6837 = p__6834;
var map__6837__$1 = ((((!((map__6837 == null)))?((((map__6837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6837):map__6837);
var opts = map__6837__$1;
var doc = cljs.core.get.call(null,map__6837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6837__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6837__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4563__auto__ = checked;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__6835,_,map__6836,map__6836__$1,attrs,id,field,checked,default_checked,component,map__6837,map__6837__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__6835,_,map__6836,map__6836__$1,attrs,id,field,checked,default_checked,component,map__6837,map__6837__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__6840,p__6841){
var vec__6842 = p__6840;
var type = cljs.core.nth.call(null,vec__6842,(0),null);
var map__6843 = cljs.core.nth.call(null,vec__6842,(1),null);
var map__6843__$1 = ((((!((map__6843 == null)))?((((map__6843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6843):map__6843);
var attrs = map__6843__$1;
var id = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__6843__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__6844 = p__6841;
var map__6844__$1 = ((((!((map__6844 == null)))?((((map__6844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6844):map__6844);
var doc = cljs.core.get.call(null,map__6844__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6844__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__6842,type,map__6843,map__6843__$1,attrs,id,preamble,postamble,placeholder,map__6844,map__6844__$1,doc,get){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4423__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4423__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4423__auto____$1)){
var value = temp__4423__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__6842,type,map__6843,map__6843__$1,attrs,id,preamble,postamble,placeholder,map__6844,map__6844__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__6847,p__6848){
var vec__6849 = p__6847;
var type = cljs.core.nth.call(null,vec__6849,(0),null);
var map__6850 = cljs.core.nth.call(null,vec__6849,(1),null);
var map__6850__$1 = ((((!((map__6850 == null)))?((((map__6850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6850):map__6850);
var attrs = map__6850__$1;
var id = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = cljs.core.nthnext.call(null,vec__6849,(2));
var map__6851 = p__6848;
var map__6851__$1 = ((((!((map__6851 == null)))?((((map__6851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6851):map__6851);
var opts = map__6851__$1;
var doc = cljs.core.get.call(null,map__6851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6851__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6851__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__6849,type,map__6850,map__6850__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__6851,map__6851__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__4563__auto__ = touch_event;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4423__auto____$1,visible__6172__auto__,temp__4423__auto__,vec__6849,type,map__6850,map__6850__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__6851,map__6851__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4423__auto____$1,visible__6172__auto__,temp__4423__auto__,vec__6849,type,map__6850,map__6850__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__6851,map__6851__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null):null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4423__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4423__auto____$1)){
var message = temp__4423__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__4563__auto__ = touch_event;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4423__auto____$1,temp__4423__auto__,vec__6849,type,map__6850,map__6850__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__6851,map__6851__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4423__auto____$1,temp__4423__auto__,vec__6849,type,map__6850,map__6850__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__6851,map__6851__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null):null),message], null);
} else {
return null;
}
}
}
});
;})(vec__6849,type,map__6850,map__6850__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__6851,map__6851__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__6854,p__6855){
var vec__6856 = p__6854;
var type = cljs.core.nth.call(null,vec__6856,(0),null);
var map__6857 = cljs.core.nth.call(null,vec__6856,(1),null);
var map__6857__$1 = ((((!((map__6857 == null)))?((((map__6857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6857):map__6857);
var attrs = map__6857__$1;
var field = cljs.core.get.call(null,map__6857__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var name = cljs.core.get.call(null,map__6857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__6857__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__6857__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__6857__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = cljs.core.nthnext.call(null,vec__6856,(2));
var map__6858 = p__6855;
var map__6858__$1 = ((((!((map__6858 == null)))?((((map__6858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6858):map__6858);
var doc = cljs.core.get.call(null,map__6858__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6858__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6858__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4563__auto__ = checked;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__6856,type,map__6857,map__6857__$1,attrs,field,name,value,checked,default_checked,body,map__6858,map__6858__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6172__auto__,temp__4423__auto__,vec__6856,type,map__6857,map__6857__$1,attrs,field,name,value,checked,default_checked,body,map__6858,map__6858__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__6172__auto__,temp__4423__auto__,vec__6856,type,map__6857,map__6857__$1,attrs,field,name,value,checked,default_checked,body,map__6858,map__6858__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,vec__6856,type,map__6857,map__6857__$1,attrs,field,name,value,checked,default_checked,body,map__6858,map__6858__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4423__auto__,vec__6856,type,map__6857,map__6857__$1,attrs,field,name,value,checked,default_checked,body,map__6858,map__6858__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
}
});
;})(vec__6856,type,map__6857,map__6857__$1,attrs,field,name,value,checked,default_checked,body,map__6858,map__6858__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__6864,p__6865){
var vec__6866 = p__6864;
var type = cljs.core.nth.call(null,vec__6866,(0),null);
var map__6867 = cljs.core.nth.call(null,vec__6866,(1),null);
var map__6867__$1 = ((((!((map__6867 == null)))?((((map__6867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6867):map__6867);
var attrs = map__6867__$1;
var result_fn = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var highlight_class = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__6867__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var map__6868 = p__6865;
var map__6868__$1 = ((((!((map__6868 == null)))?((((map__6868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6868):map__6868);
var doc = cljs.core.get.call(null,map__6868__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6868__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6868__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__4551__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections));
if(cljs.core.truth_(and__4551__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__4551__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(cljs.core.not.call(null,cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (p1__6861_SHARP_){
var temp__4425__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__6861_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__6861_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (p1__6862_SHARP_){
var G__6871 = p1__6862_SHARP_.which;
switch (G__6871) {
case (38):
p1__6862_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__6862_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__6862_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__4563__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__4563__auto__){
return or__4563__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (p1__6863_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__6863_SHARP_.target.getAttribute("tabIndex")));
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__6172__auto__,temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(cljs.core.not.call(null,cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (p1__6861_SHARP_){
var temp__4425__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__6861_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var value = temp__4425__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__6861_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (p1__6862_SHARP_){
var G__6872 = p1__6862_SHARP_.which;
switch (G__6872) {
case (38):
p1__6862_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__6862_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__6862_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__4563__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__4563__auto__){
return or__4563__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (p1__6863_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__6863_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__4423__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__6866,type,map__6867,map__6867__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__6868,map__6868__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__6876,p__6877){
var vec__6878 = p__6876;
var type = cljs.core.nth.call(null,vec__6878,(0),null);
var map__6879 = cljs.core.nth.call(null,vec__6878,(1),null);
var map__6879__$1 = ((((!((map__6879 == null)))?((((map__6879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6879):map__6879);
var attrs = map__6879__$1;
var id = cljs.core.get.call(null,map__6879__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__6880 = p__6877;
var map__6880__$1 = ((((!((map__6880 == null)))?((((map__6880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6880):map__6880);
var doc = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__6878,type,map__6879,map__6879__$1,attrs,id,map__6880,map__6880__$1,doc,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6172__auto__,temp__4423__auto__,vec__6878,type,map__6879,map__6879__$1,attrs,id,map__6880,map__6880__$1,doc,save_BANG_){
return (function (p1__6875_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__6875_SHARP_.target.files)));
});})(visible__6172__auto__,temp__4423__auto__,vec__6878,type,map__6879,map__6879__$1,attrs,id,map__6880,map__6880__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,vec__6878,type,map__6879,map__6879__$1,attrs,id,map__6880,map__6880__$1,doc,save_BANG_){
return (function (p1__6875_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__6875_SHARP_.target.files)));
});})(temp__4423__auto__,vec__6878,type,map__6879,map__6879__$1,attrs,id,map__6880,map__6880__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__6878,type,map__6879,map__6879__$1,attrs,id,map__6880,map__6880__$1,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__6884,p__6885){
var vec__6886 = p__6884;
var type = cljs.core.nth.call(null,vec__6886,(0),null);
var map__6887 = cljs.core.nth.call(null,vec__6886,(1),null);
var map__6887__$1 = ((((!((map__6887 == null)))?((((map__6887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6887):map__6887);
var attrs = map__6887__$1;
var id = cljs.core.get.call(null,map__6887__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__6888 = p__6885;
var map__6888__$1 = ((((!((map__6888 == null)))?((((map__6888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6888):map__6888);
var doc = cljs.core.get.call(null,map__6888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__6888__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__6886,type,map__6887,map__6887__$1,attrs,id,map__6888,map__6888__$1,doc,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6172__auto__,temp__4423__auto__,vec__6886,type,map__6887,map__6887__$1,attrs,id,map__6888,map__6888__$1,doc,save_BANG_){
return (function (p1__6883_SHARP_){
return save_BANG_.call(null,id,p1__6883_SHARP_.target.files);
});})(visible__6172__auto__,temp__4423__auto__,vec__6886,type,map__6887,map__6887__$1,attrs,id,map__6888,map__6888__$1,doc,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,vec__6886,type,map__6887,map__6887__$1,attrs,id,map__6888,map__6888__$1,doc,save_BANG_){
return (function (p1__6883_SHARP_){
return save_BANG_.call(null,id,p1__6883_SHARP_.target.files);
});})(temp__4423__auto__,vec__6886,type,map__6887,map__6887__$1,attrs,id,map__6888,map__6888__$1,doc,save_BANG_))
], null),attrs)], null);
}
});
;})(vec__6886,type,map__6887,map__6887__$1,attrs,id,map__6888,map__6888__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__6891,p__6892,selections,field,id){
var vec__6898 = p__6891;
var type = cljs.core.nth.call(null,vec__6898,(0),null);
var map__6899 = cljs.core.nth.call(null,vec__6898,(1),null);
var map__6899__$1 = ((((!((map__6899 == null)))?((((map__6899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6899):map__6899);
var attrs = map__6899__$1;
var key = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = cljs.core.nthnext.call(null,vec__6898,(2));
var map__6900 = p__6892;
var map__6900__$1 = ((((!((map__6900 == null)))?((((map__6900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6900):map__6900);
var save_BANG_ = cljs.core.get.call(null,map__6900__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__6900__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__6898,type,map__6899,map__6899__$1,attrs,key,touch_event,body,map__6900,map__6900__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__6898,type,map__6899,map__6899__$1,attrs,key,touch_event,body,map__6900,map__6900__$1,save_BANG_,multi_select))
;
return ((function (vec__6898,type,map__6899,map__6899__$1,attrs,key,touch_event,body,map__6900,map__6900__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__4563__auto__ = touch_event;
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__6898,type,map__6899,map__6899__$1,attrs,key,touch_event,body,map__6900,map__6900__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__6903){
var map__6910 = p__6903;
var map__6910__$1 = ((((!((map__6910 == null)))?((((map__6910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6910):map__6910);
var get = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__6910,map__6910__$1,get,multi_select){
return (function (m,p__6912){
var vec__6913 = p__6912;
var _ = cljs.core.nth.call(null,vec__6913,(0),null);
var map__6914 = cljs.core.nth.call(null,vec__6913,(1),null);
var map__6914__$1 = ((((!((map__6914 == null)))?((((map__6914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6914):map__6914);
var key = cljs.core.get.call(null,map__6914__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__6910,map__6910__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__6918,p__6919){
var vec__6927 = p__6918;
var type = cljs.core.nth.call(null,vec__6927,(0),null);
var map__6928 = cljs.core.nth.call(null,vec__6927,(1),null);
var map__6928__$1 = ((((!((map__6928 == null)))?((((map__6928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6928):map__6928);
var attrs = map__6928__$1;
var field = cljs.core.get.call(null,map__6928__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__6928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = cljs.core.nthnext.call(null,vec__6927,(2));
var map__6929 = p__6919;
var map__6929__$1 = ((((!((map__6929 == null)))?((((map__6929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6929):map__6929);
var opts = map__6929__$1;
var get = cljs.core.get.call(null,map__6929__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get){
return (function (p1__6916_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get){
return (function (p__6932){
var vec__6933 = p__6932;
var k = cljs.core.nth.call(null,vec__6933,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get))
,p1__6916_SHARP_));
});})(selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get){
return (function (p1__6917_SHARP_){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__6917_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var visible_QMARK_ = temp__4423__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__6927,type,map__6928,map__6928__$1,attrs,field,id,selection_items,map__6929,map__6929__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__6934,p__6935){
var vec__6936 = p__6934;
var _ = cljs.core.nth.call(null,vec__6936,(0),null);
var attrs = cljs.core.nth.call(null,vec__6936,(1),null);
var field = vec__6936;
var map__6937 = p__6935;
var map__6937__$1 = ((((!((map__6937 == null)))?((((map__6937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6937):map__6937);
var opts = map__6937__$1;
var doc = cljs.core.get.call(null,map__6937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__6936,_,attrs,field,map__6937,map__6937__$1,opts,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__6936,_,attrs,field,map__6937,map__6937__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__6939,p__6940){
var vec__6941 = p__6939;
var _ = cljs.core.nth.call(null,vec__6941,(0),null);
var attrs = cljs.core.nth.call(null,vec__6941,(1),null);
var field = vec__6941;
var map__6942 = p__6940;
var map__6942__$1 = ((((!((map__6942 == null)))?((((map__6942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6942):map__6942);
var opts = map__6942__$1;
var doc = cljs.core.get.call(null,map__6942__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__6941,_,attrs,field,map__6942,map__6942__$1,opts,doc){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__6941,_,attrs,field,map__6942,map__6942__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5335__auto__ = (function reagent_forms$core$map_options_$_iter__6960(s__6961){
return (new cljs.core.LazySeq(null,(function (){
var s__6961__$1 = s__6961;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6961__$1);
if(temp__4425__auto__){
var s__6961__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6961__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__6961__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__6963 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__6962 = (0);
while(true){
if((i__6962 < size__5334__auto__)){
var vec__6970 = cljs.core._nth.call(null,c__5333__auto__,i__6962);
var _ = cljs.core.nth.call(null,vec__6970,(0),null);
var map__6971 = cljs.core.nth.call(null,vec__6970,(1),null);
var map__6971__$1 = ((((!((map__6971 == null)))?((((map__6971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6971):map__6971);
var key = cljs.core.get.call(null,map__6971__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__6970,(2),null);
cljs.core.chunk_append.call(null,b__6963,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__6976 = (i__6962 + (1));
i__6962 = G__6976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6963),reagent_forms$core$map_options_$_iter__6960.call(null,cljs.core.chunk_rest.call(null,s__6961__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6963),null);
}
} else {
var vec__6973 = cljs.core.first.call(null,s__6961__$2);
var _ = cljs.core.nth.call(null,vec__6973,(0),null);
var map__6974 = cljs.core.nth.call(null,vec__6973,(1),null);
var map__6974__$1 = ((((!((map__6974 == null)))?((((map__6974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6974):map__6974);
var key = cljs.core.get.call(null,map__6974__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__6973,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__6960.call(null,cljs.core.rest.call(null,s__6961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5335__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__6977_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__6977_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__6980,p__6981){
var vec__6982 = p__6980;
var type = cljs.core.nth.call(null,vec__6982,(0),null);
var map__6983 = cljs.core.nth.call(null,vec__6982,(1),null);
var map__6983__$1 = ((((!((map__6983 == null)))?((((map__6983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6983):map__6983);
var attrs = map__6983__$1;
var field = cljs.core.get.call(null,map__6983__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__6983__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = cljs.core.nthnext.call(null,vec__6982,(2));
var map__6984 = p__6981;
var map__6984__$1 = ((((!((map__6984 == null)))?((((map__6984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6984):map__6984);
var doc = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__4563__auto__ = get.call(null,id);
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4423__auto__)){
var visible__6172__auto__ = temp__4423__auto__;
if(cljs.core.truth_(visible__6172__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__6172__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_){
return (function (p1__6978_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__6978_SHARP_)));
});})(visible__6172__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__6172__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_){
return (function (p1__6979_SHARP_){
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__6979_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__6172__auto__,temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_){
return (function (p1__6978_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__6978_SHARP_)));
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_){
return (function (p1__6979_SHARP_){
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__6979_SHARP_));
if(cljs.core.truth_(temp__4423__auto____$1)){
var visible_QMARK_ = temp__4423__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4423__auto__,options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__6982,type,map__6983,map__6983__$1,attrs,field,id,options,map__6984,map__6984__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__5628__auto__ = [];
var len__5621__auto___6991 = arguments.length;
var i__5622__auto___6992 = (0);
while(true){
if((i__5622__auto___6992 < len__5621__auto___6991)){
args__5628__auto__.push((arguments[i__5622__auto___6992]));

var G__6993 = (i__5622__auto___6992 + (1));
i__5622__auto___6992 = G__6993;
continue;
} else {
}
break;
}

var argseq__5629__auto__ = ((((2) < args__5628__auto__.length))?(new cljs.core.IndexedSeq(args__5628__auto__.slice((2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5629__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__6987_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__6987_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq6988){
var G__6989 = cljs.core.first.call(null,seq6988);
var seq6988__$1 = cljs.core.next.call(null,seq6988);
var G__6990 = cljs.core.first.call(null,seq6988__$1);
var seq6988__$2 = cljs.core.next.call(null,seq6988__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__6989,G__6990,seq6988__$2);
});

//# sourceMappingURL=core.js.map