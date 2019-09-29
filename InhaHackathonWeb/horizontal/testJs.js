/*!
 HTML5 export buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license

 FileSaver.js (1.3.3) - MIT license
 Copyright © 2016 Eli Grey - http://eligrey.com
*/
(function(f) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function(g) {
        return f(g, window, document)
    }) : "object" === typeof exports ? module.exports = function(g, p, z, t) {
        g || (g = window);
        p && p.fn.dataTable || (p = require("datatables.net")(g, p).$);
        p.fn.dataTable.Buttons || require("datatables.net-buttons")(g, p);
        return f(p, g, g.document, z, t)
    } : f(jQuery, window, document)
})(function(f, g, p, z, t, w) {
    function A(a) {
        for (var b = ""; 0 <= a;) b = String.fromCharCode(a % 26 + 65) + b, a = Math.floor(a /
            26) - 1;
        return b
    }

    function E(a, b) {
        y === w && (y = -1 === C.serializeToString(f.parseXML(F["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
        f.each(b, function(b, c) {
            if (f.isPlainObject(c)) b = a.folder(b), E(b, c);
            else {
                if (y) {
                    var d = c.childNodes[0],
                        e, h = [];
                    for (e = d.attributes.length - 1; 0 <= e; e--) {
                        var m = d.attributes[e].nodeName;
                        var k = d.attributes[e].nodeValue; - 1 !== m.indexOf(":") && (h.push({
                            name: m,
                            value: k
                        }), d.removeAttribute(m))
                    }
                    e = 0;
                    for (m = h.length; e < m; e++) k = c.createAttribute(h[e].name.replace(":", "_dt_b_namespace_token_")),
                        k.value = h[e].value, d.setAttributeNode(k)
                }
                c = C.serializeToString(c);
                y && (-1 === c.indexOf("<?xml") && (c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + c), c = c.replace(/_dt_b_namespace_token_/g, ":"), c = c.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, ""));
                c = c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
                a.file(b, c)
            }
        })
    }

    function r(a, b, d) {
        var c = a.createElement(b);
        d && (d.attr && f(c).attr(d.attr), d.children && f.each(d.children, function(a, b) {
            c.appendChild(b)
        }), null !== d.text && d.text !== w && c.appendChild(a.createTextNode(d.text)));
        return c
    }

    function L(a, b) {
        var d = a.header[b].length;
        a.footer && a.footer[b].length > d && (d = a.footer[b].length);
        for (var c = 0, f = a.body.length; c < f; c++) {
            var e = a.body[c][b];
            e = null !== e && e !== w ? e.toString() : ""; - 1 !== e.indexOf("\n") ? (e = e.split("\n"), e.sort(function(a, c) {
                return c.length - a.length
            }), e = e[0].length) : e = e.length;
            e > d && (d = e);
            if (40 < d) return 54
        }
        d *= 1.35;
        return 6 < d ? d : 6
    }
    var v = f.fn.dataTable;
    v.Buttons.pdfMake = function(a) {
        if (!a) return t || g.pdfMake;
        t = m_ake
    };
    v.Buttons.jszip = function(a) {
        if (!a) return z || g.JSZip;
        z = a
    };
    var B = function(a) {
        if (!("undefined" === typeof a || "undefined" !== typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var b = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                d = "download" in b,
                c = /constructor/i.test(a.HTMLElement) || a.safari,
                f = /CriOS\/[\d]+/.test(navigator.userAgent),
                e = function(c) {
                    (a.setImmediate || a.setTimeout)(function() {
                        throw c;
                    }, 0)
                },
                h = function(c) {
                    setTimeout(function() {
                        "string" === typeof c ? (a.URL || a.webkitURL || a).revokeObjectURL(c) : c.remove()
                    }, 4E4)
                },
                m = function(a) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ?
                        new Blob([String.fromCharCode(65279), a], {
                            type: a.type
                        }) : a
                },
                k = function(k, q, n) {
                    n || (k = m(k));
                    var l = this,
                        g = "application/octet-stream" === k.type,
                        D = function() {
                            var a = ["writestart", "progress", "write", "writeend"];
                            a = [].concat(a);
                            for (var c = a.length; c--;) {
                                var b = l["on" + a[c]];
                                if ("function" === typeof b) try {
                                    b.call(l, l)
                                } catch (M) {
                                    e(M)
                                }
                            }
                        };
                    l.readyState = l.INIT;
                    if (d) {
                        var u = (a.URL || a.webkitURL || a).createObjectURL(k);
                        setTimeout(function() {
                            b.href = u;
                            b.download = q;
                            var a = new MouseEvent("click");
                            b.dispatchEvent(a);
                            D();
                            h(u);
                            l.readyState =
                                l.DONE
                        })
                    } else(function() {
                        if ((f || g && c) && a.FileReader) {
                            var b = new FileReader;
                            b.onloadend = function() {
                                var c = f ? b.result : b.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                a.open(c, "_blank") || (a.location.href = c);
                                l.readyState = l.DONE;
                                D()
                            };
                            b.readAsDataURL(k);
                            l.readyState = l.INIT
                        } else u || (u = (a.URL || a.webkitURL || a).createObjectURL(k)), g ? a.location.href = u : a.open(u, "_blank") || (a.location.href = u), l.readyState = l.DONE, D(), h(u)
                    })()
                },
                n = k.prototype;
            if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob) return function(a,
                c, b) {
                c = c || a.name || "download";
                b || (a = m(a));
                return navigator.msSaveOrOpenBlob(a, c)
            };
            n.abort = function() {};
            n.readyState = n.INIT = 0;
            n.WRITING = 1;
            n.DONE = 2;
            n.error = n.onwritestart = n.onprogress = n.onwrite = n.onabort = n.onerror = n.onwriteend = null;
            return function(a, c, b) {
                return new k(a, c || a.name || "download", b)
            }
        }
    }("undefined" !== typeof self && self || "undefined" !== typeof g && g || this.content);
    v.fileSave = B;
    var G = function(a) {
            var b = "Sheet1";
            a.sheetName && (b = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ""));
            return b
        },
        H = function(a) {
            return a.newline ?
                a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
        },
        I = function(a, b) {
            var d = H(b);
            a = a.buttons.exportData(b.exportOptions);
            var c = b.fieldBoundary,
                f = b.fieldSeparator,
                e = new RegExp(c, "g"),
                h = b.escapeChar !== w ? b.escapeChar : "\\",
                m = function(a) {
                    for (var b = "", d = 0, m = a.length; d < m; d++) 0 < d && (b += f), b += c ? c + ("" + a[d]).replace(e, h + c) + c : a[d];
                    return b
                },
                k = b.header ? m(a.header) + d : "";
            b = b.footer && a.footer ? d + m(a.footer) : "";
            for (var n = [], g = 0, q = a.body.length; g < q; g++) n.push(m(a.body[g]));
            return {
                str: k + n.join(d) + b,
                rows: n.length
            }
        },
        J = function() {
            if (-1 === navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("Chrome") || -1 !== navigator.userAgent.indexOf("Opera")) return !1;
            var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
            return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1
        };
    try {
        var C = new XMLSerializer,
            y
    } catch (a) {}
    var F = {
            "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
            "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
            "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
            "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
            "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
            "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
        },
        K = [{
                match: /^\-?\d+\.\d%$/,
                style: 60,
                fmt: function(a) {
                    return a / 100
                }
            }, {
                match: /^\-?\d+\.?\d*%$/,
                style: 56,
                fmt: function(a) {
                    return a / 100
                }
            }, {
                match: /^\-?\$[\d,]+.?\d*$/,
                style: 57
            }, {
                match: /^\-?£[\d,]+.?\d*$/,
                style: 58
            }, {
                match: /^\-?€[\d,]+.?\d*$/,
                style: 59
            }, {
                match: /^\-?\d+$/,
                style: 65
            }, {
                match: /^\-?\d+\.\d{2}$/,
                style: 66
            }, {
                match: /^\([\d,]+\)$/,
                style: 61,
                fmt: function(a) {
                    return -1 * a.replace(/[\(\)]/g, "")
                }
            }, {
                match: /^\([\d,]+\.\d{2}\)$/,
                style: 62,
                fmt: function(a) {
                    return -1 * a.replace(/[\(\)]/g, "")
                }
            }, {
                match: /^\-?[\d,]+$/,
                style: 63
            },
            {
                match: /^\-?[\d,]+\.\d{2}$/,
                style: 64
            }
        ];
    v.ext.buttons.copyHtml5 = {
        className: "buttons-copy buttons-html5",
        text: function(a) {
            return a.i18n("buttons.copy", "Copy")
        },
        action: function(a, b, d, c) {
            this.processing(!0);
            var g = this;
            a = I(b, c);
            var e = b.buttons.exportInfo(c),
                h = H(c),
                m = a.str;
            d = f("<div/>").css({
                height: 1,
                width: 1,
                overflow: "hidden",
                position: "fixed",
                top: 0,
                left: 0
            });
            e.title && (m = e.title + h + h + m);
            e.messageTop && (m = e.messageTop + h + h + m);
            e.messageBottom && (m = m + h + h + e.messageBottom);
            c.customize && (m = c.customize(m, c, b));
            c = f("<textarea readonly/>").val(m).appendTo(d);
            if (p.queryCommandSupported("copy")) {
                d.appendTo(b.table().container());
                c[0].focus();
                c[0].select();
                try {
                    var k = p.execCommand("copy");
                    d.remove();
                    if (k) {
                        b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), b.i18n("buttons.copySuccess", {
                            1: "Copied one row to clipboard",
                            _: "Copied %d rows to clipboard"
                        }, a.rows), 2E3);
                        this.processing(!1);
                        return
                    }
                } catch (q) {}
            }
            k = f("<span>" + b.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") +
                "</span>").append(d);
            b.buttons.info(b.i18n("buttons.copyTitle", "Copy to clipboard"), k, 0);
            c[0].focus();
            c[0].select();
            var n = f(k).closest(".dt-button-info"),
                r = function() {
                    n.off("click.buttons-copy");
                    f(p).off(".buttons-copy");
                    b.buttons.info(!1)
                };
            n.on("click.buttons-copy", r);
            f(p).on("keydown.buttons-copy", function(a) {
                27 === a.keyCode && (r(), g.processing(!1))
            }).on("copy.buttons-copy cut.buttons-copy", function() {
                r();
                g.processing(!1)
            })
        },
        exportOptions: {},
        fieldSeparator: "\t",
        fieldBoundary: "",
        header: !0,
        footer: !1,
        title: "*",
        messageTop: "*",
        messageBottom: "*"
    };
    v.ext.buttons.csvHtml5 = {
        bom: !1,
        className: "buttons-csv buttons-html5",
        available: function() {
            return g.FileReader !== w && g.Blob
        },
        text: function(a) {
            return a.i18n("buttons.csv", "CSV")
        },
        action: function(a, b, d, c) {
            this.processing(!0);
            a = I(b, c).str;
            d = b.buttons.exportInfo(c);
            var f = c.charset;
            c.customize && (a = c.customize(a, c, b));
            !1 !== f ? (f || (f = p.characterSet || p.charset), f && (f = ";charset=" + f)) : f = "";
            c.bom && (a = "﻿" + a);
            B(new Blob([a], {
                type: "text/csv" + f
            }), d.filename, !0);
            this.processing(!1)
        },
        filename: "*",
        extension: ".csv",
        exportOptions: {},
        fieldSeparator: ",",
        fieldBoundary: '"',
        escapeChar: '"',
        charset: null,
        header: !0,
        footer: !1
    };
    v.ext.buttons.excelHtml5 = {
        className: "buttons-excel buttons-html5",
        available: function() {
            return g.FileReader !== w && (z || g.JSZip) !== w && !J() && C
        },
        text: function(a) {
            return a.i18n("buttons.excel", "Excel")
        },
        action: function(a, b, d, c) {
            this.processing(!0);
            var p = this,
                e = 0;
            a = function(a) {
                return f.parseXML(F[a])
            };
            var h = a("xl/worksheets/sheet1.xml"),
                m = h.getElementsByTagName("sheetData")[0];
            a = {
                _rels: {
                    ".rels": a("_rels/.rels")
                },
                xl: {
                    _rels: {
                        "workbook.xml.rels": a("xl/_rels/workbook.xml.rels")
                    },
                    "workbook.xml": a("xl/workbook.xml"),
                    "styles.xml": a("xl/styles.xml"),
                    worksheets: {
                        "sheet1.xml": h
                    }
                },
                "[Content_Types].xml": a("[Content_Types].xml")
            };
            var k = b.buttons.exportData(c.exportOptions),
                n, v, q = function(a) {
                    n = e + 1;
                    v = r(h, "row", {
                        attr: {
                            r: n
                        }
                    });
                    for (var b = 0, d = a.length; b < d; b++) {
                        var k = A(b) + "" + n,
                            g = null;
                        if (null === a[b] || a[b] === w || "" === a[b])
                            if (!0 === c.createEmptyCells) a[b] = "";
                            else continue;
                        var l = a[b];
                        a[b] = f.trim(a[b]);
                        for (var q = 0, p = K.length; q < p; q++) {
                            var u = K[q];
                            if (a[b].match && !a[b].match(/^0\d+/) && a[b].match(u.match)) {
                                g = a[b].replace(/[^\d\.\-]/g, "");
                                u.fmt && (g = u.fmt(g));
                                g = r(h, "c", {
                                    attr: {
                                        r: k,
                                        s: u.style
                                    },
                                    children: [r(h, "v", {
                                        text: g
                                    })]
                                });
                                break
                            }
                        }
                        g || ("number" === typeof a[b] || a[b].match && a[b].match(/^-?\d+(\.\d+)?$/) && !a[b].match(/^0\d+/) ? g = r(h, "c", {
                            attr: {
                                t: "n",
                                r: k
                            },
                            children: [r(h, "v", {
                                text: a[b]
                            })]
                        }) : (l = l.replace ? l.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "") : l, g = r(h, "c", {
                            attr: {
                                t: "inlineStr",
                                r: k
                            },
                            children: {
                                row: r(h,
                                    "is", {
                                        children: {
                                            row: r(h, "t", {
                                                text: l,
                                                attr: {
                                                    "xml:space": "preserve"
                                                }
                                            })
                                        }
                                    })
                            }
                        })));
                        v.appendChild(g)
                    }
                    m.appendChild(v);
                    e++
                };
            c.customizeData && c.customizeData(k);
            var x = function(a, b) {
                    var c = f("mergeCells", h);
                    c[0].appendChild(r(h, "mergeCell", {
                        attr: {
                            ref: "A" + a + ":" + A(b) + a
                        }
                    }));
                    c.attr("count", parseFloat(c.attr("count")) + 1);
                    f("row:eq(" + (a - 1) + ") c", h).attr("s", "51")
                },
                l = b.buttons.exportInfo(c);
            l.title && (q([l.title], e), x(e, k.header.length - 1));
            l.messageTop && (q([l.messageTop], e), x(e, k.header.length - 1));
            c.header && (q(k.header,
                e), f("row:last c", h).attr("s", "2"));
            d = e;
            var t = 0;
            for (var y = k.body.length; t < y; t++) q(k.body[t], e);
            t = e;
            c.footer && k.footer && (q(k.footer, e), f("row:last c", h).attr("s", "2"));
            l.messageBottom && (q([l.messageBottom], e), x(e, k.header.length - 1));
            q = r(h, "cols");
            f("worksheet", h).prepend(q);
            x = 0;
            for (y = k.header.length; x < y; x++) q.appendChild(r(h, "col", {
                attr: {
                    min: x + 1,
                    max: x + 1,
                    width: L(k, x),
                    customWidth: 1
                }
            }));
            q = a.xl["workbook.xml"];
            f("sheets sheet", q).attr("name", G(c));
            c.autoFilter && (f("mergeCells", h).before(r(h, "autoFilter", {
                attr: {
                    ref: "A" + d + ":" + A(k.header.length - 1) + t
                }
            })), f("definedNames", q).append(r(q, "definedName", {
                attr: {
                    name: "_xlnm._FilterDatabase",
                    localSheetId: "0",
                    hidden: 1
                },
                text: G(c) + "!$A$" + d + ":" + A(k.header.length - 1) + t
            })));
            c.customize && c.customize(a, c, b);
            0 === f("mergeCells", h).children().length && f("mergeCells", h).remove();
            b = new(z || g.JSZip);
            d = {
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            };
            E(b, a);
            b.generateAsync ? b.generateAsync(d).then(function(a) {
                    B(a, l.filename);
                    p.processing(!1)
                }) :
                (B(b.generate(d), l.filename), this.processing(!1))
        },
        filename: "*",
        extension: ".xlsx",
        exportOptions: {},
        header: !0,
        footer: !1,
        title: "*",
        messageTop: "*",
        messageBottom: "*",
        createEmptyCells: !1,
        autoFilter: !1,
        sheetName: "",
        exportOptions: {
            format: {
                body: function (data, row, col, node) {
                    if (col == 0) {
                        return table
                            .cell({ row: row, column: col })
                            .nodes()
                            .to$()
                            .find(':selected')
                            .text()
                    } else {
                        return data;
                    }
                }
            }
        }
    };
    v.ext.buttons.pdfHtml5 = {
        className: "buttons-pdf buttons-html5",
        available: function() {
            return g.FileReader !== w && (t || g.pdfMake)
        },
        text: function(a) {
            return a.i18n("buttons.pdf", "PDF")
        },
        action: function(a, b, d, c) {
            this.processing(!0);
            d = b.buttons.exportData(c.exportOptions);
            a = b.buttons.exportInfo(c);
            var p = [];
            c.header && p.push(f.map(d.header, function(a) {
                return {
                    text: "string" === typeof a ? a : a + "",
                    style: "tableHeader"
                }
            }));
            for (var e = 0, h = d.body.length; e < h; e++) p.push(f.map(d.body[e], function(a) {
                if (null === a || a === w) a = "";
                return {
                    text: "string" === typeof a ? a : a + "",
                    style: e % 2 ? "tableBodyEven" : "tableBodyOdd"
                }
            }));
            c.footer && d.footer && p.push(f.map(d.footer, function(a) {
                return {
                    text: "string" === typeof a ? a : a + "",
                    style: "tableFooter"
                }
            }));
            d = {
                pageSize: c.pageSize,
                pageOrientation: c.orientation,
                content: [{
                    table: {
                        headerRows: 1,
                        body: p
                    },
                    layout: "noBorders"
                }],
                styles: {
                    tableHeader: {
                        bold: !0,
                        fontSize: 11,
                        color: "white",
                        fillColor: "#2d4154",
                        alignment: "center"
                    },
                    tableBodyEven: {},
                    tableBodyOdd: {
                        fillColor: "#f3f3f3"
                    },
                    tableFooter: {
                        bold: !0,
                        fontSize: 11,
                        color: "white",
                        fillColor: "#2d4154"
                    },
                    title: {
                        alignment: "center",
                        fontSize: 15
                    },
                    message: {}
                },
                defaultStyle: {
                    fontSize: 10
                }
            };
            a.messageTop && d.content.unshift({
                text: a.messageTop,
                style: "message",
                margin: [0, 0, 0, 12]
            });
            a.messageBottom && d.content.push({
                text: a.messageBottom,
                style: "message",
                margin: [0, 0, 0, 12]
            });
            a.title && d.content.unshift({
                text: a.title,
                style: "title",
                margin: [0, 0, 0, 12]
            });
            c.customize && c.customize(d, c, b);
            b = (t || g.pdfMake).createPdf(d);
            "open" !== c.download || J() ? b.download(a.filename) : b.open();
            this.processing(!1)
        },
        title: "*",
        filename: "*",
        extension: ".pdf",
        exportOptions: {},
        orientation: "portrait",
        pageSize: "A4",
        header: !0,
        footer: !1,
        messageTop: "*",
        messageBottom: "*",
        customize: null,
        download: "download"
    };
    return v.Buttons
});