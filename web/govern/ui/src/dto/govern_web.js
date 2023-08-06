/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.dto = (function() {

    /**
     * Namespace dto.
     * @exports dto
     * @namespace
     */
    var dto = {};

    dto.PaginationArg = (function() {

        /**
         * Properties of a PaginationArg.
         * @memberof dto
         * @interface IPaginationArg
         * @property {boolean|null} [noPaging] PaginationArg noPaging
         * @property {number|Long|null} [page] PaginationArg page
         * @property {number|Long|null} [perPage] PaginationArg perPage
         */

        /**
         * Constructs a new PaginationArg.
         * @memberof dto
         * @classdesc Represents a PaginationArg.
         * @implements IPaginationArg
         * @constructor
         * @param {dto.IPaginationArg=} [properties] Properties to set
         */
        function PaginationArg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaginationArg noPaging.
         * @member {boolean} noPaging
         * @memberof dto.PaginationArg
         * @instance
         */
        PaginationArg.prototype.noPaging = false;

        /**
         * PaginationArg page.
         * @member {number|Long} page
         * @memberof dto.PaginationArg
         * @instance
         */
        PaginationArg.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PaginationArg perPage.
         * @member {number|Long} perPage
         * @memberof dto.PaginationArg
         * @instance
         */
        PaginationArg.prototype.perPage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PaginationArg instance using the specified properties.
         * @function create
         * @memberof dto.PaginationArg
         * @static
         * @param {dto.IPaginationArg=} [properties] Properties to set
         * @returns {dto.PaginationArg} PaginationArg instance
         */
        PaginationArg.create = function create(properties) {
            return new PaginationArg(properties);
        };

        /**
         * Encodes the specified PaginationArg message. Does not implicitly {@link dto.PaginationArg.verify|verify} messages.
         * @function encode
         * @memberof dto.PaginationArg
         * @static
         * @param {dto.IPaginationArg} message PaginationArg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationArg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.noPaging != null && Object.hasOwnProperty.call(message, "noPaging"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.noPaging);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.page);
            if (message.perPage != null && Object.hasOwnProperty.call(message, "perPage"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.perPage);
            return writer;
        };

        /**
         * Encodes the specified PaginationArg message, length delimited. Does not implicitly {@link dto.PaginationArg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.PaginationArg
         * @static
         * @param {dto.IPaginationArg} message PaginationArg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaginationArg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PaginationArg message from the specified reader or buffer.
         * @function decode
         * @memberof dto.PaginationArg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.PaginationArg} PaginationArg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationArg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.PaginationArg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.noPaging = reader.bool();
                        break;
                    }
                case 2: {
                        message.page = reader.sint64();
                        break;
                    }
                case 3: {
                        message.perPage = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PaginationArg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.PaginationArg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.PaginationArg} PaginationArg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaginationArg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PaginationArg message.
         * @function verify
         * @memberof dto.PaginationArg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PaginationArg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.noPaging != null && message.hasOwnProperty("noPaging"))
                if (typeof message.noPaging !== "boolean")
                    return "noPaging: boolean expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page) && !(message.page && $util.isInteger(message.page.low) && $util.isInteger(message.page.high)))
                    return "page: integer|Long expected";
            if (message.perPage != null && message.hasOwnProperty("perPage"))
                if (!$util.isInteger(message.perPage) && !(message.perPage && $util.isInteger(message.perPage.low) && $util.isInteger(message.perPage.high)))
                    return "perPage: integer|Long expected";
            return null;
        };

        /**
         * Creates a PaginationArg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.PaginationArg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.PaginationArg} PaginationArg
         */
        PaginationArg.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.PaginationArg)
                return object;
            var message = new $root.dto.PaginationArg();
            if (object.noPaging != null)
                message.noPaging = Boolean(object.noPaging);
            if (object.page != null)
                if ($util.Long)
                    (message.page = $util.Long.fromValue(object.page)).unsigned = false;
                else if (typeof object.page === "string")
                    message.page = parseInt(object.page, 10);
                else if (typeof object.page === "number")
                    message.page = object.page;
                else if (typeof object.page === "object")
                    message.page = new $util.LongBits(object.page.low >>> 0, object.page.high >>> 0).toNumber();
            if (object.perPage != null)
                if ($util.Long)
                    (message.perPage = $util.Long.fromValue(object.perPage)).unsigned = false;
                else if (typeof object.perPage === "string")
                    message.perPage = parseInt(object.perPage, 10);
                else if (typeof object.perPage === "number")
                    message.perPage = object.perPage;
                else if (typeof object.perPage === "object")
                    message.perPage = new $util.LongBits(object.perPage.low >>> 0, object.perPage.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PaginationArg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.PaginationArg
         * @static
         * @param {dto.PaginationArg} message PaginationArg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PaginationArg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.noPaging = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.page = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.page = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.perPage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.perPage = options.longs === String ? "0" : 0;
            }
            if (message.noPaging != null && message.hasOwnProperty("noPaging"))
                object.noPaging = message.noPaging;
            if (message.page != null && message.hasOwnProperty("page"))
                if (typeof message.page === "number")
                    object.page = options.longs === String ? String(message.page) : message.page;
                else
                    object.page = options.longs === String ? $util.Long.prototype.toString.call(message.page) : options.longs === Number ? new $util.LongBits(message.page.low >>> 0, message.page.high >>> 0).toNumber() : message.page;
            if (message.perPage != null && message.hasOwnProperty("perPage"))
                if (typeof message.perPage === "number")
                    object.perPage = options.longs === String ? String(message.perPage) : message.perPage;
                else
                    object.perPage = options.longs === String ? $util.Long.prototype.toString.call(message.perPage) : options.longs === Number ? new $util.LongBits(message.perPage.low >>> 0, message.perPage.high >>> 0).toNumber() : message.perPage;
            return object;
        };

        /**
         * Converts this PaginationArg to JSON.
         * @function toJSON
         * @memberof dto.PaginationArg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PaginationArg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PaginationArg
         * @function getTypeUrl
         * @memberof dto.PaginationArg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PaginationArg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.PaginationArg";
        };

        return PaginationArg;
    })();

    dto.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof dto
         * @interface IError
         * @property {string|null} [msg] Error msg
         */

        /**
         * Constructs a new Error.
         * @memberof dto
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {dto.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error msg.
         * @member {string} msg
         * @memberof dto.Error
         * @instance
         */
        Error.prototype.msg = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof dto.Error
         * @static
         * @param {dto.IError=} [properties] Properties to set
         * @returns {dto.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link dto.Error.verify|verify} messages.
         * @function encode
         * @memberof dto.Error
         * @static
         * @param {dto.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link dto.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Error
         * @static
         * @param {dto.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof dto.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Error)
                return object;
            var message = new $root.dto.Error();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Error
         * @static
         * @param {dto.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof dto.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Error
         * @function getTypeUrl
         * @memberof dto.Error
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.Error";
        };

        return Error;
    })();

    dto.AddDomainReq = (function() {

        /**
         * Properties of an AddDomainReq.
         * @memberof dto
         * @interface IAddDomainReq
         * @property {string|null} [name] AddDomainReq name
         * @property {Array.<string>|null} [alias] AddDomainReq alias
         * @property {number|null} [seq] AddDomainReq seq
         * @property {string|null} [icon] AddDomainReq icon
         * @property {string|null} [memo] AddDomainReq memo
         * @property {string|null} [parentId] AddDomainReq parentId
         */

        /**
         * Constructs a new AddDomainReq.
         * @memberof dto
         * @classdesc Represents an AddDomainReq.
         * @implements IAddDomainReq
         * @constructor
         * @param {dto.IAddDomainReq=} [properties] Properties to set
         */
        function AddDomainReq(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddDomainReq name.
         * @member {string} name
         * @memberof dto.AddDomainReq
         * @instance
         */
        AddDomainReq.prototype.name = "";

        /**
         * AddDomainReq alias.
         * @member {Array.<string>} alias
         * @memberof dto.AddDomainReq
         * @instance
         */
        AddDomainReq.prototype.alias = $util.emptyArray;

        /**
         * AddDomainReq seq.
         * @member {number} seq
         * @memberof dto.AddDomainReq
         * @instance
         */
        AddDomainReq.prototype.seq = 0;

        /**
         * AddDomainReq icon.
         * @member {string} icon
         * @memberof dto.AddDomainReq
         * @instance
         */
        AddDomainReq.prototype.icon = "";

        /**
         * AddDomainReq memo.
         * @member {string} memo
         * @memberof dto.AddDomainReq
         * @instance
         */
        AddDomainReq.prototype.memo = "";

        /**
         * AddDomainReq parentId.
         * @member {string} parentId
         * @memberof dto.AddDomainReq
         * @instance
         */
        AddDomainReq.prototype.parentId = "";

        /**
         * Creates a new AddDomainReq instance using the specified properties.
         * @function create
         * @memberof dto.AddDomainReq
         * @static
         * @param {dto.IAddDomainReq=} [properties] Properties to set
         * @returns {dto.AddDomainReq} AddDomainReq instance
         */
        AddDomainReq.create = function create(properties) {
            return new AddDomainReq(properties);
        };

        /**
         * Encodes the specified AddDomainReq message. Does not implicitly {@link dto.AddDomainReq.verify|verify} messages.
         * @function encode
         * @memberof dto.AddDomainReq
         * @static
         * @param {dto.IAddDomainReq} message AddDomainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddDomainReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.memo);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.parentId);
            return writer;
        };

        /**
         * Encodes the specified AddDomainReq message, length delimited. Does not implicitly {@link dto.AddDomainReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddDomainReq
         * @static
         * @param {dto.IAddDomainReq} message AddDomainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddDomainReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddDomainReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddDomainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddDomainReq} AddDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddDomainReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddDomainReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.memo = reader.string();
                        break;
                    }
                case 6: {
                        message.parentId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddDomainReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddDomainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddDomainReq} AddDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddDomainReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddDomainReq message.
         * @function verify
         * @memberof dto.AddDomainReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddDomainReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            return null;
        };

        /**
         * Creates an AddDomainReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddDomainReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddDomainReq} AddDomainReq
         */
        AddDomainReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddDomainReq)
                return object;
            var message = new $root.dto.AddDomainReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.AddDomainReq.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            return message;
        };

        /**
         * Creates a plain object from an AddDomainReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddDomainReq
         * @static
         * @param {dto.AddDomainReq} message AddDomainReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddDomainReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
                object.parentId = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            return object;
        };

        /**
         * Converts this AddDomainReq to JSON.
         * @function toJSON
         * @memberof dto.AddDomainReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddDomainReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddDomainReq
         * @function getTypeUrl
         * @memberof dto.AddDomainReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddDomainReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddDomainReq";
        };

        return AddDomainReq;
    })();

    dto.AddDomainRet = (function() {

        /**
         * Properties of an AddDomainRet.
         * @memberof dto
         * @interface IAddDomainRet
         * @property {string|null} [id] AddDomainRet id
         */

        /**
         * Constructs a new AddDomainRet.
         * @memberof dto
         * @classdesc Represents an AddDomainRet.
         * @implements IAddDomainRet
         * @constructor
         * @param {dto.IAddDomainRet=} [properties] Properties to set
         */
        function AddDomainRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddDomainRet id.
         * @member {string} id
         * @memberof dto.AddDomainRet
         * @instance
         */
        AddDomainRet.prototype.id = "";

        /**
         * Creates a new AddDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.AddDomainRet
         * @static
         * @param {dto.IAddDomainRet=} [properties] Properties to set
         * @returns {dto.AddDomainRet} AddDomainRet instance
         */
        AddDomainRet.create = function create(properties) {
            return new AddDomainRet(properties);
        };

        /**
         * Encodes the specified AddDomainRet message. Does not implicitly {@link dto.AddDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.AddDomainRet
         * @static
         * @param {dto.IAddDomainRet} message AddDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AddDomainRet message, length delimited. Does not implicitly {@link dto.AddDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddDomainRet
         * @static
         * @param {dto.IAddDomainRet} message AddDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddDomainRet} AddDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddDomainRet} AddDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddDomainRet message.
         * @function verify
         * @memberof dto.AddDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AddDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddDomainRet} AddDomainRet
         */
        AddDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddDomainRet)
                return object;
            var message = new $root.dto.AddDomainRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AddDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddDomainRet
         * @static
         * @param {dto.AddDomainRet} message AddDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AddDomainRet to JSON.
         * @function toJSON
         * @memberof dto.AddDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddDomainRet
         * @function getTypeUrl
         * @memberof dto.AddDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddDomainRet";
        };

        return AddDomainRet;
    })();

    dto.DomainListElem = (function() {

        /**
         * Properties of a DomainListElem.
         * @memberof dto
         * @interface IDomainListElem
         * @property {string|null} [id] DomainListElem id
         * @property {string|null} [name] DomainListElem name
         * @property {Array.<string>|null} [alias] DomainListElem alias
         * @property {number|null} [seq] DomainListElem seq
         * @property {string|null} [icon] DomainListElem icon
         * @property {string|null} [memo] DomainListElem memo
         * @property {string|null} [parentId] DomainListElem parentId
         * @property {string|null} [createdBy] DomainListElem createdBy
         * @property {string|null} [createdAt] DomainListElem createdAt
         * @property {string|null} [updatedBy] DomainListElem updatedBy
         * @property {string|null} [updatedAt] DomainListElem updatedAt
         * @property {string|null} [deletedBy] DomainListElem deletedBy
         * @property {string|null} [deletedAt] DomainListElem deletedAt
         * @property {Array.<dto.IDomainListElem>|null} [children] DomainListElem children
         */

        /**
         * Constructs a new DomainListElem.
         * @memberof dto
         * @classdesc Represents a DomainListElem.
         * @implements IDomainListElem
         * @constructor
         * @param {dto.IDomainListElem=} [properties] Properties to set
         */
        function DomainListElem(properties) {
            this.alias = [];
            this.children = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DomainListElem id.
         * @member {string} id
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.id = "";

        /**
         * DomainListElem name.
         * @member {string} name
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.name = "";

        /**
         * DomainListElem alias.
         * @member {Array.<string>} alias
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.alias = $util.emptyArray;

        /**
         * DomainListElem seq.
         * @member {number} seq
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.seq = 0;

        /**
         * DomainListElem icon.
         * @member {string} icon
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.icon = "";

        /**
         * DomainListElem memo.
         * @member {string} memo
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.memo = "";

        /**
         * DomainListElem parentId.
         * @member {string} parentId
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.parentId = "";

        /**
         * DomainListElem createdBy.
         * @member {string} createdBy
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.createdBy = "";

        /**
         * DomainListElem createdAt.
         * @member {string} createdAt
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.createdAt = "";

        /**
         * DomainListElem updatedBy.
         * @member {string} updatedBy
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.updatedBy = "";

        /**
         * DomainListElem updatedAt.
         * @member {string} updatedAt
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.updatedAt = "";

        /**
         * DomainListElem deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.deletedBy = null;

        /**
         * DomainListElem deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.deletedAt = null;

        /**
         * DomainListElem children.
         * @member {Array.<dto.IDomainListElem>} children
         * @memberof dto.DomainListElem
         * @instance
         */
        DomainListElem.prototype.children = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * DomainListElem _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.DomainListElem
         * @instance
         */
        Object.defineProperty(DomainListElem.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * DomainListElem _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.DomainListElem
         * @instance
         */
        Object.defineProperty(DomainListElem.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DomainListElem instance using the specified properties.
         * @function create
         * @memberof dto.DomainListElem
         * @static
         * @param {dto.IDomainListElem=} [properties] Properties to set
         * @returns {dto.DomainListElem} DomainListElem instance
         */
        DomainListElem.create = function create(properties) {
            return new DomainListElem(properties);
        };

        /**
         * Encodes the specified DomainListElem message. Does not implicitly {@link dto.DomainListElem.verify|verify} messages.
         * @function encode
         * @memberof dto.DomainListElem
         * @static
         * @param {dto.IDomainListElem} message DomainListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DomainListElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.parentId);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.dto.DomainListElem.encode(message.children[i], writer.uint32(/* id 20006, wireType 2 =*/160050).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DomainListElem message, length delimited. Does not implicitly {@link dto.DomainListElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DomainListElem
         * @static
         * @param {dto.IDomainListElem} message DomainListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DomainListElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DomainListElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DomainListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DomainListElem} DomainListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DomainListElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DomainListElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 4: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 5: {
                        message.icon = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        message.parentId = reader.string();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                case 20006: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.dto.DomainListElem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DomainListElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DomainListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DomainListElem} DomainListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DomainListElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DomainListElem message.
         * @function verify
         * @memberof dto.DomainListElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DomainListElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.dto.DomainListElem.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DomainListElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DomainListElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DomainListElem} DomainListElem
         */
        DomainListElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DomainListElem)
                return object;
            var message = new $root.dto.DomainListElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.DomainListElem.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".dto.DomainListElem.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".dto.DomainListElem.children: object expected");
                    message.children[i] = $root.dto.DomainListElem.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DomainListElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DomainListElem
         * @static
         * @param {dto.DomainListElem} message DomainListElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DomainListElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.alias = [];
                object.children = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
                object.parentId = "";
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.dto.DomainListElem.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this DomainListElem to JSON.
         * @function toJSON
         * @memberof dto.DomainListElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DomainListElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DomainListElem
         * @function getTypeUrl
         * @memberof dto.DomainListElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DomainListElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.DomainListElem";
        };

        return DomainListElem;
    })();

    dto.ListDomainRet = (function() {

        /**
         * Properties of a ListDomainRet.
         * @memberof dto
         * @interface IListDomainRet
         * @property {Array.<dto.IDomainListElem>|null} [list] ListDomainRet list
         * @property {number|Long|null} [total] ListDomainRet total
         */

        /**
         * Constructs a new ListDomainRet.
         * @memberof dto
         * @classdesc Represents a ListDomainRet.
         * @implements IListDomainRet
         * @constructor
         * @param {dto.IListDomainRet=} [properties] Properties to set
         */
        function ListDomainRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListDomainRet list.
         * @member {Array.<dto.IDomainListElem>} list
         * @memberof dto.ListDomainRet
         * @instance
         */
        ListDomainRet.prototype.list = $util.emptyArray;

        /**
         * ListDomainRet total.
         * @member {number|Long} total
         * @memberof dto.ListDomainRet
         * @instance
         */
        ListDomainRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ListDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.ListDomainRet
         * @static
         * @param {dto.IListDomainRet=} [properties] Properties to set
         * @returns {dto.ListDomainRet} ListDomainRet instance
         */
        ListDomainRet.create = function create(properties) {
            return new ListDomainRet(properties);
        };

        /**
         * Encodes the specified ListDomainRet message. Does not implicitly {@link dto.ListDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ListDomainRet
         * @static
         * @param {dto.IListDomainRet} message ListDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.DomainListElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified ListDomainRet message, length delimited. Does not implicitly {@link dto.ListDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListDomainRet
         * @static
         * @param {dto.IListDomainRet} message ListDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListDomainRet} ListDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.DomainListElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListDomainRet} ListDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListDomainRet message.
         * @function verify
         * @memberof dto.ListDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.DomainListElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a ListDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListDomainRet} ListDomainRet
         */
        ListDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListDomainRet)
                return object;
            var message = new $root.dto.ListDomainRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.ListDomainRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.ListDomainRet.list: object expected");
                    message.list[i] = $root.dto.DomainListElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ListDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListDomainRet
         * @static
         * @param {dto.ListDomainRet} message ListDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.DomainListElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this ListDomainRet to JSON.
         * @function toJSON
         * @memberof dto.ListDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListDomainRet
         * @function getTypeUrl
         * @memberof dto.ListDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListDomainRet";
        };

        return ListDomainRet;
    })();

    dto.ProfileDomainRet = (function() {

        /**
         * Properties of a ProfileDomainRet.
         * @memberof dto
         * @interface IProfileDomainRet
         * @property {string|null} [id] ProfileDomainRet id
         * @property {string|null} [name] ProfileDomainRet name
         * @property {Array.<string>|null} [alias] ProfileDomainRet alias
         * @property {number|null} [seq] ProfileDomainRet seq
         * @property {string|null} [icon] ProfileDomainRet icon
         * @property {string|null} [memo] ProfileDomainRet memo
         * @property {string|null} [parentId] ProfileDomainRet parentId
         * @property {string|null} [createdBy] ProfileDomainRet createdBy
         * @property {string|null} [createdAt] ProfileDomainRet createdAt
         * @property {string|null} [updatedBy] ProfileDomainRet updatedBy
         * @property {string|null} [updatedAt] ProfileDomainRet updatedAt
         * @property {string|null} [deletedBy] ProfileDomainRet deletedBy
         * @property {string|null} [deletedAt] ProfileDomainRet deletedAt
         */

        /**
         * Constructs a new ProfileDomainRet.
         * @memberof dto
         * @classdesc Represents a ProfileDomainRet.
         * @implements IProfileDomainRet
         * @constructor
         * @param {dto.IProfileDomainRet=} [properties] Properties to set
         */
        function ProfileDomainRet(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileDomainRet id.
         * @member {string} id
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.id = "";

        /**
         * ProfileDomainRet name.
         * @member {string} name
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.name = "";

        /**
         * ProfileDomainRet alias.
         * @member {Array.<string>} alias
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.alias = $util.emptyArray;

        /**
         * ProfileDomainRet seq.
         * @member {number} seq
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.seq = 0;

        /**
         * ProfileDomainRet icon.
         * @member {string} icon
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.icon = "";

        /**
         * ProfileDomainRet memo.
         * @member {string} memo
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.memo = "";

        /**
         * ProfileDomainRet parentId.
         * @member {string} parentId
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.parentId = "";

        /**
         * ProfileDomainRet createdBy.
         * @member {string} createdBy
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.createdBy = "";

        /**
         * ProfileDomainRet createdAt.
         * @member {string} createdAt
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.createdAt = "";

        /**
         * ProfileDomainRet updatedBy.
         * @member {string} updatedBy
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.updatedBy = "";

        /**
         * ProfileDomainRet updatedAt.
         * @member {string} updatedAt
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.updatedAt = "";

        /**
         * ProfileDomainRet deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.deletedBy = null;

        /**
         * ProfileDomainRet deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        ProfileDomainRet.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ProfileDomainRet _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        Object.defineProperty(ProfileDomainRet.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ProfileDomainRet _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.ProfileDomainRet
         * @instance
         */
        Object.defineProperty(ProfileDomainRet.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProfileDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {dto.IProfileDomainRet=} [properties] Properties to set
         * @returns {dto.ProfileDomainRet} ProfileDomainRet instance
         */
        ProfileDomainRet.create = function create(properties) {
            return new ProfileDomainRet(properties);
        };

        /**
         * Encodes the specified ProfileDomainRet message. Does not implicitly {@link dto.ProfileDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {dto.IProfileDomainRet} message ProfileDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.parentId);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified ProfileDomainRet message, length delimited. Does not implicitly {@link dto.ProfileDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {dto.IProfileDomainRet} message ProfileDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProfileDomainRet} ProfileDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProfileDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 4: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 5: {
                        message.icon = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        message.parentId = reader.string();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProfileDomainRet} ProfileDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileDomainRet message.
         * @function verify
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a ProfileDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProfileDomainRet} ProfileDomainRet
         */
        ProfileDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProfileDomainRet)
                return object;
            var message = new $root.dto.ProfileDomainRet();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.ProfileDomainRet.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a ProfileDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {dto.ProfileDomainRet} message ProfileDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
                object.parentId = "";
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this ProfileDomainRet to JSON.
         * @function toJSON
         * @memberof dto.ProfileDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfileDomainRet
         * @function getTypeUrl
         * @memberof dto.ProfileDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfileDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ProfileDomainRet";
        };

        return ProfileDomainRet;
    })();

    dto.EditDomainReq = (function() {

        /**
         * Properties of an EditDomainReq.
         * @memberof dto
         * @interface IEditDomainReq
         * @property {string|null} [name] EditDomainReq name
         * @property {Array.<string>|null} [alias] EditDomainReq alias
         * @property {number|null} [seq] EditDomainReq seq
         * @property {string|null} [icon] EditDomainReq icon
         * @property {string|null} [memo] EditDomainReq memo
         * @property {string|null} [parentId] EditDomainReq parentId
         */

        /**
         * Constructs a new EditDomainReq.
         * @memberof dto
         * @classdesc Represents an EditDomainReq.
         * @implements IEditDomainReq
         * @constructor
         * @param {dto.IEditDomainReq=} [properties] Properties to set
         */
        function EditDomainReq(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditDomainReq name.
         * @member {string} name
         * @memberof dto.EditDomainReq
         * @instance
         */
        EditDomainReq.prototype.name = "";

        /**
         * EditDomainReq alias.
         * @member {Array.<string>} alias
         * @memberof dto.EditDomainReq
         * @instance
         */
        EditDomainReq.prototype.alias = $util.emptyArray;

        /**
         * EditDomainReq seq.
         * @member {number} seq
         * @memberof dto.EditDomainReq
         * @instance
         */
        EditDomainReq.prototype.seq = 0;

        /**
         * EditDomainReq icon.
         * @member {string} icon
         * @memberof dto.EditDomainReq
         * @instance
         */
        EditDomainReq.prototype.icon = "";

        /**
         * EditDomainReq memo.
         * @member {string} memo
         * @memberof dto.EditDomainReq
         * @instance
         */
        EditDomainReq.prototype.memo = "";

        /**
         * EditDomainReq parentId.
         * @member {string} parentId
         * @memberof dto.EditDomainReq
         * @instance
         */
        EditDomainReq.prototype.parentId = "";

        /**
         * Creates a new EditDomainReq instance using the specified properties.
         * @function create
         * @memberof dto.EditDomainReq
         * @static
         * @param {dto.IEditDomainReq=} [properties] Properties to set
         * @returns {dto.EditDomainReq} EditDomainReq instance
         */
        EditDomainReq.create = function create(properties) {
            return new EditDomainReq(properties);
        };

        /**
         * Encodes the specified EditDomainReq message. Does not implicitly {@link dto.EditDomainReq.verify|verify} messages.
         * @function encode
         * @memberof dto.EditDomainReq
         * @static
         * @param {dto.IEditDomainReq} message EditDomainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditDomainReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.memo);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.parentId);
            return writer;
        };

        /**
         * Encodes the specified EditDomainReq message, length delimited. Does not implicitly {@link dto.EditDomainReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditDomainReq
         * @static
         * @param {dto.IEditDomainReq} message EditDomainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditDomainReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditDomainReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditDomainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditDomainReq} EditDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditDomainReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditDomainReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.memo = reader.string();
                        break;
                    }
                case 6: {
                        message.parentId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditDomainReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditDomainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditDomainReq} EditDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditDomainReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditDomainReq message.
         * @function verify
         * @memberof dto.EditDomainReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditDomainReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            return null;
        };

        /**
         * Creates an EditDomainReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditDomainReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditDomainReq} EditDomainReq
         */
        EditDomainReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditDomainReq)
                return object;
            var message = new $root.dto.EditDomainReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.EditDomainReq.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            return message;
        };

        /**
         * Creates a plain object from an EditDomainReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditDomainReq
         * @static
         * @param {dto.EditDomainReq} message EditDomainReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditDomainReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
                object.parentId = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            return object;
        };

        /**
         * Converts this EditDomainReq to JSON.
         * @function toJSON
         * @memberof dto.EditDomainReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditDomainReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditDomainReq
         * @function getTypeUrl
         * @memberof dto.EditDomainReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditDomainReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditDomainReq";
        };

        return EditDomainReq;
    })();

    dto.EditDomainRet = (function() {

        /**
         * Properties of an EditDomainRet.
         * @memberof dto
         * @interface IEditDomainRet
         * @property {string|null} [id] EditDomainRet id
         */

        /**
         * Constructs a new EditDomainRet.
         * @memberof dto
         * @classdesc Represents an EditDomainRet.
         * @implements IEditDomainRet
         * @constructor
         * @param {dto.IEditDomainRet=} [properties] Properties to set
         */
        function EditDomainRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditDomainRet id.
         * @member {string} id
         * @memberof dto.EditDomainRet
         * @instance
         */
        EditDomainRet.prototype.id = "";

        /**
         * Creates a new EditDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.EditDomainRet
         * @static
         * @param {dto.IEditDomainRet=} [properties] Properties to set
         * @returns {dto.EditDomainRet} EditDomainRet instance
         */
        EditDomainRet.create = function create(properties) {
            return new EditDomainRet(properties);
        };

        /**
         * Encodes the specified EditDomainRet message. Does not implicitly {@link dto.EditDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EditDomainRet
         * @static
         * @param {dto.IEditDomainRet} message EditDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EditDomainRet message, length delimited. Does not implicitly {@link dto.EditDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditDomainRet
         * @static
         * @param {dto.IEditDomainRet} message EditDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditDomainRet} EditDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditDomainRet} EditDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditDomainRet message.
         * @function verify
         * @memberof dto.EditDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EditDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditDomainRet} EditDomainRet
         */
        EditDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditDomainRet)
                return object;
            var message = new $root.dto.EditDomainRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EditDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditDomainRet
         * @static
         * @param {dto.EditDomainRet} message EditDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EditDomainRet to JSON.
         * @function toJSON
         * @memberof dto.EditDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditDomainRet
         * @function getTypeUrl
         * @memberof dto.EditDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditDomainRet";
        };

        return EditDomainRet;
    })();

    dto.EnableDomainRet = (function() {

        /**
         * Properties of an EnableDomainRet.
         * @memberof dto
         * @interface IEnableDomainRet
         * @property {string|null} [id] EnableDomainRet id
         */

        /**
         * Constructs a new EnableDomainRet.
         * @memberof dto
         * @classdesc Represents an EnableDomainRet.
         * @implements IEnableDomainRet
         * @constructor
         * @param {dto.IEnableDomainRet=} [properties] Properties to set
         */
        function EnableDomainRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnableDomainRet id.
         * @member {string} id
         * @memberof dto.EnableDomainRet
         * @instance
         */
        EnableDomainRet.prototype.id = "";

        /**
         * Creates a new EnableDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.EnableDomainRet
         * @static
         * @param {dto.IEnableDomainRet=} [properties] Properties to set
         * @returns {dto.EnableDomainRet} EnableDomainRet instance
         */
        EnableDomainRet.create = function create(properties) {
            return new EnableDomainRet(properties);
        };

        /**
         * Encodes the specified EnableDomainRet message. Does not implicitly {@link dto.EnableDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EnableDomainRet
         * @static
         * @param {dto.IEnableDomainRet} message EnableDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EnableDomainRet message, length delimited. Does not implicitly {@link dto.EnableDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EnableDomainRet
         * @static
         * @param {dto.IEnableDomainRet} message EnableDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnableDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EnableDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EnableDomainRet} EnableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EnableDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnableDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EnableDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EnableDomainRet} EnableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnableDomainRet message.
         * @function verify
         * @memberof dto.EnableDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnableDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EnableDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EnableDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EnableDomainRet} EnableDomainRet
         */
        EnableDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EnableDomainRet)
                return object;
            var message = new $root.dto.EnableDomainRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EnableDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EnableDomainRet
         * @static
         * @param {dto.EnableDomainRet} message EnableDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnableDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EnableDomainRet to JSON.
         * @function toJSON
         * @memberof dto.EnableDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnableDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnableDomainRet
         * @function getTypeUrl
         * @memberof dto.EnableDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnableDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EnableDomainRet";
        };

        return EnableDomainRet;
    })();

    dto.DisableDomainRet = (function() {

        /**
         * Properties of a DisableDomainRet.
         * @memberof dto
         * @interface IDisableDomainRet
         * @property {string|null} [id] DisableDomainRet id
         */

        /**
         * Constructs a new DisableDomainRet.
         * @memberof dto
         * @classdesc Represents a DisableDomainRet.
         * @implements IDisableDomainRet
         * @constructor
         * @param {dto.IDisableDomainRet=} [properties] Properties to set
         */
        function DisableDomainRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisableDomainRet id.
         * @member {string} id
         * @memberof dto.DisableDomainRet
         * @instance
         */
        DisableDomainRet.prototype.id = "";

        /**
         * Creates a new DisableDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.DisableDomainRet
         * @static
         * @param {dto.IDisableDomainRet=} [properties] Properties to set
         * @returns {dto.DisableDomainRet} DisableDomainRet instance
         */
        DisableDomainRet.create = function create(properties) {
            return new DisableDomainRet(properties);
        };

        /**
         * Encodes the specified DisableDomainRet message. Does not implicitly {@link dto.DisableDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.DisableDomainRet
         * @static
         * @param {dto.IDisableDomainRet} message DisableDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DisableDomainRet message, length delimited. Does not implicitly {@link dto.DisableDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DisableDomainRet
         * @static
         * @param {dto.IDisableDomainRet} message DisableDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisableDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DisableDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DisableDomainRet} DisableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DisableDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisableDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DisableDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DisableDomainRet} DisableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisableDomainRet message.
         * @function verify
         * @memberof dto.DisableDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisableDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DisableDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DisableDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DisableDomainRet} DisableDomainRet
         */
        DisableDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DisableDomainRet)
                return object;
            var message = new $root.dto.DisableDomainRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DisableDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DisableDomainRet
         * @static
         * @param {dto.DisableDomainRet} message DisableDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisableDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DisableDomainRet to JSON.
         * @function toJSON
         * @memberof dto.DisableDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisableDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DisableDomainRet
         * @function getTypeUrl
         * @memberof dto.DisableDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DisableDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.DisableDomainRet";
        };

        return DisableDomainRet;
    })();

    dto.RemoveDomainRet = (function() {

        /**
         * Properties of a RemoveDomainRet.
         * @memberof dto
         * @interface IRemoveDomainRet
         * @property {string|null} [id] RemoveDomainRet id
         */

        /**
         * Constructs a new RemoveDomainRet.
         * @memberof dto
         * @classdesc Represents a RemoveDomainRet.
         * @implements IRemoveDomainRet
         * @constructor
         * @param {dto.IRemoveDomainRet=} [properties] Properties to set
         */
        function RemoveDomainRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveDomainRet id.
         * @member {string} id
         * @memberof dto.RemoveDomainRet
         * @instance
         */
        RemoveDomainRet.prototype.id = "";

        /**
         * Creates a new RemoveDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {dto.IRemoveDomainRet=} [properties] Properties to set
         * @returns {dto.RemoveDomainRet} RemoveDomainRet instance
         */
        RemoveDomainRet.create = function create(properties) {
            return new RemoveDomainRet(properties);
        };

        /**
         * Encodes the specified RemoveDomainRet message. Does not implicitly {@link dto.RemoveDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {dto.IRemoveDomainRet} message RemoveDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified RemoveDomainRet message, length delimited. Does not implicitly {@link dto.RemoveDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {dto.IRemoveDomainRet} message RemoveDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RemoveDomainRet} RemoveDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RemoveDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RemoveDomainRet} RemoveDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveDomainRet message.
         * @function verify
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a RemoveDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RemoveDomainRet} RemoveDomainRet
         */
        RemoveDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RemoveDomainRet)
                return object;
            var message = new $root.dto.RemoveDomainRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a RemoveDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {dto.RemoveDomainRet} message RemoveDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this RemoveDomainRet to JSON.
         * @function toJSON
         * @memberof dto.RemoveDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveDomainRet
         * @function getTypeUrl
         * @memberof dto.RemoveDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RemoveDomainRet";
        };

        return RemoveDomainRet;
    })();

    dto.AddMenuReq = (function() {

        /**
         * Properties of an AddMenuReq.
         * @memberof dto
         * @interface IAddMenuReq
         * @property {string|null} [name] AddMenuReq name
         * @property {number|null} [seq] AddMenuReq seq
         * @property {string|null} [icon] AddMenuReq icon
         * @property {string|null} [route] AddMenuReq route
         * @property {string|null} [memo] AddMenuReq memo
         * @property {boolean|null} [show] AddMenuReq show
         * @property {string|null} [parentId] AddMenuReq parentId
         * @property {boolean|null} [isItem] AddMenuReq isItem
         */

        /**
         * Constructs a new AddMenuReq.
         * @memberof dto
         * @classdesc Represents an AddMenuReq.
         * @implements IAddMenuReq
         * @constructor
         * @param {dto.IAddMenuReq=} [properties] Properties to set
         */
        function AddMenuReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddMenuReq name.
         * @member {string} name
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.name = "";

        /**
         * AddMenuReq seq.
         * @member {number} seq
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.seq = 0;

        /**
         * AddMenuReq icon.
         * @member {string} icon
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.icon = "";

        /**
         * AddMenuReq route.
         * @member {string} route
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.route = "";

        /**
         * AddMenuReq memo.
         * @member {string} memo
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.memo = "";

        /**
         * AddMenuReq show.
         * @member {boolean} show
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.show = false;

        /**
         * AddMenuReq parentId.
         * @member {string} parentId
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.parentId = "";

        /**
         * AddMenuReq isItem.
         * @member {boolean} isItem
         * @memberof dto.AddMenuReq
         * @instance
         */
        AddMenuReq.prototype.isItem = false;

        /**
         * Creates a new AddMenuReq instance using the specified properties.
         * @function create
         * @memberof dto.AddMenuReq
         * @static
         * @param {dto.IAddMenuReq=} [properties] Properties to set
         * @returns {dto.AddMenuReq} AddMenuReq instance
         */
        AddMenuReq.create = function create(properties) {
            return new AddMenuReq(properties);
        };

        /**
         * Encodes the specified AddMenuReq message. Does not implicitly {@link dto.AddMenuReq.verify|verify} messages.
         * @function encode
         * @memberof dto.AddMenuReq
         * @static
         * @param {dto.IAddMenuReq} message AddMenuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.route);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.memo);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.show);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.parentId);
            if (message.isItem != null && Object.hasOwnProperty.call(message, "isItem"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isItem);
            return writer;
        };

        /**
         * Encodes the specified AddMenuReq message, length delimited. Does not implicitly {@link dto.AddMenuReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddMenuReq
         * @static
         * @param {dto.IAddMenuReq} message AddMenuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddMenuReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddMenuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddMenuReq} AddMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddMenuReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 3: {
                        message.icon = reader.string();
                        break;
                    }
                case 4: {
                        message.route = reader.string();
                        break;
                    }
                case 5: {
                        message.memo = reader.string();
                        break;
                    }
                case 6: {
                        message.show = reader.bool();
                        break;
                    }
                case 7: {
                        message.parentId = reader.string();
                        break;
                    }
                case 8: {
                        message.isItem = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddMenuReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddMenuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddMenuReq} AddMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddMenuReq message.
         * @function verify
         * @memberof dto.AddMenuReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddMenuReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                if (typeof message.isItem !== "boolean")
                    return "isItem: boolean expected";
            return null;
        };

        /**
         * Creates an AddMenuReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddMenuReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddMenuReq} AddMenuReq
         */
        AddMenuReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddMenuReq)
                return object;
            var message = new $root.dto.AddMenuReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.route != null)
                message.route = String(object.route);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.show != null)
                message.show = Boolean(object.show);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.isItem != null)
                message.isItem = Boolean(object.isItem);
            return message;
        };

        /**
         * Creates a plain object from an AddMenuReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddMenuReq
         * @static
         * @param {dto.AddMenuReq} message AddMenuReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddMenuReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.route = "";
                object.memo = "";
                object.show = false;
                object.parentId = "";
                object.isItem = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                object.isItem = message.isItem;
            return object;
        };

        /**
         * Converts this AddMenuReq to JSON.
         * @function toJSON
         * @memberof dto.AddMenuReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddMenuReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddMenuReq
         * @function getTypeUrl
         * @memberof dto.AddMenuReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddMenuReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddMenuReq";
        };

        return AddMenuReq;
    })();

    dto.AddMenuRet = (function() {

        /**
         * Properties of an AddMenuRet.
         * @memberof dto
         * @interface IAddMenuRet
         * @property {string|null} [id] AddMenuRet id
         */

        /**
         * Constructs a new AddMenuRet.
         * @memberof dto
         * @classdesc Represents an AddMenuRet.
         * @implements IAddMenuRet
         * @constructor
         * @param {dto.IAddMenuRet=} [properties] Properties to set
         */
        function AddMenuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddMenuRet id.
         * @member {string} id
         * @memberof dto.AddMenuRet
         * @instance
         */
        AddMenuRet.prototype.id = "";

        /**
         * Creates a new AddMenuRet instance using the specified properties.
         * @function create
         * @memberof dto.AddMenuRet
         * @static
         * @param {dto.IAddMenuRet=} [properties] Properties to set
         * @returns {dto.AddMenuRet} AddMenuRet instance
         */
        AddMenuRet.create = function create(properties) {
            return new AddMenuRet(properties);
        };

        /**
         * Encodes the specified AddMenuRet message. Does not implicitly {@link dto.AddMenuRet.verify|verify} messages.
         * @function encode
         * @memberof dto.AddMenuRet
         * @static
         * @param {dto.IAddMenuRet} message AddMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AddMenuRet message, length delimited. Does not implicitly {@link dto.AddMenuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddMenuRet
         * @static
         * @param {dto.IAddMenuRet} message AddMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddMenuRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddMenuRet} AddMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddMenuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddMenuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddMenuRet} AddMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddMenuRet message.
         * @function verify
         * @memberof dto.AddMenuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddMenuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AddMenuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddMenuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddMenuRet} AddMenuRet
         */
        AddMenuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddMenuRet)
                return object;
            var message = new $root.dto.AddMenuRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AddMenuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddMenuRet
         * @static
         * @param {dto.AddMenuRet} message AddMenuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddMenuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AddMenuRet to JSON.
         * @function toJSON
         * @memberof dto.AddMenuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddMenuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddMenuRet
         * @function getTypeUrl
         * @memberof dto.AddMenuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddMenuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddMenuRet";
        };

        return AddMenuRet;
    })();

    dto.MenuListElem = (function() {

        /**
         * Properties of a MenuListElem.
         * @memberof dto
         * @interface IMenuListElem
         * @property {string|null} [id] MenuListElem id
         * @property {string|null} [name] MenuListElem name
         * @property {number|null} [seq] MenuListElem seq
         * @property {string|null} [icon] MenuListElem icon
         * @property {string|null} [route] MenuListElem route
         * @property {string|null} [memo] MenuListElem memo
         * @property {string|null} [parentId] MenuListElem parentId
         * @property {boolean|null} [show] MenuListElem show
         * @property {boolean|null} [isItem] MenuListElem isItem
         * @property {string|null} [createdBy] MenuListElem createdBy
         * @property {string|null} [createdAt] MenuListElem createdAt
         * @property {string|null} [updatedBy] MenuListElem updatedBy
         * @property {string|null} [updatedAt] MenuListElem updatedAt
         * @property {string|null} [deletedBy] MenuListElem deletedBy
         * @property {string|null} [deletedAt] MenuListElem deletedAt
         * @property {Array.<dto.IMenuListElem>|null} [children] MenuListElem children
         */

        /**
         * Constructs a new MenuListElem.
         * @memberof dto
         * @classdesc Represents a MenuListElem.
         * @implements IMenuListElem
         * @constructor
         * @param {dto.IMenuListElem=} [properties] Properties to set
         */
        function MenuListElem(properties) {
            this.children = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MenuListElem id.
         * @member {string} id
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.id = "";

        /**
         * MenuListElem name.
         * @member {string} name
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.name = "";

        /**
         * MenuListElem seq.
         * @member {number} seq
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.seq = 0;

        /**
         * MenuListElem icon.
         * @member {string} icon
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.icon = "";

        /**
         * MenuListElem route.
         * @member {string} route
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.route = "";

        /**
         * MenuListElem memo.
         * @member {string} memo
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.memo = "";

        /**
         * MenuListElem parentId.
         * @member {string} parentId
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.parentId = "";

        /**
         * MenuListElem show.
         * @member {boolean} show
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.show = false;

        /**
         * MenuListElem isItem.
         * @member {boolean} isItem
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.isItem = false;

        /**
         * MenuListElem createdBy.
         * @member {string} createdBy
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.createdBy = "";

        /**
         * MenuListElem createdAt.
         * @member {string} createdAt
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.createdAt = "";

        /**
         * MenuListElem updatedBy.
         * @member {string} updatedBy
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.updatedBy = "";

        /**
         * MenuListElem updatedAt.
         * @member {string} updatedAt
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.updatedAt = "";

        /**
         * MenuListElem deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.deletedBy = null;

        /**
         * MenuListElem deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.deletedAt = null;

        /**
         * MenuListElem children.
         * @member {Array.<dto.IMenuListElem>} children
         * @memberof dto.MenuListElem
         * @instance
         */
        MenuListElem.prototype.children = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * MenuListElem _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.MenuListElem
         * @instance
         */
        Object.defineProperty(MenuListElem.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * MenuListElem _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.MenuListElem
         * @instance
         */
        Object.defineProperty(MenuListElem.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MenuListElem instance using the specified properties.
         * @function create
         * @memberof dto.MenuListElem
         * @static
         * @param {dto.IMenuListElem=} [properties] Properties to set
         * @returns {dto.MenuListElem} MenuListElem instance
         */
        MenuListElem.create = function create(properties) {
            return new MenuListElem(properties);
        };

        /**
         * Encodes the specified MenuListElem message. Does not implicitly {@link dto.MenuListElem.verify|verify} messages.
         * @function encode
         * @memberof dto.MenuListElem
         * @static
         * @param {dto.IMenuListElem} message MenuListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuListElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.route);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.parentId);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.show);
            if (message.isItem != null && Object.hasOwnProperty.call(message, "isItem"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isItem);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.dto.MenuListElem.encode(message.children[i], writer.uint32(/* id 20006, wireType 2 =*/160050).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MenuListElem message, length delimited. Does not implicitly {@link dto.MenuListElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.MenuListElem
         * @static
         * @param {dto.IMenuListElem} message MenuListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuListElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MenuListElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.MenuListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.MenuListElem} MenuListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuListElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.MenuListElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.route = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        message.parentId = reader.string();
                        break;
                    }
                case 8: {
                        message.show = reader.bool();
                        break;
                    }
                case 9: {
                        message.isItem = reader.bool();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                case 20006: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.dto.MenuListElem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MenuListElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.MenuListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.MenuListElem} MenuListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuListElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MenuListElem message.
         * @function verify
         * @memberof dto.MenuListElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MenuListElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                if (typeof message.isItem !== "boolean")
                    return "isItem: boolean expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.dto.MenuListElem.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MenuListElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.MenuListElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.MenuListElem} MenuListElem
         */
        MenuListElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.MenuListElem)
                return object;
            var message = new $root.dto.MenuListElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.route != null)
                message.route = String(object.route);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.show != null)
                message.show = Boolean(object.show);
            if (object.isItem != null)
                message.isItem = Boolean(object.isItem);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".dto.MenuListElem.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".dto.MenuListElem.children: object expected");
                    message.children[i] = $root.dto.MenuListElem.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MenuListElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.MenuListElem
         * @static
         * @param {dto.MenuListElem} message MenuListElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MenuListElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.route = "";
                object.memo = "";
                object.parentId = "";
                object.show = false;
                object.isItem = false;
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                object.isItem = message.isItem;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.dto.MenuListElem.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this MenuListElem to JSON.
         * @function toJSON
         * @memberof dto.MenuListElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MenuListElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MenuListElem
         * @function getTypeUrl
         * @memberof dto.MenuListElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MenuListElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.MenuListElem";
        };

        return MenuListElem;
    })();

    dto.ListMenuRet = (function() {

        /**
         * Properties of a ListMenuRet.
         * @memberof dto
         * @interface IListMenuRet
         * @property {Array.<dto.IMenuListElem>|null} [list] ListMenuRet list
         * @property {number|Long|null} [total] ListMenuRet total
         */

        /**
         * Constructs a new ListMenuRet.
         * @memberof dto
         * @classdesc Represents a ListMenuRet.
         * @implements IListMenuRet
         * @constructor
         * @param {dto.IListMenuRet=} [properties] Properties to set
         */
        function ListMenuRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListMenuRet list.
         * @member {Array.<dto.IMenuListElem>} list
         * @memberof dto.ListMenuRet
         * @instance
         */
        ListMenuRet.prototype.list = $util.emptyArray;

        /**
         * ListMenuRet total.
         * @member {number|Long} total
         * @memberof dto.ListMenuRet
         * @instance
         */
        ListMenuRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ListMenuRet instance using the specified properties.
         * @function create
         * @memberof dto.ListMenuRet
         * @static
         * @param {dto.IListMenuRet=} [properties] Properties to set
         * @returns {dto.ListMenuRet} ListMenuRet instance
         */
        ListMenuRet.create = function create(properties) {
            return new ListMenuRet(properties);
        };

        /**
         * Encodes the specified ListMenuRet message. Does not implicitly {@link dto.ListMenuRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ListMenuRet
         * @static
         * @param {dto.IListMenuRet} message ListMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMenuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.MenuListElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified ListMenuRet message, length delimited. Does not implicitly {@link dto.ListMenuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListMenuRet
         * @static
         * @param {dto.IListMenuRet} message ListMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMenuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListMenuRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListMenuRet} ListMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMenuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListMenuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.MenuListElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListMenuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListMenuRet} ListMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMenuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListMenuRet message.
         * @function verify
         * @memberof dto.ListMenuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListMenuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.MenuListElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a ListMenuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListMenuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListMenuRet} ListMenuRet
         */
        ListMenuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListMenuRet)
                return object;
            var message = new $root.dto.ListMenuRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.ListMenuRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.ListMenuRet.list: object expected");
                    message.list[i] = $root.dto.MenuListElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ListMenuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListMenuRet
         * @static
         * @param {dto.ListMenuRet} message ListMenuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListMenuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.MenuListElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this ListMenuRet to JSON.
         * @function toJSON
         * @memberof dto.ListMenuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListMenuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListMenuRet
         * @function getTypeUrl
         * @memberof dto.ListMenuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListMenuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListMenuRet";
        };

        return ListMenuRet;
    })();

    dto.ProfileMenuRet = (function() {

        /**
         * Properties of a ProfileMenuRet.
         * @memberof dto
         * @interface IProfileMenuRet
         * @property {string|null} [id] ProfileMenuRet id
         * @property {string|null} [name] ProfileMenuRet name
         * @property {number|null} [seq] ProfileMenuRet seq
         * @property {string|null} [icon] ProfileMenuRet icon
         * @property {string|null} [route] ProfileMenuRet route
         * @property {string|null} [memo] ProfileMenuRet memo
         * @property {string|null} [parentId] ProfileMenuRet parentId
         * @property {boolean|null} [show] ProfileMenuRet show
         * @property {boolean|null} [isItem] ProfileMenuRet isItem
         * @property {string|null} [createdBy] ProfileMenuRet createdBy
         * @property {string|null} [createdAt] ProfileMenuRet createdAt
         * @property {string|null} [updatedBy] ProfileMenuRet updatedBy
         * @property {string|null} [updatedAt] ProfileMenuRet updatedAt
         * @property {string|null} [deletedBy] ProfileMenuRet deletedBy
         * @property {string|null} [deletedAt] ProfileMenuRet deletedAt
         */

        /**
         * Constructs a new ProfileMenuRet.
         * @memberof dto
         * @classdesc Represents a ProfileMenuRet.
         * @implements IProfileMenuRet
         * @constructor
         * @param {dto.IProfileMenuRet=} [properties] Properties to set
         */
        function ProfileMenuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileMenuRet id.
         * @member {string} id
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.id = "";

        /**
         * ProfileMenuRet name.
         * @member {string} name
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.name = "";

        /**
         * ProfileMenuRet seq.
         * @member {number} seq
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.seq = 0;

        /**
         * ProfileMenuRet icon.
         * @member {string} icon
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.icon = "";

        /**
         * ProfileMenuRet route.
         * @member {string} route
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.route = "";

        /**
         * ProfileMenuRet memo.
         * @member {string} memo
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.memo = "";

        /**
         * ProfileMenuRet parentId.
         * @member {string} parentId
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.parentId = "";

        /**
         * ProfileMenuRet show.
         * @member {boolean} show
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.show = false;

        /**
         * ProfileMenuRet isItem.
         * @member {boolean} isItem
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.isItem = false;

        /**
         * ProfileMenuRet createdBy.
         * @member {string} createdBy
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.createdBy = "";

        /**
         * ProfileMenuRet createdAt.
         * @member {string} createdAt
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.createdAt = "";

        /**
         * ProfileMenuRet updatedBy.
         * @member {string} updatedBy
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.updatedBy = "";

        /**
         * ProfileMenuRet updatedAt.
         * @member {string} updatedAt
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.updatedAt = "";

        /**
         * ProfileMenuRet deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.deletedBy = null;

        /**
         * ProfileMenuRet deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        ProfileMenuRet.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ProfileMenuRet _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        Object.defineProperty(ProfileMenuRet.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ProfileMenuRet _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.ProfileMenuRet
         * @instance
         */
        Object.defineProperty(ProfileMenuRet.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProfileMenuRet instance using the specified properties.
         * @function create
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {dto.IProfileMenuRet=} [properties] Properties to set
         * @returns {dto.ProfileMenuRet} ProfileMenuRet instance
         */
        ProfileMenuRet.create = function create(properties) {
            return new ProfileMenuRet(properties);
        };

        /**
         * Encodes the specified ProfileMenuRet message. Does not implicitly {@link dto.ProfileMenuRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {dto.IProfileMenuRet} message ProfileMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileMenuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.route);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.parentId);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.show);
            if (message.isItem != null && Object.hasOwnProperty.call(message, "isItem"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isItem);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified ProfileMenuRet message, length delimited. Does not implicitly {@link dto.ProfileMenuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {dto.IProfileMenuRet} message ProfileMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileMenuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileMenuRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProfileMenuRet} ProfileMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileMenuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProfileMenuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.route = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        message.parentId = reader.string();
                        break;
                    }
                case 8: {
                        message.show = reader.bool();
                        break;
                    }
                case 9: {
                        message.isItem = reader.bool();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileMenuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProfileMenuRet} ProfileMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileMenuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileMenuRet message.
         * @function verify
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileMenuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                if (typeof message.isItem !== "boolean")
                    return "isItem: boolean expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a ProfileMenuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProfileMenuRet} ProfileMenuRet
         */
        ProfileMenuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProfileMenuRet)
                return object;
            var message = new $root.dto.ProfileMenuRet();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.route != null)
                message.route = String(object.route);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.show != null)
                message.show = Boolean(object.show);
            if (object.isItem != null)
                message.isItem = Boolean(object.isItem);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a ProfileMenuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {dto.ProfileMenuRet} message ProfileMenuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileMenuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.route = "";
                object.memo = "";
                object.parentId = "";
                object.show = false;
                object.isItem = false;
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                object.isItem = message.isItem;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this ProfileMenuRet to JSON.
         * @function toJSON
         * @memberof dto.ProfileMenuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileMenuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfileMenuRet
         * @function getTypeUrl
         * @memberof dto.ProfileMenuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfileMenuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ProfileMenuRet";
        };

        return ProfileMenuRet;
    })();

    dto.EditMenuReq = (function() {

        /**
         * Properties of an EditMenuReq.
         * @memberof dto
         * @interface IEditMenuReq
         * @property {string|null} [name] EditMenuReq name
         * @property {number|null} [seq] EditMenuReq seq
         * @property {string|null} [icon] EditMenuReq icon
         * @property {string|null} [route] EditMenuReq route
         * @property {string|null} [memo] EditMenuReq memo
         * @property {boolean|null} [show] EditMenuReq show
         * @property {string|null} [parentId] EditMenuReq parentId
         * @property {boolean|null} [isItem] EditMenuReq isItem
         */

        /**
         * Constructs a new EditMenuReq.
         * @memberof dto
         * @classdesc Represents an EditMenuReq.
         * @implements IEditMenuReq
         * @constructor
         * @param {dto.IEditMenuReq=} [properties] Properties to set
         */
        function EditMenuReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditMenuReq name.
         * @member {string} name
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.name = "";

        /**
         * EditMenuReq seq.
         * @member {number} seq
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.seq = 0;

        /**
         * EditMenuReq icon.
         * @member {string} icon
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.icon = "";

        /**
         * EditMenuReq route.
         * @member {string} route
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.route = "";

        /**
         * EditMenuReq memo.
         * @member {string} memo
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.memo = "";

        /**
         * EditMenuReq show.
         * @member {boolean} show
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.show = false;

        /**
         * EditMenuReq parentId.
         * @member {string} parentId
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.parentId = "";

        /**
         * EditMenuReq isItem.
         * @member {boolean} isItem
         * @memberof dto.EditMenuReq
         * @instance
         */
        EditMenuReq.prototype.isItem = false;

        /**
         * Creates a new EditMenuReq instance using the specified properties.
         * @function create
         * @memberof dto.EditMenuReq
         * @static
         * @param {dto.IEditMenuReq=} [properties] Properties to set
         * @returns {dto.EditMenuReq} EditMenuReq instance
         */
        EditMenuReq.create = function create(properties) {
            return new EditMenuReq(properties);
        };

        /**
         * Encodes the specified EditMenuReq message. Does not implicitly {@link dto.EditMenuReq.verify|verify} messages.
         * @function encode
         * @memberof dto.EditMenuReq
         * @static
         * @param {dto.IEditMenuReq} message EditMenuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.route);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.memo);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.show);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.parentId);
            if (message.isItem != null && Object.hasOwnProperty.call(message, "isItem"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isItem);
            return writer;
        };

        /**
         * Encodes the specified EditMenuReq message, length delimited. Does not implicitly {@link dto.EditMenuReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditMenuReq
         * @static
         * @param {dto.IEditMenuReq} message EditMenuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditMenuReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditMenuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditMenuReq} EditMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditMenuReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 3: {
                        message.icon = reader.string();
                        break;
                    }
                case 4: {
                        message.route = reader.string();
                        break;
                    }
                case 5: {
                        message.memo = reader.string();
                        break;
                    }
                case 6: {
                        message.show = reader.bool();
                        break;
                    }
                case 7: {
                        message.parentId = reader.string();
                        break;
                    }
                case 8: {
                        message.isItem = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditMenuReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditMenuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditMenuReq} EditMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditMenuReq message.
         * @function verify
         * @memberof dto.EditMenuReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditMenuReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isString(message.parentId))
                    return "parentId: string expected";
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                if (typeof message.isItem !== "boolean")
                    return "isItem: boolean expected";
            return null;
        };

        /**
         * Creates an EditMenuReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditMenuReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditMenuReq} EditMenuReq
         */
        EditMenuReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditMenuReq)
                return object;
            var message = new $root.dto.EditMenuReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.route != null)
                message.route = String(object.route);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.show != null)
                message.show = Boolean(object.show);
            if (object.parentId != null)
                message.parentId = String(object.parentId);
            if (object.isItem != null)
                message.isItem = Boolean(object.isItem);
            return message;
        };

        /**
         * Creates a plain object from an EditMenuReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditMenuReq
         * @static
         * @param {dto.EditMenuReq} message EditMenuReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditMenuReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.route = "";
                object.memo = "";
                object.show = false;
                object.parentId = "";
                object.isItem = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                object.parentId = message.parentId;
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                object.isItem = message.isItem;
            return object;
        };

        /**
         * Converts this EditMenuReq to JSON.
         * @function toJSON
         * @memberof dto.EditMenuReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditMenuReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditMenuReq
         * @function getTypeUrl
         * @memberof dto.EditMenuReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditMenuReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditMenuReq";
        };

        return EditMenuReq;
    })();

    dto.EditMenuRet = (function() {

        /**
         * Properties of an EditMenuRet.
         * @memberof dto
         * @interface IEditMenuRet
         * @property {string|null} [id] EditMenuRet id
         */

        /**
         * Constructs a new EditMenuRet.
         * @memberof dto
         * @classdesc Represents an EditMenuRet.
         * @implements IEditMenuRet
         * @constructor
         * @param {dto.IEditMenuRet=} [properties] Properties to set
         */
        function EditMenuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditMenuRet id.
         * @member {string} id
         * @memberof dto.EditMenuRet
         * @instance
         */
        EditMenuRet.prototype.id = "";

        /**
         * Creates a new EditMenuRet instance using the specified properties.
         * @function create
         * @memberof dto.EditMenuRet
         * @static
         * @param {dto.IEditMenuRet=} [properties] Properties to set
         * @returns {dto.EditMenuRet} EditMenuRet instance
         */
        EditMenuRet.create = function create(properties) {
            return new EditMenuRet(properties);
        };

        /**
         * Encodes the specified EditMenuRet message. Does not implicitly {@link dto.EditMenuRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EditMenuRet
         * @static
         * @param {dto.IEditMenuRet} message EditMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EditMenuRet message, length delimited. Does not implicitly {@link dto.EditMenuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditMenuRet
         * @static
         * @param {dto.IEditMenuRet} message EditMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditMenuRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditMenuRet} EditMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditMenuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditMenuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditMenuRet} EditMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditMenuRet message.
         * @function verify
         * @memberof dto.EditMenuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditMenuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EditMenuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditMenuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditMenuRet} EditMenuRet
         */
        EditMenuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditMenuRet)
                return object;
            var message = new $root.dto.EditMenuRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EditMenuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditMenuRet
         * @static
         * @param {dto.EditMenuRet} message EditMenuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditMenuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EditMenuRet to JSON.
         * @function toJSON
         * @memberof dto.EditMenuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditMenuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditMenuRet
         * @function getTypeUrl
         * @memberof dto.EditMenuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditMenuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditMenuRet";
        };

        return EditMenuRet;
    })();

    dto.EnableMenuRet = (function() {

        /**
         * Properties of an EnableMenuRet.
         * @memberof dto
         * @interface IEnableMenuRet
         * @property {string|null} [id] EnableMenuRet id
         */

        /**
         * Constructs a new EnableMenuRet.
         * @memberof dto
         * @classdesc Represents an EnableMenuRet.
         * @implements IEnableMenuRet
         * @constructor
         * @param {dto.IEnableMenuRet=} [properties] Properties to set
         */
        function EnableMenuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnableMenuRet id.
         * @member {string} id
         * @memberof dto.EnableMenuRet
         * @instance
         */
        EnableMenuRet.prototype.id = "";

        /**
         * Creates a new EnableMenuRet instance using the specified properties.
         * @function create
         * @memberof dto.EnableMenuRet
         * @static
         * @param {dto.IEnableMenuRet=} [properties] Properties to set
         * @returns {dto.EnableMenuRet} EnableMenuRet instance
         */
        EnableMenuRet.create = function create(properties) {
            return new EnableMenuRet(properties);
        };

        /**
         * Encodes the specified EnableMenuRet message. Does not implicitly {@link dto.EnableMenuRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EnableMenuRet
         * @static
         * @param {dto.IEnableMenuRet} message EnableMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableMenuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EnableMenuRet message, length delimited. Does not implicitly {@link dto.EnableMenuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EnableMenuRet
         * @static
         * @param {dto.IEnableMenuRet} message EnableMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableMenuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnableMenuRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EnableMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EnableMenuRet} EnableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableMenuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EnableMenuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnableMenuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EnableMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EnableMenuRet} EnableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableMenuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnableMenuRet message.
         * @function verify
         * @memberof dto.EnableMenuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnableMenuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EnableMenuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EnableMenuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EnableMenuRet} EnableMenuRet
         */
        EnableMenuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EnableMenuRet)
                return object;
            var message = new $root.dto.EnableMenuRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EnableMenuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EnableMenuRet
         * @static
         * @param {dto.EnableMenuRet} message EnableMenuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnableMenuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EnableMenuRet to JSON.
         * @function toJSON
         * @memberof dto.EnableMenuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnableMenuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnableMenuRet
         * @function getTypeUrl
         * @memberof dto.EnableMenuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnableMenuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EnableMenuRet";
        };

        return EnableMenuRet;
    })();

    dto.DisableMenuRet = (function() {

        /**
         * Properties of a DisableMenuRet.
         * @memberof dto
         * @interface IDisableMenuRet
         * @property {string|null} [id] DisableMenuRet id
         */

        /**
         * Constructs a new DisableMenuRet.
         * @memberof dto
         * @classdesc Represents a DisableMenuRet.
         * @implements IDisableMenuRet
         * @constructor
         * @param {dto.IDisableMenuRet=} [properties] Properties to set
         */
        function DisableMenuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisableMenuRet id.
         * @member {string} id
         * @memberof dto.DisableMenuRet
         * @instance
         */
        DisableMenuRet.prototype.id = "";

        /**
         * Creates a new DisableMenuRet instance using the specified properties.
         * @function create
         * @memberof dto.DisableMenuRet
         * @static
         * @param {dto.IDisableMenuRet=} [properties] Properties to set
         * @returns {dto.DisableMenuRet} DisableMenuRet instance
         */
        DisableMenuRet.create = function create(properties) {
            return new DisableMenuRet(properties);
        };

        /**
         * Encodes the specified DisableMenuRet message. Does not implicitly {@link dto.DisableMenuRet.verify|verify} messages.
         * @function encode
         * @memberof dto.DisableMenuRet
         * @static
         * @param {dto.IDisableMenuRet} message DisableMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableMenuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DisableMenuRet message, length delimited. Does not implicitly {@link dto.DisableMenuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DisableMenuRet
         * @static
         * @param {dto.IDisableMenuRet} message DisableMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableMenuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisableMenuRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DisableMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DisableMenuRet} DisableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableMenuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DisableMenuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisableMenuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DisableMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DisableMenuRet} DisableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableMenuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisableMenuRet message.
         * @function verify
         * @memberof dto.DisableMenuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisableMenuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DisableMenuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DisableMenuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DisableMenuRet} DisableMenuRet
         */
        DisableMenuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DisableMenuRet)
                return object;
            var message = new $root.dto.DisableMenuRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DisableMenuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DisableMenuRet
         * @static
         * @param {dto.DisableMenuRet} message DisableMenuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisableMenuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DisableMenuRet to JSON.
         * @function toJSON
         * @memberof dto.DisableMenuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisableMenuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DisableMenuRet
         * @function getTypeUrl
         * @memberof dto.DisableMenuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DisableMenuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.DisableMenuRet";
        };

        return DisableMenuRet;
    })();

    dto.RemoveMenuRet = (function() {

        /**
         * Properties of a RemoveMenuRet.
         * @memberof dto
         * @interface IRemoveMenuRet
         * @property {string|null} [id] RemoveMenuRet id
         */

        /**
         * Constructs a new RemoveMenuRet.
         * @memberof dto
         * @classdesc Represents a RemoveMenuRet.
         * @implements IRemoveMenuRet
         * @constructor
         * @param {dto.IRemoveMenuRet=} [properties] Properties to set
         */
        function RemoveMenuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveMenuRet id.
         * @member {string} id
         * @memberof dto.RemoveMenuRet
         * @instance
         */
        RemoveMenuRet.prototype.id = "";

        /**
         * Creates a new RemoveMenuRet instance using the specified properties.
         * @function create
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {dto.IRemoveMenuRet=} [properties] Properties to set
         * @returns {dto.RemoveMenuRet} RemoveMenuRet instance
         */
        RemoveMenuRet.create = function create(properties) {
            return new RemoveMenuRet(properties);
        };

        /**
         * Encodes the specified RemoveMenuRet message. Does not implicitly {@link dto.RemoveMenuRet.verify|verify} messages.
         * @function encode
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {dto.IRemoveMenuRet} message RemoveMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMenuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified RemoveMenuRet message, length delimited. Does not implicitly {@link dto.RemoveMenuRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {dto.IRemoveMenuRet} message RemoveMenuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMenuRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveMenuRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RemoveMenuRet} RemoveMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveMenuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RemoveMenuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveMenuRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RemoveMenuRet} RemoveMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveMenuRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveMenuRet message.
         * @function verify
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveMenuRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a RemoveMenuRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RemoveMenuRet} RemoveMenuRet
         */
        RemoveMenuRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RemoveMenuRet)
                return object;
            var message = new $root.dto.RemoveMenuRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a RemoveMenuRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {dto.RemoveMenuRet} message RemoveMenuRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveMenuRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this RemoveMenuRet to JSON.
         * @function toJSON
         * @memberof dto.RemoveMenuRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveMenuRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveMenuRet
         * @function getTypeUrl
         * @memberof dto.RemoveMenuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveMenuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RemoveMenuRet";
        };

        return RemoveMenuRet;
    })();

    dto.AddMenuWidgetReq = (function() {

        /**
         * Properties of an AddMenuWidgetReq.
         * @memberof dto
         * @interface IAddMenuWidgetReq
         * @property {string|null} [name] AddMenuWidgetReq name
         * @property {number|null} [seq] AddMenuWidgetReq seq
         * @property {string|null} [icon] AddMenuWidgetReq icon
         * @property {string|null} [apiMethod] AddMenuWidgetReq apiMethod
         * @property {string|null} [apiPath] AddMenuWidgetReq apiPath
         * @property {string|null} [memo] AddMenuWidgetReq memo
         * @property {boolean|null} [show] AddMenuWidgetReq show
         */

        /**
         * Constructs a new AddMenuWidgetReq.
         * @memberof dto
         * @classdesc Represents an AddMenuWidgetReq.
         * @implements IAddMenuWidgetReq
         * @constructor
         * @param {dto.IAddMenuWidgetReq=} [properties] Properties to set
         */
        function AddMenuWidgetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddMenuWidgetReq name.
         * @member {string} name
         * @memberof dto.AddMenuWidgetReq
         * @instance
         */
        AddMenuWidgetReq.prototype.name = "";

        /**
         * AddMenuWidgetReq seq.
         * @member {number} seq
         * @memberof dto.AddMenuWidgetReq
         * @instance
         */
        AddMenuWidgetReq.prototype.seq = 0;

        /**
         * AddMenuWidgetReq icon.
         * @member {string} icon
         * @memberof dto.AddMenuWidgetReq
         * @instance
         */
        AddMenuWidgetReq.prototype.icon = "";

        /**
         * AddMenuWidgetReq apiMethod.
         * @member {string} apiMethod
         * @memberof dto.AddMenuWidgetReq
         * @instance
         */
        AddMenuWidgetReq.prototype.apiMethod = "";

        /**
         * AddMenuWidgetReq apiPath.
         * @member {string} apiPath
         * @memberof dto.AddMenuWidgetReq
         * @instance
         */
        AddMenuWidgetReq.prototype.apiPath = "";

        /**
         * AddMenuWidgetReq memo.
         * @member {string} memo
         * @memberof dto.AddMenuWidgetReq
         * @instance
         */
        AddMenuWidgetReq.prototype.memo = "";

        /**
         * AddMenuWidgetReq show.
         * @member {boolean} show
         * @memberof dto.AddMenuWidgetReq
         * @instance
         */
        AddMenuWidgetReq.prototype.show = false;

        /**
         * Creates a new AddMenuWidgetReq instance using the specified properties.
         * @function create
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {dto.IAddMenuWidgetReq=} [properties] Properties to set
         * @returns {dto.AddMenuWidgetReq} AddMenuWidgetReq instance
         */
        AddMenuWidgetReq.create = function create(properties) {
            return new AddMenuWidgetReq(properties);
        };

        /**
         * Encodes the specified AddMenuWidgetReq message. Does not implicitly {@link dto.AddMenuWidgetReq.verify|verify} messages.
         * @function encode
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {dto.IAddMenuWidgetReq} message AddMenuWidgetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuWidgetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            if (message.apiMethod != null && Object.hasOwnProperty.call(message, "apiMethod"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.apiMethod);
            if (message.apiPath != null && Object.hasOwnProperty.call(message, "apiPath"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.apiPath);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.show);
            return writer;
        };

        /**
         * Encodes the specified AddMenuWidgetReq message, length delimited. Does not implicitly {@link dto.AddMenuWidgetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {dto.IAddMenuWidgetReq} message AddMenuWidgetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuWidgetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddMenuWidgetReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddMenuWidgetReq} AddMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuWidgetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddMenuWidgetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 3: {
                        message.icon = reader.string();
                        break;
                    }
                case 4: {
                        message.apiMethod = reader.string();
                        break;
                    }
                case 5: {
                        message.apiPath = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        message.show = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddMenuWidgetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddMenuWidgetReq} AddMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuWidgetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddMenuWidgetReq message.
         * @function verify
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddMenuWidgetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                if (!$util.isString(message.apiMethod))
                    return "apiMethod: string expected";
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                if (!$util.isString(message.apiPath))
                    return "apiPath: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            return null;
        };

        /**
         * Creates an AddMenuWidgetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddMenuWidgetReq} AddMenuWidgetReq
         */
        AddMenuWidgetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddMenuWidgetReq)
                return object;
            var message = new $root.dto.AddMenuWidgetReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.apiMethod != null)
                message.apiMethod = String(object.apiMethod);
            if (object.apiPath != null)
                message.apiPath = String(object.apiPath);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.show != null)
                message.show = Boolean(object.show);
            return message;
        };

        /**
         * Creates a plain object from an AddMenuWidgetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {dto.AddMenuWidgetReq} message AddMenuWidgetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddMenuWidgetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.apiMethod = "";
                object.apiPath = "";
                object.memo = "";
                object.show = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                object.apiMethod = message.apiMethod;
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                object.apiPath = message.apiPath;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            return object;
        };

        /**
         * Converts this AddMenuWidgetReq to JSON.
         * @function toJSON
         * @memberof dto.AddMenuWidgetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddMenuWidgetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddMenuWidgetReq
         * @function getTypeUrl
         * @memberof dto.AddMenuWidgetReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddMenuWidgetReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddMenuWidgetReq";
        };

        return AddMenuWidgetReq;
    })();

    dto.AddMenuWidgetRet = (function() {

        /**
         * Properties of an AddMenuWidgetRet.
         * @memberof dto
         * @interface IAddMenuWidgetRet
         * @property {string|null} [id] AddMenuWidgetRet id
         */

        /**
         * Constructs a new AddMenuWidgetRet.
         * @memberof dto
         * @classdesc Represents an AddMenuWidgetRet.
         * @implements IAddMenuWidgetRet
         * @constructor
         * @param {dto.IAddMenuWidgetRet=} [properties] Properties to set
         */
        function AddMenuWidgetRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddMenuWidgetRet id.
         * @member {string} id
         * @memberof dto.AddMenuWidgetRet
         * @instance
         */
        AddMenuWidgetRet.prototype.id = "";

        /**
         * Creates a new AddMenuWidgetRet instance using the specified properties.
         * @function create
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {dto.IAddMenuWidgetRet=} [properties] Properties to set
         * @returns {dto.AddMenuWidgetRet} AddMenuWidgetRet instance
         */
        AddMenuWidgetRet.create = function create(properties) {
            return new AddMenuWidgetRet(properties);
        };

        /**
         * Encodes the specified AddMenuWidgetRet message. Does not implicitly {@link dto.AddMenuWidgetRet.verify|verify} messages.
         * @function encode
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {dto.IAddMenuWidgetRet} message AddMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuWidgetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AddMenuWidgetRet message, length delimited. Does not implicitly {@link dto.AddMenuWidgetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {dto.IAddMenuWidgetRet} message AddMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMenuWidgetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddMenuWidgetRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddMenuWidgetRet} AddMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuWidgetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddMenuWidgetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddMenuWidgetRet} AddMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMenuWidgetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddMenuWidgetRet message.
         * @function verify
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddMenuWidgetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AddMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddMenuWidgetRet} AddMenuWidgetRet
         */
        AddMenuWidgetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddMenuWidgetRet)
                return object;
            var message = new $root.dto.AddMenuWidgetRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AddMenuWidgetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {dto.AddMenuWidgetRet} message AddMenuWidgetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddMenuWidgetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AddMenuWidgetRet to JSON.
         * @function toJSON
         * @memberof dto.AddMenuWidgetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddMenuWidgetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddMenuWidgetRet
         * @function getTypeUrl
         * @memberof dto.AddMenuWidgetRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddMenuWidgetRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddMenuWidgetRet";
        };

        return AddMenuWidgetRet;
    })();

    dto.MenuWidgetListElem = (function() {

        /**
         * Properties of a MenuWidgetListElem.
         * @memberof dto
         * @interface IMenuWidgetListElem
         * @property {string|null} [id] MenuWidgetListElem id
         * @property {string|null} [name] MenuWidgetListElem name
         * @property {number|null} [seq] MenuWidgetListElem seq
         * @property {string|null} [icon] MenuWidgetListElem icon
         * @property {string|null} [apiMethod] MenuWidgetListElem apiMethod
         * @property {string|null} [apiPath] MenuWidgetListElem apiPath
         * @property {boolean|null} [show] MenuWidgetListElem show
         * @property {string|null} [createdBy] MenuWidgetListElem createdBy
         * @property {string|null} [createdAt] MenuWidgetListElem createdAt
         * @property {string|null} [updatedBy] MenuWidgetListElem updatedBy
         * @property {string|null} [updatedAt] MenuWidgetListElem updatedAt
         * @property {string|null} [deletedBy] MenuWidgetListElem deletedBy
         * @property {string|null} [deletedAt] MenuWidgetListElem deletedAt
         */

        /**
         * Constructs a new MenuWidgetListElem.
         * @memberof dto
         * @classdesc Represents a MenuWidgetListElem.
         * @implements IMenuWidgetListElem
         * @constructor
         * @param {dto.IMenuWidgetListElem=} [properties] Properties to set
         */
        function MenuWidgetListElem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MenuWidgetListElem id.
         * @member {string} id
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.id = "";

        /**
         * MenuWidgetListElem name.
         * @member {string} name
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.name = "";

        /**
         * MenuWidgetListElem seq.
         * @member {number} seq
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.seq = 0;

        /**
         * MenuWidgetListElem icon.
         * @member {string} icon
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.icon = "";

        /**
         * MenuWidgetListElem apiMethod.
         * @member {string} apiMethod
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.apiMethod = "";

        /**
         * MenuWidgetListElem apiPath.
         * @member {string} apiPath
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.apiPath = "";

        /**
         * MenuWidgetListElem show.
         * @member {boolean} show
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.show = false;

        /**
         * MenuWidgetListElem createdBy.
         * @member {string} createdBy
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.createdBy = "";

        /**
         * MenuWidgetListElem createdAt.
         * @member {string} createdAt
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.createdAt = "";

        /**
         * MenuWidgetListElem updatedBy.
         * @member {string} updatedBy
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.updatedBy = "";

        /**
         * MenuWidgetListElem updatedAt.
         * @member {string} updatedAt
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.updatedAt = "";

        /**
         * MenuWidgetListElem deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.deletedBy = null;

        /**
         * MenuWidgetListElem deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        MenuWidgetListElem.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * MenuWidgetListElem _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        Object.defineProperty(MenuWidgetListElem.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * MenuWidgetListElem _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.MenuWidgetListElem
         * @instance
         */
        Object.defineProperty(MenuWidgetListElem.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MenuWidgetListElem instance using the specified properties.
         * @function create
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {dto.IMenuWidgetListElem=} [properties] Properties to set
         * @returns {dto.MenuWidgetListElem} MenuWidgetListElem instance
         */
        MenuWidgetListElem.create = function create(properties) {
            return new MenuWidgetListElem(properties);
        };

        /**
         * Encodes the specified MenuWidgetListElem message. Does not implicitly {@link dto.MenuWidgetListElem.verify|verify} messages.
         * @function encode
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {dto.IMenuWidgetListElem} message MenuWidgetListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuWidgetListElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.apiMethod != null && Object.hasOwnProperty.call(message, "apiMethod"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.apiMethod);
            if (message.apiPath != null && Object.hasOwnProperty.call(message, "apiPath"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.apiPath);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.show);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified MenuWidgetListElem message, length delimited. Does not implicitly {@link dto.MenuWidgetListElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {dto.IMenuWidgetListElem} message MenuWidgetListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuWidgetListElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MenuWidgetListElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.MenuWidgetListElem} MenuWidgetListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuWidgetListElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.MenuWidgetListElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.apiMethod = reader.string();
                        break;
                    }
                case 6: {
                        message.apiPath = reader.string();
                        break;
                    }
                case 7: {
                        message.show = reader.bool();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MenuWidgetListElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.MenuWidgetListElem} MenuWidgetListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuWidgetListElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MenuWidgetListElem message.
         * @function verify
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MenuWidgetListElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                if (!$util.isString(message.apiMethod))
                    return "apiMethod: string expected";
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                if (!$util.isString(message.apiPath))
                    return "apiPath: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a MenuWidgetListElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.MenuWidgetListElem} MenuWidgetListElem
         */
        MenuWidgetListElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.MenuWidgetListElem)
                return object;
            var message = new $root.dto.MenuWidgetListElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.apiMethod != null)
                message.apiMethod = String(object.apiMethod);
            if (object.apiPath != null)
                message.apiPath = String(object.apiPath);
            if (object.show != null)
                message.show = Boolean(object.show);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a MenuWidgetListElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {dto.MenuWidgetListElem} message MenuWidgetListElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MenuWidgetListElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.apiMethod = "";
                object.apiPath = "";
                object.show = false;
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                object.apiMethod = message.apiMethod;
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                object.apiPath = message.apiPath;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this MenuWidgetListElem to JSON.
         * @function toJSON
         * @memberof dto.MenuWidgetListElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MenuWidgetListElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MenuWidgetListElem
         * @function getTypeUrl
         * @memberof dto.MenuWidgetListElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MenuWidgetListElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.MenuWidgetListElem";
        };

        return MenuWidgetListElem;
    })();

    dto.ListMenuWidgetRet = (function() {

        /**
         * Properties of a ListMenuWidgetRet.
         * @memberof dto
         * @interface IListMenuWidgetRet
         * @property {Array.<dto.IMenuWidgetListElem>|null} [list] ListMenuWidgetRet list
         * @property {number|Long|null} [total] ListMenuWidgetRet total
         */

        /**
         * Constructs a new ListMenuWidgetRet.
         * @memberof dto
         * @classdesc Represents a ListMenuWidgetRet.
         * @implements IListMenuWidgetRet
         * @constructor
         * @param {dto.IListMenuWidgetRet=} [properties] Properties to set
         */
        function ListMenuWidgetRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListMenuWidgetRet list.
         * @member {Array.<dto.IMenuWidgetListElem>} list
         * @memberof dto.ListMenuWidgetRet
         * @instance
         */
        ListMenuWidgetRet.prototype.list = $util.emptyArray;

        /**
         * ListMenuWidgetRet total.
         * @member {number|Long} total
         * @memberof dto.ListMenuWidgetRet
         * @instance
         */
        ListMenuWidgetRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ListMenuWidgetRet instance using the specified properties.
         * @function create
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {dto.IListMenuWidgetRet=} [properties] Properties to set
         * @returns {dto.ListMenuWidgetRet} ListMenuWidgetRet instance
         */
        ListMenuWidgetRet.create = function create(properties) {
            return new ListMenuWidgetRet(properties);
        };

        /**
         * Encodes the specified ListMenuWidgetRet message. Does not implicitly {@link dto.ListMenuWidgetRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {dto.IListMenuWidgetRet} message ListMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMenuWidgetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.MenuWidgetListElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified ListMenuWidgetRet message, length delimited. Does not implicitly {@link dto.ListMenuWidgetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {dto.IListMenuWidgetRet} message ListMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMenuWidgetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListMenuWidgetRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListMenuWidgetRet} ListMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMenuWidgetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListMenuWidgetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.MenuWidgetListElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListMenuWidgetRet} ListMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMenuWidgetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListMenuWidgetRet message.
         * @function verify
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListMenuWidgetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.MenuWidgetListElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a ListMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListMenuWidgetRet} ListMenuWidgetRet
         */
        ListMenuWidgetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListMenuWidgetRet)
                return object;
            var message = new $root.dto.ListMenuWidgetRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.ListMenuWidgetRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.ListMenuWidgetRet.list: object expected");
                    message.list[i] = $root.dto.MenuWidgetListElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ListMenuWidgetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {dto.ListMenuWidgetRet} message ListMenuWidgetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListMenuWidgetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.MenuWidgetListElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this ListMenuWidgetRet to JSON.
         * @function toJSON
         * @memberof dto.ListMenuWidgetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListMenuWidgetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListMenuWidgetRet
         * @function getTypeUrl
         * @memberof dto.ListMenuWidgetRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListMenuWidgetRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListMenuWidgetRet";
        };

        return ListMenuWidgetRet;
    })();

    dto.ProfileMenuWidgetRet = (function() {

        /**
         * Properties of a ProfileMenuWidgetRet.
         * @memberof dto
         * @interface IProfileMenuWidgetRet
         * @property {string|null} [id] ProfileMenuWidgetRet id
         * @property {string|null} [name] ProfileMenuWidgetRet name
         * @property {number|null} [seq] ProfileMenuWidgetRet seq
         * @property {string|null} [icon] ProfileMenuWidgetRet icon
         * @property {string|null} [apiMethod] ProfileMenuWidgetRet apiMethod
         * @property {string|null} [apiPath] ProfileMenuWidgetRet apiPath
         * @property {string|null} [memo] ProfileMenuWidgetRet memo
         * @property {boolean|null} [show] ProfileMenuWidgetRet show
         * @property {string|null} [createdBy] ProfileMenuWidgetRet createdBy
         * @property {string|null} [createdAt] ProfileMenuWidgetRet createdAt
         * @property {string|null} [updatedBy] ProfileMenuWidgetRet updatedBy
         * @property {string|null} [updatedAt] ProfileMenuWidgetRet updatedAt
         * @property {string|null} [deletedBy] ProfileMenuWidgetRet deletedBy
         * @property {string|null} [deletedAt] ProfileMenuWidgetRet deletedAt
         */

        /**
         * Constructs a new ProfileMenuWidgetRet.
         * @memberof dto
         * @classdesc Represents a ProfileMenuWidgetRet.
         * @implements IProfileMenuWidgetRet
         * @constructor
         * @param {dto.IProfileMenuWidgetRet=} [properties] Properties to set
         */
        function ProfileMenuWidgetRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileMenuWidgetRet id.
         * @member {string} id
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.id = "";

        /**
         * ProfileMenuWidgetRet name.
         * @member {string} name
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.name = "";

        /**
         * ProfileMenuWidgetRet seq.
         * @member {number} seq
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.seq = 0;

        /**
         * ProfileMenuWidgetRet icon.
         * @member {string} icon
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.icon = "";

        /**
         * ProfileMenuWidgetRet apiMethod.
         * @member {string} apiMethod
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.apiMethod = "";

        /**
         * ProfileMenuWidgetRet apiPath.
         * @member {string} apiPath
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.apiPath = "";

        /**
         * ProfileMenuWidgetRet memo.
         * @member {string} memo
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.memo = "";

        /**
         * ProfileMenuWidgetRet show.
         * @member {boolean} show
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.show = false;

        /**
         * ProfileMenuWidgetRet createdBy.
         * @member {string} createdBy
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.createdBy = "";

        /**
         * ProfileMenuWidgetRet createdAt.
         * @member {string} createdAt
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.createdAt = "";

        /**
         * ProfileMenuWidgetRet updatedBy.
         * @member {string} updatedBy
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.updatedBy = "";

        /**
         * ProfileMenuWidgetRet updatedAt.
         * @member {string} updatedAt
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.updatedAt = "";

        /**
         * ProfileMenuWidgetRet deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.deletedBy = null;

        /**
         * ProfileMenuWidgetRet deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        ProfileMenuWidgetRet.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ProfileMenuWidgetRet _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        Object.defineProperty(ProfileMenuWidgetRet.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ProfileMenuWidgetRet _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         */
        Object.defineProperty(ProfileMenuWidgetRet.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProfileMenuWidgetRet instance using the specified properties.
         * @function create
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {dto.IProfileMenuWidgetRet=} [properties] Properties to set
         * @returns {dto.ProfileMenuWidgetRet} ProfileMenuWidgetRet instance
         */
        ProfileMenuWidgetRet.create = function create(properties) {
            return new ProfileMenuWidgetRet(properties);
        };

        /**
         * Encodes the specified ProfileMenuWidgetRet message. Does not implicitly {@link dto.ProfileMenuWidgetRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {dto.IProfileMenuWidgetRet} message ProfileMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileMenuWidgetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.apiMethod != null && Object.hasOwnProperty.call(message, "apiMethod"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.apiMethod);
            if (message.apiPath != null && Object.hasOwnProperty.call(message, "apiPath"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.apiPath);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.memo);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.show);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified ProfileMenuWidgetRet message, length delimited. Does not implicitly {@link dto.ProfileMenuWidgetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {dto.IProfileMenuWidgetRet} message ProfileMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileMenuWidgetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileMenuWidgetRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProfileMenuWidgetRet} ProfileMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileMenuWidgetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProfileMenuWidgetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.apiMethod = reader.string();
                        break;
                    }
                case 6: {
                        message.apiPath = reader.string();
                        break;
                    }
                case 7: {
                        message.memo = reader.string();
                        break;
                    }
                case 8: {
                        message.show = reader.bool();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProfileMenuWidgetRet} ProfileMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileMenuWidgetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileMenuWidgetRet message.
         * @function verify
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileMenuWidgetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                if (!$util.isString(message.apiMethod))
                    return "apiMethod: string expected";
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                if (!$util.isString(message.apiPath))
                    return "apiPath: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a ProfileMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProfileMenuWidgetRet} ProfileMenuWidgetRet
         */
        ProfileMenuWidgetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProfileMenuWidgetRet)
                return object;
            var message = new $root.dto.ProfileMenuWidgetRet();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.apiMethod != null)
                message.apiMethod = String(object.apiMethod);
            if (object.apiPath != null)
                message.apiPath = String(object.apiPath);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.show != null)
                message.show = Boolean(object.show);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a ProfileMenuWidgetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {dto.ProfileMenuWidgetRet} message ProfileMenuWidgetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileMenuWidgetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.apiMethod = "";
                object.apiPath = "";
                object.memo = "";
                object.show = false;
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                object.apiMethod = message.apiMethod;
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                object.apiPath = message.apiPath;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this ProfileMenuWidgetRet to JSON.
         * @function toJSON
         * @memberof dto.ProfileMenuWidgetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileMenuWidgetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfileMenuWidgetRet
         * @function getTypeUrl
         * @memberof dto.ProfileMenuWidgetRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfileMenuWidgetRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ProfileMenuWidgetRet";
        };

        return ProfileMenuWidgetRet;
    })();

    dto.EditMenuWidgetReq = (function() {

        /**
         * Properties of an EditMenuWidgetReq.
         * @memberof dto
         * @interface IEditMenuWidgetReq
         * @property {string|null} [name] EditMenuWidgetReq name
         * @property {number|null} [seq] EditMenuWidgetReq seq
         * @property {string|null} [icon] EditMenuWidgetReq icon
         * @property {string|null} [apiMethod] EditMenuWidgetReq apiMethod
         * @property {string|null} [apiPath] EditMenuWidgetReq apiPath
         * @property {string|null} [memo] EditMenuWidgetReq memo
         * @property {boolean|null} [show] EditMenuWidgetReq show
         */

        /**
         * Constructs a new EditMenuWidgetReq.
         * @memberof dto
         * @classdesc Represents an EditMenuWidgetReq.
         * @implements IEditMenuWidgetReq
         * @constructor
         * @param {dto.IEditMenuWidgetReq=} [properties] Properties to set
         */
        function EditMenuWidgetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditMenuWidgetReq name.
         * @member {string} name
         * @memberof dto.EditMenuWidgetReq
         * @instance
         */
        EditMenuWidgetReq.prototype.name = "";

        /**
         * EditMenuWidgetReq seq.
         * @member {number} seq
         * @memberof dto.EditMenuWidgetReq
         * @instance
         */
        EditMenuWidgetReq.prototype.seq = 0;

        /**
         * EditMenuWidgetReq icon.
         * @member {string} icon
         * @memberof dto.EditMenuWidgetReq
         * @instance
         */
        EditMenuWidgetReq.prototype.icon = "";

        /**
         * EditMenuWidgetReq apiMethod.
         * @member {string} apiMethod
         * @memberof dto.EditMenuWidgetReq
         * @instance
         */
        EditMenuWidgetReq.prototype.apiMethod = "";

        /**
         * EditMenuWidgetReq apiPath.
         * @member {string} apiPath
         * @memberof dto.EditMenuWidgetReq
         * @instance
         */
        EditMenuWidgetReq.prototype.apiPath = "";

        /**
         * EditMenuWidgetReq memo.
         * @member {string} memo
         * @memberof dto.EditMenuWidgetReq
         * @instance
         */
        EditMenuWidgetReq.prototype.memo = "";

        /**
         * EditMenuWidgetReq show.
         * @member {boolean} show
         * @memberof dto.EditMenuWidgetReq
         * @instance
         */
        EditMenuWidgetReq.prototype.show = false;

        /**
         * Creates a new EditMenuWidgetReq instance using the specified properties.
         * @function create
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {dto.IEditMenuWidgetReq=} [properties] Properties to set
         * @returns {dto.EditMenuWidgetReq} EditMenuWidgetReq instance
         */
        EditMenuWidgetReq.create = function create(properties) {
            return new EditMenuWidgetReq(properties);
        };

        /**
         * Encodes the specified EditMenuWidgetReq message. Does not implicitly {@link dto.EditMenuWidgetReq.verify|verify} messages.
         * @function encode
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {dto.IEditMenuWidgetReq} message EditMenuWidgetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuWidgetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            if (message.apiMethod != null && Object.hasOwnProperty.call(message, "apiMethod"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.apiMethod);
            if (message.apiPath != null && Object.hasOwnProperty.call(message, "apiPath"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.apiPath);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.show);
            return writer;
        };

        /**
         * Encodes the specified EditMenuWidgetReq message, length delimited. Does not implicitly {@link dto.EditMenuWidgetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {dto.IEditMenuWidgetReq} message EditMenuWidgetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuWidgetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditMenuWidgetReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditMenuWidgetReq} EditMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuWidgetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditMenuWidgetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 3: {
                        message.icon = reader.string();
                        break;
                    }
                case 4: {
                        message.apiMethod = reader.string();
                        break;
                    }
                case 5: {
                        message.apiPath = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        message.show = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditMenuWidgetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditMenuWidgetReq} EditMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuWidgetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditMenuWidgetReq message.
         * @function verify
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditMenuWidgetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                if (!$util.isString(message.apiMethod))
                    return "apiMethod: string expected";
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                if (!$util.isString(message.apiPath))
                    return "apiPath: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            return null;
        };

        /**
         * Creates an EditMenuWidgetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditMenuWidgetReq} EditMenuWidgetReq
         */
        EditMenuWidgetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditMenuWidgetReq)
                return object;
            var message = new $root.dto.EditMenuWidgetReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.apiMethod != null)
                message.apiMethod = String(object.apiMethod);
            if (object.apiPath != null)
                message.apiPath = String(object.apiPath);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.show != null)
                message.show = Boolean(object.show);
            return message;
        };

        /**
         * Creates a plain object from an EditMenuWidgetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {dto.EditMenuWidgetReq} message EditMenuWidgetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditMenuWidgetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.apiMethod = "";
                object.apiPath = "";
                object.memo = "";
                object.show = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                object.apiMethod = message.apiMethod;
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                object.apiPath = message.apiPath;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            return object;
        };

        /**
         * Converts this EditMenuWidgetReq to JSON.
         * @function toJSON
         * @memberof dto.EditMenuWidgetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditMenuWidgetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditMenuWidgetReq
         * @function getTypeUrl
         * @memberof dto.EditMenuWidgetReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditMenuWidgetReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditMenuWidgetReq";
        };

        return EditMenuWidgetReq;
    })();

    dto.EditMenuWidgetRet = (function() {

        /**
         * Properties of an EditMenuWidgetRet.
         * @memberof dto
         * @interface IEditMenuWidgetRet
         * @property {string|null} [id] EditMenuWidgetRet id
         */

        /**
         * Constructs a new EditMenuWidgetRet.
         * @memberof dto
         * @classdesc Represents an EditMenuWidgetRet.
         * @implements IEditMenuWidgetRet
         * @constructor
         * @param {dto.IEditMenuWidgetRet=} [properties] Properties to set
         */
        function EditMenuWidgetRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditMenuWidgetRet id.
         * @member {string} id
         * @memberof dto.EditMenuWidgetRet
         * @instance
         */
        EditMenuWidgetRet.prototype.id = "";

        /**
         * Creates a new EditMenuWidgetRet instance using the specified properties.
         * @function create
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {dto.IEditMenuWidgetRet=} [properties] Properties to set
         * @returns {dto.EditMenuWidgetRet} EditMenuWidgetRet instance
         */
        EditMenuWidgetRet.create = function create(properties) {
            return new EditMenuWidgetRet(properties);
        };

        /**
         * Encodes the specified EditMenuWidgetRet message. Does not implicitly {@link dto.EditMenuWidgetRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {dto.IEditMenuWidgetRet} message EditMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuWidgetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EditMenuWidgetRet message, length delimited. Does not implicitly {@link dto.EditMenuWidgetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {dto.IEditMenuWidgetRet} message EditMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditMenuWidgetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditMenuWidgetRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditMenuWidgetRet} EditMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuWidgetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditMenuWidgetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditMenuWidgetRet} EditMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditMenuWidgetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditMenuWidgetRet message.
         * @function verify
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditMenuWidgetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EditMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditMenuWidgetRet} EditMenuWidgetRet
         */
        EditMenuWidgetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditMenuWidgetRet)
                return object;
            var message = new $root.dto.EditMenuWidgetRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EditMenuWidgetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {dto.EditMenuWidgetRet} message EditMenuWidgetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditMenuWidgetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EditMenuWidgetRet to JSON.
         * @function toJSON
         * @memberof dto.EditMenuWidgetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditMenuWidgetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditMenuWidgetRet
         * @function getTypeUrl
         * @memberof dto.EditMenuWidgetRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditMenuWidgetRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditMenuWidgetRet";
        };

        return EditMenuWidgetRet;
    })();

    dto.EnableMenuWidgetRet = (function() {

        /**
         * Properties of an EnableMenuWidgetRet.
         * @memberof dto
         * @interface IEnableMenuWidgetRet
         * @property {string|null} [id] EnableMenuWidgetRet id
         */

        /**
         * Constructs a new EnableMenuWidgetRet.
         * @memberof dto
         * @classdesc Represents an EnableMenuWidgetRet.
         * @implements IEnableMenuWidgetRet
         * @constructor
         * @param {dto.IEnableMenuWidgetRet=} [properties] Properties to set
         */
        function EnableMenuWidgetRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnableMenuWidgetRet id.
         * @member {string} id
         * @memberof dto.EnableMenuWidgetRet
         * @instance
         */
        EnableMenuWidgetRet.prototype.id = "";

        /**
         * Creates a new EnableMenuWidgetRet instance using the specified properties.
         * @function create
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {dto.IEnableMenuWidgetRet=} [properties] Properties to set
         * @returns {dto.EnableMenuWidgetRet} EnableMenuWidgetRet instance
         */
        EnableMenuWidgetRet.create = function create(properties) {
            return new EnableMenuWidgetRet(properties);
        };

        /**
         * Encodes the specified EnableMenuWidgetRet message. Does not implicitly {@link dto.EnableMenuWidgetRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {dto.IEnableMenuWidgetRet} message EnableMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableMenuWidgetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EnableMenuWidgetRet message, length delimited. Does not implicitly {@link dto.EnableMenuWidgetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {dto.IEnableMenuWidgetRet} message EnableMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableMenuWidgetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnableMenuWidgetRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EnableMenuWidgetRet} EnableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableMenuWidgetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EnableMenuWidgetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnableMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EnableMenuWidgetRet} EnableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableMenuWidgetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnableMenuWidgetRet message.
         * @function verify
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnableMenuWidgetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EnableMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EnableMenuWidgetRet} EnableMenuWidgetRet
         */
        EnableMenuWidgetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EnableMenuWidgetRet)
                return object;
            var message = new $root.dto.EnableMenuWidgetRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EnableMenuWidgetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {dto.EnableMenuWidgetRet} message EnableMenuWidgetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnableMenuWidgetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EnableMenuWidgetRet to JSON.
         * @function toJSON
         * @memberof dto.EnableMenuWidgetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnableMenuWidgetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnableMenuWidgetRet
         * @function getTypeUrl
         * @memberof dto.EnableMenuWidgetRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnableMenuWidgetRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EnableMenuWidgetRet";
        };

        return EnableMenuWidgetRet;
    })();

    dto.DisableMenuWidgetRet = (function() {

        /**
         * Properties of a DisableMenuWidgetRet.
         * @memberof dto
         * @interface IDisableMenuWidgetRet
         * @property {string|null} [id] DisableMenuWidgetRet id
         */

        /**
         * Constructs a new DisableMenuWidgetRet.
         * @memberof dto
         * @classdesc Represents a DisableMenuWidgetRet.
         * @implements IDisableMenuWidgetRet
         * @constructor
         * @param {dto.IDisableMenuWidgetRet=} [properties] Properties to set
         */
        function DisableMenuWidgetRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisableMenuWidgetRet id.
         * @member {string} id
         * @memberof dto.DisableMenuWidgetRet
         * @instance
         */
        DisableMenuWidgetRet.prototype.id = "";

        /**
         * Creates a new DisableMenuWidgetRet instance using the specified properties.
         * @function create
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {dto.IDisableMenuWidgetRet=} [properties] Properties to set
         * @returns {dto.DisableMenuWidgetRet} DisableMenuWidgetRet instance
         */
        DisableMenuWidgetRet.create = function create(properties) {
            return new DisableMenuWidgetRet(properties);
        };

        /**
         * Encodes the specified DisableMenuWidgetRet message. Does not implicitly {@link dto.DisableMenuWidgetRet.verify|verify} messages.
         * @function encode
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {dto.IDisableMenuWidgetRet} message DisableMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableMenuWidgetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DisableMenuWidgetRet message, length delimited. Does not implicitly {@link dto.DisableMenuWidgetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {dto.IDisableMenuWidgetRet} message DisableMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableMenuWidgetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisableMenuWidgetRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DisableMenuWidgetRet} DisableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableMenuWidgetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DisableMenuWidgetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisableMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DisableMenuWidgetRet} DisableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableMenuWidgetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisableMenuWidgetRet message.
         * @function verify
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisableMenuWidgetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DisableMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DisableMenuWidgetRet} DisableMenuWidgetRet
         */
        DisableMenuWidgetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DisableMenuWidgetRet)
                return object;
            var message = new $root.dto.DisableMenuWidgetRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DisableMenuWidgetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {dto.DisableMenuWidgetRet} message DisableMenuWidgetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisableMenuWidgetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DisableMenuWidgetRet to JSON.
         * @function toJSON
         * @memberof dto.DisableMenuWidgetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisableMenuWidgetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DisableMenuWidgetRet
         * @function getTypeUrl
         * @memberof dto.DisableMenuWidgetRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DisableMenuWidgetRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.DisableMenuWidgetRet";
        };

        return DisableMenuWidgetRet;
    })();

    dto.RemoveMenuWidgetRet = (function() {

        /**
         * Properties of a RemoveMenuWidgetRet.
         * @memberof dto
         * @interface IRemoveMenuWidgetRet
         * @property {string|null} [id] RemoveMenuWidgetRet id
         */

        /**
         * Constructs a new RemoveMenuWidgetRet.
         * @memberof dto
         * @classdesc Represents a RemoveMenuWidgetRet.
         * @implements IRemoveMenuWidgetRet
         * @constructor
         * @param {dto.IRemoveMenuWidgetRet=} [properties] Properties to set
         */
        function RemoveMenuWidgetRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveMenuWidgetRet id.
         * @member {string} id
         * @memberof dto.RemoveMenuWidgetRet
         * @instance
         */
        RemoveMenuWidgetRet.prototype.id = "";

        /**
         * Creates a new RemoveMenuWidgetRet instance using the specified properties.
         * @function create
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {dto.IRemoveMenuWidgetRet=} [properties] Properties to set
         * @returns {dto.RemoveMenuWidgetRet} RemoveMenuWidgetRet instance
         */
        RemoveMenuWidgetRet.create = function create(properties) {
            return new RemoveMenuWidgetRet(properties);
        };

        /**
         * Encodes the specified RemoveMenuWidgetRet message. Does not implicitly {@link dto.RemoveMenuWidgetRet.verify|verify} messages.
         * @function encode
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {dto.IRemoveMenuWidgetRet} message RemoveMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMenuWidgetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified RemoveMenuWidgetRet message, length delimited. Does not implicitly {@link dto.RemoveMenuWidgetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {dto.IRemoveMenuWidgetRet} message RemoveMenuWidgetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveMenuWidgetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveMenuWidgetRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RemoveMenuWidgetRet} RemoveMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveMenuWidgetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RemoveMenuWidgetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RemoveMenuWidgetRet} RemoveMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveMenuWidgetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveMenuWidgetRet message.
         * @function verify
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveMenuWidgetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a RemoveMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RemoveMenuWidgetRet} RemoveMenuWidgetRet
         */
        RemoveMenuWidgetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RemoveMenuWidgetRet)
                return object;
            var message = new $root.dto.RemoveMenuWidgetRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a RemoveMenuWidgetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {dto.RemoveMenuWidgetRet} message RemoveMenuWidgetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveMenuWidgetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this RemoveMenuWidgetRet to JSON.
         * @function toJSON
         * @memberof dto.RemoveMenuWidgetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveMenuWidgetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveMenuWidgetRet
         * @function getTypeUrl
         * @memberof dto.RemoveMenuWidgetRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveMenuWidgetRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RemoveMenuWidgetRet";
        };

        return RemoveMenuWidgetRet;
    })();

    dto.AddRoleReq = (function() {

        /**
         * Properties of an AddRoleReq.
         * @memberof dto
         * @interface IAddRoleReq
         * @property {string|null} [name] AddRoleReq name
         * @property {Array.<string>|null} [alias] AddRoleReq alias
         * @property {number|null} [seq] AddRoleReq seq
         * @property {string|null} [icon] AddRoleReq icon
         * @property {string|null} [memo] AddRoleReq memo
         */

        /**
         * Constructs a new AddRoleReq.
         * @memberof dto
         * @classdesc Represents an AddRoleReq.
         * @implements IAddRoleReq
         * @constructor
         * @param {dto.IAddRoleReq=} [properties] Properties to set
         */
        function AddRoleReq(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddRoleReq name.
         * @member {string} name
         * @memberof dto.AddRoleReq
         * @instance
         */
        AddRoleReq.prototype.name = "";

        /**
         * AddRoleReq alias.
         * @member {Array.<string>} alias
         * @memberof dto.AddRoleReq
         * @instance
         */
        AddRoleReq.prototype.alias = $util.emptyArray;

        /**
         * AddRoleReq seq.
         * @member {number} seq
         * @memberof dto.AddRoleReq
         * @instance
         */
        AddRoleReq.prototype.seq = 0;

        /**
         * AddRoleReq icon.
         * @member {string} icon
         * @memberof dto.AddRoleReq
         * @instance
         */
        AddRoleReq.prototype.icon = "";

        /**
         * AddRoleReq memo.
         * @member {string} memo
         * @memberof dto.AddRoleReq
         * @instance
         */
        AddRoleReq.prototype.memo = "";

        /**
         * Creates a new AddRoleReq instance using the specified properties.
         * @function create
         * @memberof dto.AddRoleReq
         * @static
         * @param {dto.IAddRoleReq=} [properties] Properties to set
         * @returns {dto.AddRoleReq} AddRoleReq instance
         */
        AddRoleReq.create = function create(properties) {
            return new AddRoleReq(properties);
        };

        /**
         * Encodes the specified AddRoleReq message. Does not implicitly {@link dto.AddRoleReq.verify|verify} messages.
         * @function encode
         * @memberof dto.AddRoleReq
         * @static
         * @param {dto.IAddRoleReq} message AddRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRoleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified AddRoleReq message, length delimited. Does not implicitly {@link dto.AddRoleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddRoleReq
         * @static
         * @param {dto.IAddRoleReq} message AddRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRoleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddRoleReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddRoleReq} AddRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRoleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddRoleReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.memo = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddRoleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddRoleReq} AddRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRoleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddRoleReq message.
         * @function verify
         * @memberof dto.AddRoleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddRoleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates an AddRoleReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddRoleReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddRoleReq} AddRoleReq
         */
        AddRoleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddRoleReq)
                return object;
            var message = new $root.dto.AddRoleReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.AddRoleReq.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from an AddRoleReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddRoleReq
         * @static
         * @param {dto.AddRoleReq} message AddRoleReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddRoleReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this AddRoleReq to JSON.
         * @function toJSON
         * @memberof dto.AddRoleReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddRoleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddRoleReq
         * @function getTypeUrl
         * @memberof dto.AddRoleReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddRoleReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddRoleReq";
        };

        return AddRoleReq;
    })();

    dto.AddRoleRet = (function() {

        /**
         * Properties of an AddRoleRet.
         * @memberof dto
         * @interface IAddRoleRet
         * @property {string|null} [id] AddRoleRet id
         */

        /**
         * Constructs a new AddRoleRet.
         * @memberof dto
         * @classdesc Represents an AddRoleRet.
         * @implements IAddRoleRet
         * @constructor
         * @param {dto.IAddRoleRet=} [properties] Properties to set
         */
        function AddRoleRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddRoleRet id.
         * @member {string} id
         * @memberof dto.AddRoleRet
         * @instance
         */
        AddRoleRet.prototype.id = "";

        /**
         * Creates a new AddRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.AddRoleRet
         * @static
         * @param {dto.IAddRoleRet=} [properties] Properties to set
         * @returns {dto.AddRoleRet} AddRoleRet instance
         */
        AddRoleRet.create = function create(properties) {
            return new AddRoleRet(properties);
        };

        /**
         * Encodes the specified AddRoleRet message. Does not implicitly {@link dto.AddRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.AddRoleRet
         * @static
         * @param {dto.IAddRoleRet} message AddRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AddRoleRet message, length delimited. Does not implicitly {@link dto.AddRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddRoleRet
         * @static
         * @param {dto.IAddRoleRet} message AddRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddRoleRet} AddRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddRoleRet} AddRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddRoleRet message.
         * @function verify
         * @memberof dto.AddRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AddRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddRoleRet} AddRoleRet
         */
        AddRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddRoleRet)
                return object;
            var message = new $root.dto.AddRoleRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AddRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddRoleRet
         * @static
         * @param {dto.AddRoleRet} message AddRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AddRoleRet to JSON.
         * @function toJSON
         * @memberof dto.AddRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddRoleRet
         * @function getTypeUrl
         * @memberof dto.AddRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddRoleRet";
        };

        return AddRoleRet;
    })();

    dto.RoleListElem = (function() {

        /**
         * Properties of a RoleListElem.
         * @memberof dto
         * @interface IRoleListElem
         * @property {string|null} [id] RoleListElem id
         * @property {string|null} [name] RoleListElem name
         * @property {Array.<string>|null} [alias] RoleListElem alias
         * @property {number|null} [seq] RoleListElem seq
         * @property {string|null} [icon] RoleListElem icon
         * @property {string|null} [memo] RoleListElem memo
         * @property {Array.<string>|null} [domainIds] RoleListElem domainIds
         * @property {Array.<string>|null} [domainNames] RoleListElem domainNames
         * @property {string|null} [createdBy] RoleListElem createdBy
         * @property {string|null} [createdAt] RoleListElem createdAt
         * @property {string|null} [updatedBy] RoleListElem updatedBy
         * @property {string|null} [updatedAt] RoleListElem updatedAt
         * @property {string|null} [deletedBy] RoleListElem deletedBy
         * @property {string|null} [deletedAt] RoleListElem deletedAt
         */

        /**
         * Constructs a new RoleListElem.
         * @memberof dto
         * @classdesc Represents a RoleListElem.
         * @implements IRoleListElem
         * @constructor
         * @param {dto.IRoleListElem=} [properties] Properties to set
         */
        function RoleListElem(properties) {
            this.alias = [];
            this.domainIds = [];
            this.domainNames = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleListElem id.
         * @member {string} id
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.id = "";

        /**
         * RoleListElem name.
         * @member {string} name
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.name = "";

        /**
         * RoleListElem alias.
         * @member {Array.<string>} alias
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.alias = $util.emptyArray;

        /**
         * RoleListElem seq.
         * @member {number} seq
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.seq = 0;

        /**
         * RoleListElem icon.
         * @member {string} icon
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.icon = "";

        /**
         * RoleListElem memo.
         * @member {string} memo
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.memo = "";

        /**
         * RoleListElem domainIds.
         * @member {Array.<string>} domainIds
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.domainIds = $util.emptyArray;

        /**
         * RoleListElem domainNames.
         * @member {Array.<string>} domainNames
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.domainNames = $util.emptyArray;

        /**
         * RoleListElem createdBy.
         * @member {string} createdBy
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.createdBy = "";

        /**
         * RoleListElem createdAt.
         * @member {string} createdAt
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.createdAt = "";

        /**
         * RoleListElem updatedBy.
         * @member {string} updatedBy
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.updatedBy = "";

        /**
         * RoleListElem updatedAt.
         * @member {string} updatedAt
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.updatedAt = "";

        /**
         * RoleListElem deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.deletedBy = null;

        /**
         * RoleListElem deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.RoleListElem
         * @instance
         */
        RoleListElem.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RoleListElem _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.RoleListElem
         * @instance
         */
        Object.defineProperty(RoleListElem.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * RoleListElem _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.RoleListElem
         * @instance
         */
        Object.defineProperty(RoleListElem.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RoleListElem instance using the specified properties.
         * @function create
         * @memberof dto.RoleListElem
         * @static
         * @param {dto.IRoleListElem=} [properties] Properties to set
         * @returns {dto.RoleListElem} RoleListElem instance
         */
        RoleListElem.create = function create(properties) {
            return new RoleListElem(properties);
        };

        /**
         * Encodes the specified RoleListElem message. Does not implicitly {@link dto.RoleListElem.verify|verify} messages.
         * @function encode
         * @memberof dto.RoleListElem
         * @static
         * @param {dto.IRoleListElem} message RoleListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleListElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.domainIds != null && message.domainIds.length)
                for (var i = 0; i < message.domainIds.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.domainIds[i]);
            if (message.domainNames != null && message.domainNames.length)
                for (var i = 0; i < message.domainNames.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.domainNames[i]);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified RoleListElem message, length delimited. Does not implicitly {@link dto.RoleListElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RoleListElem
         * @static
         * @param {dto.IRoleListElem} message RoleListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleListElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleListElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RoleListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RoleListElem} RoleListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleListElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RoleListElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 4: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 5: {
                        message.icon = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        if (!(message.domainIds && message.domainIds.length))
                            message.domainIds = [];
                        message.domainIds.push(reader.string());
                        break;
                    }
                case 8: {
                        if (!(message.domainNames && message.domainNames.length))
                            message.domainNames = [];
                        message.domainNames.push(reader.string());
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleListElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RoleListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RoleListElem} RoleListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleListElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleListElem message.
         * @function verify
         * @memberof dto.RoleListElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleListElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.domainIds != null && message.hasOwnProperty("domainIds")) {
                if (!Array.isArray(message.domainIds))
                    return "domainIds: array expected";
                for (var i = 0; i < message.domainIds.length; ++i)
                    if (!$util.isString(message.domainIds[i]))
                        return "domainIds: string[] expected";
            }
            if (message.domainNames != null && message.hasOwnProperty("domainNames")) {
                if (!Array.isArray(message.domainNames))
                    return "domainNames: array expected";
                for (var i = 0; i < message.domainNames.length; ++i)
                    if (!$util.isString(message.domainNames[i]))
                        return "domainNames: string[] expected";
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a RoleListElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RoleListElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RoleListElem} RoleListElem
         */
        RoleListElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RoleListElem)
                return object;
            var message = new $root.dto.RoleListElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.RoleListElem.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.domainIds) {
                if (!Array.isArray(object.domainIds))
                    throw TypeError(".dto.RoleListElem.domainIds: array expected");
                message.domainIds = [];
                for (var i = 0; i < object.domainIds.length; ++i)
                    message.domainIds[i] = String(object.domainIds[i]);
            }
            if (object.domainNames) {
                if (!Array.isArray(object.domainNames))
                    throw TypeError(".dto.RoleListElem.domainNames: array expected");
                message.domainNames = [];
                for (var i = 0; i < object.domainNames.length; ++i)
                    message.domainNames[i] = String(object.domainNames[i]);
            }
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a RoleListElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RoleListElem
         * @static
         * @param {dto.RoleListElem} message RoleListElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleListElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.alias = [];
                object.domainIds = [];
                object.domainNames = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.domainIds && message.domainIds.length) {
                object.domainIds = [];
                for (var j = 0; j < message.domainIds.length; ++j)
                    object.domainIds[j] = message.domainIds[j];
            }
            if (message.domainNames && message.domainNames.length) {
                object.domainNames = [];
                for (var j = 0; j < message.domainNames.length; ++j)
                    object.domainNames[j] = message.domainNames[j];
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this RoleListElem to JSON.
         * @function toJSON
         * @memberof dto.RoleListElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleListElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoleListElem
         * @function getTypeUrl
         * @memberof dto.RoleListElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoleListElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RoleListElem";
        };

        return RoleListElem;
    })();

    dto.ListRoleRet = (function() {

        /**
         * Properties of a ListRoleRet.
         * @memberof dto
         * @interface IListRoleRet
         * @property {Array.<dto.IRoleListElem>|null} [list] ListRoleRet list
         * @property {number|Long|null} [total] ListRoleRet total
         */

        /**
         * Constructs a new ListRoleRet.
         * @memberof dto
         * @classdesc Represents a ListRoleRet.
         * @implements IListRoleRet
         * @constructor
         * @param {dto.IListRoleRet=} [properties] Properties to set
         */
        function ListRoleRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRoleRet list.
         * @member {Array.<dto.IRoleListElem>} list
         * @memberof dto.ListRoleRet
         * @instance
         */
        ListRoleRet.prototype.list = $util.emptyArray;

        /**
         * ListRoleRet total.
         * @member {number|Long} total
         * @memberof dto.ListRoleRet
         * @instance
         */
        ListRoleRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ListRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.ListRoleRet
         * @static
         * @param {dto.IListRoleRet=} [properties] Properties to set
         * @returns {dto.ListRoleRet} ListRoleRet instance
         */
        ListRoleRet.create = function create(properties) {
            return new ListRoleRet(properties);
        };

        /**
         * Encodes the specified ListRoleRet message. Does not implicitly {@link dto.ListRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ListRoleRet
         * @static
         * @param {dto.IListRoleRet} message ListRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.RoleListElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified ListRoleRet message, length delimited. Does not implicitly {@link dto.ListRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListRoleRet
         * @static
         * @param {dto.IListRoleRet} message ListRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListRoleRet} ListRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.RoleListElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListRoleRet} ListRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListRoleRet message.
         * @function verify
         * @memberof dto.ListRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.RoleListElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a ListRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListRoleRet} ListRoleRet
         */
        ListRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListRoleRet)
                return object;
            var message = new $root.dto.ListRoleRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.ListRoleRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.ListRoleRet.list: object expected");
                    message.list[i] = $root.dto.RoleListElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ListRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListRoleRet
         * @static
         * @param {dto.ListRoleRet} message ListRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.RoleListElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this ListRoleRet to JSON.
         * @function toJSON
         * @memberof dto.ListRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListRoleRet
         * @function getTypeUrl
         * @memberof dto.ListRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListRoleRet";
        };

        return ListRoleRet;
    })();

    dto.ProfileRoleRet = (function() {

        /**
         * Properties of a ProfileRoleRet.
         * @memberof dto
         * @interface IProfileRoleRet
         * @property {string|null} [id] ProfileRoleRet id
         * @property {string|null} [name] ProfileRoleRet name
         * @property {Array.<string>|null} [alias] ProfileRoleRet alias
         * @property {number|null} [seq] ProfileRoleRet seq
         * @property {string|null} [icon] ProfileRoleRet icon
         * @property {string|null} [memo] ProfileRoleRet memo
         * @property {string|null} [createdBy] ProfileRoleRet createdBy
         * @property {string|null} [createdAt] ProfileRoleRet createdAt
         * @property {string|null} [updatedBy] ProfileRoleRet updatedBy
         * @property {string|null} [updatedAt] ProfileRoleRet updatedAt
         * @property {string|null} [deletedBy] ProfileRoleRet deletedBy
         * @property {string|null} [deletedAt] ProfileRoleRet deletedAt
         */

        /**
         * Constructs a new ProfileRoleRet.
         * @memberof dto
         * @classdesc Represents a ProfileRoleRet.
         * @implements IProfileRoleRet
         * @constructor
         * @param {dto.IProfileRoleRet=} [properties] Properties to set
         */
        function ProfileRoleRet(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileRoleRet id.
         * @member {string} id
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.id = "";

        /**
         * ProfileRoleRet name.
         * @member {string} name
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.name = "";

        /**
         * ProfileRoleRet alias.
         * @member {Array.<string>} alias
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.alias = $util.emptyArray;

        /**
         * ProfileRoleRet seq.
         * @member {number} seq
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.seq = 0;

        /**
         * ProfileRoleRet icon.
         * @member {string} icon
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.icon = "";

        /**
         * ProfileRoleRet memo.
         * @member {string} memo
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.memo = "";

        /**
         * ProfileRoleRet createdBy.
         * @member {string} createdBy
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.createdBy = "";

        /**
         * ProfileRoleRet createdAt.
         * @member {string} createdAt
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.createdAt = "";

        /**
         * ProfileRoleRet updatedBy.
         * @member {string} updatedBy
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.updatedBy = "";

        /**
         * ProfileRoleRet updatedAt.
         * @member {string} updatedAt
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.updatedAt = "";

        /**
         * ProfileRoleRet deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.deletedBy = null;

        /**
         * ProfileRoleRet deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        ProfileRoleRet.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ProfileRoleRet _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        Object.defineProperty(ProfileRoleRet.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ProfileRoleRet _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.ProfileRoleRet
         * @instance
         */
        Object.defineProperty(ProfileRoleRet.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProfileRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {dto.IProfileRoleRet=} [properties] Properties to set
         * @returns {dto.ProfileRoleRet} ProfileRoleRet instance
         */
        ProfileRoleRet.create = function create(properties) {
            return new ProfileRoleRet(properties);
        };

        /**
         * Encodes the specified ProfileRoleRet message. Does not implicitly {@link dto.ProfileRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {dto.IProfileRoleRet} message ProfileRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified ProfileRoleRet message, length delimited. Does not implicitly {@link dto.ProfileRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {dto.IProfileRoleRet} message ProfileRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProfileRoleRet} ProfileRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProfileRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 4: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 5: {
                        message.icon = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProfileRoleRet} ProfileRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileRoleRet message.
         * @function verify
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a ProfileRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProfileRoleRet} ProfileRoleRet
         */
        ProfileRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProfileRoleRet)
                return object;
            var message = new $root.dto.ProfileRoleRet();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.ProfileRoleRet.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a ProfileRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {dto.ProfileRoleRet} message ProfileRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this ProfileRoleRet to JSON.
         * @function toJSON
         * @memberof dto.ProfileRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfileRoleRet
         * @function getTypeUrl
         * @memberof dto.ProfileRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfileRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ProfileRoleRet";
        };

        return ProfileRoleRet;
    })();

    dto.EditRoleReq = (function() {

        /**
         * Properties of an EditRoleReq.
         * @memberof dto
         * @interface IEditRoleReq
         * @property {string|null} [name] EditRoleReq name
         * @property {Array.<string>|null} [alias] EditRoleReq alias
         * @property {number|null} [seq] EditRoleReq seq
         * @property {string|null} [icon] EditRoleReq icon
         * @property {string|null} [memo] EditRoleReq memo
         */

        /**
         * Constructs a new EditRoleReq.
         * @memberof dto
         * @classdesc Represents an EditRoleReq.
         * @implements IEditRoleReq
         * @constructor
         * @param {dto.IEditRoleReq=} [properties] Properties to set
         */
        function EditRoleReq(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditRoleReq name.
         * @member {string} name
         * @memberof dto.EditRoleReq
         * @instance
         */
        EditRoleReq.prototype.name = "";

        /**
         * EditRoleReq alias.
         * @member {Array.<string>} alias
         * @memberof dto.EditRoleReq
         * @instance
         */
        EditRoleReq.prototype.alias = $util.emptyArray;

        /**
         * EditRoleReq seq.
         * @member {number} seq
         * @memberof dto.EditRoleReq
         * @instance
         */
        EditRoleReq.prototype.seq = 0;

        /**
         * EditRoleReq icon.
         * @member {string} icon
         * @memberof dto.EditRoleReq
         * @instance
         */
        EditRoleReq.prototype.icon = "";

        /**
         * EditRoleReq memo.
         * @member {string} memo
         * @memberof dto.EditRoleReq
         * @instance
         */
        EditRoleReq.prototype.memo = "";

        /**
         * Creates a new EditRoleReq instance using the specified properties.
         * @function create
         * @memberof dto.EditRoleReq
         * @static
         * @param {dto.IEditRoleReq=} [properties] Properties to set
         * @returns {dto.EditRoleReq} EditRoleReq instance
         */
        EditRoleReq.create = function create(properties) {
            return new EditRoleReq(properties);
        };

        /**
         * Encodes the specified EditRoleReq message. Does not implicitly {@link dto.EditRoleReq.verify|verify} messages.
         * @function encode
         * @memberof dto.EditRoleReq
         * @static
         * @param {dto.IEditRoleReq} message EditRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditRoleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias[i]);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified EditRoleReq message, length delimited. Does not implicitly {@link dto.EditRoleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditRoleReq
         * @static
         * @param {dto.IEditRoleReq} message EditRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditRoleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditRoleReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditRoleReq} EditRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditRoleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditRoleReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.memo = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditRoleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditRoleReq} EditRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditRoleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditRoleReq message.
         * @function verify
         * @memberof dto.EditRoleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditRoleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates an EditRoleReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditRoleReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditRoleReq} EditRoleReq
         */
        EditRoleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditRoleReq)
                return object;
            var message = new $root.dto.EditRoleReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.EditRoleReq.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from an EditRoleReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditRoleReq
         * @static
         * @param {dto.EditRoleReq} message EditRoleReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditRoleReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.memo = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this EditRoleReq to JSON.
         * @function toJSON
         * @memberof dto.EditRoleReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditRoleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditRoleReq
         * @function getTypeUrl
         * @memberof dto.EditRoleReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditRoleReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditRoleReq";
        };

        return EditRoleReq;
    })();

    dto.EditRoleRet = (function() {

        /**
         * Properties of an EditRoleRet.
         * @memberof dto
         * @interface IEditRoleRet
         * @property {string|null} [id] EditRoleRet id
         */

        /**
         * Constructs a new EditRoleRet.
         * @memberof dto
         * @classdesc Represents an EditRoleRet.
         * @implements IEditRoleRet
         * @constructor
         * @param {dto.IEditRoleRet=} [properties] Properties to set
         */
        function EditRoleRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditRoleRet id.
         * @member {string} id
         * @memberof dto.EditRoleRet
         * @instance
         */
        EditRoleRet.prototype.id = "";

        /**
         * Creates a new EditRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.EditRoleRet
         * @static
         * @param {dto.IEditRoleRet=} [properties] Properties to set
         * @returns {dto.EditRoleRet} EditRoleRet instance
         */
        EditRoleRet.create = function create(properties) {
            return new EditRoleRet(properties);
        };

        /**
         * Encodes the specified EditRoleRet message. Does not implicitly {@link dto.EditRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EditRoleRet
         * @static
         * @param {dto.IEditRoleRet} message EditRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EditRoleRet message, length delimited. Does not implicitly {@link dto.EditRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditRoleRet
         * @static
         * @param {dto.IEditRoleRet} message EditRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditRoleRet} EditRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditRoleRet} EditRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditRoleRet message.
         * @function verify
         * @memberof dto.EditRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EditRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditRoleRet} EditRoleRet
         */
        EditRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditRoleRet)
                return object;
            var message = new $root.dto.EditRoleRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EditRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditRoleRet
         * @static
         * @param {dto.EditRoleRet} message EditRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EditRoleRet to JSON.
         * @function toJSON
         * @memberof dto.EditRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditRoleRet
         * @function getTypeUrl
         * @memberof dto.EditRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditRoleRet";
        };

        return EditRoleRet;
    })();

    dto.RoleDomainsRet = (function() {

        /**
         * Properties of a RoleDomainsRet.
         * @memberof dto
         * @interface IRoleDomainsRet
         * @property {Array.<string>|null} [domainIds] RoleDomainsRet domainIds
         */

        /**
         * Constructs a new RoleDomainsRet.
         * @memberof dto
         * @classdesc Represents a RoleDomainsRet.
         * @implements IRoleDomainsRet
         * @constructor
         * @param {dto.IRoleDomainsRet=} [properties] Properties to set
         */
        function RoleDomainsRet(properties) {
            this.domainIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleDomainsRet domainIds.
         * @member {Array.<string>} domainIds
         * @memberof dto.RoleDomainsRet
         * @instance
         */
        RoleDomainsRet.prototype.domainIds = $util.emptyArray;

        /**
         * Creates a new RoleDomainsRet instance using the specified properties.
         * @function create
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {dto.IRoleDomainsRet=} [properties] Properties to set
         * @returns {dto.RoleDomainsRet} RoleDomainsRet instance
         */
        RoleDomainsRet.create = function create(properties) {
            return new RoleDomainsRet(properties);
        };

        /**
         * Encodes the specified RoleDomainsRet message. Does not implicitly {@link dto.RoleDomainsRet.verify|verify} messages.
         * @function encode
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {dto.IRoleDomainsRet} message RoleDomainsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleDomainsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.domainIds != null && message.domainIds.length)
                for (var i = 0; i < message.domainIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.domainIds[i]);
            return writer;
        };

        /**
         * Encodes the specified RoleDomainsRet message, length delimited. Does not implicitly {@link dto.RoleDomainsRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {dto.IRoleDomainsRet} message RoleDomainsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleDomainsRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleDomainsRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RoleDomainsRet} RoleDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleDomainsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RoleDomainsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.domainIds && message.domainIds.length))
                            message.domainIds = [];
                        message.domainIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleDomainsRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RoleDomainsRet} RoleDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleDomainsRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleDomainsRet message.
         * @function verify
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleDomainsRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.domainIds != null && message.hasOwnProperty("domainIds")) {
                if (!Array.isArray(message.domainIds))
                    return "domainIds: array expected";
                for (var i = 0; i < message.domainIds.length; ++i)
                    if (!$util.isString(message.domainIds[i]))
                        return "domainIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RoleDomainsRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RoleDomainsRet} RoleDomainsRet
         */
        RoleDomainsRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RoleDomainsRet)
                return object;
            var message = new $root.dto.RoleDomainsRet();
            if (object.domainIds) {
                if (!Array.isArray(object.domainIds))
                    throw TypeError(".dto.RoleDomainsRet.domainIds: array expected");
                message.domainIds = [];
                for (var i = 0; i < object.domainIds.length; ++i)
                    message.domainIds[i] = String(object.domainIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoleDomainsRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {dto.RoleDomainsRet} message RoleDomainsRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleDomainsRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.domainIds = [];
            if (message.domainIds && message.domainIds.length) {
                object.domainIds = [];
                for (var j = 0; j < message.domainIds.length; ++j)
                    object.domainIds[j] = message.domainIds[j];
            }
            return object;
        };

        /**
         * Converts this RoleDomainsRet to JSON.
         * @function toJSON
         * @memberof dto.RoleDomainsRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleDomainsRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoleDomainsRet
         * @function getTypeUrl
         * @memberof dto.RoleDomainsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoleDomainsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RoleDomainsRet";
        };

        return RoleDomainsRet;
    })();

    dto.RoleAuthoritiesRet = (function() {

        /**
         * Properties of a RoleAuthoritiesRet.
         * @memberof dto
         * @interface IRoleAuthoritiesRet
         * @property {Array.<string>|null} [menuIds] RoleAuthoritiesRet menuIds
         * @property {Array.<string>|null} [widgetIds] RoleAuthoritiesRet widgetIds
         */

        /**
         * Constructs a new RoleAuthoritiesRet.
         * @memberof dto
         * @classdesc Represents a RoleAuthoritiesRet.
         * @implements IRoleAuthoritiesRet
         * @constructor
         * @param {dto.IRoleAuthoritiesRet=} [properties] Properties to set
         */
        function RoleAuthoritiesRet(properties) {
            this.menuIds = [];
            this.widgetIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleAuthoritiesRet menuIds.
         * @member {Array.<string>} menuIds
         * @memberof dto.RoleAuthoritiesRet
         * @instance
         */
        RoleAuthoritiesRet.prototype.menuIds = $util.emptyArray;

        /**
         * RoleAuthoritiesRet widgetIds.
         * @member {Array.<string>} widgetIds
         * @memberof dto.RoleAuthoritiesRet
         * @instance
         */
        RoleAuthoritiesRet.prototype.widgetIds = $util.emptyArray;

        /**
         * Creates a new RoleAuthoritiesRet instance using the specified properties.
         * @function create
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {dto.IRoleAuthoritiesRet=} [properties] Properties to set
         * @returns {dto.RoleAuthoritiesRet} RoleAuthoritiesRet instance
         */
        RoleAuthoritiesRet.create = function create(properties) {
            return new RoleAuthoritiesRet(properties);
        };

        /**
         * Encodes the specified RoleAuthoritiesRet message. Does not implicitly {@link dto.RoleAuthoritiesRet.verify|verify} messages.
         * @function encode
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {dto.IRoleAuthoritiesRet} message RoleAuthoritiesRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleAuthoritiesRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.menuIds != null && message.menuIds.length)
                for (var i = 0; i < message.menuIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.menuIds[i]);
            if (message.widgetIds != null && message.widgetIds.length)
                for (var i = 0; i < message.widgetIds.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.widgetIds[i]);
            return writer;
        };

        /**
         * Encodes the specified RoleAuthoritiesRet message, length delimited. Does not implicitly {@link dto.RoleAuthoritiesRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {dto.IRoleAuthoritiesRet} message RoleAuthoritiesRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleAuthoritiesRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleAuthoritiesRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RoleAuthoritiesRet} RoleAuthoritiesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleAuthoritiesRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RoleAuthoritiesRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.menuIds && message.menuIds.length))
                            message.menuIds = [];
                        message.menuIds.push(reader.string());
                        break;
                    }
                case 2: {
                        if (!(message.widgetIds && message.widgetIds.length))
                            message.widgetIds = [];
                        message.widgetIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleAuthoritiesRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RoleAuthoritiesRet} RoleAuthoritiesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleAuthoritiesRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleAuthoritiesRet message.
         * @function verify
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleAuthoritiesRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.menuIds != null && message.hasOwnProperty("menuIds")) {
                if (!Array.isArray(message.menuIds))
                    return "menuIds: array expected";
                for (var i = 0; i < message.menuIds.length; ++i)
                    if (!$util.isString(message.menuIds[i]))
                        return "menuIds: string[] expected";
            }
            if (message.widgetIds != null && message.hasOwnProperty("widgetIds")) {
                if (!Array.isArray(message.widgetIds))
                    return "widgetIds: array expected";
                for (var i = 0; i < message.widgetIds.length; ++i)
                    if (!$util.isString(message.widgetIds[i]))
                        return "widgetIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RoleAuthoritiesRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RoleAuthoritiesRet} RoleAuthoritiesRet
         */
        RoleAuthoritiesRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RoleAuthoritiesRet)
                return object;
            var message = new $root.dto.RoleAuthoritiesRet();
            if (object.menuIds) {
                if (!Array.isArray(object.menuIds))
                    throw TypeError(".dto.RoleAuthoritiesRet.menuIds: array expected");
                message.menuIds = [];
                for (var i = 0; i < object.menuIds.length; ++i)
                    message.menuIds[i] = String(object.menuIds[i]);
            }
            if (object.widgetIds) {
                if (!Array.isArray(object.widgetIds))
                    throw TypeError(".dto.RoleAuthoritiesRet.widgetIds: array expected");
                message.widgetIds = [];
                for (var i = 0; i < object.widgetIds.length; ++i)
                    message.widgetIds[i] = String(object.widgetIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoleAuthoritiesRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {dto.RoleAuthoritiesRet} message RoleAuthoritiesRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleAuthoritiesRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.menuIds = [];
                object.widgetIds = [];
            }
            if (message.menuIds && message.menuIds.length) {
                object.menuIds = [];
                for (var j = 0; j < message.menuIds.length; ++j)
                    object.menuIds[j] = message.menuIds[j];
            }
            if (message.widgetIds && message.widgetIds.length) {
                object.widgetIds = [];
                for (var j = 0; j < message.widgetIds.length; ++j)
                    object.widgetIds[j] = message.widgetIds[j];
            }
            return object;
        };

        /**
         * Converts this RoleAuthoritiesRet to JSON.
         * @function toJSON
         * @memberof dto.RoleAuthoritiesRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleAuthoritiesRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoleAuthoritiesRet
         * @function getTypeUrl
         * @memberof dto.RoleAuthoritiesRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoleAuthoritiesRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RoleAuthoritiesRet";
        };

        return RoleAuthoritiesRet;
    })();

    dto.AuthorizeRoleReq = (function() {

        /**
         * Properties of an AuthorizeRoleReq.
         * @memberof dto
         * @interface IAuthorizeRoleReq
         * @property {Array.<string>|null} [menuIds] AuthorizeRoleReq menuIds
         * @property {Array.<string>|null} [widgetIds] AuthorizeRoleReq widgetIds
         */

        /**
         * Constructs a new AuthorizeRoleReq.
         * @memberof dto
         * @classdesc Represents an AuthorizeRoleReq.
         * @implements IAuthorizeRoleReq
         * @constructor
         * @param {dto.IAuthorizeRoleReq=} [properties] Properties to set
         */
        function AuthorizeRoleReq(properties) {
            this.menuIds = [];
            this.widgetIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthorizeRoleReq menuIds.
         * @member {Array.<string>} menuIds
         * @memberof dto.AuthorizeRoleReq
         * @instance
         */
        AuthorizeRoleReq.prototype.menuIds = $util.emptyArray;

        /**
         * AuthorizeRoleReq widgetIds.
         * @member {Array.<string>} widgetIds
         * @memberof dto.AuthorizeRoleReq
         * @instance
         */
        AuthorizeRoleReq.prototype.widgetIds = $util.emptyArray;

        /**
         * Creates a new AuthorizeRoleReq instance using the specified properties.
         * @function create
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {dto.IAuthorizeRoleReq=} [properties] Properties to set
         * @returns {dto.AuthorizeRoleReq} AuthorizeRoleReq instance
         */
        AuthorizeRoleReq.create = function create(properties) {
            return new AuthorizeRoleReq(properties);
        };

        /**
         * Encodes the specified AuthorizeRoleReq message. Does not implicitly {@link dto.AuthorizeRoleReq.verify|verify} messages.
         * @function encode
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {dto.IAuthorizeRoleReq} message AuthorizeRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeRoleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.menuIds != null && message.menuIds.length)
                for (var i = 0; i < message.menuIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.menuIds[i]);
            if (message.widgetIds != null && message.widgetIds.length)
                for (var i = 0; i < message.widgetIds.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.widgetIds[i]);
            return writer;
        };

        /**
         * Encodes the specified AuthorizeRoleReq message, length delimited. Does not implicitly {@link dto.AuthorizeRoleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {dto.IAuthorizeRoleReq} message AuthorizeRoleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeRoleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthorizeRoleReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AuthorizeRoleReq} AuthorizeRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeRoleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AuthorizeRoleReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.menuIds && message.menuIds.length))
                            message.menuIds = [];
                        message.menuIds.push(reader.string());
                        break;
                    }
                case 2: {
                        if (!(message.widgetIds && message.widgetIds.length))
                            message.widgetIds = [];
                        message.widgetIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthorizeRoleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AuthorizeRoleReq} AuthorizeRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeRoleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthorizeRoleReq message.
         * @function verify
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthorizeRoleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.menuIds != null && message.hasOwnProperty("menuIds")) {
                if (!Array.isArray(message.menuIds))
                    return "menuIds: array expected";
                for (var i = 0; i < message.menuIds.length; ++i)
                    if (!$util.isString(message.menuIds[i]))
                        return "menuIds: string[] expected";
            }
            if (message.widgetIds != null && message.hasOwnProperty("widgetIds")) {
                if (!Array.isArray(message.widgetIds))
                    return "widgetIds: array expected";
                for (var i = 0; i < message.widgetIds.length; ++i)
                    if (!$util.isString(message.widgetIds[i]))
                        return "widgetIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates an AuthorizeRoleReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AuthorizeRoleReq} AuthorizeRoleReq
         */
        AuthorizeRoleReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AuthorizeRoleReq)
                return object;
            var message = new $root.dto.AuthorizeRoleReq();
            if (object.menuIds) {
                if (!Array.isArray(object.menuIds))
                    throw TypeError(".dto.AuthorizeRoleReq.menuIds: array expected");
                message.menuIds = [];
                for (var i = 0; i < object.menuIds.length; ++i)
                    message.menuIds[i] = String(object.menuIds[i]);
            }
            if (object.widgetIds) {
                if (!Array.isArray(object.widgetIds))
                    throw TypeError(".dto.AuthorizeRoleReq.widgetIds: array expected");
                message.widgetIds = [];
                for (var i = 0; i < object.widgetIds.length; ++i)
                    message.widgetIds[i] = String(object.widgetIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AuthorizeRoleReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {dto.AuthorizeRoleReq} message AuthorizeRoleReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthorizeRoleReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.menuIds = [];
                object.widgetIds = [];
            }
            if (message.menuIds && message.menuIds.length) {
                object.menuIds = [];
                for (var j = 0; j < message.menuIds.length; ++j)
                    object.menuIds[j] = message.menuIds[j];
            }
            if (message.widgetIds && message.widgetIds.length) {
                object.widgetIds = [];
                for (var j = 0; j < message.widgetIds.length; ++j)
                    object.widgetIds[j] = message.widgetIds[j];
            }
            return object;
        };

        /**
         * Converts this AuthorizeRoleReq to JSON.
         * @function toJSON
         * @memberof dto.AuthorizeRoleReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthorizeRoleReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthorizeRoleReq
         * @function getTypeUrl
         * @memberof dto.AuthorizeRoleReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthorizeRoleReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AuthorizeRoleReq";
        };

        return AuthorizeRoleReq;
    })();

    dto.AuthorizeRoleRet = (function() {

        /**
         * Properties of an AuthorizeRoleRet.
         * @memberof dto
         * @interface IAuthorizeRoleRet
         * @property {string|null} [id] AuthorizeRoleRet id
         * @property {string|null} [domainId] AuthorizeRoleRet domainId
         */

        /**
         * Constructs a new AuthorizeRoleRet.
         * @memberof dto
         * @classdesc Represents an AuthorizeRoleRet.
         * @implements IAuthorizeRoleRet
         * @constructor
         * @param {dto.IAuthorizeRoleRet=} [properties] Properties to set
         */
        function AuthorizeRoleRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthorizeRoleRet id.
         * @member {string} id
         * @memberof dto.AuthorizeRoleRet
         * @instance
         */
        AuthorizeRoleRet.prototype.id = "";

        /**
         * AuthorizeRoleRet domainId.
         * @member {string} domainId
         * @memberof dto.AuthorizeRoleRet
         * @instance
         */
        AuthorizeRoleRet.prototype.domainId = "";

        /**
         * Creates a new AuthorizeRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {dto.IAuthorizeRoleRet=} [properties] Properties to set
         * @returns {dto.AuthorizeRoleRet} AuthorizeRoleRet instance
         */
        AuthorizeRoleRet.create = function create(properties) {
            return new AuthorizeRoleRet(properties);
        };

        /**
         * Encodes the specified AuthorizeRoleRet message. Does not implicitly {@link dto.AuthorizeRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {dto.IAuthorizeRoleRet} message AuthorizeRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.domainId != null && Object.hasOwnProperty.call(message, "domainId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.domainId);
            return writer;
        };

        /**
         * Encodes the specified AuthorizeRoleRet message, length delimited. Does not implicitly {@link dto.AuthorizeRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {dto.IAuthorizeRoleRet} message AuthorizeRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthorizeRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AuthorizeRoleRet} AuthorizeRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AuthorizeRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.domainId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthorizeRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AuthorizeRoleRet} AuthorizeRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthorizeRoleRet message.
         * @function verify
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthorizeRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.domainId != null && message.hasOwnProperty("domainId"))
                if (!$util.isString(message.domainId))
                    return "domainId: string expected";
            return null;
        };

        /**
         * Creates an AuthorizeRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AuthorizeRoleRet} AuthorizeRoleRet
         */
        AuthorizeRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AuthorizeRoleRet)
                return object;
            var message = new $root.dto.AuthorizeRoleRet();
            if (object.id != null)
                message.id = String(object.id);
            if (object.domainId != null)
                message.domainId = String(object.domainId);
            return message;
        };

        /**
         * Creates a plain object from an AuthorizeRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {dto.AuthorizeRoleRet} message AuthorizeRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthorizeRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.domainId = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.domainId != null && message.hasOwnProperty("domainId"))
                object.domainId = message.domainId;
            return object;
        };

        /**
         * Converts this AuthorizeRoleRet to JSON.
         * @function toJSON
         * @memberof dto.AuthorizeRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthorizeRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthorizeRoleRet
         * @function getTypeUrl
         * @memberof dto.AuthorizeRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthorizeRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AuthorizeRoleRet";
        };

        return AuthorizeRoleRet;
    })();

    dto.EnableRoleRet = (function() {

        /**
         * Properties of an EnableRoleRet.
         * @memberof dto
         * @interface IEnableRoleRet
         * @property {string|null} [id] EnableRoleRet id
         */

        /**
         * Constructs a new EnableRoleRet.
         * @memberof dto
         * @classdesc Represents an EnableRoleRet.
         * @implements IEnableRoleRet
         * @constructor
         * @param {dto.IEnableRoleRet=} [properties] Properties to set
         */
        function EnableRoleRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnableRoleRet id.
         * @member {string} id
         * @memberof dto.EnableRoleRet
         * @instance
         */
        EnableRoleRet.prototype.id = "";

        /**
         * Creates a new EnableRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.EnableRoleRet
         * @static
         * @param {dto.IEnableRoleRet=} [properties] Properties to set
         * @returns {dto.EnableRoleRet} EnableRoleRet instance
         */
        EnableRoleRet.create = function create(properties) {
            return new EnableRoleRet(properties);
        };

        /**
         * Encodes the specified EnableRoleRet message. Does not implicitly {@link dto.EnableRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EnableRoleRet
         * @static
         * @param {dto.IEnableRoleRet} message EnableRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EnableRoleRet message, length delimited. Does not implicitly {@link dto.EnableRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EnableRoleRet
         * @static
         * @param {dto.IEnableRoleRet} message EnableRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnableRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EnableRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EnableRoleRet} EnableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EnableRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnableRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EnableRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EnableRoleRet} EnableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnableRoleRet message.
         * @function verify
         * @memberof dto.EnableRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnableRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EnableRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EnableRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EnableRoleRet} EnableRoleRet
         */
        EnableRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EnableRoleRet)
                return object;
            var message = new $root.dto.EnableRoleRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EnableRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EnableRoleRet
         * @static
         * @param {dto.EnableRoleRet} message EnableRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnableRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EnableRoleRet to JSON.
         * @function toJSON
         * @memberof dto.EnableRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnableRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnableRoleRet
         * @function getTypeUrl
         * @memberof dto.EnableRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnableRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EnableRoleRet";
        };

        return EnableRoleRet;
    })();

    dto.DisableRoleRet = (function() {

        /**
         * Properties of a DisableRoleRet.
         * @memberof dto
         * @interface IDisableRoleRet
         * @property {string|null} [id] DisableRoleRet id
         */

        /**
         * Constructs a new DisableRoleRet.
         * @memberof dto
         * @classdesc Represents a DisableRoleRet.
         * @implements IDisableRoleRet
         * @constructor
         * @param {dto.IDisableRoleRet=} [properties] Properties to set
         */
        function DisableRoleRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisableRoleRet id.
         * @member {string} id
         * @memberof dto.DisableRoleRet
         * @instance
         */
        DisableRoleRet.prototype.id = "";

        /**
         * Creates a new DisableRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.DisableRoleRet
         * @static
         * @param {dto.IDisableRoleRet=} [properties] Properties to set
         * @returns {dto.DisableRoleRet} DisableRoleRet instance
         */
        DisableRoleRet.create = function create(properties) {
            return new DisableRoleRet(properties);
        };

        /**
         * Encodes the specified DisableRoleRet message. Does not implicitly {@link dto.DisableRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.DisableRoleRet
         * @static
         * @param {dto.IDisableRoleRet} message DisableRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DisableRoleRet message, length delimited. Does not implicitly {@link dto.DisableRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DisableRoleRet
         * @static
         * @param {dto.IDisableRoleRet} message DisableRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisableRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DisableRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DisableRoleRet} DisableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DisableRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisableRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DisableRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DisableRoleRet} DisableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisableRoleRet message.
         * @function verify
         * @memberof dto.DisableRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisableRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DisableRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DisableRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DisableRoleRet} DisableRoleRet
         */
        DisableRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DisableRoleRet)
                return object;
            var message = new $root.dto.DisableRoleRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DisableRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DisableRoleRet
         * @static
         * @param {dto.DisableRoleRet} message DisableRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisableRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DisableRoleRet to JSON.
         * @function toJSON
         * @memberof dto.DisableRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisableRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DisableRoleRet
         * @function getTypeUrl
         * @memberof dto.DisableRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DisableRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.DisableRoleRet";
        };

        return DisableRoleRet;
    })();

    dto.RemoveRoleRet = (function() {

        /**
         * Properties of a RemoveRoleRet.
         * @memberof dto
         * @interface IRemoveRoleRet
         * @property {string|null} [id] RemoveRoleRet id
         */

        /**
         * Constructs a new RemoveRoleRet.
         * @memberof dto
         * @classdesc Represents a RemoveRoleRet.
         * @implements IRemoveRoleRet
         * @constructor
         * @param {dto.IRemoveRoleRet=} [properties] Properties to set
         */
        function RemoveRoleRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveRoleRet id.
         * @member {string} id
         * @memberof dto.RemoveRoleRet
         * @instance
         */
        RemoveRoleRet.prototype.id = "";

        /**
         * Creates a new RemoveRoleRet instance using the specified properties.
         * @function create
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {dto.IRemoveRoleRet=} [properties] Properties to set
         * @returns {dto.RemoveRoleRet} RemoveRoleRet instance
         */
        RemoveRoleRet.create = function create(properties) {
            return new RemoveRoleRet(properties);
        };

        /**
         * Encodes the specified RemoveRoleRet message. Does not implicitly {@link dto.RemoveRoleRet.verify|verify} messages.
         * @function encode
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {dto.IRemoveRoleRet} message RemoveRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveRoleRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified RemoveRoleRet message, length delimited. Does not implicitly {@link dto.RemoveRoleRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {dto.IRemoveRoleRet} message RemoveRoleRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveRoleRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveRoleRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RemoveRoleRet} RemoveRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveRoleRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RemoveRoleRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveRoleRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RemoveRoleRet} RemoveRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveRoleRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveRoleRet message.
         * @function verify
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveRoleRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a RemoveRoleRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RemoveRoleRet} RemoveRoleRet
         */
        RemoveRoleRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RemoveRoleRet)
                return object;
            var message = new $root.dto.RemoveRoleRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a RemoveRoleRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {dto.RemoveRoleRet} message RemoveRoleRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveRoleRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this RemoveRoleRet to JSON.
         * @function toJSON
         * @memberof dto.RemoveRoleRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveRoleRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveRoleRet
         * @function getTypeUrl
         * @memberof dto.RemoveRoleRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveRoleRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RemoveRoleRet";
        };

        return RemoveRoleRet;
    })();

    dto.AddStaffReq = (function() {

        /**
         * Properties of an AddStaffReq.
         * @memberof dto
         * @interface IAddStaffReq
         * @property {string|null} [account] AddStaffReq account
         * @property {string|null} [password] AddStaffReq password
         * @property {string|null} [nickName] AddStaffReq nickName
         * @property {string|null} [realName] AddStaffReq realName
         * @property {string|null} [email] AddStaffReq email
         * @property {string|null} [phone] AddStaffReq phone
         * @property {string|null} [gender] AddStaffReq gender
         * @property {string|null} [avatar] AddStaffReq avatar
         * @property {Array.<string>|null} [signInIpWhitelist] AddStaffReq signInIpWhitelist
         */

        /**
         * Constructs a new AddStaffReq.
         * @memberof dto
         * @classdesc Represents an AddStaffReq.
         * @implements IAddStaffReq
         * @constructor
         * @param {dto.IAddStaffReq=} [properties] Properties to set
         */
        function AddStaffReq(properties) {
            this.signInIpWhitelist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddStaffReq account.
         * @member {string} account
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.account = "";

        /**
         * AddStaffReq password.
         * @member {string} password
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.password = "";

        /**
         * AddStaffReq nickName.
         * @member {string} nickName
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.nickName = "";

        /**
         * AddStaffReq realName.
         * @member {string} realName
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.realName = "";

        /**
         * AddStaffReq email.
         * @member {string} email
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.email = "";

        /**
         * AddStaffReq phone.
         * @member {string} phone
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.phone = "";

        /**
         * AddStaffReq gender.
         * @member {string} gender
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.gender = "";

        /**
         * AddStaffReq avatar.
         * @member {string} avatar
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.avatar = "";

        /**
         * AddStaffReq signInIpWhitelist.
         * @member {Array.<string>} signInIpWhitelist
         * @memberof dto.AddStaffReq
         * @instance
         */
        AddStaffReq.prototype.signInIpWhitelist = $util.emptyArray;

        /**
         * Creates a new AddStaffReq instance using the specified properties.
         * @function create
         * @memberof dto.AddStaffReq
         * @static
         * @param {dto.IAddStaffReq=} [properties] Properties to set
         * @returns {dto.AddStaffReq} AddStaffReq instance
         */
        AddStaffReq.create = function create(properties) {
            return new AddStaffReq(properties);
        };

        /**
         * Encodes the specified AddStaffReq message. Does not implicitly {@link dto.AddStaffReq.verify|verify} messages.
         * @function encode
         * @memberof dto.AddStaffReq
         * @static
         * @param {dto.IAddStaffReq} message AddStaffReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddStaffReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            if (message.realName != null && Object.hasOwnProperty.call(message, "realName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.realName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gender);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.avatar);
            if (message.signInIpWhitelist != null && message.signInIpWhitelist.length)
                for (var i = 0; i < message.signInIpWhitelist.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.signInIpWhitelist[i]);
            return writer;
        };

        /**
         * Encodes the specified AddStaffReq message, length delimited. Does not implicitly {@link dto.AddStaffReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddStaffReq
         * @static
         * @param {dto.IAddStaffReq} message AddStaffReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddStaffReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddStaffReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddStaffReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddStaffReq} AddStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddStaffReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddStaffReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                case 3: {
                        message.nickName = reader.string();
                        break;
                    }
                case 4: {
                        message.realName = reader.string();
                        break;
                    }
                case 5: {
                        message.email = reader.string();
                        break;
                    }
                case 6: {
                        message.phone = reader.string();
                        break;
                    }
                case 7: {
                        message.gender = reader.string();
                        break;
                    }
                case 9: {
                        message.avatar = reader.string();
                        break;
                    }
                case 10: {
                        if (!(message.signInIpWhitelist && message.signInIpWhitelist.length))
                            message.signInIpWhitelist = [];
                        message.signInIpWhitelist.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddStaffReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddStaffReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddStaffReq} AddStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddStaffReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddStaffReq message.
         * @function verify
         * @memberof dto.AddStaffReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddStaffReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.realName != null && message.hasOwnProperty("realName"))
                if (!$util.isString(message.realName))
                    return "realName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.signInIpWhitelist != null && message.hasOwnProperty("signInIpWhitelist")) {
                if (!Array.isArray(message.signInIpWhitelist))
                    return "signInIpWhitelist: array expected";
                for (var i = 0; i < message.signInIpWhitelist.length; ++i)
                    if (!$util.isString(message.signInIpWhitelist[i]))
                        return "signInIpWhitelist: string[] expected";
            }
            return null;
        };

        /**
         * Creates an AddStaffReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddStaffReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddStaffReq} AddStaffReq
         */
        AddStaffReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddStaffReq)
                return object;
            var message = new $root.dto.AddStaffReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.realName != null)
                message.realName = String(object.realName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.gender != null)
                message.gender = String(object.gender);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.signInIpWhitelist) {
                if (!Array.isArray(object.signInIpWhitelist))
                    throw TypeError(".dto.AddStaffReq.signInIpWhitelist: array expected");
                message.signInIpWhitelist = [];
                for (var i = 0; i < object.signInIpWhitelist.length; ++i)
                    message.signInIpWhitelist[i] = String(object.signInIpWhitelist[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AddStaffReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddStaffReq
         * @static
         * @param {dto.AddStaffReq} message AddStaffReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddStaffReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.signInIpWhitelist = [];
            if (options.defaults) {
                object.account = "";
                object.password = "";
                object.nickName = "";
                object.realName = "";
                object.email = "";
                object.phone = "";
                object.gender = "";
                object.avatar = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.realName != null && message.hasOwnProperty("realName"))
                object.realName = message.realName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.signInIpWhitelist && message.signInIpWhitelist.length) {
                object.signInIpWhitelist = [];
                for (var j = 0; j < message.signInIpWhitelist.length; ++j)
                    object.signInIpWhitelist[j] = message.signInIpWhitelist[j];
            }
            return object;
        };

        /**
         * Converts this AddStaffReq to JSON.
         * @function toJSON
         * @memberof dto.AddStaffReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddStaffReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddStaffReq
         * @function getTypeUrl
         * @memberof dto.AddStaffReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddStaffReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddStaffReq";
        };

        return AddStaffReq;
    })();

    dto.AddStaffRet = (function() {

        /**
         * Properties of an AddStaffRet.
         * @memberof dto
         * @interface IAddStaffRet
         * @property {string|null} [id] AddStaffRet id
         */

        /**
         * Constructs a new AddStaffRet.
         * @memberof dto
         * @classdesc Represents an AddStaffRet.
         * @implements IAddStaffRet
         * @constructor
         * @param {dto.IAddStaffRet=} [properties] Properties to set
         */
        function AddStaffRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddStaffRet id.
         * @member {string} id
         * @memberof dto.AddStaffRet
         * @instance
         */
        AddStaffRet.prototype.id = "";

        /**
         * Creates a new AddStaffRet instance using the specified properties.
         * @function create
         * @memberof dto.AddStaffRet
         * @static
         * @param {dto.IAddStaffRet=} [properties] Properties to set
         * @returns {dto.AddStaffRet} AddStaffRet instance
         */
        AddStaffRet.create = function create(properties) {
            return new AddStaffRet(properties);
        };

        /**
         * Encodes the specified AddStaffRet message. Does not implicitly {@link dto.AddStaffRet.verify|verify} messages.
         * @function encode
         * @memberof dto.AddStaffRet
         * @static
         * @param {dto.IAddStaffRet} message AddStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddStaffRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AddStaffRet message, length delimited. Does not implicitly {@link dto.AddStaffRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AddStaffRet
         * @static
         * @param {dto.IAddStaffRet} message AddStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddStaffRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddStaffRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AddStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AddStaffRet} AddStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddStaffRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AddStaffRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddStaffRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AddStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AddStaffRet} AddStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddStaffRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddStaffRet message.
         * @function verify
         * @memberof dto.AddStaffRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddStaffRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AddStaffRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AddStaffRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AddStaffRet} AddStaffRet
         */
        AddStaffRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AddStaffRet)
                return object;
            var message = new $root.dto.AddStaffRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AddStaffRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AddStaffRet
         * @static
         * @param {dto.AddStaffRet} message AddStaffRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddStaffRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AddStaffRet to JSON.
         * @function toJSON
         * @memberof dto.AddStaffRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddStaffRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddStaffRet
         * @function getTypeUrl
         * @memberof dto.AddStaffRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddStaffRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AddStaffRet";
        };

        return AddStaffRet;
    })();

    dto.StaffListElem = (function() {

        /**
         * Properties of a StaffListElem.
         * @memberof dto
         * @interface IStaffListElem
         * @property {string|null} [id] StaffListElem id
         * @property {string|null} [account] StaffListElem account
         * @property {string|null} [nickName] StaffListElem nickName
         * @property {string|null} [realName] StaffListElem realName
         * @property {string|null} [email] StaffListElem email
         * @property {string|null} [phone] StaffListElem phone
         * @property {string|null} [gender] StaffListElem gender
         * @property {string|null} [avatar] StaffListElem avatar
         * @property {boolean|null} [signIn] StaffListElem signIn
         * @property {boolean|null} [status] StaffListElem status
         * @property {string|null} [signInToken] StaffListElem signInToken
         * @property {string|null} [lastSignInIp] StaffListElem lastSignInIp
         * @property {number|Long|null} [lastSignInTime] StaffListElem lastSignInTime
         * @property {string|null} [createdBy] StaffListElem createdBy
         * @property {string|null} [createdAt] StaffListElem createdAt
         * @property {string|null} [updatedBy] StaffListElem updatedBy
         * @property {string|null} [updatedAt] StaffListElem updatedAt
         * @property {string|null} [deletedBy] StaffListElem deletedBy
         * @property {string|null} [deletedAt] StaffListElem deletedAt
         */

        /**
         * Constructs a new StaffListElem.
         * @memberof dto
         * @classdesc Represents a StaffListElem.
         * @implements IStaffListElem
         * @constructor
         * @param {dto.IStaffListElem=} [properties] Properties to set
         */
        function StaffListElem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StaffListElem id.
         * @member {string} id
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.id = "";

        /**
         * StaffListElem account.
         * @member {string} account
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.account = "";

        /**
         * StaffListElem nickName.
         * @member {string} nickName
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.nickName = "";

        /**
         * StaffListElem realName.
         * @member {string} realName
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.realName = "";

        /**
         * StaffListElem email.
         * @member {string} email
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.email = "";

        /**
         * StaffListElem phone.
         * @member {string} phone
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.phone = "";

        /**
         * StaffListElem gender.
         * @member {string} gender
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.gender = "";

        /**
         * StaffListElem avatar.
         * @member {string} avatar
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.avatar = "";

        /**
         * StaffListElem signIn.
         * @member {boolean} signIn
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.signIn = false;

        /**
         * StaffListElem status.
         * @member {boolean} status
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.status = false;

        /**
         * StaffListElem signInToken.
         * @member {string} signInToken
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.signInToken = "";

        /**
         * StaffListElem lastSignInIp.
         * @member {string} lastSignInIp
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.lastSignInIp = "";

        /**
         * StaffListElem lastSignInTime.
         * @member {number|Long} lastSignInTime
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.lastSignInTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StaffListElem createdBy.
         * @member {string} createdBy
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.createdBy = "";

        /**
         * StaffListElem createdAt.
         * @member {string} createdAt
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.createdAt = "";

        /**
         * StaffListElem updatedBy.
         * @member {string} updatedBy
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.updatedBy = "";

        /**
         * StaffListElem updatedAt.
         * @member {string} updatedAt
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.updatedAt = "";

        /**
         * StaffListElem deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.deletedBy = null;

        /**
         * StaffListElem deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.StaffListElem
         * @instance
         */
        StaffListElem.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * StaffListElem _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.StaffListElem
         * @instance
         */
        Object.defineProperty(StaffListElem.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * StaffListElem _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.StaffListElem
         * @instance
         */
        Object.defineProperty(StaffListElem.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new StaffListElem instance using the specified properties.
         * @function create
         * @memberof dto.StaffListElem
         * @static
         * @param {dto.IStaffListElem=} [properties] Properties to set
         * @returns {dto.StaffListElem} StaffListElem instance
         */
        StaffListElem.create = function create(properties) {
            return new StaffListElem(properties);
        };

        /**
         * Encodes the specified StaffListElem message. Does not implicitly {@link dto.StaffListElem.verify|verify} messages.
         * @function encode
         * @memberof dto.StaffListElem
         * @static
         * @param {dto.IStaffListElem} message StaffListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaffListElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            if (message.realName != null && Object.hasOwnProperty.call(message, "realName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.realName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gender);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.avatar);
            if (message.signIn != null && Object.hasOwnProperty.call(message, "signIn"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.signIn);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.status);
            if (message.signInToken != null && Object.hasOwnProperty.call(message, "signInToken"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.signInToken);
            if (message.lastSignInIp != null && Object.hasOwnProperty.call(message, "lastSignInIp"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.lastSignInIp);
            if (message.lastSignInTime != null && Object.hasOwnProperty.call(message, "lastSignInTime"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint64(message.lastSignInTime);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified StaffListElem message, length delimited. Does not implicitly {@link dto.StaffListElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.StaffListElem
         * @static
         * @param {dto.IStaffListElem} message StaffListElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaffListElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StaffListElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.StaffListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.StaffListElem} StaffListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaffListElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.StaffListElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.account = reader.string();
                        break;
                    }
                case 3: {
                        message.nickName = reader.string();
                        break;
                    }
                case 4: {
                        message.realName = reader.string();
                        break;
                    }
                case 5: {
                        message.email = reader.string();
                        break;
                    }
                case 6: {
                        message.phone = reader.string();
                        break;
                    }
                case 7: {
                        message.gender = reader.string();
                        break;
                    }
                case 8: {
                        message.avatar = reader.string();
                        break;
                    }
                case 9: {
                        message.signIn = reader.bool();
                        break;
                    }
                case 10: {
                        message.status = reader.bool();
                        break;
                    }
                case 11: {
                        message.signInToken = reader.string();
                        break;
                    }
                case 12: {
                        message.lastSignInIp = reader.string();
                        break;
                    }
                case 13: {
                        message.lastSignInTime = reader.sint64();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StaffListElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.StaffListElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.StaffListElem} StaffListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaffListElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StaffListElem message.
         * @function verify
         * @memberof dto.StaffListElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StaffListElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.realName != null && message.hasOwnProperty("realName"))
                if (!$util.isString(message.realName))
                    return "realName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.signIn != null && message.hasOwnProperty("signIn"))
                if (typeof message.signIn !== "boolean")
                    return "signIn: boolean expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status !== "boolean")
                    return "status: boolean expected";
            if (message.signInToken != null && message.hasOwnProperty("signInToken"))
                if (!$util.isString(message.signInToken))
                    return "signInToken: string expected";
            if (message.lastSignInIp != null && message.hasOwnProperty("lastSignInIp"))
                if (!$util.isString(message.lastSignInIp))
                    return "lastSignInIp: string expected";
            if (message.lastSignInTime != null && message.hasOwnProperty("lastSignInTime"))
                if (!$util.isInteger(message.lastSignInTime) && !(message.lastSignInTime && $util.isInteger(message.lastSignInTime.low) && $util.isInteger(message.lastSignInTime.high)))
                    return "lastSignInTime: integer|Long expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a StaffListElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.StaffListElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.StaffListElem} StaffListElem
         */
        StaffListElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.StaffListElem)
                return object;
            var message = new $root.dto.StaffListElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.account != null)
                message.account = String(object.account);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.realName != null)
                message.realName = String(object.realName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.gender != null)
                message.gender = String(object.gender);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.signIn != null)
                message.signIn = Boolean(object.signIn);
            if (object.status != null)
                message.status = Boolean(object.status);
            if (object.signInToken != null)
                message.signInToken = String(object.signInToken);
            if (object.lastSignInIp != null)
                message.lastSignInIp = String(object.lastSignInIp);
            if (object.lastSignInTime != null)
                if ($util.Long)
                    (message.lastSignInTime = $util.Long.fromValue(object.lastSignInTime)).unsigned = false;
                else if (typeof object.lastSignInTime === "string")
                    message.lastSignInTime = parseInt(object.lastSignInTime, 10);
                else if (typeof object.lastSignInTime === "number")
                    message.lastSignInTime = object.lastSignInTime;
                else if (typeof object.lastSignInTime === "object")
                    message.lastSignInTime = new $util.LongBits(object.lastSignInTime.low >>> 0, object.lastSignInTime.high >>> 0).toNumber();
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a StaffListElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.StaffListElem
         * @static
         * @param {dto.StaffListElem} message StaffListElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StaffListElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.account = "";
                object.nickName = "";
                object.realName = "";
                object.email = "";
                object.phone = "";
                object.gender = "";
                object.avatar = "";
                object.signIn = false;
                object.status = false;
                object.signInToken = "";
                object.lastSignInIp = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastSignInTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastSignInTime = options.longs === String ? "0" : 0;
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.realName != null && message.hasOwnProperty("realName"))
                object.realName = message.realName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.signIn != null && message.hasOwnProperty("signIn"))
                object.signIn = message.signIn;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.signInToken != null && message.hasOwnProperty("signInToken"))
                object.signInToken = message.signInToken;
            if (message.lastSignInIp != null && message.hasOwnProperty("lastSignInIp"))
                object.lastSignInIp = message.lastSignInIp;
            if (message.lastSignInTime != null && message.hasOwnProperty("lastSignInTime"))
                if (typeof message.lastSignInTime === "number")
                    object.lastSignInTime = options.longs === String ? String(message.lastSignInTime) : message.lastSignInTime;
                else
                    object.lastSignInTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastSignInTime) : options.longs === Number ? new $util.LongBits(message.lastSignInTime.low >>> 0, message.lastSignInTime.high >>> 0).toNumber() : message.lastSignInTime;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this StaffListElem to JSON.
         * @function toJSON
         * @memberof dto.StaffListElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StaffListElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StaffListElem
         * @function getTypeUrl
         * @memberof dto.StaffListElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StaffListElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.StaffListElem";
        };

        return StaffListElem;
    })();

    dto.ListStaffRet = (function() {

        /**
         * Properties of a ListStaffRet.
         * @memberof dto
         * @interface IListStaffRet
         * @property {Array.<dto.IStaffListElem>|null} [list] ListStaffRet list
         * @property {number|Long|null} [total] ListStaffRet total
         */

        /**
         * Constructs a new ListStaffRet.
         * @memberof dto
         * @classdesc Represents a ListStaffRet.
         * @implements IListStaffRet
         * @constructor
         * @param {dto.IListStaffRet=} [properties] Properties to set
         */
        function ListStaffRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListStaffRet list.
         * @member {Array.<dto.IStaffListElem>} list
         * @memberof dto.ListStaffRet
         * @instance
         */
        ListStaffRet.prototype.list = $util.emptyArray;

        /**
         * ListStaffRet total.
         * @member {number|Long} total
         * @memberof dto.ListStaffRet
         * @instance
         */
        ListStaffRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ListStaffRet instance using the specified properties.
         * @function create
         * @memberof dto.ListStaffRet
         * @static
         * @param {dto.IListStaffRet=} [properties] Properties to set
         * @returns {dto.ListStaffRet} ListStaffRet instance
         */
        ListStaffRet.create = function create(properties) {
            return new ListStaffRet(properties);
        };

        /**
         * Encodes the specified ListStaffRet message. Does not implicitly {@link dto.ListStaffRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ListStaffRet
         * @static
         * @param {dto.IListStaffRet} message ListStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListStaffRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.StaffListElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified ListStaffRet message, length delimited. Does not implicitly {@link dto.ListStaffRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListStaffRet
         * @static
         * @param {dto.IListStaffRet} message ListStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListStaffRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListStaffRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListStaffRet} ListStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListStaffRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListStaffRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.StaffListElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListStaffRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListStaffRet} ListStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListStaffRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListStaffRet message.
         * @function verify
         * @memberof dto.ListStaffRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListStaffRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.StaffListElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a ListStaffRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListStaffRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListStaffRet} ListStaffRet
         */
        ListStaffRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListStaffRet)
                return object;
            var message = new $root.dto.ListStaffRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.ListStaffRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.ListStaffRet.list: object expected");
                    message.list[i] = $root.dto.StaffListElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ListStaffRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListStaffRet
         * @static
         * @param {dto.ListStaffRet} message ListStaffRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListStaffRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.StaffListElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this ListStaffRet to JSON.
         * @function toJSON
         * @memberof dto.ListStaffRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListStaffRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListStaffRet
         * @function getTypeUrl
         * @memberof dto.ListStaffRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListStaffRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListStaffRet";
        };

        return ListStaffRet;
    })();

    dto.ProfileStaffRet = (function() {

        /**
         * Properties of a ProfileStaffRet.
         * @memberof dto
         * @interface IProfileStaffRet
         * @property {string|null} [id] ProfileStaffRet id
         * @property {string|null} [account] ProfileStaffRet account
         * @property {string|null} [nickName] ProfileStaffRet nickName
         * @property {string|null} [realName] ProfileStaffRet realName
         * @property {string|null} [email] ProfileStaffRet email
         * @property {string|null} [phone] ProfileStaffRet phone
         * @property {string|null} [gender] ProfileStaffRet gender
         * @property {string|null} [avatar] ProfileStaffRet avatar
         * @property {Array.<string>|null} [signInIpWhitelist] ProfileStaffRet signInIpWhitelist
         * @property {boolean|null} [signIn] ProfileStaffRet signIn
         * @property {string|null} [signInToken] ProfileStaffRet signInToken
         * @property {string|null} [lastSignInIp] ProfileStaffRet lastSignInIp
         * @property {number|Long|null} [lastSignInTime] ProfileStaffRet lastSignInTime
         * @property {string|null} [createdBy] ProfileStaffRet createdBy
         * @property {string|null} [createdAt] ProfileStaffRet createdAt
         * @property {string|null} [updatedBy] ProfileStaffRet updatedBy
         * @property {string|null} [updatedAt] ProfileStaffRet updatedAt
         * @property {string|null} [deletedBy] ProfileStaffRet deletedBy
         * @property {string|null} [deletedAt] ProfileStaffRet deletedAt
         */

        /**
         * Constructs a new ProfileStaffRet.
         * @memberof dto
         * @classdesc Represents a ProfileStaffRet.
         * @implements IProfileStaffRet
         * @constructor
         * @param {dto.IProfileStaffRet=} [properties] Properties to set
         */
        function ProfileStaffRet(properties) {
            this.signInIpWhitelist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileStaffRet id.
         * @member {string} id
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.id = "";

        /**
         * ProfileStaffRet account.
         * @member {string} account
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.account = "";

        /**
         * ProfileStaffRet nickName.
         * @member {string} nickName
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.nickName = "";

        /**
         * ProfileStaffRet realName.
         * @member {string} realName
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.realName = "";

        /**
         * ProfileStaffRet email.
         * @member {string} email
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.email = "";

        /**
         * ProfileStaffRet phone.
         * @member {string} phone
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.phone = "";

        /**
         * ProfileStaffRet gender.
         * @member {string} gender
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.gender = "";

        /**
         * ProfileStaffRet avatar.
         * @member {string} avatar
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.avatar = "";

        /**
         * ProfileStaffRet signInIpWhitelist.
         * @member {Array.<string>} signInIpWhitelist
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.signInIpWhitelist = $util.emptyArray;

        /**
         * ProfileStaffRet signIn.
         * @member {boolean} signIn
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.signIn = false;

        /**
         * ProfileStaffRet signInToken.
         * @member {string} signInToken
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.signInToken = "";

        /**
         * ProfileStaffRet lastSignInIp.
         * @member {string} lastSignInIp
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.lastSignInIp = "";

        /**
         * ProfileStaffRet lastSignInTime.
         * @member {number|Long} lastSignInTime
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.lastSignInTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProfileStaffRet createdBy.
         * @member {string} createdBy
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.createdBy = "";

        /**
         * ProfileStaffRet createdAt.
         * @member {string} createdAt
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.createdAt = "";

        /**
         * ProfileStaffRet updatedBy.
         * @member {string} updatedBy
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.updatedBy = "";

        /**
         * ProfileStaffRet updatedAt.
         * @member {string} updatedAt
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.updatedAt = "";

        /**
         * ProfileStaffRet deletedBy.
         * @member {string|null|undefined} deletedBy
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.deletedBy = null;

        /**
         * ProfileStaffRet deletedAt.
         * @member {string|null|undefined} deletedAt
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        ProfileStaffRet.prototype.deletedAt = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ProfileStaffRet _deletedBy.
         * @member {"deletedBy"|undefined} _deletedBy
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        Object.defineProperty(ProfileStaffRet.prototype, "_deletedBy", {
            get: $util.oneOfGetter($oneOfFields = ["deletedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ProfileStaffRet _deletedAt.
         * @member {"deletedAt"|undefined} _deletedAt
         * @memberof dto.ProfileStaffRet
         * @instance
         */
        Object.defineProperty(ProfileStaffRet.prototype, "_deletedAt", {
            get: $util.oneOfGetter($oneOfFields = ["deletedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProfileStaffRet instance using the specified properties.
         * @function create
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {dto.IProfileStaffRet=} [properties] Properties to set
         * @returns {dto.ProfileStaffRet} ProfileStaffRet instance
         */
        ProfileStaffRet.create = function create(properties) {
            return new ProfileStaffRet(properties);
        };

        /**
         * Encodes the specified ProfileStaffRet message. Does not implicitly {@link dto.ProfileStaffRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {dto.IProfileStaffRet} message ProfileStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileStaffRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            if (message.realName != null && Object.hasOwnProperty.call(message, "realName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.realName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gender);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.avatar);
            if (message.signInIpWhitelist != null && message.signInIpWhitelist.length)
                for (var i = 0; i < message.signInIpWhitelist.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.signInIpWhitelist[i]);
            if (message.signIn != null && Object.hasOwnProperty.call(message, "signIn"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.signIn);
            if (message.signInToken != null && Object.hasOwnProperty.call(message, "signInToken"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.signInToken);
            if (message.lastSignInIp != null && Object.hasOwnProperty.call(message, "lastSignInIp"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.lastSignInIp);
            if (message.lastSignInTime != null && Object.hasOwnProperty.call(message, "lastSignInTime"))
                writer.uint32(/* id 13, wireType 0 =*/104).sint64(message.lastSignInTime);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.deletedBy != null && Object.hasOwnProperty.call(message, "deletedBy"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.deletedBy);
            if (message.deletedAt != null && Object.hasOwnProperty.call(message, "deletedAt"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.deletedAt);
            return writer;
        };

        /**
         * Encodes the specified ProfileStaffRet message, length delimited. Does not implicitly {@link dto.ProfileStaffRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {dto.IProfileStaffRet} message ProfileStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileStaffRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileStaffRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ProfileStaffRet} ProfileStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileStaffRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ProfileStaffRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.account = reader.string();
                        break;
                    }
                case 3: {
                        message.nickName = reader.string();
                        break;
                    }
                case 4: {
                        message.realName = reader.string();
                        break;
                    }
                case 5: {
                        message.email = reader.string();
                        break;
                    }
                case 6: {
                        message.phone = reader.string();
                        break;
                    }
                case 7: {
                        message.gender = reader.string();
                        break;
                    }
                case 8: {
                        message.avatar = reader.string();
                        break;
                    }
                case 9: {
                        if (!(message.signInIpWhitelist && message.signInIpWhitelist.length))
                            message.signInIpWhitelist = [];
                        message.signInIpWhitelist.push(reader.string());
                        break;
                    }
                case 10: {
                        message.signIn = reader.bool();
                        break;
                    }
                case 11: {
                        message.signInToken = reader.string();
                        break;
                    }
                case 12: {
                        message.lastSignInIp = reader.string();
                        break;
                    }
                case 13: {
                        message.lastSignInTime = reader.sint64();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 20004: {
                        message.deletedBy = reader.string();
                        break;
                    }
                case 20005: {
                        message.deletedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileStaffRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ProfileStaffRet} ProfileStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileStaffRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileStaffRet message.
         * @function verify
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileStaffRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.realName != null && message.hasOwnProperty("realName"))
                if (!$util.isString(message.realName))
                    return "realName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.signInIpWhitelist != null && message.hasOwnProperty("signInIpWhitelist")) {
                if (!Array.isArray(message.signInIpWhitelist))
                    return "signInIpWhitelist: array expected";
                for (var i = 0; i < message.signInIpWhitelist.length; ++i)
                    if (!$util.isString(message.signInIpWhitelist[i]))
                        return "signInIpWhitelist: string[] expected";
            }
            if (message.signIn != null && message.hasOwnProperty("signIn"))
                if (typeof message.signIn !== "boolean")
                    return "signIn: boolean expected";
            if (message.signInToken != null && message.hasOwnProperty("signInToken"))
                if (!$util.isString(message.signInToken))
                    return "signInToken: string expected";
            if (message.lastSignInIp != null && message.hasOwnProperty("lastSignInIp"))
                if (!$util.isString(message.lastSignInIp))
                    return "lastSignInIp: string expected";
            if (message.lastSignInTime != null && message.hasOwnProperty("lastSignInTime"))
                if (!$util.isInteger(message.lastSignInTime) && !(message.lastSignInTime && $util.isInteger(message.lastSignInTime.low) && $util.isInteger(message.lastSignInTime.high)))
                    return "lastSignInTime: integer|Long expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                properties._deletedBy = 1;
                if (!$util.isString(message.deletedBy))
                    return "deletedBy: string expected";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                properties._deletedAt = 1;
                if (!$util.isString(message.deletedAt))
                    return "deletedAt: string expected";
            }
            return null;
        };

        /**
         * Creates a ProfileStaffRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ProfileStaffRet} ProfileStaffRet
         */
        ProfileStaffRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ProfileStaffRet)
                return object;
            var message = new $root.dto.ProfileStaffRet();
            if (object.id != null)
                message.id = String(object.id);
            if (object.account != null)
                message.account = String(object.account);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.realName != null)
                message.realName = String(object.realName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.gender != null)
                message.gender = String(object.gender);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.signInIpWhitelist) {
                if (!Array.isArray(object.signInIpWhitelist))
                    throw TypeError(".dto.ProfileStaffRet.signInIpWhitelist: array expected");
                message.signInIpWhitelist = [];
                for (var i = 0; i < object.signInIpWhitelist.length; ++i)
                    message.signInIpWhitelist[i] = String(object.signInIpWhitelist[i]);
            }
            if (object.signIn != null)
                message.signIn = Boolean(object.signIn);
            if (object.signInToken != null)
                message.signInToken = String(object.signInToken);
            if (object.lastSignInIp != null)
                message.lastSignInIp = String(object.lastSignInIp);
            if (object.lastSignInTime != null)
                if ($util.Long)
                    (message.lastSignInTime = $util.Long.fromValue(object.lastSignInTime)).unsigned = false;
                else if (typeof object.lastSignInTime === "string")
                    message.lastSignInTime = parseInt(object.lastSignInTime, 10);
                else if (typeof object.lastSignInTime === "number")
                    message.lastSignInTime = object.lastSignInTime;
                else if (typeof object.lastSignInTime === "object")
                    message.lastSignInTime = new $util.LongBits(object.lastSignInTime.low >>> 0, object.lastSignInTime.high >>> 0).toNumber();
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.deletedBy != null)
                message.deletedBy = String(object.deletedBy);
            if (object.deletedAt != null)
                message.deletedAt = String(object.deletedAt);
            return message;
        };

        /**
         * Creates a plain object from a ProfileStaffRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {dto.ProfileStaffRet} message ProfileStaffRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileStaffRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.signInIpWhitelist = [];
            if (options.defaults) {
                object.id = "";
                object.account = "";
                object.nickName = "";
                object.realName = "";
                object.email = "";
                object.phone = "";
                object.gender = "";
                object.avatar = "";
                object.signIn = false;
                object.signInToken = "";
                object.lastSignInIp = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastSignInTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastSignInTime = options.longs === String ? "0" : 0;
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.realName != null && message.hasOwnProperty("realName"))
                object.realName = message.realName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.signInIpWhitelist && message.signInIpWhitelist.length) {
                object.signInIpWhitelist = [];
                for (var j = 0; j < message.signInIpWhitelist.length; ++j)
                    object.signInIpWhitelist[j] = message.signInIpWhitelist[j];
            }
            if (message.signIn != null && message.hasOwnProperty("signIn"))
                object.signIn = message.signIn;
            if (message.signInToken != null && message.hasOwnProperty("signInToken"))
                object.signInToken = message.signInToken;
            if (message.lastSignInIp != null && message.hasOwnProperty("lastSignInIp"))
                object.lastSignInIp = message.lastSignInIp;
            if (message.lastSignInTime != null && message.hasOwnProperty("lastSignInTime"))
                if (typeof message.lastSignInTime === "number")
                    object.lastSignInTime = options.longs === String ? String(message.lastSignInTime) : message.lastSignInTime;
                else
                    object.lastSignInTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastSignInTime) : options.longs === Number ? new $util.LongBits(message.lastSignInTime.low >>> 0, message.lastSignInTime.high >>> 0).toNumber() : message.lastSignInTime;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.deletedBy != null && message.hasOwnProperty("deletedBy")) {
                object.deletedBy = message.deletedBy;
                if (options.oneofs)
                    object._deletedBy = "deletedBy";
            }
            if (message.deletedAt != null && message.hasOwnProperty("deletedAt")) {
                object.deletedAt = message.deletedAt;
                if (options.oneofs)
                    object._deletedAt = "deletedAt";
            }
            return object;
        };

        /**
         * Converts this ProfileStaffRet to JSON.
         * @function toJSON
         * @memberof dto.ProfileStaffRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileStaffRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfileStaffRet
         * @function getTypeUrl
         * @memberof dto.ProfileStaffRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfileStaffRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ProfileStaffRet";
        };

        return ProfileStaffRet;
    })();

    dto.EditStaffReq = (function() {

        /**
         * Properties of an EditStaffReq.
         * @memberof dto
         * @interface IEditStaffReq
         * @property {string|null} [account] EditStaffReq account
         * @property {string|null} [nickName] EditStaffReq nickName
         * @property {string|null} [realName] EditStaffReq realName
         * @property {string|null} [email] EditStaffReq email
         * @property {string|null} [phone] EditStaffReq phone
         * @property {string|null} [gender] EditStaffReq gender
         * @property {string|null} [avatar] EditStaffReq avatar
         * @property {Array.<string>|null} [signInIpWhitelist] EditStaffReq signInIpWhitelist
         */

        /**
         * Constructs a new EditStaffReq.
         * @memberof dto
         * @classdesc Represents an EditStaffReq.
         * @implements IEditStaffReq
         * @constructor
         * @param {dto.IEditStaffReq=} [properties] Properties to set
         */
        function EditStaffReq(properties) {
            this.signInIpWhitelist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditStaffReq account.
         * @member {string} account
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.account = "";

        /**
         * EditStaffReq nickName.
         * @member {string} nickName
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.nickName = "";

        /**
         * EditStaffReq realName.
         * @member {string} realName
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.realName = "";

        /**
         * EditStaffReq email.
         * @member {string} email
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.email = "";

        /**
         * EditStaffReq phone.
         * @member {string} phone
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.phone = "";

        /**
         * EditStaffReq gender.
         * @member {string} gender
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.gender = "";

        /**
         * EditStaffReq avatar.
         * @member {string} avatar
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.avatar = "";

        /**
         * EditStaffReq signInIpWhitelist.
         * @member {Array.<string>} signInIpWhitelist
         * @memberof dto.EditStaffReq
         * @instance
         */
        EditStaffReq.prototype.signInIpWhitelist = $util.emptyArray;

        /**
         * Creates a new EditStaffReq instance using the specified properties.
         * @function create
         * @memberof dto.EditStaffReq
         * @static
         * @param {dto.IEditStaffReq=} [properties] Properties to set
         * @returns {dto.EditStaffReq} EditStaffReq instance
         */
        EditStaffReq.create = function create(properties) {
            return new EditStaffReq(properties);
        };

        /**
         * Encodes the specified EditStaffReq message. Does not implicitly {@link dto.EditStaffReq.verify|verify} messages.
         * @function encode
         * @memberof dto.EditStaffReq
         * @static
         * @param {dto.IEditStaffReq} message EditStaffReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditStaffReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            if (message.realName != null && Object.hasOwnProperty.call(message, "realName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.realName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phone);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.gender);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.avatar);
            if (message.signInIpWhitelist != null && message.signInIpWhitelist.length)
                for (var i = 0; i < message.signInIpWhitelist.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.signInIpWhitelist[i]);
            return writer;
        };

        /**
         * Encodes the specified EditStaffReq message, length delimited. Does not implicitly {@link dto.EditStaffReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditStaffReq
         * @static
         * @param {dto.IEditStaffReq} message EditStaffReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditStaffReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditStaffReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditStaffReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditStaffReq} EditStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditStaffReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditStaffReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.nickName = reader.string();
                        break;
                    }
                case 3: {
                        message.realName = reader.string();
                        break;
                    }
                case 4: {
                        message.email = reader.string();
                        break;
                    }
                case 5: {
                        message.phone = reader.string();
                        break;
                    }
                case 6: {
                        message.gender = reader.string();
                        break;
                    }
                case 7: {
                        message.avatar = reader.string();
                        break;
                    }
                case 8: {
                        if (!(message.signInIpWhitelist && message.signInIpWhitelist.length))
                            message.signInIpWhitelist = [];
                        message.signInIpWhitelist.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditStaffReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditStaffReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditStaffReq} EditStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditStaffReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditStaffReq message.
         * @function verify
         * @memberof dto.EditStaffReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditStaffReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.realName != null && message.hasOwnProperty("realName"))
                if (!$util.isString(message.realName))
                    return "realName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.signInIpWhitelist != null && message.hasOwnProperty("signInIpWhitelist")) {
                if (!Array.isArray(message.signInIpWhitelist))
                    return "signInIpWhitelist: array expected";
                for (var i = 0; i < message.signInIpWhitelist.length; ++i)
                    if (!$util.isString(message.signInIpWhitelist[i]))
                        return "signInIpWhitelist: string[] expected";
            }
            return null;
        };

        /**
         * Creates an EditStaffReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditStaffReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditStaffReq} EditStaffReq
         */
        EditStaffReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditStaffReq)
                return object;
            var message = new $root.dto.EditStaffReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.realName != null)
                message.realName = String(object.realName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.gender != null)
                message.gender = String(object.gender);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.signInIpWhitelist) {
                if (!Array.isArray(object.signInIpWhitelist))
                    throw TypeError(".dto.EditStaffReq.signInIpWhitelist: array expected");
                message.signInIpWhitelist = [];
                for (var i = 0; i < object.signInIpWhitelist.length; ++i)
                    message.signInIpWhitelist[i] = String(object.signInIpWhitelist[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an EditStaffReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditStaffReq
         * @static
         * @param {dto.EditStaffReq} message EditStaffReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditStaffReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.signInIpWhitelist = [];
            if (options.defaults) {
                object.account = "";
                object.nickName = "";
                object.realName = "";
                object.email = "";
                object.phone = "";
                object.gender = "";
                object.avatar = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.realName != null && message.hasOwnProperty("realName"))
                object.realName = message.realName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.signInIpWhitelist && message.signInIpWhitelist.length) {
                object.signInIpWhitelist = [];
                for (var j = 0; j < message.signInIpWhitelist.length; ++j)
                    object.signInIpWhitelist[j] = message.signInIpWhitelist[j];
            }
            return object;
        };

        /**
         * Converts this EditStaffReq to JSON.
         * @function toJSON
         * @memberof dto.EditStaffReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditStaffReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditStaffReq
         * @function getTypeUrl
         * @memberof dto.EditStaffReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditStaffReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditStaffReq";
        };

        return EditStaffReq;
    })();

    dto.EditStaffRet = (function() {

        /**
         * Properties of an EditStaffRet.
         * @memberof dto
         * @interface IEditStaffRet
         * @property {string|null} [id] EditStaffRet id
         */

        /**
         * Constructs a new EditStaffRet.
         * @memberof dto
         * @classdesc Represents an EditStaffRet.
         * @implements IEditStaffRet
         * @constructor
         * @param {dto.IEditStaffRet=} [properties] Properties to set
         */
        function EditStaffRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditStaffRet id.
         * @member {string} id
         * @memberof dto.EditStaffRet
         * @instance
         */
        EditStaffRet.prototype.id = "";

        /**
         * Creates a new EditStaffRet instance using the specified properties.
         * @function create
         * @memberof dto.EditStaffRet
         * @static
         * @param {dto.IEditStaffRet=} [properties] Properties to set
         * @returns {dto.EditStaffRet} EditStaffRet instance
         */
        EditStaffRet.create = function create(properties) {
            return new EditStaffRet(properties);
        };

        /**
         * Encodes the specified EditStaffRet message. Does not implicitly {@link dto.EditStaffRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EditStaffRet
         * @static
         * @param {dto.IEditStaffRet} message EditStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditStaffRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EditStaffRet message, length delimited. Does not implicitly {@link dto.EditStaffRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EditStaffRet
         * @static
         * @param {dto.IEditStaffRet} message EditStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditStaffRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditStaffRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EditStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EditStaffRet} EditStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditStaffRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EditStaffRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditStaffRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EditStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EditStaffRet} EditStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditStaffRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditStaffRet message.
         * @function verify
         * @memberof dto.EditStaffRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditStaffRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EditStaffRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EditStaffRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EditStaffRet} EditStaffRet
         */
        EditStaffRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EditStaffRet)
                return object;
            var message = new $root.dto.EditStaffRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EditStaffRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EditStaffRet
         * @static
         * @param {dto.EditStaffRet} message EditStaffRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditStaffRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EditStaffRet to JSON.
         * @function toJSON
         * @memberof dto.EditStaffRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditStaffRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EditStaffRet
         * @function getTypeUrl
         * @memberof dto.EditStaffRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EditStaffRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EditStaffRet";
        };

        return EditStaffRet;
    })();

    dto.PatchPasswordReq = (function() {

        /**
         * Properties of a PatchPasswordReq.
         * @memberof dto
         * @interface IPatchPasswordReq
         * @property {string|null} [oldPassword] PatchPasswordReq oldPassword
         * @property {string|null} [newPassword] PatchPasswordReq newPassword
         */

        /**
         * Constructs a new PatchPasswordReq.
         * @memberof dto
         * @classdesc Represents a PatchPasswordReq.
         * @implements IPatchPasswordReq
         * @constructor
         * @param {dto.IPatchPasswordReq=} [properties] Properties to set
         */
        function PatchPasswordReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PatchPasswordReq oldPassword.
         * @member {string} oldPassword
         * @memberof dto.PatchPasswordReq
         * @instance
         */
        PatchPasswordReq.prototype.oldPassword = "";

        /**
         * PatchPasswordReq newPassword.
         * @member {string} newPassword
         * @memberof dto.PatchPasswordReq
         * @instance
         */
        PatchPasswordReq.prototype.newPassword = "";

        /**
         * Creates a new PatchPasswordReq instance using the specified properties.
         * @function create
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {dto.IPatchPasswordReq=} [properties] Properties to set
         * @returns {dto.PatchPasswordReq} PatchPasswordReq instance
         */
        PatchPasswordReq.create = function create(properties) {
            return new PatchPasswordReq(properties);
        };

        /**
         * Encodes the specified PatchPasswordReq message. Does not implicitly {@link dto.PatchPasswordReq.verify|verify} messages.
         * @function encode
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {dto.IPatchPasswordReq} message PatchPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PatchPasswordReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oldPassword != null && Object.hasOwnProperty.call(message, "oldPassword"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.oldPassword);
            if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPassword);
            return writer;
        };

        /**
         * Encodes the specified PatchPasswordReq message, length delimited. Does not implicitly {@link dto.PatchPasswordReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {dto.IPatchPasswordReq} message PatchPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PatchPasswordReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PatchPasswordReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.PatchPasswordReq} PatchPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PatchPasswordReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.PatchPasswordReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.oldPassword = reader.string();
                        break;
                    }
                case 2: {
                        message.newPassword = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PatchPasswordReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.PatchPasswordReq} PatchPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PatchPasswordReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PatchPasswordReq message.
         * @function verify
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PatchPasswordReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                if (!$util.isString(message.oldPassword))
                    return "oldPassword: string expected";
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                if (!$util.isString(message.newPassword))
                    return "newPassword: string expected";
            return null;
        };

        /**
         * Creates a PatchPasswordReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.PatchPasswordReq} PatchPasswordReq
         */
        PatchPasswordReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.PatchPasswordReq)
                return object;
            var message = new $root.dto.PatchPasswordReq();
            if (object.oldPassword != null)
                message.oldPassword = String(object.oldPassword);
            if (object.newPassword != null)
                message.newPassword = String(object.newPassword);
            return message;
        };

        /**
         * Creates a plain object from a PatchPasswordReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {dto.PatchPasswordReq} message PatchPasswordReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PatchPasswordReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.oldPassword = "";
                object.newPassword = "";
            }
            if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
                object.oldPassword = message.oldPassword;
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                object.newPassword = message.newPassword;
            return object;
        };

        /**
         * Converts this PatchPasswordReq to JSON.
         * @function toJSON
         * @memberof dto.PatchPasswordReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PatchPasswordReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PatchPasswordReq
         * @function getTypeUrl
         * @memberof dto.PatchPasswordReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PatchPasswordReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.PatchPasswordReq";
        };

        return PatchPasswordReq;
    })();

    dto.PatchPasswordRet = (function() {

        /**
         * Properties of a PatchPasswordRet.
         * @memberof dto
         * @interface IPatchPasswordRet
         * @property {string|null} [id] PatchPasswordRet id
         */

        /**
         * Constructs a new PatchPasswordRet.
         * @memberof dto
         * @classdesc Represents a PatchPasswordRet.
         * @implements IPatchPasswordRet
         * @constructor
         * @param {dto.IPatchPasswordRet=} [properties] Properties to set
         */
        function PatchPasswordRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PatchPasswordRet id.
         * @member {string} id
         * @memberof dto.PatchPasswordRet
         * @instance
         */
        PatchPasswordRet.prototype.id = "";

        /**
         * Creates a new PatchPasswordRet instance using the specified properties.
         * @function create
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {dto.IPatchPasswordRet=} [properties] Properties to set
         * @returns {dto.PatchPasswordRet} PatchPasswordRet instance
         */
        PatchPasswordRet.create = function create(properties) {
            return new PatchPasswordRet(properties);
        };

        /**
         * Encodes the specified PatchPasswordRet message. Does not implicitly {@link dto.PatchPasswordRet.verify|verify} messages.
         * @function encode
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {dto.IPatchPasswordRet} message PatchPasswordRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PatchPasswordRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified PatchPasswordRet message, length delimited. Does not implicitly {@link dto.PatchPasswordRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {dto.IPatchPasswordRet} message PatchPasswordRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PatchPasswordRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PatchPasswordRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.PatchPasswordRet} PatchPasswordRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PatchPasswordRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.PatchPasswordRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PatchPasswordRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.PatchPasswordRet} PatchPasswordRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PatchPasswordRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PatchPasswordRet message.
         * @function verify
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PatchPasswordRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a PatchPasswordRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.PatchPasswordRet} PatchPasswordRet
         */
        PatchPasswordRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.PatchPasswordRet)
                return object;
            var message = new $root.dto.PatchPasswordRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a PatchPasswordRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {dto.PatchPasswordRet} message PatchPasswordRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PatchPasswordRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PatchPasswordRet to JSON.
         * @function toJSON
         * @memberof dto.PatchPasswordRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PatchPasswordRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PatchPasswordRet
         * @function getTypeUrl
         * @memberof dto.PatchPasswordRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PatchPasswordRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.PatchPasswordRet";
        };

        return PatchPasswordRet;
    })();

    dto.AuthorizeStaffRolesInDomainReq = (function() {

        /**
         * Properties of an AuthorizeStaffRolesInDomainReq.
         * @memberof dto
         * @interface IAuthorizeStaffRolesInDomainReq
         * @property {Array.<string>|null} [roleIds] AuthorizeStaffRolesInDomainReq roleIds
         */

        /**
         * Constructs a new AuthorizeStaffRolesInDomainReq.
         * @memberof dto
         * @classdesc Represents an AuthorizeStaffRolesInDomainReq.
         * @implements IAuthorizeStaffRolesInDomainReq
         * @constructor
         * @param {dto.IAuthorizeStaffRolesInDomainReq=} [properties] Properties to set
         */
        function AuthorizeStaffRolesInDomainReq(properties) {
            this.roleIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthorizeStaffRolesInDomainReq roleIds.
         * @member {Array.<string>} roleIds
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @instance
         */
        AuthorizeStaffRolesInDomainReq.prototype.roleIds = $util.emptyArray;

        /**
         * Creates a new AuthorizeStaffRolesInDomainReq instance using the specified properties.
         * @function create
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {dto.IAuthorizeStaffRolesInDomainReq=} [properties] Properties to set
         * @returns {dto.AuthorizeStaffRolesInDomainReq} AuthorizeStaffRolesInDomainReq instance
         */
        AuthorizeStaffRolesInDomainReq.create = function create(properties) {
            return new AuthorizeStaffRolesInDomainReq(properties);
        };

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainReq message. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainReq.verify|verify} messages.
         * @function encode
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {dto.IAuthorizeStaffRolesInDomainReq} message AuthorizeStaffRolesInDomainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeStaffRolesInDomainReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleIds != null && message.roleIds.length)
                for (var i = 0; i < message.roleIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.roleIds[i]);
            return writer;
        };

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainReq message, length delimited. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {dto.IAuthorizeStaffRolesInDomainReq} message AuthorizeStaffRolesInDomainReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeStaffRolesInDomainReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthorizeStaffRolesInDomainReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AuthorizeStaffRolesInDomainReq} AuthorizeStaffRolesInDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeStaffRolesInDomainReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AuthorizeStaffRolesInDomainReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.roleIds && message.roleIds.length))
                            message.roleIds = [];
                        message.roleIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthorizeStaffRolesInDomainReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AuthorizeStaffRolesInDomainReq} AuthorizeStaffRolesInDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeStaffRolesInDomainReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthorizeStaffRolesInDomainReq message.
         * @function verify
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthorizeStaffRolesInDomainReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleIds != null && message.hasOwnProperty("roleIds")) {
                if (!Array.isArray(message.roleIds))
                    return "roleIds: array expected";
                for (var i = 0; i < message.roleIds.length; ++i)
                    if (!$util.isString(message.roleIds[i]))
                        return "roleIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates an AuthorizeStaffRolesInDomainReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AuthorizeStaffRolesInDomainReq} AuthorizeStaffRolesInDomainReq
         */
        AuthorizeStaffRolesInDomainReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AuthorizeStaffRolesInDomainReq)
                return object;
            var message = new $root.dto.AuthorizeStaffRolesInDomainReq();
            if (object.roleIds) {
                if (!Array.isArray(object.roleIds))
                    throw TypeError(".dto.AuthorizeStaffRolesInDomainReq.roleIds: array expected");
                message.roleIds = [];
                for (var i = 0; i < object.roleIds.length; ++i)
                    message.roleIds[i] = String(object.roleIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AuthorizeStaffRolesInDomainReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {dto.AuthorizeStaffRolesInDomainReq} message AuthorizeStaffRolesInDomainReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthorizeStaffRolesInDomainReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roleIds = [];
            if (message.roleIds && message.roleIds.length) {
                object.roleIds = [];
                for (var j = 0; j < message.roleIds.length; ++j)
                    object.roleIds[j] = message.roleIds[j];
            }
            return object;
        };

        /**
         * Converts this AuthorizeStaffRolesInDomainReq to JSON.
         * @function toJSON
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthorizeStaffRolesInDomainReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthorizeStaffRolesInDomainReq
         * @function getTypeUrl
         * @memberof dto.AuthorizeStaffRolesInDomainReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthorizeStaffRolesInDomainReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AuthorizeStaffRolesInDomainReq";
        };

        return AuthorizeStaffRolesInDomainReq;
    })();

    dto.AuthorizeStaffRolesInDomainRet = (function() {

        /**
         * Properties of an AuthorizeStaffRolesInDomainRet.
         * @memberof dto
         * @interface IAuthorizeStaffRolesInDomainRet
         * @property {string|null} [id] AuthorizeStaffRolesInDomainRet id
         */

        /**
         * Constructs a new AuthorizeStaffRolesInDomainRet.
         * @memberof dto
         * @classdesc Represents an AuthorizeStaffRolesInDomainRet.
         * @implements IAuthorizeStaffRolesInDomainRet
         * @constructor
         * @param {dto.IAuthorizeStaffRolesInDomainRet=} [properties] Properties to set
         */
        function AuthorizeStaffRolesInDomainRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthorizeStaffRolesInDomainRet id.
         * @member {string} id
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @instance
         */
        AuthorizeStaffRolesInDomainRet.prototype.id = "";

        /**
         * Creates a new AuthorizeStaffRolesInDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {dto.IAuthorizeStaffRolesInDomainRet=} [properties] Properties to set
         * @returns {dto.AuthorizeStaffRolesInDomainRet} AuthorizeStaffRolesInDomainRet instance
         */
        AuthorizeStaffRolesInDomainRet.create = function create(properties) {
            return new AuthorizeStaffRolesInDomainRet(properties);
        };

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainRet message. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {dto.IAuthorizeStaffRolesInDomainRet} message AuthorizeStaffRolesInDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeStaffRolesInDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainRet message, length delimited. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {dto.IAuthorizeStaffRolesInDomainRet} message AuthorizeStaffRolesInDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeStaffRolesInDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthorizeStaffRolesInDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.AuthorizeStaffRolesInDomainRet} AuthorizeStaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeStaffRolesInDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.AuthorizeStaffRolesInDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthorizeStaffRolesInDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.AuthorizeStaffRolesInDomainRet} AuthorizeStaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeStaffRolesInDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthorizeStaffRolesInDomainRet message.
         * @function verify
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthorizeStaffRolesInDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an AuthorizeStaffRolesInDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.AuthorizeStaffRolesInDomainRet} AuthorizeStaffRolesInDomainRet
         */
        AuthorizeStaffRolesInDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.AuthorizeStaffRolesInDomainRet)
                return object;
            var message = new $root.dto.AuthorizeStaffRolesInDomainRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an AuthorizeStaffRolesInDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {dto.AuthorizeStaffRolesInDomainRet} message AuthorizeStaffRolesInDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthorizeStaffRolesInDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AuthorizeStaffRolesInDomainRet to JSON.
         * @function toJSON
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthorizeStaffRolesInDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthorizeStaffRolesInDomainRet
         * @function getTypeUrl
         * @memberof dto.AuthorizeStaffRolesInDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthorizeStaffRolesInDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.AuthorizeStaffRolesInDomainRet";
        };

        return AuthorizeStaffRolesInDomainRet;
    })();

    dto.StaffDomainsRet = (function() {

        /**
         * Properties of a StaffDomainsRet.
         * @memberof dto
         * @interface IStaffDomainsRet
         * @property {Array.<string>|null} [domainIds] StaffDomainsRet domainIds
         */

        /**
         * Constructs a new StaffDomainsRet.
         * @memberof dto
         * @classdesc Represents a StaffDomainsRet.
         * @implements IStaffDomainsRet
         * @constructor
         * @param {dto.IStaffDomainsRet=} [properties] Properties to set
         */
        function StaffDomainsRet(properties) {
            this.domainIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StaffDomainsRet domainIds.
         * @member {Array.<string>} domainIds
         * @memberof dto.StaffDomainsRet
         * @instance
         */
        StaffDomainsRet.prototype.domainIds = $util.emptyArray;

        /**
         * Creates a new StaffDomainsRet instance using the specified properties.
         * @function create
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {dto.IStaffDomainsRet=} [properties] Properties to set
         * @returns {dto.StaffDomainsRet} StaffDomainsRet instance
         */
        StaffDomainsRet.create = function create(properties) {
            return new StaffDomainsRet(properties);
        };

        /**
         * Encodes the specified StaffDomainsRet message. Does not implicitly {@link dto.StaffDomainsRet.verify|verify} messages.
         * @function encode
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {dto.IStaffDomainsRet} message StaffDomainsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaffDomainsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.domainIds != null && message.domainIds.length)
                for (var i = 0; i < message.domainIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.domainIds[i]);
            return writer;
        };

        /**
         * Encodes the specified StaffDomainsRet message, length delimited. Does not implicitly {@link dto.StaffDomainsRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {dto.IStaffDomainsRet} message StaffDomainsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaffDomainsRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StaffDomainsRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.StaffDomainsRet} StaffDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaffDomainsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.StaffDomainsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.domainIds && message.domainIds.length))
                            message.domainIds = [];
                        message.domainIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StaffDomainsRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.StaffDomainsRet} StaffDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaffDomainsRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StaffDomainsRet message.
         * @function verify
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StaffDomainsRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.domainIds != null && message.hasOwnProperty("domainIds")) {
                if (!Array.isArray(message.domainIds))
                    return "domainIds: array expected";
                for (var i = 0; i < message.domainIds.length; ++i)
                    if (!$util.isString(message.domainIds[i]))
                        return "domainIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a StaffDomainsRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.StaffDomainsRet} StaffDomainsRet
         */
        StaffDomainsRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.StaffDomainsRet)
                return object;
            var message = new $root.dto.StaffDomainsRet();
            if (object.domainIds) {
                if (!Array.isArray(object.domainIds))
                    throw TypeError(".dto.StaffDomainsRet.domainIds: array expected");
                message.domainIds = [];
                for (var i = 0; i < object.domainIds.length; ++i)
                    message.domainIds[i] = String(object.domainIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StaffDomainsRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {dto.StaffDomainsRet} message StaffDomainsRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StaffDomainsRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.domainIds = [];
            if (message.domainIds && message.domainIds.length) {
                object.domainIds = [];
                for (var j = 0; j < message.domainIds.length; ++j)
                    object.domainIds[j] = message.domainIds[j];
            }
            return object;
        };

        /**
         * Converts this StaffDomainsRet to JSON.
         * @function toJSON
         * @memberof dto.StaffDomainsRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StaffDomainsRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StaffDomainsRet
         * @function getTypeUrl
         * @memberof dto.StaffDomainsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StaffDomainsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.StaffDomainsRet";
        };

        return StaffDomainsRet;
    })();

    dto.StaffRolesInDomainRet = (function() {

        /**
         * Properties of a StaffRolesInDomainRet.
         * @memberof dto
         * @interface IStaffRolesInDomainRet
         * @property {Array.<string>|null} [roleIds] StaffRolesInDomainRet roleIds
         */

        /**
         * Constructs a new StaffRolesInDomainRet.
         * @memberof dto
         * @classdesc Represents a StaffRolesInDomainRet.
         * @implements IStaffRolesInDomainRet
         * @constructor
         * @param {dto.IStaffRolesInDomainRet=} [properties] Properties to set
         */
        function StaffRolesInDomainRet(properties) {
            this.roleIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StaffRolesInDomainRet roleIds.
         * @member {Array.<string>} roleIds
         * @memberof dto.StaffRolesInDomainRet
         * @instance
         */
        StaffRolesInDomainRet.prototype.roleIds = $util.emptyArray;

        /**
         * Creates a new StaffRolesInDomainRet instance using the specified properties.
         * @function create
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {dto.IStaffRolesInDomainRet=} [properties] Properties to set
         * @returns {dto.StaffRolesInDomainRet} StaffRolesInDomainRet instance
         */
        StaffRolesInDomainRet.create = function create(properties) {
            return new StaffRolesInDomainRet(properties);
        };

        /**
         * Encodes the specified StaffRolesInDomainRet message. Does not implicitly {@link dto.StaffRolesInDomainRet.verify|verify} messages.
         * @function encode
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {dto.IStaffRolesInDomainRet} message StaffRolesInDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaffRolesInDomainRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleIds != null && message.roleIds.length)
                for (var i = 0; i < message.roleIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.roleIds[i]);
            return writer;
        };

        /**
         * Encodes the specified StaffRolesInDomainRet message, length delimited. Does not implicitly {@link dto.StaffRolesInDomainRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {dto.IStaffRolesInDomainRet} message StaffRolesInDomainRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaffRolesInDomainRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StaffRolesInDomainRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.StaffRolesInDomainRet} StaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaffRolesInDomainRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.StaffRolesInDomainRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.roleIds && message.roleIds.length))
                            message.roleIds = [];
                        message.roleIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StaffRolesInDomainRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.StaffRolesInDomainRet} StaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaffRolesInDomainRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StaffRolesInDomainRet message.
         * @function verify
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StaffRolesInDomainRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleIds != null && message.hasOwnProperty("roleIds")) {
                if (!Array.isArray(message.roleIds))
                    return "roleIds: array expected";
                for (var i = 0; i < message.roleIds.length; ++i)
                    if (!$util.isString(message.roleIds[i]))
                        return "roleIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a StaffRolesInDomainRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.StaffRolesInDomainRet} StaffRolesInDomainRet
         */
        StaffRolesInDomainRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.StaffRolesInDomainRet)
                return object;
            var message = new $root.dto.StaffRolesInDomainRet();
            if (object.roleIds) {
                if (!Array.isArray(object.roleIds))
                    throw TypeError(".dto.StaffRolesInDomainRet.roleIds: array expected");
                message.roleIds = [];
                for (var i = 0; i < object.roleIds.length; ++i)
                    message.roleIds[i] = String(object.roleIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StaffRolesInDomainRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {dto.StaffRolesInDomainRet} message StaffRolesInDomainRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StaffRolesInDomainRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roleIds = [];
            if (message.roleIds && message.roleIds.length) {
                object.roleIds = [];
                for (var j = 0; j < message.roleIds.length; ++j)
                    object.roleIds[j] = message.roleIds[j];
            }
            return object;
        };

        /**
         * Converts this StaffRolesInDomainRet to JSON.
         * @function toJSON
         * @memberof dto.StaffRolesInDomainRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StaffRolesInDomainRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StaffRolesInDomainRet
         * @function getTypeUrl
         * @memberof dto.StaffRolesInDomainRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StaffRolesInDomainRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.StaffRolesInDomainRet";
        };

        return StaffRolesInDomainRet;
    })();

    dto.EnableStaffRet = (function() {

        /**
         * Properties of an EnableStaffRet.
         * @memberof dto
         * @interface IEnableStaffRet
         * @property {string|null} [id] EnableStaffRet id
         */

        /**
         * Constructs a new EnableStaffRet.
         * @memberof dto
         * @classdesc Represents an EnableStaffRet.
         * @implements IEnableStaffRet
         * @constructor
         * @param {dto.IEnableStaffRet=} [properties] Properties to set
         */
        function EnableStaffRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnableStaffRet id.
         * @member {string} id
         * @memberof dto.EnableStaffRet
         * @instance
         */
        EnableStaffRet.prototype.id = "";

        /**
         * Creates a new EnableStaffRet instance using the specified properties.
         * @function create
         * @memberof dto.EnableStaffRet
         * @static
         * @param {dto.IEnableStaffRet=} [properties] Properties to set
         * @returns {dto.EnableStaffRet} EnableStaffRet instance
         */
        EnableStaffRet.create = function create(properties) {
            return new EnableStaffRet(properties);
        };

        /**
         * Encodes the specified EnableStaffRet message. Does not implicitly {@link dto.EnableStaffRet.verify|verify} messages.
         * @function encode
         * @memberof dto.EnableStaffRet
         * @static
         * @param {dto.IEnableStaffRet} message EnableStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableStaffRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified EnableStaffRet message, length delimited. Does not implicitly {@link dto.EnableStaffRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.EnableStaffRet
         * @static
         * @param {dto.IEnableStaffRet} message EnableStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnableStaffRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnableStaffRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.EnableStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.EnableStaffRet} EnableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableStaffRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.EnableStaffRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnableStaffRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.EnableStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.EnableStaffRet} EnableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnableStaffRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnableStaffRet message.
         * @function verify
         * @memberof dto.EnableStaffRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnableStaffRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an EnableStaffRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.EnableStaffRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.EnableStaffRet} EnableStaffRet
         */
        EnableStaffRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.EnableStaffRet)
                return object;
            var message = new $root.dto.EnableStaffRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an EnableStaffRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.EnableStaffRet
         * @static
         * @param {dto.EnableStaffRet} message EnableStaffRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnableStaffRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EnableStaffRet to JSON.
         * @function toJSON
         * @memberof dto.EnableStaffRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnableStaffRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnableStaffRet
         * @function getTypeUrl
         * @memberof dto.EnableStaffRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnableStaffRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.EnableStaffRet";
        };

        return EnableStaffRet;
    })();

    dto.DisableStaffRet = (function() {

        /**
         * Properties of a DisableStaffRet.
         * @memberof dto
         * @interface IDisableStaffRet
         * @property {string|null} [id] DisableStaffRet id
         */

        /**
         * Constructs a new DisableStaffRet.
         * @memberof dto
         * @classdesc Represents a DisableStaffRet.
         * @implements IDisableStaffRet
         * @constructor
         * @param {dto.IDisableStaffRet=} [properties] Properties to set
         */
        function DisableStaffRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisableStaffRet id.
         * @member {string} id
         * @memberof dto.DisableStaffRet
         * @instance
         */
        DisableStaffRet.prototype.id = "";

        /**
         * Creates a new DisableStaffRet instance using the specified properties.
         * @function create
         * @memberof dto.DisableStaffRet
         * @static
         * @param {dto.IDisableStaffRet=} [properties] Properties to set
         * @returns {dto.DisableStaffRet} DisableStaffRet instance
         */
        DisableStaffRet.create = function create(properties) {
            return new DisableStaffRet(properties);
        };

        /**
         * Encodes the specified DisableStaffRet message. Does not implicitly {@link dto.DisableStaffRet.verify|verify} messages.
         * @function encode
         * @memberof dto.DisableStaffRet
         * @static
         * @param {dto.IDisableStaffRet} message DisableStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableStaffRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DisableStaffRet message, length delimited. Does not implicitly {@link dto.DisableStaffRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DisableStaffRet
         * @static
         * @param {dto.IDisableStaffRet} message DisableStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableStaffRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisableStaffRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DisableStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DisableStaffRet} DisableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableStaffRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DisableStaffRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisableStaffRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DisableStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DisableStaffRet} DisableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableStaffRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisableStaffRet message.
         * @function verify
         * @memberof dto.DisableStaffRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisableStaffRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DisableStaffRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DisableStaffRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DisableStaffRet} DisableStaffRet
         */
        DisableStaffRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DisableStaffRet)
                return object;
            var message = new $root.dto.DisableStaffRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DisableStaffRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DisableStaffRet
         * @static
         * @param {dto.DisableStaffRet} message DisableStaffRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisableStaffRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DisableStaffRet to JSON.
         * @function toJSON
         * @memberof dto.DisableStaffRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisableStaffRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DisableStaffRet
         * @function getTypeUrl
         * @memberof dto.DisableStaffRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DisableStaffRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.DisableStaffRet";
        };

        return DisableStaffRet;
    })();

    dto.RemoveStaffRet = (function() {

        /**
         * Properties of a RemoveStaffRet.
         * @memberof dto
         * @interface IRemoveStaffRet
         * @property {string|null} [id] RemoveStaffRet id
         */

        /**
         * Constructs a new RemoveStaffRet.
         * @memberof dto
         * @classdesc Represents a RemoveStaffRet.
         * @implements IRemoveStaffRet
         * @constructor
         * @param {dto.IRemoveStaffRet=} [properties] Properties to set
         */
        function RemoveStaffRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveStaffRet id.
         * @member {string} id
         * @memberof dto.RemoveStaffRet
         * @instance
         */
        RemoveStaffRet.prototype.id = "";

        /**
         * Creates a new RemoveStaffRet instance using the specified properties.
         * @function create
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {dto.IRemoveStaffRet=} [properties] Properties to set
         * @returns {dto.RemoveStaffRet} RemoveStaffRet instance
         */
        RemoveStaffRet.create = function create(properties) {
            return new RemoveStaffRet(properties);
        };

        /**
         * Encodes the specified RemoveStaffRet message. Does not implicitly {@link dto.RemoveStaffRet.verify|verify} messages.
         * @function encode
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {dto.IRemoveStaffRet} message RemoveStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveStaffRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified RemoveStaffRet message, length delimited. Does not implicitly {@link dto.RemoveStaffRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {dto.IRemoveStaffRet} message RemoveStaffRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveStaffRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveStaffRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.RemoveStaffRet} RemoveStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveStaffRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.RemoveStaffRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveStaffRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.RemoveStaffRet} RemoveStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveStaffRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveStaffRet message.
         * @function verify
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveStaffRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a RemoveStaffRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.RemoveStaffRet} RemoveStaffRet
         */
        RemoveStaffRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.RemoveStaffRet)
                return object;
            var message = new $root.dto.RemoveStaffRet();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a RemoveStaffRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {dto.RemoveStaffRet} message RemoveStaffRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveStaffRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this RemoveStaffRet to JSON.
         * @function toJSON
         * @memberof dto.RemoveStaffRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveStaffRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveStaffRet
         * @function getTypeUrl
         * @memberof dto.RemoveStaffRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveStaffRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.RemoveStaffRet";
        };

        return RemoveStaffRet;
    })();

    dto.ListChangeLogElem = (function() {

        /**
         * Properties of a ListChangeLogElem.
         * @memberof dto
         * @interface IListChangeLogElem
         * @property {string|null} [id] ListChangeLogElem id
         * @property {string|null} [collName] ListChangeLogElem collName
         * @property {string|null} [recordId] ListChangeLogElem recordId
         * @property {Object.<string,google.protobuf.IAny>|null} [fieldDiff] ListChangeLogElem fieldDiff
         * @property {string|null} [createdBy] ListChangeLogElem createdBy
         * @property {string|null} [createdAt] ListChangeLogElem createdAt
         * @property {string|null} [updatedBy] ListChangeLogElem updatedBy
         * @property {string|null} [updatedAt] ListChangeLogElem updatedAt
         */

        /**
         * Constructs a new ListChangeLogElem.
         * @memberof dto
         * @classdesc Represents a ListChangeLogElem.
         * @implements IListChangeLogElem
         * @constructor
         * @param {dto.IListChangeLogElem=} [properties] Properties to set
         */
        function ListChangeLogElem(properties) {
            this.fieldDiff = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListChangeLogElem id.
         * @member {string} id
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.id = "";

        /**
         * ListChangeLogElem collName.
         * @member {string} collName
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.collName = "";

        /**
         * ListChangeLogElem recordId.
         * @member {string} recordId
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.recordId = "";

        /**
         * ListChangeLogElem fieldDiff.
         * @member {Object.<string,google.protobuf.IAny>} fieldDiff
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.fieldDiff = $util.emptyObject;

        /**
         * ListChangeLogElem createdBy.
         * @member {string} createdBy
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.createdBy = "";

        /**
         * ListChangeLogElem createdAt.
         * @member {string} createdAt
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.createdAt = "";

        /**
         * ListChangeLogElem updatedBy.
         * @member {string} updatedBy
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.updatedBy = "";

        /**
         * ListChangeLogElem updatedAt.
         * @member {string} updatedAt
         * @memberof dto.ListChangeLogElem
         * @instance
         */
        ListChangeLogElem.prototype.updatedAt = "";

        /**
         * Creates a new ListChangeLogElem instance using the specified properties.
         * @function create
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {dto.IListChangeLogElem=} [properties] Properties to set
         * @returns {dto.ListChangeLogElem} ListChangeLogElem instance
         */
        ListChangeLogElem.create = function create(properties) {
            return new ListChangeLogElem(properties);
        };

        /**
         * Encodes the specified ListChangeLogElem message. Does not implicitly {@link dto.ListChangeLogElem.verify|verify} messages.
         * @function encode
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {dto.IListChangeLogElem} message ListChangeLogElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChangeLogElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.collName != null && Object.hasOwnProperty.call(message, "collName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.collName);
            if (message.recordId != null && Object.hasOwnProperty.call(message, "recordId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.recordId);
            if (message.fieldDiff != null && Object.hasOwnProperty.call(message, "fieldDiff"))
                for (var keys = Object.keys(message.fieldDiff), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.google.protobuf.Any.encode(message.fieldDiff[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified ListChangeLogElem message, length delimited. Does not implicitly {@link dto.ListChangeLogElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {dto.IListChangeLogElem} message ListChangeLogElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChangeLogElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListChangeLogElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListChangeLogElem} ListChangeLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChangeLogElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListChangeLogElem(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.collName = reader.string();
                        break;
                    }
                case 3: {
                        message.recordId = reader.string();
                        break;
                    }
                case 4: {
                        if (message.fieldDiff === $util.emptyObject)
                            message.fieldDiff = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.google.protobuf.Any.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.fieldDiff[key] = value;
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListChangeLogElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListChangeLogElem} ListChangeLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChangeLogElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListChangeLogElem message.
         * @function verify
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListChangeLogElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.collName != null && message.hasOwnProperty("collName"))
                if (!$util.isString(message.collName))
                    return "collName: string expected";
            if (message.recordId != null && message.hasOwnProperty("recordId"))
                if (!$util.isString(message.recordId))
                    return "recordId: string expected";
            if (message.fieldDiff != null && message.hasOwnProperty("fieldDiff")) {
                if (!$util.isObject(message.fieldDiff))
                    return "fieldDiff: object expected";
                var key = Object.keys(message.fieldDiff);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.google.protobuf.Any.verify(message.fieldDiff[key[i]]);
                    if (error)
                        return "fieldDiff." + error;
                }
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a ListChangeLogElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListChangeLogElem} ListChangeLogElem
         */
        ListChangeLogElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListChangeLogElem)
                return object;
            var message = new $root.dto.ListChangeLogElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.collName != null)
                message.collName = String(object.collName);
            if (object.recordId != null)
                message.recordId = String(object.recordId);
            if (object.fieldDiff) {
                if (typeof object.fieldDiff !== "object")
                    throw TypeError(".dto.ListChangeLogElem.fieldDiff: object expected");
                message.fieldDiff = {};
                for (var keys = Object.keys(object.fieldDiff), i = 0; i < keys.length; ++i) {
                    if (typeof object.fieldDiff[keys[i]] !== "object")
                        throw TypeError(".dto.ListChangeLogElem.fieldDiff: object expected");
                    message.fieldDiff[keys[i]] = $root.google.protobuf.Any.fromObject(object.fieldDiff[keys[i]]);
                }
            }
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a ListChangeLogElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {dto.ListChangeLogElem} message ListChangeLogElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListChangeLogElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.fieldDiff = {};
            if (options.defaults) {
                object.id = "";
                object.collName = "";
                object.recordId = "";
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.collName != null && message.hasOwnProperty("collName"))
                object.collName = message.collName;
            if (message.recordId != null && message.hasOwnProperty("recordId"))
                object.recordId = message.recordId;
            var keys2;
            if (message.fieldDiff && (keys2 = Object.keys(message.fieldDiff)).length) {
                object.fieldDiff = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.fieldDiff[keys2[j]] = $root.google.protobuf.Any.toObject(message.fieldDiff[keys2[j]], options);
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this ListChangeLogElem to JSON.
         * @function toJSON
         * @memberof dto.ListChangeLogElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListChangeLogElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListChangeLogElem
         * @function getTypeUrl
         * @memberof dto.ListChangeLogElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListChangeLogElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListChangeLogElem";
        };

        return ListChangeLogElem;
    })();

    dto.ListChangeLogRet = (function() {

        /**
         * Properties of a ListChangeLogRet.
         * @memberof dto
         * @interface IListChangeLogRet
         * @property {Array.<dto.IListChangeLogElem>|null} [list] ListChangeLogRet list
         * @property {number|Long|null} [total] ListChangeLogRet total
         */

        /**
         * Constructs a new ListChangeLogRet.
         * @memberof dto
         * @classdesc Represents a ListChangeLogRet.
         * @implements IListChangeLogRet
         * @constructor
         * @param {dto.IListChangeLogRet=} [properties] Properties to set
         */
        function ListChangeLogRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListChangeLogRet list.
         * @member {Array.<dto.IListChangeLogElem>} list
         * @memberof dto.ListChangeLogRet
         * @instance
         */
        ListChangeLogRet.prototype.list = $util.emptyArray;

        /**
         * ListChangeLogRet total.
         * @member {number|Long} total
         * @memberof dto.ListChangeLogRet
         * @instance
         */
        ListChangeLogRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ListChangeLogRet instance using the specified properties.
         * @function create
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {dto.IListChangeLogRet=} [properties] Properties to set
         * @returns {dto.ListChangeLogRet} ListChangeLogRet instance
         */
        ListChangeLogRet.create = function create(properties) {
            return new ListChangeLogRet(properties);
        };

        /**
         * Encodes the specified ListChangeLogRet message. Does not implicitly {@link dto.ListChangeLogRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {dto.IListChangeLogRet} message ListChangeLogRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChangeLogRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.ListChangeLogElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified ListChangeLogRet message, length delimited. Does not implicitly {@link dto.ListChangeLogRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {dto.IListChangeLogRet} message ListChangeLogRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChangeLogRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListChangeLogRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListChangeLogRet} ListChangeLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChangeLogRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListChangeLogRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.ListChangeLogElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListChangeLogRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListChangeLogRet} ListChangeLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChangeLogRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListChangeLogRet message.
         * @function verify
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListChangeLogRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.ListChangeLogElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a ListChangeLogRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListChangeLogRet} ListChangeLogRet
         */
        ListChangeLogRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListChangeLogRet)
                return object;
            var message = new $root.dto.ListChangeLogRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.ListChangeLogRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.ListChangeLogRet.list: object expected");
                    message.list[i] = $root.dto.ListChangeLogElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ListChangeLogRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {dto.ListChangeLogRet} message ListChangeLogRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListChangeLogRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.ListChangeLogElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this ListChangeLogRet to JSON.
         * @function toJSON
         * @memberof dto.ListChangeLogRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListChangeLogRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListChangeLogRet
         * @function getTypeUrl
         * @memberof dto.ListChangeLogRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListChangeLogRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListChangeLogRet";
        };

        return ListChangeLogRet;
    })();

    dto.ListAccessLogElem = (function() {

        /**
         * Properties of a ListAccessLogElem.
         * @memberof dto
         * @interface IListAccessLogElem
         * @property {string|null} [id] ListAccessLogElem id
         * @property {string|null} [level] ListAccessLogElem level
         * @property {number|Long|null} [time] ListAccessLogElem time
         * @property {string|null} [clientIp] ListAccessLogElem clientIp
         * @property {string|null} [proto] ListAccessLogElem proto
         * @property {string|null} [method] ListAccessLogElem method
         * @property {string|null} [path] ListAccessLogElem path
         * @property {string|null} [queries] ListAccessLogElem queries
         * @property {string|null} [requestHeaders] ListAccessLogElem requestHeaders
         * @property {string|null} [requestBody] ListAccessLogElem requestBody
         * @property {string|null} [statusCode] ListAccessLogElem statusCode
         * @property {string|null} [responseHeaders] ListAccessLogElem responseHeaders
         * @property {string|null} [responseBody] ListAccessLogElem responseBody
         * @property {string|null} [latency] ListAccessLogElem latency
         * @property {string|null} [traceId] ListAccessLogElem traceId
         * @property {string|null} [sessionId] ListAccessLogElem sessionId
         * @property {string|null} [tag] ListAccessLogElem tag
         * @property {string|null} [stack] ListAccessLogElem stack
         * @property {string|null} [createdBy] ListAccessLogElem createdBy
         * @property {string|null} [createdAt] ListAccessLogElem createdAt
         * @property {string|null} [updatedBy] ListAccessLogElem updatedBy
         * @property {string|null} [updatedAt] ListAccessLogElem updatedAt
         */

        /**
         * Constructs a new ListAccessLogElem.
         * @memberof dto
         * @classdesc Represents a ListAccessLogElem.
         * @implements IListAccessLogElem
         * @constructor
         * @param {dto.IListAccessLogElem=} [properties] Properties to set
         */
        function ListAccessLogElem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListAccessLogElem id.
         * @member {string} id
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.id = "";

        /**
         * ListAccessLogElem level.
         * @member {string} level
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.level = "";

        /**
         * ListAccessLogElem time.
         * @member {number|Long} time
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListAccessLogElem clientIp.
         * @member {string} clientIp
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.clientIp = "";

        /**
         * ListAccessLogElem proto.
         * @member {string} proto
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.proto = "";

        /**
         * ListAccessLogElem method.
         * @member {string} method
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.method = "";

        /**
         * ListAccessLogElem path.
         * @member {string} path
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.path = "";

        /**
         * ListAccessLogElem queries.
         * @member {string} queries
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.queries = "";

        /**
         * ListAccessLogElem requestHeaders.
         * @member {string} requestHeaders
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.requestHeaders = "";

        /**
         * ListAccessLogElem requestBody.
         * @member {string} requestBody
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.requestBody = "";

        /**
         * ListAccessLogElem statusCode.
         * @member {string} statusCode
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.statusCode = "";

        /**
         * ListAccessLogElem responseHeaders.
         * @member {string} responseHeaders
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.responseHeaders = "";

        /**
         * ListAccessLogElem responseBody.
         * @member {string} responseBody
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.responseBody = "";

        /**
         * ListAccessLogElem latency.
         * @member {string} latency
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.latency = "";

        /**
         * ListAccessLogElem traceId.
         * @member {string} traceId
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.traceId = "";

        /**
         * ListAccessLogElem sessionId.
         * @member {string} sessionId
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.sessionId = "";

        /**
         * ListAccessLogElem tag.
         * @member {string} tag
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.tag = "";

        /**
         * ListAccessLogElem stack.
         * @member {string} stack
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.stack = "";

        /**
         * ListAccessLogElem createdBy.
         * @member {string} createdBy
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.createdBy = "";

        /**
         * ListAccessLogElem createdAt.
         * @member {string} createdAt
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.createdAt = "";

        /**
         * ListAccessLogElem updatedBy.
         * @member {string} updatedBy
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.updatedBy = "";

        /**
         * ListAccessLogElem updatedAt.
         * @member {string} updatedAt
         * @memberof dto.ListAccessLogElem
         * @instance
         */
        ListAccessLogElem.prototype.updatedAt = "";

        /**
         * Creates a new ListAccessLogElem instance using the specified properties.
         * @function create
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {dto.IListAccessLogElem=} [properties] Properties to set
         * @returns {dto.ListAccessLogElem} ListAccessLogElem instance
         */
        ListAccessLogElem.create = function create(properties) {
            return new ListAccessLogElem(properties);
        };

        /**
         * Encodes the specified ListAccessLogElem message. Does not implicitly {@link dto.ListAccessLogElem.verify|verify} messages.
         * @function encode
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {dto.IListAccessLogElem} message ListAccessLogElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAccessLogElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.level);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.time);
            if (message.clientIp != null && Object.hasOwnProperty.call(message, "clientIp"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientIp);
            if (message.proto != null && Object.hasOwnProperty.call(message, "proto"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.proto);
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.method);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.path);
            if (message.queries != null && Object.hasOwnProperty.call(message, "queries"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.queries);
            if (message.requestHeaders != null && Object.hasOwnProperty.call(message, "requestHeaders"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.requestHeaders);
            if (message.requestBody != null && Object.hasOwnProperty.call(message, "requestBody"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.requestBody);
            if (message.statusCode != null && Object.hasOwnProperty.call(message, "statusCode"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.statusCode);
            if (message.responseHeaders != null && Object.hasOwnProperty.call(message, "responseHeaders"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.responseHeaders);
            if (message.responseBody != null && Object.hasOwnProperty.call(message, "responseBody"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.responseBody);
            if (message.latency != null && Object.hasOwnProperty.call(message, "latency"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.latency);
            if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.traceId);
            if (message.createdBy != null && Object.hasOwnProperty.call(message, "createdBy"))
                writer.uint32(/* id 20000, wireType 2 =*/160002).string(message.createdBy);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 20001, wireType 2 =*/160010).string(message.createdAt);
            if (message.updatedBy != null && Object.hasOwnProperty.call(message, "updatedBy"))
                writer.uint32(/* id 20002, wireType 2 =*/160018).string(message.updatedBy);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20003, wireType 2 =*/160026).string(message.updatedAt);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 20004, wireType 2 =*/160034).string(message.sessionId);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 20005, wireType 2 =*/160042).string(message.tag);
            if (message.stack != null && Object.hasOwnProperty.call(message, "stack"))
                writer.uint32(/* id 20006, wireType 2 =*/160050).string(message.stack);
            return writer;
        };

        /**
         * Encodes the specified ListAccessLogElem message, length delimited. Does not implicitly {@link dto.ListAccessLogElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {dto.IListAccessLogElem} message ListAccessLogElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAccessLogElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListAccessLogElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListAccessLogElem} ListAccessLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAccessLogElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListAccessLogElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.level = reader.string();
                        break;
                    }
                case 3: {
                        message.time = reader.sint64();
                        break;
                    }
                case 4: {
                        message.clientIp = reader.string();
                        break;
                    }
                case 5: {
                        message.proto = reader.string();
                        break;
                    }
                case 6: {
                        message.method = reader.string();
                        break;
                    }
                case 7: {
                        message.path = reader.string();
                        break;
                    }
                case 8: {
                        message.queries = reader.string();
                        break;
                    }
                case 9: {
                        message.requestHeaders = reader.string();
                        break;
                    }
                case 10: {
                        message.requestBody = reader.string();
                        break;
                    }
                case 11: {
                        message.statusCode = reader.string();
                        break;
                    }
                case 12: {
                        message.responseHeaders = reader.string();
                        break;
                    }
                case 13: {
                        message.responseBody = reader.string();
                        break;
                    }
                case 14: {
                        message.latency = reader.string();
                        break;
                    }
                case 15: {
                        message.traceId = reader.string();
                        break;
                    }
                case 20004: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 20005: {
                        message.tag = reader.string();
                        break;
                    }
                case 20006: {
                        message.stack = reader.string();
                        break;
                    }
                case 20000: {
                        message.createdBy = reader.string();
                        break;
                    }
                case 20001: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20002: {
                        message.updatedBy = reader.string();
                        break;
                    }
                case 20003: {
                        message.updatedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListAccessLogElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListAccessLogElem} ListAccessLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAccessLogElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListAccessLogElem message.
         * @function verify
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListAccessLogElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isString(message.level))
                    return "level: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                if (!$util.isString(message.clientIp))
                    return "clientIp: string expected";
            if (message.proto != null && message.hasOwnProperty("proto"))
                if (!$util.isString(message.proto))
                    return "proto: string expected";
            if (message.method != null && message.hasOwnProperty("method"))
                if (!$util.isString(message.method))
                    return "method: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.queries != null && message.hasOwnProperty("queries"))
                if (!$util.isString(message.queries))
                    return "queries: string expected";
            if (message.requestHeaders != null && message.hasOwnProperty("requestHeaders"))
                if (!$util.isString(message.requestHeaders))
                    return "requestHeaders: string expected";
            if (message.requestBody != null && message.hasOwnProperty("requestBody"))
                if (!$util.isString(message.requestBody))
                    return "requestBody: string expected";
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isString(message.statusCode))
                    return "statusCode: string expected";
            if (message.responseHeaders != null && message.hasOwnProperty("responseHeaders"))
                if (!$util.isString(message.responseHeaders))
                    return "responseHeaders: string expected";
            if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                if (!$util.isString(message.responseBody))
                    return "responseBody: string expected";
            if (message.latency != null && message.hasOwnProperty("latency"))
                if (!$util.isString(message.latency))
                    return "latency: string expected";
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                if (!$util.isString(message.traceId))
                    return "traceId: string expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.stack != null && message.hasOwnProperty("stack"))
                if (!$util.isString(message.stack))
                    return "stack: string expected";
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                if (!$util.isString(message.updatedBy))
                    return "updatedBy: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a ListAccessLogElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListAccessLogElem} ListAccessLogElem
         */
        ListAccessLogElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListAccessLogElem)
                return object;
            var message = new $root.dto.ListAccessLogElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.level != null)
                message.level = String(object.level);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.clientIp != null)
                message.clientIp = String(object.clientIp);
            if (object.proto != null)
                message.proto = String(object.proto);
            if (object.method != null)
                message.method = String(object.method);
            if (object.path != null)
                message.path = String(object.path);
            if (object.queries != null)
                message.queries = String(object.queries);
            if (object.requestHeaders != null)
                message.requestHeaders = String(object.requestHeaders);
            if (object.requestBody != null)
                message.requestBody = String(object.requestBody);
            if (object.statusCode != null)
                message.statusCode = String(object.statusCode);
            if (object.responseHeaders != null)
                message.responseHeaders = String(object.responseHeaders);
            if (object.responseBody != null)
                message.responseBody = String(object.responseBody);
            if (object.latency != null)
                message.latency = String(object.latency);
            if (object.traceId != null)
                message.traceId = String(object.traceId);
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.stack != null)
                message.stack = String(object.stack);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedBy != null)
                message.updatedBy = String(object.updatedBy);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a ListAccessLogElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {dto.ListAccessLogElem} message ListAccessLogElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListAccessLogElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.level = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.clientIp = "";
                object.proto = "";
                object.method = "";
                object.path = "";
                object.queries = "";
                object.requestHeaders = "";
                object.requestBody = "";
                object.statusCode = "";
                object.responseHeaders = "";
                object.responseBody = "";
                object.latency = "";
                object.traceId = "";
                object.createdBy = "";
                object.createdAt = "";
                object.updatedBy = "";
                object.updatedAt = "";
                object.sessionId = "";
                object.tag = "";
                object.stack = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.clientIp != null && message.hasOwnProperty("clientIp"))
                object.clientIp = message.clientIp;
            if (message.proto != null && message.hasOwnProperty("proto"))
                object.proto = message.proto;
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = message.method;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.queries != null && message.hasOwnProperty("queries"))
                object.queries = message.queries;
            if (message.requestHeaders != null && message.hasOwnProperty("requestHeaders"))
                object.requestHeaders = message.requestHeaders;
            if (message.requestBody != null && message.hasOwnProperty("requestBody"))
                object.requestBody = message.requestBody;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.responseHeaders != null && message.hasOwnProperty("responseHeaders"))
                object.responseHeaders = message.responseHeaders;
            if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                object.responseBody = message.responseBody;
            if (message.latency != null && message.hasOwnProperty("latency"))
                object.latency = message.latency;
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                object.traceId = message.traceId;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedBy != null && message.hasOwnProperty("updatedBy"))
                object.updatedBy = message.updatedBy;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.stack != null && message.hasOwnProperty("stack"))
                object.stack = message.stack;
            return object;
        };

        /**
         * Converts this ListAccessLogElem to JSON.
         * @function toJSON
         * @memberof dto.ListAccessLogElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListAccessLogElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListAccessLogElem
         * @function getTypeUrl
         * @memberof dto.ListAccessLogElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListAccessLogElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListAccessLogElem";
        };

        return ListAccessLogElem;
    })();

    dto.ListAccessLogRet = (function() {

        /**
         * Properties of a ListAccessLogRet.
         * @memberof dto
         * @interface IListAccessLogRet
         * @property {Array.<dto.IListAccessLogElem>|null} [list] ListAccessLogRet list
         * @property {number|Long|null} [total] ListAccessLogRet total
         */

        /**
         * Constructs a new ListAccessLogRet.
         * @memberof dto
         * @classdesc Represents a ListAccessLogRet.
         * @implements IListAccessLogRet
         * @constructor
         * @param {dto.IListAccessLogRet=} [properties] Properties to set
         */
        function ListAccessLogRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListAccessLogRet list.
         * @member {Array.<dto.IListAccessLogElem>} list
         * @memberof dto.ListAccessLogRet
         * @instance
         */
        ListAccessLogRet.prototype.list = $util.emptyArray;

        /**
         * ListAccessLogRet total.
         * @member {number|Long} total
         * @memberof dto.ListAccessLogRet
         * @instance
         */
        ListAccessLogRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ListAccessLogRet instance using the specified properties.
         * @function create
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {dto.IListAccessLogRet=} [properties] Properties to set
         * @returns {dto.ListAccessLogRet} ListAccessLogRet instance
         */
        ListAccessLogRet.create = function create(properties) {
            return new ListAccessLogRet(properties);
        };

        /**
         * Encodes the specified ListAccessLogRet message. Does not implicitly {@link dto.ListAccessLogRet.verify|verify} messages.
         * @function encode
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {dto.IListAccessLogRet} message ListAccessLogRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAccessLogRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.ListAccessLogElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified ListAccessLogRet message, length delimited. Does not implicitly {@link dto.ListAccessLogRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {dto.IListAccessLogRet} message ListAccessLogRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAccessLogRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListAccessLogRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListAccessLogRet} ListAccessLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAccessLogRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListAccessLogRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.ListAccessLogElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListAccessLogRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListAccessLogRet} ListAccessLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAccessLogRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListAccessLogRet message.
         * @function verify
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListAccessLogRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.ListAccessLogElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a ListAccessLogRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListAccessLogRet} ListAccessLogRet
         */
        ListAccessLogRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListAccessLogRet)
                return object;
            var message = new $root.dto.ListAccessLogRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.ListAccessLogRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.ListAccessLogRet.list: object expected");
                    message.list[i] = $root.dto.ListAccessLogElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ListAccessLogRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {dto.ListAccessLogRet} message ListAccessLogRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListAccessLogRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.ListAccessLogElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this ListAccessLogRet to JSON.
         * @function toJSON
         * @memberof dto.ListAccessLogRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListAccessLogRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListAccessLogRet
         * @function getTypeUrl
         * @memberof dto.ListAccessLogRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListAccessLogRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.ListAccessLogRet";
        };

        return ListAccessLogRet;
    })();

    dto.GetPicCaptchaRet = (function() {

        /**
         * Properties of a GetPicCaptchaRet.
         * @memberof dto
         * @interface IGetPicCaptchaRet
         * @property {string|null} [picCaptchaId] GetPicCaptchaRet picCaptchaId
         * @property {string|null} [picCaptchaB64s] GetPicCaptchaRet picCaptchaB64s
         */

        /**
         * Constructs a new GetPicCaptchaRet.
         * @memberof dto
         * @classdesc Represents a GetPicCaptchaRet.
         * @implements IGetPicCaptchaRet
         * @constructor
         * @param {dto.IGetPicCaptchaRet=} [properties] Properties to set
         */
        function GetPicCaptchaRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPicCaptchaRet picCaptchaId.
         * @member {string} picCaptchaId
         * @memberof dto.GetPicCaptchaRet
         * @instance
         */
        GetPicCaptchaRet.prototype.picCaptchaId = "";

        /**
         * GetPicCaptchaRet picCaptchaB64s.
         * @member {string} picCaptchaB64s
         * @memberof dto.GetPicCaptchaRet
         * @instance
         */
        GetPicCaptchaRet.prototype.picCaptchaB64s = "";

        /**
         * Creates a new GetPicCaptchaRet instance using the specified properties.
         * @function create
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {dto.IGetPicCaptchaRet=} [properties] Properties to set
         * @returns {dto.GetPicCaptchaRet} GetPicCaptchaRet instance
         */
        GetPicCaptchaRet.create = function create(properties) {
            return new GetPicCaptchaRet(properties);
        };

        /**
         * Encodes the specified GetPicCaptchaRet message. Does not implicitly {@link dto.GetPicCaptchaRet.verify|verify} messages.
         * @function encode
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {dto.IGetPicCaptchaRet} message GetPicCaptchaRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPicCaptchaRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.picCaptchaId != null && Object.hasOwnProperty.call(message, "picCaptchaId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.picCaptchaId);
            if (message.picCaptchaB64s != null && Object.hasOwnProperty.call(message, "picCaptchaB64s"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.picCaptchaB64s);
            return writer;
        };

        /**
         * Encodes the specified GetPicCaptchaRet message, length delimited. Does not implicitly {@link dto.GetPicCaptchaRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {dto.IGetPicCaptchaRet} message GetPicCaptchaRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPicCaptchaRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPicCaptchaRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetPicCaptchaRet} GetPicCaptchaRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPicCaptchaRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetPicCaptchaRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.picCaptchaId = reader.string();
                        break;
                    }
                case 2: {
                        message.picCaptchaB64s = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPicCaptchaRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetPicCaptchaRet} GetPicCaptchaRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPicCaptchaRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPicCaptchaRet message.
         * @function verify
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPicCaptchaRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.picCaptchaId != null && message.hasOwnProperty("picCaptchaId"))
                if (!$util.isString(message.picCaptchaId))
                    return "picCaptchaId: string expected";
            if (message.picCaptchaB64s != null && message.hasOwnProperty("picCaptchaB64s"))
                if (!$util.isString(message.picCaptchaB64s))
                    return "picCaptchaB64s: string expected";
            return null;
        };

        /**
         * Creates a GetPicCaptchaRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetPicCaptchaRet} GetPicCaptchaRet
         */
        GetPicCaptchaRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetPicCaptchaRet)
                return object;
            var message = new $root.dto.GetPicCaptchaRet();
            if (object.picCaptchaId != null)
                message.picCaptchaId = String(object.picCaptchaId);
            if (object.picCaptchaB64s != null)
                message.picCaptchaB64s = String(object.picCaptchaB64s);
            return message;
        };

        /**
         * Creates a plain object from a GetPicCaptchaRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {dto.GetPicCaptchaRet} message GetPicCaptchaRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPicCaptchaRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.picCaptchaId = "";
                object.picCaptchaB64s = "";
            }
            if (message.picCaptchaId != null && message.hasOwnProperty("picCaptchaId"))
                object.picCaptchaId = message.picCaptchaId;
            if (message.picCaptchaB64s != null && message.hasOwnProperty("picCaptchaB64s"))
                object.picCaptchaB64s = message.picCaptchaB64s;
            return object;
        };

        /**
         * Converts this GetPicCaptchaRet to JSON.
         * @function toJSON
         * @memberof dto.GetPicCaptchaRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPicCaptchaRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPicCaptchaRet
         * @function getTypeUrl
         * @memberof dto.GetPicCaptchaRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPicCaptchaRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.GetPicCaptchaRet";
        };

        return GetPicCaptchaRet;
    })();

    dto.GetPicCaptchaAnswerRet = (function() {

        /**
         * Properties of a GetPicCaptchaAnswerRet.
         * @memberof dto
         * @interface IGetPicCaptchaAnswerRet
         * @property {string|null} [answer] GetPicCaptchaAnswerRet answer
         */

        /**
         * Constructs a new GetPicCaptchaAnswerRet.
         * @memberof dto
         * @classdesc Represents a GetPicCaptchaAnswerRet.
         * @implements IGetPicCaptchaAnswerRet
         * @constructor
         * @param {dto.IGetPicCaptchaAnswerRet=} [properties] Properties to set
         */
        function GetPicCaptchaAnswerRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPicCaptchaAnswerRet answer.
         * @member {string} answer
         * @memberof dto.GetPicCaptchaAnswerRet
         * @instance
         */
        GetPicCaptchaAnswerRet.prototype.answer = "";

        /**
         * Creates a new GetPicCaptchaAnswerRet instance using the specified properties.
         * @function create
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {dto.IGetPicCaptchaAnswerRet=} [properties] Properties to set
         * @returns {dto.GetPicCaptchaAnswerRet} GetPicCaptchaAnswerRet instance
         */
        GetPicCaptchaAnswerRet.create = function create(properties) {
            return new GetPicCaptchaAnswerRet(properties);
        };

        /**
         * Encodes the specified GetPicCaptchaAnswerRet message. Does not implicitly {@link dto.GetPicCaptchaAnswerRet.verify|verify} messages.
         * @function encode
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {dto.IGetPicCaptchaAnswerRet} message GetPicCaptchaAnswerRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPicCaptchaAnswerRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.answer != null && Object.hasOwnProperty.call(message, "answer"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.answer);
            return writer;
        };

        /**
         * Encodes the specified GetPicCaptchaAnswerRet message, length delimited. Does not implicitly {@link dto.GetPicCaptchaAnswerRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {dto.IGetPicCaptchaAnswerRet} message GetPicCaptchaAnswerRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPicCaptchaAnswerRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPicCaptchaAnswerRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetPicCaptchaAnswerRet} GetPicCaptchaAnswerRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPicCaptchaAnswerRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetPicCaptchaAnswerRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.answer = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPicCaptchaAnswerRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetPicCaptchaAnswerRet} GetPicCaptchaAnswerRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPicCaptchaAnswerRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPicCaptchaAnswerRet message.
         * @function verify
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPicCaptchaAnswerRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.answer != null && message.hasOwnProperty("answer"))
                if (!$util.isString(message.answer))
                    return "answer: string expected";
            return null;
        };

        /**
         * Creates a GetPicCaptchaAnswerRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetPicCaptchaAnswerRet} GetPicCaptchaAnswerRet
         */
        GetPicCaptchaAnswerRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetPicCaptchaAnswerRet)
                return object;
            var message = new $root.dto.GetPicCaptchaAnswerRet();
            if (object.answer != null)
                message.answer = String(object.answer);
            return message;
        };

        /**
         * Creates a plain object from a GetPicCaptchaAnswerRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {dto.GetPicCaptchaAnswerRet} message GetPicCaptchaAnswerRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPicCaptchaAnswerRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.answer = "";
            if (message.answer != null && message.hasOwnProperty("answer"))
                object.answer = message.answer;
            return object;
        };

        /**
         * Converts this GetPicCaptchaAnswerRet to JSON.
         * @function toJSON
         * @memberof dto.GetPicCaptchaAnswerRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPicCaptchaAnswerRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPicCaptchaAnswerRet
         * @function getTypeUrl
         * @memberof dto.GetPicCaptchaAnswerRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPicCaptchaAnswerRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.GetPicCaptchaAnswerRet";
        };

        return GetPicCaptchaAnswerRet;
    })();

    dto.SignInReq = (function() {

        /**
         * Properties of a SignInReq.
         * @memberof dto
         * @interface ISignInReq
         * @property {string|null} [account] SignInReq account
         * @property {string|null} [password] SignInReq password
         * @property {string|null} [picCaptchaId] SignInReq picCaptchaId
         * @property {string|null} [picCaptchaAnswer] SignInReq picCaptchaAnswer
         */

        /**
         * Constructs a new SignInReq.
         * @memberof dto
         * @classdesc Represents a SignInReq.
         * @implements ISignInReq
         * @constructor
         * @param {dto.ISignInReq=} [properties] Properties to set
         */
        function SignInReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInReq account.
         * @member {string} account
         * @memberof dto.SignInReq
         * @instance
         */
        SignInReq.prototype.account = "";

        /**
         * SignInReq password.
         * @member {string} password
         * @memberof dto.SignInReq
         * @instance
         */
        SignInReq.prototype.password = "";

        /**
         * SignInReq picCaptchaId.
         * @member {string} picCaptchaId
         * @memberof dto.SignInReq
         * @instance
         */
        SignInReq.prototype.picCaptchaId = "";

        /**
         * SignInReq picCaptchaAnswer.
         * @member {string} picCaptchaAnswer
         * @memberof dto.SignInReq
         * @instance
         */
        SignInReq.prototype.picCaptchaAnswer = "";

        /**
         * Creates a new SignInReq instance using the specified properties.
         * @function create
         * @memberof dto.SignInReq
         * @static
         * @param {dto.ISignInReq=} [properties] Properties to set
         * @returns {dto.SignInReq} SignInReq instance
         */
        SignInReq.create = function create(properties) {
            return new SignInReq(properties);
        };

        /**
         * Encodes the specified SignInReq message. Does not implicitly {@link dto.SignInReq.verify|verify} messages.
         * @function encode
         * @memberof dto.SignInReq
         * @static
         * @param {dto.ISignInReq} message SignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.picCaptchaId != null && Object.hasOwnProperty.call(message, "picCaptchaId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.picCaptchaId);
            if (message.picCaptchaAnswer != null && Object.hasOwnProperty.call(message, "picCaptchaAnswer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.picCaptchaAnswer);
            return writer;
        };

        /**
         * Encodes the specified SignInReq message, length delimited. Does not implicitly {@link dto.SignInReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SignInReq
         * @static
         * @param {dto.ISignInReq} message SignInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SignInReq} SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SignInReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.account = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                case 3: {
                        message.picCaptchaId = reader.string();
                        break;
                    }
                case 4: {
                        message.picCaptchaAnswer = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SignInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SignInReq} SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInReq message.
         * @function verify
         * @memberof dto.SignInReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.picCaptchaId != null && message.hasOwnProperty("picCaptchaId"))
                if (!$util.isString(message.picCaptchaId))
                    return "picCaptchaId: string expected";
            if (message.picCaptchaAnswer != null && message.hasOwnProperty("picCaptchaAnswer"))
                if (!$util.isString(message.picCaptchaAnswer))
                    return "picCaptchaAnswer: string expected";
            return null;
        };

        /**
         * Creates a SignInReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SignInReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SignInReq} SignInReq
         */
        SignInReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SignInReq)
                return object;
            var message = new $root.dto.SignInReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            if (object.picCaptchaId != null)
                message.picCaptchaId = String(object.picCaptchaId);
            if (object.picCaptchaAnswer != null)
                message.picCaptchaAnswer = String(object.picCaptchaAnswer);
            return message;
        };

        /**
         * Creates a plain object from a SignInReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SignInReq
         * @static
         * @param {dto.SignInReq} message SignInReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
                object.picCaptchaId = "";
                object.picCaptchaAnswer = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.picCaptchaId != null && message.hasOwnProperty("picCaptchaId"))
                object.picCaptchaId = message.picCaptchaId;
            if (message.picCaptchaAnswer != null && message.hasOwnProperty("picCaptchaAnswer"))
                object.picCaptchaAnswer = message.picCaptchaAnswer;
            return object;
        };

        /**
         * Converts this SignInReq to JSON.
         * @function toJSON
         * @memberof dto.SignInReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignInReq
         * @function getTypeUrl
         * @memberof dto.SignInReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignInReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.SignInReq";
        };

        return SignInReq;
    })();

    dto.SignInRet = (function() {

        /**
         * Properties of a SignInRet.
         * @memberof dto
         * @interface ISignInRet
         * @property {string|null} [token] SignInRet token
         * @property {number|Long|null} [expiresAt] SignInRet expiresAt
         */

        /**
         * Constructs a new SignInRet.
         * @memberof dto
         * @classdesc Represents a SignInRet.
         * @implements ISignInRet
         * @constructor
         * @param {dto.ISignInRet=} [properties] Properties to set
         */
        function SignInRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInRet token.
         * @member {string} token
         * @memberof dto.SignInRet
         * @instance
         */
        SignInRet.prototype.token = "";

        /**
         * SignInRet expiresAt.
         * @member {number|Long} expiresAt
         * @memberof dto.SignInRet
         * @instance
         */
        SignInRet.prototype.expiresAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SignInRet instance using the specified properties.
         * @function create
         * @memberof dto.SignInRet
         * @static
         * @param {dto.ISignInRet=} [properties] Properties to set
         * @returns {dto.SignInRet} SignInRet instance
         */
        SignInRet.create = function create(properties) {
            return new SignInRet(properties);
        };

        /**
         * Encodes the specified SignInRet message. Does not implicitly {@link dto.SignInRet.verify|verify} messages.
         * @function encode
         * @memberof dto.SignInRet
         * @static
         * @param {dto.ISignInRet} message SignInRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.expiresAt != null && Object.hasOwnProperty.call(message, "expiresAt"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.expiresAt);
            return writer;
        };

        /**
         * Encodes the specified SignInRet message, length delimited. Does not implicitly {@link dto.SignInRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SignInRet
         * @static
         * @param {dto.ISignInRet} message SignInRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SignInRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SignInRet} SignInRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SignInRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.expiresAt = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignInRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SignInRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SignInRet} SignInRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInRet message.
         * @function verify
         * @memberof dto.SignInRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                if (!$util.isInteger(message.expiresAt) && !(message.expiresAt && $util.isInteger(message.expiresAt.low) && $util.isInteger(message.expiresAt.high)))
                    return "expiresAt: integer|Long expected";
            return null;
        };

        /**
         * Creates a SignInRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SignInRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SignInRet} SignInRet
         */
        SignInRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SignInRet)
                return object;
            var message = new $root.dto.SignInRet();
            if (object.token != null)
                message.token = String(object.token);
            if (object.expiresAt != null)
                if ($util.Long)
                    (message.expiresAt = $util.Long.fromValue(object.expiresAt)).unsigned = false;
                else if (typeof object.expiresAt === "string")
                    message.expiresAt = parseInt(object.expiresAt, 10);
                else if (typeof object.expiresAt === "number")
                    message.expiresAt = object.expiresAt;
                else if (typeof object.expiresAt === "object")
                    message.expiresAt = new $util.LongBits(object.expiresAt.low >>> 0, object.expiresAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SignInRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SignInRet
         * @static
         * @param {dto.SignInRet} message SignInRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expiresAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expiresAt = options.longs === String ? "0" : 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                if (typeof message.expiresAt === "number")
                    object.expiresAt = options.longs === String ? String(message.expiresAt) : message.expiresAt;
                else
                    object.expiresAt = options.longs === String ? $util.Long.prototype.toString.call(message.expiresAt) : options.longs === Number ? new $util.LongBits(message.expiresAt.low >>> 0, message.expiresAt.high >>> 0).toNumber() : message.expiresAt;
            return object;
        };

        /**
         * Converts this SignInRet to JSON.
         * @function toJSON
         * @memberof dto.SignInRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignInRet
         * @function getTypeUrl
         * @memberof dto.SignInRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignInRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.SignInRet";
        };

        return SignInRet;
    })();

    dto.GetOwnDomainsElem = (function() {

        /**
         * Properties of a GetOwnDomainsElem.
         * @memberof dto
         * @interface IGetOwnDomainsElem
         * @property {string|null} [id] GetOwnDomainsElem id
         * @property {string|null} [name] GetOwnDomainsElem name
         * @property {Array.<string>|null} [alias] GetOwnDomainsElem alias
         * @property {string|null} [icon] GetOwnDomainsElem icon
         */

        /**
         * Constructs a new GetOwnDomainsElem.
         * @memberof dto
         * @classdesc Represents a GetOwnDomainsElem.
         * @implements IGetOwnDomainsElem
         * @constructor
         * @param {dto.IGetOwnDomainsElem=} [properties] Properties to set
         */
        function GetOwnDomainsElem(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOwnDomainsElem id.
         * @member {string} id
         * @memberof dto.GetOwnDomainsElem
         * @instance
         */
        GetOwnDomainsElem.prototype.id = "";

        /**
         * GetOwnDomainsElem name.
         * @member {string} name
         * @memberof dto.GetOwnDomainsElem
         * @instance
         */
        GetOwnDomainsElem.prototype.name = "";

        /**
         * GetOwnDomainsElem alias.
         * @member {Array.<string>} alias
         * @memberof dto.GetOwnDomainsElem
         * @instance
         */
        GetOwnDomainsElem.prototype.alias = $util.emptyArray;

        /**
         * GetOwnDomainsElem icon.
         * @member {string} icon
         * @memberof dto.GetOwnDomainsElem
         * @instance
         */
        GetOwnDomainsElem.prototype.icon = "";

        /**
         * Creates a new GetOwnDomainsElem instance using the specified properties.
         * @function create
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {dto.IGetOwnDomainsElem=} [properties] Properties to set
         * @returns {dto.GetOwnDomainsElem} GetOwnDomainsElem instance
         */
        GetOwnDomainsElem.create = function create(properties) {
            return new GetOwnDomainsElem(properties);
        };

        /**
         * Encodes the specified GetOwnDomainsElem message. Does not implicitly {@link dto.GetOwnDomainsElem.verify|verify} messages.
         * @function encode
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {dto.IGetOwnDomainsElem} message GetOwnDomainsElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnDomainsElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.alias[i]);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            return writer;
        };

        /**
         * Encodes the specified GetOwnDomainsElem message, length delimited. Does not implicitly {@link dto.GetOwnDomainsElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {dto.IGetOwnDomainsElem} message GetOwnDomainsElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnDomainsElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOwnDomainsElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetOwnDomainsElem} GetOwnDomainsElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnDomainsElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetOwnDomainsElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetOwnDomainsElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetOwnDomainsElem} GetOwnDomainsElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnDomainsElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOwnDomainsElem message.
         * @function verify
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOwnDomainsElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };

        /**
         * Creates a GetOwnDomainsElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetOwnDomainsElem} GetOwnDomainsElem
         */
        GetOwnDomainsElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetOwnDomainsElem)
                return object;
            var message = new $root.dto.GetOwnDomainsElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.GetOwnDomainsElem.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };

        /**
         * Creates a plain object from a GetOwnDomainsElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {dto.GetOwnDomainsElem} message GetOwnDomainsElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOwnDomainsElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.icon = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };

        /**
         * Converts this GetOwnDomainsElem to JSON.
         * @function toJSON
         * @memberof dto.GetOwnDomainsElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOwnDomainsElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOwnDomainsElem
         * @function getTypeUrl
         * @memberof dto.GetOwnDomainsElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOwnDomainsElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.GetOwnDomainsElem";
        };

        return GetOwnDomainsElem;
    })();

    dto.GetOwnDomainsRet = (function() {

        /**
         * Properties of a GetOwnDomainsRet.
         * @memberof dto
         * @interface IGetOwnDomainsRet
         * @property {Array.<dto.IGetOwnDomainsElem>|null} [list] GetOwnDomainsRet list
         * @property {number|Long|null} [total] GetOwnDomainsRet total
         */

        /**
         * Constructs a new GetOwnDomainsRet.
         * @memberof dto
         * @classdesc Represents a GetOwnDomainsRet.
         * @implements IGetOwnDomainsRet
         * @constructor
         * @param {dto.IGetOwnDomainsRet=} [properties] Properties to set
         */
        function GetOwnDomainsRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOwnDomainsRet list.
         * @member {Array.<dto.IGetOwnDomainsElem>} list
         * @memberof dto.GetOwnDomainsRet
         * @instance
         */
        GetOwnDomainsRet.prototype.list = $util.emptyArray;

        /**
         * GetOwnDomainsRet total.
         * @member {number|Long} total
         * @memberof dto.GetOwnDomainsRet
         * @instance
         */
        GetOwnDomainsRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetOwnDomainsRet instance using the specified properties.
         * @function create
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {dto.IGetOwnDomainsRet=} [properties] Properties to set
         * @returns {dto.GetOwnDomainsRet} GetOwnDomainsRet instance
         */
        GetOwnDomainsRet.create = function create(properties) {
            return new GetOwnDomainsRet(properties);
        };

        /**
         * Encodes the specified GetOwnDomainsRet message. Does not implicitly {@link dto.GetOwnDomainsRet.verify|verify} messages.
         * @function encode
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {dto.IGetOwnDomainsRet} message GetOwnDomainsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnDomainsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.GetOwnDomainsElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified GetOwnDomainsRet message, length delimited. Does not implicitly {@link dto.GetOwnDomainsRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {dto.IGetOwnDomainsRet} message GetOwnDomainsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnDomainsRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOwnDomainsRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetOwnDomainsRet} GetOwnDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnDomainsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetOwnDomainsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.GetOwnDomainsElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetOwnDomainsRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetOwnDomainsRet} GetOwnDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnDomainsRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOwnDomainsRet message.
         * @function verify
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOwnDomainsRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.GetOwnDomainsElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetOwnDomainsRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetOwnDomainsRet} GetOwnDomainsRet
         */
        GetOwnDomainsRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetOwnDomainsRet)
                return object;
            var message = new $root.dto.GetOwnDomainsRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.GetOwnDomainsRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.GetOwnDomainsRet.list: object expected");
                    message.list[i] = $root.dto.GetOwnDomainsElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetOwnDomainsRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {dto.GetOwnDomainsRet} message GetOwnDomainsRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOwnDomainsRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.GetOwnDomainsElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this GetOwnDomainsRet to JSON.
         * @function toJSON
         * @memberof dto.GetOwnDomainsRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOwnDomainsRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOwnDomainsRet
         * @function getTypeUrl
         * @memberof dto.GetOwnDomainsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOwnDomainsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.GetOwnDomainsRet";
        };

        return GetOwnDomainsRet;
    })();

    dto.GetOwnRolesElem = (function() {

        /**
         * Properties of a GetOwnRolesElem.
         * @memberof dto
         * @interface IGetOwnRolesElem
         * @property {string|null} [id] GetOwnRolesElem id
         * @property {string|null} [name] GetOwnRolesElem name
         * @property {Array.<string>|null} [alias] GetOwnRolesElem alias
         * @property {string|null} [icon] GetOwnRolesElem icon
         */

        /**
         * Constructs a new GetOwnRolesElem.
         * @memberof dto
         * @classdesc Represents a GetOwnRolesElem.
         * @implements IGetOwnRolesElem
         * @constructor
         * @param {dto.IGetOwnRolesElem=} [properties] Properties to set
         */
        function GetOwnRolesElem(properties) {
            this.alias = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOwnRolesElem id.
         * @member {string} id
         * @memberof dto.GetOwnRolesElem
         * @instance
         */
        GetOwnRolesElem.prototype.id = "";

        /**
         * GetOwnRolesElem name.
         * @member {string} name
         * @memberof dto.GetOwnRolesElem
         * @instance
         */
        GetOwnRolesElem.prototype.name = "";

        /**
         * GetOwnRolesElem alias.
         * @member {Array.<string>} alias
         * @memberof dto.GetOwnRolesElem
         * @instance
         */
        GetOwnRolesElem.prototype.alias = $util.emptyArray;

        /**
         * GetOwnRolesElem icon.
         * @member {string} icon
         * @memberof dto.GetOwnRolesElem
         * @instance
         */
        GetOwnRolesElem.prototype.icon = "";

        /**
         * Creates a new GetOwnRolesElem instance using the specified properties.
         * @function create
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {dto.IGetOwnRolesElem=} [properties] Properties to set
         * @returns {dto.GetOwnRolesElem} GetOwnRolesElem instance
         */
        GetOwnRolesElem.create = function create(properties) {
            return new GetOwnRolesElem(properties);
        };

        /**
         * Encodes the specified GetOwnRolesElem message. Does not implicitly {@link dto.GetOwnRolesElem.verify|verify} messages.
         * @function encode
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {dto.IGetOwnRolesElem} message GetOwnRolesElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnRolesElem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.alias != null && message.alias.length)
                for (var i = 0; i < message.alias.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.alias[i]);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            return writer;
        };

        /**
         * Encodes the specified GetOwnRolesElem message, length delimited. Does not implicitly {@link dto.GetOwnRolesElem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {dto.IGetOwnRolesElem} message GetOwnRolesElem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnRolesElem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOwnRolesElem message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetOwnRolesElem} GetOwnRolesElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnRolesElem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetOwnRolesElem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.alias && message.alias.length))
                            message.alias = [];
                        message.alias.push(reader.string());
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetOwnRolesElem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetOwnRolesElem} GetOwnRolesElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnRolesElem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOwnRolesElem message.
         * @function verify
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOwnRolesElem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (!Array.isArray(message.alias))
                    return "alias: array expected";
                for (var i = 0; i < message.alias.length; ++i)
                    if (!$util.isString(message.alias[i]))
                        return "alias: string[] expected";
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };

        /**
         * Creates a GetOwnRolesElem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetOwnRolesElem} GetOwnRolesElem
         */
        GetOwnRolesElem.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetOwnRolesElem)
                return object;
            var message = new $root.dto.GetOwnRolesElem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.alias) {
                if (!Array.isArray(object.alias))
                    throw TypeError(".dto.GetOwnRolesElem.alias: array expected");
                message.alias = [];
                for (var i = 0; i < object.alias.length; ++i)
                    message.alias[i] = String(object.alias[i]);
            }
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };

        /**
         * Creates a plain object from a GetOwnRolesElem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {dto.GetOwnRolesElem} message GetOwnRolesElem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOwnRolesElem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.alias = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.icon = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.alias && message.alias.length) {
                object.alias = [];
                for (var j = 0; j < message.alias.length; ++j)
                    object.alias[j] = message.alias[j];
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };

        /**
         * Converts this GetOwnRolesElem to JSON.
         * @function toJSON
         * @memberof dto.GetOwnRolesElem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOwnRolesElem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOwnRolesElem
         * @function getTypeUrl
         * @memberof dto.GetOwnRolesElem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOwnRolesElem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.GetOwnRolesElem";
        };

        return GetOwnRolesElem;
    })();

    dto.GetOwnRolesRet = (function() {

        /**
         * Properties of a GetOwnRolesRet.
         * @memberof dto
         * @interface IGetOwnRolesRet
         * @property {Array.<dto.IGetOwnRolesElem>|null} [list] GetOwnRolesRet list
         * @property {number|Long|null} [total] GetOwnRolesRet total
         */

        /**
         * Constructs a new GetOwnRolesRet.
         * @memberof dto
         * @classdesc Represents a GetOwnRolesRet.
         * @implements IGetOwnRolesRet
         * @constructor
         * @param {dto.IGetOwnRolesRet=} [properties] Properties to set
         */
        function GetOwnRolesRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOwnRolesRet list.
         * @member {Array.<dto.IGetOwnRolesElem>} list
         * @memberof dto.GetOwnRolesRet
         * @instance
         */
        GetOwnRolesRet.prototype.list = $util.emptyArray;

        /**
         * GetOwnRolesRet total.
         * @member {number|Long} total
         * @memberof dto.GetOwnRolesRet
         * @instance
         */
        GetOwnRolesRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetOwnRolesRet instance using the specified properties.
         * @function create
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {dto.IGetOwnRolesRet=} [properties] Properties to set
         * @returns {dto.GetOwnRolesRet} GetOwnRolesRet instance
         */
        GetOwnRolesRet.create = function create(properties) {
            return new GetOwnRolesRet(properties);
        };

        /**
         * Encodes the specified GetOwnRolesRet message. Does not implicitly {@link dto.GetOwnRolesRet.verify|verify} messages.
         * @function encode
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {dto.IGetOwnRolesRet} message GetOwnRolesRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnRolesRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.GetOwnRolesElem.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified GetOwnRolesRet message, length delimited. Does not implicitly {@link dto.GetOwnRolesRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {dto.IGetOwnRolesRet} message GetOwnRolesRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnRolesRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOwnRolesRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetOwnRolesRet} GetOwnRolesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnRolesRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetOwnRolesRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.GetOwnRolesElem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetOwnRolesRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetOwnRolesRet} GetOwnRolesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnRolesRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOwnRolesRet message.
         * @function verify
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOwnRolesRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.GetOwnRolesElem.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetOwnRolesRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetOwnRolesRet} GetOwnRolesRet
         */
        GetOwnRolesRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetOwnRolesRet)
                return object;
            var message = new $root.dto.GetOwnRolesRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.GetOwnRolesRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.GetOwnRolesRet.list: object expected");
                    message.list[i] = $root.dto.GetOwnRolesElem.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetOwnRolesRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {dto.GetOwnRolesRet} message GetOwnRolesRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOwnRolesRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.GetOwnRolesElem.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this GetOwnRolesRet to JSON.
         * @function toJSON
         * @memberof dto.GetOwnRolesRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOwnRolesRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOwnRolesRet
         * @function getTypeUrl
         * @memberof dto.GetOwnRolesRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOwnRolesRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.GetOwnRolesRet";
        };

        return GetOwnRolesRet;
    })();

    dto.MenuView = (function() {

        /**
         * Properties of a MenuView.
         * @memberof dto
         * @interface IMenuView
         * @property {string|null} [id] MenuView id
         * @property {string|null} [name] MenuView name
         * @property {number|null} [seq] MenuView seq
         * @property {string|null} [icon] MenuView icon
         * @property {string|null} [route] MenuView route
         * @property {string|null} [memo] MenuView memo
         * @property {boolean|null} [show] MenuView show
         * @property {boolean|null} [isItem] MenuView isItem
         * @property {Array.<dto.IMenuWidgetView>|null} [widgets] MenuView widgets
         * @property {Array.<dto.IMenuView>|null} [children] MenuView children
         */

        /**
         * Constructs a new MenuView.
         * @memberof dto
         * @classdesc Represents a MenuView.
         * @implements IMenuView
         * @constructor
         * @param {dto.IMenuView=} [properties] Properties to set
         */
        function MenuView(properties) {
            this.widgets = [];
            this.children = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MenuView id.
         * @member {string} id
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.id = "";

        /**
         * MenuView name.
         * @member {string} name
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.name = "";

        /**
         * MenuView seq.
         * @member {number} seq
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.seq = 0;

        /**
         * MenuView icon.
         * @member {string} icon
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.icon = "";

        /**
         * MenuView route.
         * @member {string} route
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.route = "";

        /**
         * MenuView memo.
         * @member {string} memo
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.memo = "";

        /**
         * MenuView show.
         * @member {boolean} show
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.show = false;

        /**
         * MenuView isItem.
         * @member {boolean} isItem
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.isItem = false;

        /**
         * MenuView widgets.
         * @member {Array.<dto.IMenuWidgetView>} widgets
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.widgets = $util.emptyArray;

        /**
         * MenuView children.
         * @member {Array.<dto.IMenuView>} children
         * @memberof dto.MenuView
         * @instance
         */
        MenuView.prototype.children = $util.emptyArray;

        /**
         * Creates a new MenuView instance using the specified properties.
         * @function create
         * @memberof dto.MenuView
         * @static
         * @param {dto.IMenuView=} [properties] Properties to set
         * @returns {dto.MenuView} MenuView instance
         */
        MenuView.create = function create(properties) {
            return new MenuView(properties);
        };

        /**
         * Encodes the specified MenuView message. Does not implicitly {@link dto.MenuView.verify|verify} messages.
         * @function encode
         * @memberof dto.MenuView
         * @static
         * @param {dto.IMenuView} message MenuView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.route);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.show);
            if (message.isItem != null && Object.hasOwnProperty.call(message, "isItem"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isItem);
            if (message.widgets != null && message.widgets.length)
                for (var i = 0; i < message.widgets.length; ++i)
                    $root.dto.MenuWidgetView.encode(message.widgets[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.dto.MenuView.encode(message.children[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MenuView message, length delimited. Does not implicitly {@link dto.MenuView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.MenuView
         * @static
         * @param {dto.IMenuView} message MenuView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MenuView message from the specified reader or buffer.
         * @function decode
         * @memberof dto.MenuView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.MenuView} MenuView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.MenuView();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.route = reader.string();
                        break;
                    }
                case 6: {
                        message.memo = reader.string();
                        break;
                    }
                case 7: {
                        message.show = reader.bool();
                        break;
                    }
                case 8: {
                        message.isItem = reader.bool();
                        break;
                    }
                case 9: {
                        if (!(message.widgets && message.widgets.length))
                            message.widgets = [];
                        message.widgets.push($root.dto.MenuWidgetView.decode(reader, reader.uint32()));
                        break;
                    }
                case 10: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.dto.MenuView.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MenuView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.MenuView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.MenuView} MenuView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MenuView message.
         * @function verify
         * @memberof dto.MenuView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MenuView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                if (typeof message.isItem !== "boolean")
                    return "isItem: boolean expected";
            if (message.widgets != null && message.hasOwnProperty("widgets")) {
                if (!Array.isArray(message.widgets))
                    return "widgets: array expected";
                for (var i = 0; i < message.widgets.length; ++i) {
                    var error = $root.dto.MenuWidgetView.verify(message.widgets[i]);
                    if (error)
                        return "widgets." + error;
                }
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.dto.MenuView.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MenuView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.MenuView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.MenuView} MenuView
         */
        MenuView.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.MenuView)
                return object;
            var message = new $root.dto.MenuView();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.route != null)
                message.route = String(object.route);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.show != null)
                message.show = Boolean(object.show);
            if (object.isItem != null)
                message.isItem = Boolean(object.isItem);
            if (object.widgets) {
                if (!Array.isArray(object.widgets))
                    throw TypeError(".dto.MenuView.widgets: array expected");
                message.widgets = [];
                for (var i = 0; i < object.widgets.length; ++i) {
                    if (typeof object.widgets[i] !== "object")
                        throw TypeError(".dto.MenuView.widgets: object expected");
                    message.widgets[i] = $root.dto.MenuWidgetView.fromObject(object.widgets[i]);
                }
            }
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".dto.MenuView.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".dto.MenuView.children: object expected");
                    message.children[i] = $root.dto.MenuView.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MenuView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.MenuView
         * @static
         * @param {dto.MenuView} message MenuView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MenuView.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.widgets = [];
                object.children = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.route = "";
                object.memo = "";
                object.show = false;
                object.isItem = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            if (message.isItem != null && message.hasOwnProperty("isItem"))
                object.isItem = message.isItem;
            if (message.widgets && message.widgets.length) {
                object.widgets = [];
                for (var j = 0; j < message.widgets.length; ++j)
                    object.widgets[j] = $root.dto.MenuWidgetView.toObject(message.widgets[j], options);
            }
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.dto.MenuView.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this MenuView to JSON.
         * @function toJSON
         * @memberof dto.MenuView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MenuView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MenuView
         * @function getTypeUrl
         * @memberof dto.MenuView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MenuView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.MenuView";
        };

        return MenuView;
    })();

    dto.MenuWidgetView = (function() {

        /**
         * Properties of a MenuWidgetView.
         * @memberof dto
         * @interface IMenuWidgetView
         * @property {string|null} [id] MenuWidgetView id
         * @property {string|null} [name] MenuWidgetView name
         * @property {number|null} [seq] MenuWidgetView seq
         * @property {string|null} [icon] MenuWidgetView icon
         * @property {string|null} [apiMethod] MenuWidgetView apiMethod
         * @property {string|null} [apiPath] MenuWidgetView apiPath
         * @property {string|null} [memo] MenuWidgetView memo
         * @property {boolean|null} [show] MenuWidgetView show
         */

        /**
         * Constructs a new MenuWidgetView.
         * @memberof dto
         * @classdesc Represents a MenuWidgetView.
         * @implements IMenuWidgetView
         * @constructor
         * @param {dto.IMenuWidgetView=} [properties] Properties to set
         */
        function MenuWidgetView(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MenuWidgetView id.
         * @member {string} id
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.id = "";

        /**
         * MenuWidgetView name.
         * @member {string} name
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.name = "";

        /**
         * MenuWidgetView seq.
         * @member {number} seq
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.seq = 0;

        /**
         * MenuWidgetView icon.
         * @member {string} icon
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.icon = "";

        /**
         * MenuWidgetView apiMethod.
         * @member {string} apiMethod
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.apiMethod = "";

        /**
         * MenuWidgetView apiPath.
         * @member {string} apiPath
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.apiPath = "";

        /**
         * MenuWidgetView memo.
         * @member {string} memo
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.memo = "";

        /**
         * MenuWidgetView show.
         * @member {boolean} show
         * @memberof dto.MenuWidgetView
         * @instance
         */
        MenuWidgetView.prototype.show = false;

        /**
         * Creates a new MenuWidgetView instance using the specified properties.
         * @function create
         * @memberof dto.MenuWidgetView
         * @static
         * @param {dto.IMenuWidgetView=} [properties] Properties to set
         * @returns {dto.MenuWidgetView} MenuWidgetView instance
         */
        MenuWidgetView.create = function create(properties) {
            return new MenuWidgetView(properties);
        };

        /**
         * Encodes the specified MenuWidgetView message. Does not implicitly {@link dto.MenuWidgetView.verify|verify} messages.
         * @function encode
         * @memberof dto.MenuWidgetView
         * @static
         * @param {dto.IMenuWidgetView} message MenuWidgetView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuWidgetView.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.seq);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.apiMethod != null && Object.hasOwnProperty.call(message, "apiMethod"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.apiMethod);
            if (message.apiPath != null && Object.hasOwnProperty.call(message, "apiPath"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.apiPath);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.memo);
            if (message.show != null && Object.hasOwnProperty.call(message, "show"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.show);
            return writer;
        };

        /**
         * Encodes the specified MenuWidgetView message, length delimited. Does not implicitly {@link dto.MenuWidgetView.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.MenuWidgetView
         * @static
         * @param {dto.IMenuWidgetView} message MenuWidgetView message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuWidgetView.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MenuWidgetView message from the specified reader or buffer.
         * @function decode
         * @memberof dto.MenuWidgetView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.MenuWidgetView} MenuWidgetView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuWidgetView.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.MenuWidgetView();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.seq = reader.sint32();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.apiMethod = reader.string();
                        break;
                    }
                case 6: {
                        message.apiPath = reader.string();
                        break;
                    }
                case 7: {
                        message.memo = reader.string();
                        break;
                    }
                case 8: {
                        message.show = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MenuWidgetView message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.MenuWidgetView
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.MenuWidgetView} MenuWidgetView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuWidgetView.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MenuWidgetView message.
         * @function verify
         * @memberof dto.MenuWidgetView
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MenuWidgetView.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                if (!$util.isString(message.apiMethod))
                    return "apiMethod: string expected";
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                if (!$util.isString(message.apiPath))
                    return "apiPath: string expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.show != null && message.hasOwnProperty("show"))
                if (typeof message.show !== "boolean")
                    return "show: boolean expected";
            return null;
        };

        /**
         * Creates a MenuWidgetView message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.MenuWidgetView
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.MenuWidgetView} MenuWidgetView
         */
        MenuWidgetView.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.MenuWidgetView)
                return object;
            var message = new $root.dto.MenuWidgetView();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.seq != null)
                message.seq = object.seq | 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.apiMethod != null)
                message.apiMethod = String(object.apiMethod);
            if (object.apiPath != null)
                message.apiPath = String(object.apiPath);
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.show != null)
                message.show = Boolean(object.show);
            return message;
        };

        /**
         * Creates a plain object from a MenuWidgetView message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.MenuWidgetView
         * @static
         * @param {dto.MenuWidgetView} message MenuWidgetView
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MenuWidgetView.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.seq = 0;
                object.icon = "";
                object.apiMethod = "";
                object.apiPath = "";
                object.memo = "";
                object.show = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.apiMethod != null && message.hasOwnProperty("apiMethod"))
                object.apiMethod = message.apiMethod;
            if (message.apiPath != null && message.hasOwnProperty("apiPath"))
                object.apiPath = message.apiPath;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.show != null && message.hasOwnProperty("show"))
                object.show = message.show;
            return object;
        };

        /**
         * Converts this MenuWidgetView to JSON.
         * @function toJSON
         * @memberof dto.MenuWidgetView
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MenuWidgetView.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MenuWidgetView
         * @function getTypeUrl
         * @memberof dto.MenuWidgetView
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MenuWidgetView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.MenuWidgetView";
        };

        return MenuWidgetView;
    })();

    dto.GetOwnMenusRet = (function() {

        /**
         * Properties of a GetOwnMenusRet.
         * @memberof dto
         * @interface IGetOwnMenusRet
         * @property {Array.<dto.IMenuView>|null} [list] GetOwnMenusRet list
         * @property {number|Long|null} [total] GetOwnMenusRet total
         */

        /**
         * Constructs a new GetOwnMenusRet.
         * @memberof dto
         * @classdesc Represents a GetOwnMenusRet.
         * @implements IGetOwnMenusRet
         * @constructor
         * @param {dto.IGetOwnMenusRet=} [properties] Properties to set
         */
        function GetOwnMenusRet(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOwnMenusRet list.
         * @member {Array.<dto.IMenuView>} list
         * @memberof dto.GetOwnMenusRet
         * @instance
         */
        GetOwnMenusRet.prototype.list = $util.emptyArray;

        /**
         * GetOwnMenusRet total.
         * @member {number|Long} total
         * @memberof dto.GetOwnMenusRet
         * @instance
         */
        GetOwnMenusRet.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetOwnMenusRet instance using the specified properties.
         * @function create
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {dto.IGetOwnMenusRet=} [properties] Properties to set
         * @returns {dto.GetOwnMenusRet} GetOwnMenusRet instance
         */
        GetOwnMenusRet.create = function create(properties) {
            return new GetOwnMenusRet(properties);
        };

        /**
         * Encodes the specified GetOwnMenusRet message. Does not implicitly {@link dto.GetOwnMenusRet.verify|verify} messages.
         * @function encode
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {dto.IGetOwnMenusRet} message GetOwnMenusRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnMenusRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.dto.MenuView.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified GetOwnMenusRet message, length delimited. Does not implicitly {@link dto.GetOwnMenusRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {dto.IGetOwnMenusRet} message GetOwnMenusRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOwnMenusRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOwnMenusRet message from the specified reader or buffer.
         * @function decode
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.GetOwnMenusRet} GetOwnMenusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnMenusRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.GetOwnMenusRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.dto.MenuView.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.sint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetOwnMenusRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.GetOwnMenusRet} GetOwnMenusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOwnMenusRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOwnMenusRet message.
         * @function verify
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOwnMenusRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.dto.MenuView.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetOwnMenusRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.GetOwnMenusRet} GetOwnMenusRet
         */
        GetOwnMenusRet.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.GetOwnMenusRet)
                return object;
            var message = new $root.dto.GetOwnMenusRet();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".dto.GetOwnMenusRet.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".dto.GetOwnMenusRet.list: object expected");
                    message.list[i] = $root.dto.MenuView.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetOwnMenusRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {dto.GetOwnMenusRet} message GetOwnMenusRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOwnMenusRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.dto.MenuView.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this GetOwnMenusRet to JSON.
         * @function toJSON
         * @memberof dto.GetOwnMenusRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOwnMenusRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOwnMenusRet
         * @function getTypeUrl
         * @memberof dto.GetOwnMenusRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOwnMenusRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/dto.GetOwnMenusRet";
        };

        return GetOwnMenusRet;
    })();

    return dto;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type_url = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Any
             * @function getTypeUrl
             * @memberof google.protobuf.Any
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Any.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Any";
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
