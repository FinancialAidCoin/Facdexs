<<<<<<< HEAD
"use strict";function e(t,i){const n=Object.assign({},t);for(const o in i)"object"!=typeof t[o]||null===t[o]||Array.isArray(t[o])?void 0!==i[o]&&(n[o]=i[o]):n[o]=e(t[o],i[o]);return n}Object.defineProperty(exports,"__esModule",{value:!0});const t={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},i={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};function n(){return"CL v20.033 (internal id 9df149da @ 2021-11-17T10:20:51.511Z)"}const o=class{constructor(n){if(this._id=`tradingview_${(1048576*(1+Math.random())|0).toString(16).substring(1)}`,this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!n.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(i,n),n.preset){const e=t[n.preset];e?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(e.disabled_features):this._options.disabled_features=e.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(e.enabled_features):this._options.enabled_features=e.enabled_features):console.warn("Unknown preset: `"+n.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}onChartReady(e){this._ready?e.call(this):this._readyHandlers.push(e)}headerReady(){return this._innerWindowLoaded.then((()=>this._innerWindow().headerReady()))}onGrayedObjectClicked(e){this._innerAPI().onGrayedObjectClicked(e)}onShortcut(e,t){this._innerWindow().createShortcutAction(e,t)}subscribe(e,t){this._innerAPI().subscribe(e,t)}unsubscribe(e,t){this._innerAPI().unsubscribe(e,t)}chart(e){return this._innerAPI().chart(e)}getLanguage(){return this._options.locale}setSymbol(e,t,i){this._innerAPI().changeSymbol(e,t,i)}remove(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)}closePopupsAndDialogs(){this._innerAPI().closePopupsAndDialogs()}selectLineTool(e){this._innerAPI().selectLineTool(e)}selectedLineTool(){return this._innerAPI().selectedLineTool()}save(e){this._innerAPI().saveChart(e)}load(e,t){this._innerAPI().loadChart({json:e,extendedData:t})}getSavedCharts(e){this._innerAPI().getSavedCharts(e)}loadChartFromServer(e){this._innerAPI().loadChartFromServer(e)}saveChartToServer(e,t,i){this._innerAPI().saveChartToServer(e,t,i)}removeChartFromServer(e,t){this._innerAPI().removeChartFromServer(e,t)}onContextMenu(e){this._innerAPI().onContextMenu(e)}createButton(e){return this._innerWindow().createButton(e)}showNoticeDialog(e){this._innerAPI().showNoticeDialog(e)}showConfirmDialog(e){this._innerAPI().showConfirmDialog(e)}showLoadChartDialog(){this._innerAPI().showLoadChartDialog()}showSaveAsChartDialog(){this._innerAPI().showSaveAsChartDialog()}symbolInterval(){return this._innerAPI().getSymbolInterval()}mainSeriesPriceFormatter(){return this._innerAPI().mainSeriesPriceFormatter()}getIntervals(){return this._innerAPI().getIntervals()}getStudiesList(){return this._innerAPI().getStudiesList()}addCustomCSSFile(e){this._innerWindow().addCustomCSSFile(e)}applyOverrides(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)}applyStudiesOverrides(e){this._innerWindow().applyStudiesOverrides(e)}watchList(){return this._innerAPI().watchlist()}activeChart(){return this._innerAPI().activeChart()}chartsCount(){return this._innerAPI().chartsCount()}layout(){return this._innerAPI().layout()}setLayout(e){this._innerAPI().setLayout(e)}layoutName(){return this._innerAPI().layoutName()}changeTheme(e,t){this._innerWindow().changeTheme(e,t)}getTheme(){return this._innerWindow().getTheme()}takeScreenshot(){this._innerAPI().takeScreenshot()}lockAllDrawingTools(){return this._innerAPI().lockAllDrawingTools()}hideAllDrawingTools(){return this._innerAPI().hideAllDrawingTools()}drawOnAllCharts(e){this._innerAPI().drawOnAllCharts(e)}magnetEnabled(){return this._innerAPI().magnetEnabled()}magnetMode(){return this._innerAPI().magnetMode()}undoRedoState(){return this._innerAPI().undoRedoState()}setIntervalLinkingEnabled(e){this._innerAPI().setIntervalLinkingEnabled(e)}setTimeFrame(e){this._innerAPI().setTimeFrame(e)}symbolSync(){return this._innerAPI().symbolSync()}intervalSync(){return this._innerAPI().intervalSync()}crosshairSync(){return this._innerAPI().crosshairSync()}timeSync(){return this._innerAPI().timeSync()}getAllFeatures(){return this._innerWindow().getAllFeatures()}clearUndoHistory(){return this._innerAPI().clearUndoHistory()}undo(){return this._innerAPI().undo()}redo(){return this._innerAPI().redo()}startFullscreen(){this._innerAPI().startFullscreen()}exitFullscreen(){this._innerAPI().exitFullscreen()}takeClientScreenshot(e){return this._innerAPI().takeClientScreenshot(e)}_innerAPI(){return this._innerWindow().tradingViewApi}_innerWindow(){return this._iFrame.contentWindow}_autoResizeChart(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")}_create(){const e=this._render();this._options.container_id&&console.warn("`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`.");const t=this._options.container_id||this._options.container,i="string"==typeof t?document.getElementById(t):t;if(null===i)throw new Error(`There is no such element - #${this._options.container}`);i.innerHTML=e,this._iFrame=i.querySelector(`#${this._id}`);const n=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(n.style.width="100%",this._options.fullscreen||(n.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((e=>{const t=()=>{n.removeEventListener("load",t,!1),e()};n.addEventListener("load",t,!1)})),this._innerWindowLoaded.then((()=>{this._innerWindow().widgetReady((()=>{this._ready=!0;for(const t of this._readyHandlers)try{t.call(this)}catch(e){console.error(e)}this._innerWindow().initializationFinished()}))}))}_render(){const e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter,additionalSymbolInfoFields:this._options.additional_symbol_info_fields,headerWidgetButtonsMode:this._options.header_widget_buttons_mode},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(e[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");const t=(this._options.library_path||"")+`${encodeURIComponent(this._options.locale)}-tv-chart.9df149da.html#symbol=`+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"")+(this._options.header_widget_buttons_mode?"&header_widget_buttons_mode="+encodeURIComponent(String(this._options.header_widget_buttons_mode)):"")+(this._options.time_scale?"&time_scale="+encodeURIComponent(JSON.stringify(this._options.time_scale)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'}};window.TradingView=window.TradingView||{},window.TradingView.version=n,exports.version=n,exports.widget=o;
=======
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return(t=Object.assign||function(t){for(var e,o=arguments,n=1,i=arguments.length;n<i;n++)for(var r in e=o[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function e(o,n){var i=t({},o);for(var r in n)"object"!=typeof o[r]||null===o[r]||Array.isArray(o[r])?void 0!==n[r]&&(i[r]=n[r]):i[r]=e(o[r],n[r]);return i}var o={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},n={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};function i(){return"CL v19.038 (internal id 605618ef @ 2021-08-09T15:11:06.753Z)"}var r=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(n,t),t.preset){var i=o[t.preset];i?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(i.disabled_features):this._options.disabled_features=i.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(i.enabled_features):this._options.enabled_features=i.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.headerReady=function(){var t=this;return this._innerWindowLoaded.then((function(){return t._innerWindow().headerReady()}))},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.getLanguage=function(){return this._options.locale},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e,o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o){this._innerAPI().saveChartToServer(t,e,o)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype.layoutName=function(){return this._innerAPI().layoutName()},t.prototype.changeTheme=function(t,e){this._innerWindow().changeTheme(t,e)},t.prototype.getTheme=function(){return this._innerWindow().getTheme()},t.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},t.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},t.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},t.prototype.drawOnAllCharts=function(t){this._innerAPI().drawOnAllCharts(t)},t.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},t.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},t.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},t.prototype.setIntervalLinkingEnabled=function(t){this._innerAPI().setIntervalLinkingEnabled(t)},t.prototype.setTimeFrame=function(t){this._innerAPI().setTimeFrame(t)},t.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},t.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},t.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},t.prototype.timeSync=function(){return this._innerAPI().timeSync()},t.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},t.prototype.clearUndoHistory=function(){return this._innerAPI().clearUndoHistory()},t.prototype.undo=function(){return this._innerAPI().undo()},t.prototype.redo=function(){return this._innerAPI().redo()},t.prototype.startFullscreen=function(){this._innerAPI().startFullscreen()},t.prototype.exitFullscreen=function(){this._innerAPI().exitFullscreen()},t.prototype.takeClientScreenshot=function(t){return this._innerAPI().takeClientScreenshot(t)},t.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},t.prototype._innerWindow=function(){return this._iFrame.contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render();this._options.container_id&&console.warn("`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`.");var o=this._options.container_id||this._options.container,n="string"==typeof o?document.getElementById(o):o;if(null===n)throw new Error("There is no such element - #"+this._options.container);n.innerHTML=e,this._iFrame=n.querySelector("#"+this._id);var i=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(t){var e=function(){i.removeEventListener("load",e,!1),t()};i.addEventListener("load",e,!1)})),this._innerWindowLoaded.then((function(){t._innerWindow().widgetReady((function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){var n=o[e];try{n.call(t)}catch(i){console.error(i)}}t._innerWindow().initializationFinished()}))}))},t.prototype._render=function(){var t=window;if(t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)t[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(t[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var e=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.605618ef.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}();window.TradingView=window.TradingView||{},window.TradingView.version=i,exports.version=i,exports.widget=r;
>>>>>>> 1641051f7315226e8cfff970466f52c15746d337
