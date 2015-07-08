// module Ace.EditSession

exports.getBackgroundTokenizer = function(value) {
    return function() {
        return value.bgTokenizer;
    };
};

exports.onImpl = function(event, fn, self) {
    return function() {
        return self.on(event, function(e) {
            fn(e)();
        });
    };
};

exports.findMatchingBracketImpl = function(position, self) {
    return function() {
        return self.findMatchingBracket(position);
    };
};

exports.addFoldImpl = function(text, range, self) {
    return function() {
        self.addFold(text, range);
    };
};

exports.screenToDocumentColumnImpl = function(row, column, self) {
    return function() {
        return self.screenToDocumentColumn(row, column);
    };
};

exports.highlightImpl = function(text, self) {
    return function() {
        return self.highlight(text);
    };
};

exports.setDocumentImpl = function(doc, self) {
    return function() {
        return self.setDocument(doc);
    };
};

exports.getDocumentImpl = function(self) {
    return function() {
        return self.getDocument();
    };
};

exports.resetRowCacheImpl = function(row, self) {
    return function() {
        return self.$resetRowCache(row);
    };
};

exports.setValueImpl = function(text, self) {
    return function() {
        return self.setValue(text);
    };
};

exports.setModeImpl = function(mode, self) {
    return function() {
        return self.setMode(mode);
    };
};

exports.getValueImpl = function(self) {
    return function() {
        return self.getValue();
    };
};

exports.getSelectionImpl = function(self) {
    return function() {
        return self.getSelection();
    };
};

exports.getStateImpl = function(row, self) {
    return function() {
        return self.getState(row);
    };
};


exports.getTokensImpl = function(row, self) {
    return function() {
        return self.getTokens(row);
    };
};

exports.getTokenAtImpl = function(row, column, self) {
    return function() {
        return self.getTokenAt(row, column);
    };
};

exports.setUndoManagerImpl = function(undoManager, self) {
    return function() {
        return self.setUndoManager(undoManager);
    };
};

exports.getUndoManagerImpl = function(self) {
    return function() {
        return self.getUndoManager();
    };
};

exports.getTabStringImpl = function(self) {
    return function() {
        return self.getTabString();
    };
};

exports.setUseSoftTabsImpl = function(useSoftTabs, self) {
    return function() {
        return self.setUseSoftTabs(useSoftTabs);
    };
};

exports.getUseSoftTabsImpl = function(self) {
    return function() {
        return self.getUseSoftTabs();
    };
};

exports.setTabSizeImpl = function(tabSize, self) {
    return function() {
        return self.setTabSize(tabSize);
    };
};

exports.getTabSizeImpl = function(self) {
    return function() {
        return self.getTabSize();
    };
};

exports.isTabStopImpl = function(position, self) {
    return function() {
        return self.isTabStop(position);
    };
};

exports.setOverwriteImpl = function(overwrite, self) {
    return function() {
        return self.setOverwrite(overwrite);
    };
};

exports.getOverwriteImpl = function(self) {
    return function() {
        return self.getOverwrite();
    };
};

exports.toggleOverwriteImpl = function(self) {
    return function() {
        return self.toggleOverwrite();
    };
};

exports.addGutterDecorationImpl = function(row, className, self) {
    return function() {
        return self.addGutterDecoration(row, className);
    };
};

exports.removeGutterDecorationImpl = function(row, className, self) {
    return function() {
        return self.removeGutterDecoration(row, className);
    };
};

exports.getBreakpointsImpl = function(self) {
    return function() {
        return self.getBreakpoints();
    };
};

exports.setBreakpointsImpl = function(rows, self) {
    return function() {
        return self.setBreakpoints(rows);
    };
};

exports.clearBreakpointsImpl = function(self) {
    return function() {
        return self.clearBreakpoints();
    };
};

exports.setBreakpointImpl = function(row, className, self) {
    return function() {
        return self.setBreakpoint(row, className);
    };
};

exports.clearBreakpointImpl = function(row, self) {
    return function() {
        return self.clearBreakpoint(row);
    };
};

exports.addMarkerImpl = function(range, clazz, type, inFront, self) {
    return function() {
        return self.addMarker(range, clazz, type, inFront);
    };
};

exports.addDynamicMarkerImpl = function(marker, inFront, self) {
    return function() {
        return self.addDynamicMarker({
            update: function(html, layer) {
                marker(html)(layer.element)();
            }
        }, inFront);
    };
};

exports.removeMarkerImpl = function(markerId, self) {
    return function() {
        return self.removeMarker(markerId);
    };
};

exports.setAnnotationsImpl = function(annotations, self) {
    return function() {
        return self.setAnnotations(annotations);
    };
};

exports.getAnnotationsImpl = function(self) {
    return function() {
        return self.getAnnotations();
    };
};

exports.clearAnnotationsImpl = function(self) {
    return function() {
        return self.clearAnnotations();
    };
};

exports.detectNewLineImpl = function(text, self) {
    return function() {
        return self.$detectNewLine(text);
    };
};

exports.getWordRangeImpl = function(row, column, self) {
    return function() {
        return self.getWordRange(row, column);
    };
};

exports.getAWordRangeImpl = function(row, column, self) {
    return function() {
        return self.getAWordRange(row, column);
    };
};

exports.setNewLineModeImpl = function(newLineMode, self) {
    return function() {
        return self.setNewLineMode(newLineMode);
    };
};

exports.getNewLineModeImpl = function(self) {
    return function() {
        return self.getNewLineMode();
    };
};

exports.setUseWorkerImpl = function(useWorker, self) {
    return function() {
        return self.setUseWorker(useWorker);
    };
};

exports.getUseWorkerImpl = function(self) {
    return function() {
        return self.getUseWorker();
    };
};

exports.onReloadTokenizerImpl = function(self) {
    return function() {
        return self.onReloadTokenizer();
    };
};

exports.modeImpl = function(mode, self) {
    return function() {
        return self.$mode(mode);
    };
};

exports.getModeImpl = function(self) {
    return function() {
        return self.getMode();
    };
};

exports.setScrollTopImpl = function(scrollTop, self) {
    return function() {
        return self.setScrollTop(scrollTop);
    };
};

exports.getScrollTopImpl = function(self) {
    return function() {
        return self.getScrollTop();
    };
};

exports.setScrollLeftImpl = function(scrollLeft, self) {
    return function() {
        return self.setScrollLeft(scrollLeft);
    };
};

exports.getScrollLeftImpl = function(self) {
    return function() {
        return self.getScrollLeft();
    };
};

exports.getScreenWidthImpl = function(self) {
    return function() {
        return self.getScreenWidth();
    };
};

exports.getLineImpl = function(row, self) {
    return function() {
        return self.getLine(row);
    };
};

exports.getLinesImpl = function(firstRow, lastRow, self) {
    return function() {
        return self.getLines(firstRow, lastRow);
    };
};

exports.getLengthImpl = function(self) {
    return function() {
        return self.getLength();
    };
};

exports.getTextRangeImpl = function(range, self) {
    return function() {
        return self.getTextRange(range);
    };
};

exports.insertImpl = function(position, text, self) {
    return function() {
        return self.insert(position, text);
    };
};

exports.removeImpl = function(range, self) {
    return function() {
        return self.remove(range);
    };
};

exports.setUndoSelectImpl = function(enable, self) {
    return function() {
        return self.setUndoSelect(enable);
    };
};

exports.replaceImpl = function(range, text, self) {
    return function() {
        return self.replace(range, text);
    };
};

exports.moveTextImpl = function(fromRange, toPosiion, self) {
    return function() {
        return self.moveText(fromRange, toPosition);
    };
};

exports.indentRowsImpl = function(startRow, endRow, indentString, self) {
    return function() {
        return self.indentRows(startRow, endRow, indentString);
    };
};

exports.outdentRowsImpl = function(range, self) {
    return function() {
        return self.outdentRows(range);
    };
};

exports.moveLinesUpImpl = function(firstRow, lastRow, self) {
    return function() {
        return self.moveLinesUp(firstRow, lastRow);
    };
};

exports.moveLinesDownImpl = function(firstRow, lastRow, self) {
    return function() {
        return self.moveLinesDown(firstRow, lastRow);
    };
};

exports.duplicateLinesImpl = function(firstRow, lastRow, self) {
    return function() {
        return self.duplicateLines(firstRow, lastRow);
    };
};

exports.setUseWrapModeImpl = function(useWrapMode, self) {
    return function() {
        return self.setUseWrapMode(useWrapMode);
    };
};

exports.getUseWrapModeImpl = function(self) {
    return function() {
        return self.getUseWrapMode();
    };
};

exports.setWrapLimitRangeImpl = function(min, max, self) {
    return function() {
        return self.setWrapLimitRange(min, max);
    };
};


exports.adjustWrapLimitImpl = function(desiredLimit, self) {
    return function() {
        return self.adjustWrapLimit(desiredLimit);
    };
};

exports.getWrapLimitImpl = function(self) {
    return function() {
        return self.getWrapLimit();
    };
};

exports.getWrapLimitRangeImpl = function(self) {
    return function() {
        return self.getWrapLimitRange();
    };
};

exports.getDisplayTokensImpl = function(str, offset, self) {
    return function() {
        return self.$getDisplayTokens(str, offset);
    };
};

exports.getStringScreenWidthImpl = function(str, maxScreenColumn, screenColumn, self)
{
    return function() {
        return self.$getStringScreenWidth(str, maxScreenColumn, screenColumn);
    };
}

exports.getRowLengthImpl = function(row, self) {
    return function() {
        return self.getRowLength(row);
    };
};

exports.getScreenLastRowColumnImpl = function(screenRow, self) {
    return function() {
        return self.getScreenLastRowColumn(screenRow);
    };
};

exports.getDocumentLastRowColumnImpl = function(docRow, docColumn, self) {
    return function() {
        return self.getDocumentLastRowColumn(docRow, docColumn);
    };
};

exports.getDocumentLastRowColumnPositionImpl = function(docRow, docColumn, self) {
    return function() {
        return self.getDocumentLastRowColumnPosition(docRow, docColumn);
    };
};

exports.getRowSplitDataImpl = function(self) {
    return function() {
        return self.getRowSplitData();
    };
};

exports.getScreenTabSizeImpl = function(screenColumn, self) {
    return function() {
        return self.getScreenTabSize(screenColumn);
    };
};

exports.screenToDocumentPositionImpl = function(screenRow, screenColumn, self) {
    return function() {
        return self.screenToDocumentPosition(screenRow, screenColumn);
    };
};

exports.documentToScreenPositionImpl = function(docRow, docColumn, self) {
    return function() {
        return self.documentToScreenPosition(docRow, docColumn);
    };
};

exports.documentToScreenColumnImpl = function(row, docColumn, self) {
    return function() {
        return self.documentToScreenColumn(row, docColumn);
    };
};

exports.documentToScreenRowImpl = function(docRow, docColumn, self) {
    return function() {
        return self.documentToScreenRow(docRow, docColumn);
    };
};

exports.getScreenLengthImpl = function(self) {
    return function() {
        return self.getScreenLength();
    };
};

function create(text, mode) {
    return function() {
        var EditSession = ace.require('ace/edit_session').EditSession;
        return new EditSession(text, mode);
    };
}

exports.setThemeImpl = 

exports.createWithModeImpl = create;

exports.createImpl = create;

exports.createFromLinesImpl = create; 
