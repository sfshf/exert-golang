import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace dto. */
export namespace dto {

    /** Properties of a PaginationArg. */
    interface IPaginationArg {

        /** PaginationArg noPaging */
        noPaging?: (boolean|null);

        /** PaginationArg page */
        page?: (number|Long|null);

        /** PaginationArg perPage */
        perPage?: (number|Long|null);
    }

    /** Represents a PaginationArg. */
    class PaginationArg implements IPaginationArg {

        /**
         * Constructs a new PaginationArg.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IPaginationArg);

        /** PaginationArg noPaging. */
        public noPaging: boolean;

        /** PaginationArg page. */
        public page: (number|Long);

        /** PaginationArg perPage. */
        public perPage: (number|Long);

        /**
         * Creates a new PaginationArg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaginationArg instance
         */
        public static create(properties?: dto.IPaginationArg): dto.PaginationArg;

        /**
         * Encodes the specified PaginationArg message. Does not implicitly {@link dto.PaginationArg.verify|verify} messages.
         * @param message PaginationArg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IPaginationArg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaginationArg message, length delimited. Does not implicitly {@link dto.PaginationArg.verify|verify} messages.
         * @param message PaginationArg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IPaginationArg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaginationArg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaginationArg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.PaginationArg;

        /**
         * Decodes a PaginationArg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaginationArg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.PaginationArg;

        /**
         * Verifies a PaginationArg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaginationArg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaginationArg
         */
        public static fromObject(object: { [k: string]: any }): dto.PaginationArg;

        /**
         * Creates a plain object from a PaginationArg message. Also converts values to other types if specified.
         * @param message PaginationArg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.PaginationArg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaginationArg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PaginationArg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Error. */
    interface IError {

        /** Error msg */
        msg?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IError);

        /** Error msg. */
        public msg: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: dto.IError): dto.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link dto.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link dto.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): dto.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Error
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddDomainReq. */
    interface IAddDomainReq {

        /** AddDomainReq name */
        name?: (string|null);

        /** AddDomainReq alias */
        alias?: (string[]|null);

        /** AddDomainReq seq */
        seq?: (number|null);

        /** AddDomainReq icon */
        icon?: (string|null);

        /** AddDomainReq memo */
        memo?: (string|null);

        /** AddDomainReq parentId */
        parentId?: (string|null);
    }

    /** Represents an AddDomainReq. */
    class AddDomainReq implements IAddDomainReq {

        /**
         * Constructs a new AddDomainReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddDomainReq);

        /** AddDomainReq name. */
        public name: string;

        /** AddDomainReq alias. */
        public alias: string[];

        /** AddDomainReq seq. */
        public seq: number;

        /** AddDomainReq icon. */
        public icon: string;

        /** AddDomainReq memo. */
        public memo: string;

        /** AddDomainReq parentId. */
        public parentId: string;

        /**
         * Creates a new AddDomainReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddDomainReq instance
         */
        public static create(properties?: dto.IAddDomainReq): dto.AddDomainReq;

        /**
         * Encodes the specified AddDomainReq message. Does not implicitly {@link dto.AddDomainReq.verify|verify} messages.
         * @param message AddDomainReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddDomainReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddDomainReq message, length delimited. Does not implicitly {@link dto.AddDomainReq.verify|verify} messages.
         * @param message AddDomainReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddDomainReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddDomainReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddDomainReq;

        /**
         * Decodes an AddDomainReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddDomainReq;

        /**
         * Verifies an AddDomainReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddDomainReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddDomainReq
         */
        public static fromObject(object: { [k: string]: any }): dto.AddDomainReq;

        /**
         * Creates a plain object from an AddDomainReq message. Also converts values to other types if specified.
         * @param message AddDomainReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddDomainReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddDomainReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddDomainReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddDomainRet. */
    interface IAddDomainRet {

        /** AddDomainRet id */
        id?: (string|null);
    }

    /** Represents an AddDomainRet. */
    class AddDomainRet implements IAddDomainRet {

        /**
         * Constructs a new AddDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddDomainRet);

        /** AddDomainRet id. */
        public id: string;

        /**
         * Creates a new AddDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddDomainRet instance
         */
        public static create(properties?: dto.IAddDomainRet): dto.AddDomainRet;

        /**
         * Encodes the specified AddDomainRet message. Does not implicitly {@link dto.AddDomainRet.verify|verify} messages.
         * @param message AddDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddDomainRet message, length delimited. Does not implicitly {@link dto.AddDomainRet.verify|verify} messages.
         * @param message AddDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddDomainRet;

        /**
         * Decodes an AddDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddDomainRet;

        /**
         * Verifies an AddDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.AddDomainRet;

        /**
         * Creates a plain object from an AddDomainRet message. Also converts values to other types if specified.
         * @param message AddDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DomainListElem. */
    interface IDomainListElem {

        /** DomainListElem id */
        id?: (string|null);

        /** DomainListElem name */
        name?: (string|null);

        /** DomainListElem alias */
        alias?: (string[]|null);

        /** DomainListElem seq */
        seq?: (number|null);

        /** DomainListElem icon */
        icon?: (string|null);

        /** DomainListElem memo */
        memo?: (string|null);

        /** DomainListElem parentId */
        parentId?: (string|null);

        /** DomainListElem createdBy */
        createdBy?: (string|null);

        /** DomainListElem createdAt */
        createdAt?: (string|null);

        /** DomainListElem updatedBy */
        updatedBy?: (string|null);

        /** DomainListElem updatedAt */
        updatedAt?: (string|null);

        /** DomainListElem deletedBy */
        deletedBy?: (string|null);

        /** DomainListElem deletedAt */
        deletedAt?: (string|null);

        /** DomainListElem children */
        children?: (dto.IDomainListElem[]|null);
    }

    /** Represents a DomainListElem. */
    class DomainListElem implements IDomainListElem {

        /**
         * Constructs a new DomainListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDomainListElem);

        /** DomainListElem id. */
        public id: string;

        /** DomainListElem name. */
        public name: string;

        /** DomainListElem alias. */
        public alias: string[];

        /** DomainListElem seq. */
        public seq: number;

        /** DomainListElem icon. */
        public icon: string;

        /** DomainListElem memo. */
        public memo: string;

        /** DomainListElem parentId. */
        public parentId: string;

        /** DomainListElem createdBy. */
        public createdBy: string;

        /** DomainListElem createdAt. */
        public createdAt: string;

        /** DomainListElem updatedBy. */
        public updatedBy: string;

        /** DomainListElem updatedAt. */
        public updatedAt: string;

        /** DomainListElem deletedBy. */
        public deletedBy?: (string|null);

        /** DomainListElem deletedAt. */
        public deletedAt?: (string|null);

        /** DomainListElem children. */
        public children: dto.IDomainListElem[];

        /** DomainListElem _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** DomainListElem _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new DomainListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DomainListElem instance
         */
        public static create(properties?: dto.IDomainListElem): dto.DomainListElem;

        /**
         * Encodes the specified DomainListElem message. Does not implicitly {@link dto.DomainListElem.verify|verify} messages.
         * @param message DomainListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDomainListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DomainListElem message, length delimited. Does not implicitly {@link dto.DomainListElem.verify|verify} messages.
         * @param message DomainListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDomainListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DomainListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DomainListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DomainListElem;

        /**
         * Decodes a DomainListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DomainListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DomainListElem;

        /**
         * Verifies a DomainListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DomainListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DomainListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.DomainListElem;

        /**
         * Creates a plain object from a DomainListElem message. Also converts values to other types if specified.
         * @param message DomainListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DomainListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DomainListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DomainListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListDomainRet. */
    interface IListDomainRet {

        /** ListDomainRet list */
        list?: (dto.IDomainListElem[]|null);

        /** ListDomainRet total */
        total?: (number|Long|null);
    }

    /** Represents a ListDomainRet. */
    class ListDomainRet implements IListDomainRet {

        /**
         * Constructs a new ListDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListDomainRet);

        /** ListDomainRet list. */
        public list: dto.IDomainListElem[];

        /** ListDomainRet total. */
        public total: (number|Long);

        /**
         * Creates a new ListDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListDomainRet instance
         */
        public static create(properties?: dto.IListDomainRet): dto.ListDomainRet;

        /**
         * Encodes the specified ListDomainRet message. Does not implicitly {@link dto.ListDomainRet.verify|verify} messages.
         * @param message ListDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListDomainRet message, length delimited. Does not implicitly {@link dto.ListDomainRet.verify|verify} messages.
         * @param message ListDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListDomainRet;

        /**
         * Decodes a ListDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListDomainRet;

        /**
         * Verifies a ListDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ListDomainRet;

        /**
         * Creates a plain object from a ListDomainRet message. Also converts values to other types if specified.
         * @param message ListDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProfileDomainRet. */
    interface IProfileDomainRet {

        /** ProfileDomainRet id */
        id?: (string|null);

        /** ProfileDomainRet name */
        name?: (string|null);

        /** ProfileDomainRet alias */
        alias?: (string[]|null);

        /** ProfileDomainRet seq */
        seq?: (number|null);

        /** ProfileDomainRet icon */
        icon?: (string|null);

        /** ProfileDomainRet memo */
        memo?: (string|null);

        /** ProfileDomainRet parentId */
        parentId?: (string|null);

        /** ProfileDomainRet createdBy */
        createdBy?: (string|null);

        /** ProfileDomainRet createdAt */
        createdAt?: (string|null);

        /** ProfileDomainRet updatedBy */
        updatedBy?: (string|null);

        /** ProfileDomainRet updatedAt */
        updatedAt?: (string|null);

        /** ProfileDomainRet deletedBy */
        deletedBy?: (string|null);

        /** ProfileDomainRet deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a ProfileDomainRet. */
    class ProfileDomainRet implements IProfileDomainRet {

        /**
         * Constructs a new ProfileDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProfileDomainRet);

        /** ProfileDomainRet id. */
        public id: string;

        /** ProfileDomainRet name. */
        public name: string;

        /** ProfileDomainRet alias. */
        public alias: string[];

        /** ProfileDomainRet seq. */
        public seq: number;

        /** ProfileDomainRet icon. */
        public icon: string;

        /** ProfileDomainRet memo. */
        public memo: string;

        /** ProfileDomainRet parentId. */
        public parentId: string;

        /** ProfileDomainRet createdBy. */
        public createdBy: string;

        /** ProfileDomainRet createdAt. */
        public createdAt: string;

        /** ProfileDomainRet updatedBy. */
        public updatedBy: string;

        /** ProfileDomainRet updatedAt. */
        public updatedAt: string;

        /** ProfileDomainRet deletedBy. */
        public deletedBy?: (string|null);

        /** ProfileDomainRet deletedAt. */
        public deletedAt?: (string|null);

        /** ProfileDomainRet _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** ProfileDomainRet _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new ProfileDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileDomainRet instance
         */
        public static create(properties?: dto.IProfileDomainRet): dto.ProfileDomainRet;

        /**
         * Encodes the specified ProfileDomainRet message. Does not implicitly {@link dto.ProfileDomainRet.verify|verify} messages.
         * @param message ProfileDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProfileDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileDomainRet message, length delimited. Does not implicitly {@link dto.ProfileDomainRet.verify|verify} messages.
         * @param message ProfileDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProfileDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProfileDomainRet;

        /**
         * Decodes a ProfileDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProfileDomainRet;

        /**
         * Verifies a ProfileDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ProfileDomainRet;

        /**
         * Creates a plain object from a ProfileDomainRet message. Also converts values to other types if specified.
         * @param message ProfileDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProfileDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProfileDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditDomainReq. */
    interface IEditDomainReq {

        /** EditDomainReq name */
        name?: (string|null);

        /** EditDomainReq alias */
        alias?: (string[]|null);

        /** EditDomainReq seq */
        seq?: (number|null);

        /** EditDomainReq icon */
        icon?: (string|null);

        /** EditDomainReq memo */
        memo?: (string|null);

        /** EditDomainReq parentId */
        parentId?: (string|null);
    }

    /** Represents an EditDomainReq. */
    class EditDomainReq implements IEditDomainReq {

        /**
         * Constructs a new EditDomainReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditDomainReq);

        /** EditDomainReq name. */
        public name: string;

        /** EditDomainReq alias. */
        public alias: string[];

        /** EditDomainReq seq. */
        public seq: number;

        /** EditDomainReq icon. */
        public icon: string;

        /** EditDomainReq memo. */
        public memo: string;

        /** EditDomainReq parentId. */
        public parentId: string;

        /**
         * Creates a new EditDomainReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditDomainReq instance
         */
        public static create(properties?: dto.IEditDomainReq): dto.EditDomainReq;

        /**
         * Encodes the specified EditDomainReq message. Does not implicitly {@link dto.EditDomainReq.verify|verify} messages.
         * @param message EditDomainReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditDomainReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditDomainReq message, length delimited. Does not implicitly {@link dto.EditDomainReq.verify|verify} messages.
         * @param message EditDomainReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditDomainReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditDomainReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditDomainReq;

        /**
         * Decodes an EditDomainReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditDomainReq;

        /**
         * Verifies an EditDomainReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditDomainReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditDomainReq
         */
        public static fromObject(object: { [k: string]: any }): dto.EditDomainReq;

        /**
         * Creates a plain object from an EditDomainReq message. Also converts values to other types if specified.
         * @param message EditDomainReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditDomainReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditDomainReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditDomainReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditDomainRet. */
    interface IEditDomainRet {

        /** EditDomainRet id */
        id?: (string|null);
    }

    /** Represents an EditDomainRet. */
    class EditDomainRet implements IEditDomainRet {

        /**
         * Constructs a new EditDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditDomainRet);

        /** EditDomainRet id. */
        public id: string;

        /**
         * Creates a new EditDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditDomainRet instance
         */
        public static create(properties?: dto.IEditDomainRet): dto.EditDomainRet;

        /**
         * Encodes the specified EditDomainRet message. Does not implicitly {@link dto.EditDomainRet.verify|verify} messages.
         * @param message EditDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditDomainRet message, length delimited. Does not implicitly {@link dto.EditDomainRet.verify|verify} messages.
         * @param message EditDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditDomainRet;

        /**
         * Decodes an EditDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditDomainRet;

        /**
         * Verifies an EditDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EditDomainRet;

        /**
         * Creates a plain object from an EditDomainRet message. Also converts values to other types if specified.
         * @param message EditDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnableDomainRet. */
    interface IEnableDomainRet {

        /** EnableDomainRet id */
        id?: (string|null);
    }

    /** Represents an EnableDomainRet. */
    class EnableDomainRet implements IEnableDomainRet {

        /**
         * Constructs a new EnableDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEnableDomainRet);

        /** EnableDomainRet id. */
        public id: string;

        /**
         * Creates a new EnableDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnableDomainRet instance
         */
        public static create(properties?: dto.IEnableDomainRet): dto.EnableDomainRet;

        /**
         * Encodes the specified EnableDomainRet message. Does not implicitly {@link dto.EnableDomainRet.verify|verify} messages.
         * @param message EnableDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEnableDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnableDomainRet message, length delimited. Does not implicitly {@link dto.EnableDomainRet.verify|verify} messages.
         * @param message EnableDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEnableDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnableDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EnableDomainRet;

        /**
         * Decodes an EnableDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EnableDomainRet;

        /**
         * Verifies an EnableDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnableDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnableDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EnableDomainRet;

        /**
         * Creates a plain object from an EnableDomainRet message. Also converts values to other types if specified.
         * @param message EnableDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EnableDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnableDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnableDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisableDomainRet. */
    interface IDisableDomainRet {

        /** DisableDomainRet id */
        id?: (string|null);
    }

    /** Represents a DisableDomainRet. */
    class DisableDomainRet implements IDisableDomainRet {

        /**
         * Constructs a new DisableDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDisableDomainRet);

        /** DisableDomainRet id. */
        public id: string;

        /**
         * Creates a new DisableDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisableDomainRet instance
         */
        public static create(properties?: dto.IDisableDomainRet): dto.DisableDomainRet;

        /**
         * Encodes the specified DisableDomainRet message. Does not implicitly {@link dto.DisableDomainRet.verify|verify} messages.
         * @param message DisableDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDisableDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisableDomainRet message, length delimited. Does not implicitly {@link dto.DisableDomainRet.verify|verify} messages.
         * @param message DisableDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDisableDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisableDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DisableDomainRet;

        /**
         * Decodes a DisableDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisableDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DisableDomainRet;

        /**
         * Verifies a DisableDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisableDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisableDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.DisableDomainRet;

        /**
         * Creates a plain object from a DisableDomainRet message. Also converts values to other types if specified.
         * @param message DisableDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DisableDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisableDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisableDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveDomainRet. */
    interface IRemoveDomainRet {

        /** RemoveDomainRet id */
        id?: (string|null);
    }

    /** Represents a RemoveDomainRet. */
    class RemoveDomainRet implements IRemoveDomainRet {

        /**
         * Constructs a new RemoveDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRemoveDomainRet);

        /** RemoveDomainRet id. */
        public id: string;

        /**
         * Creates a new RemoveDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveDomainRet instance
         */
        public static create(properties?: dto.IRemoveDomainRet): dto.RemoveDomainRet;

        /**
         * Encodes the specified RemoveDomainRet message. Does not implicitly {@link dto.RemoveDomainRet.verify|verify} messages.
         * @param message RemoveDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRemoveDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveDomainRet message, length delimited. Does not implicitly {@link dto.RemoveDomainRet.verify|verify} messages.
         * @param message RemoveDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRemoveDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RemoveDomainRet;

        /**
         * Decodes a RemoveDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RemoveDomainRet;

        /**
         * Verifies a RemoveDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.RemoveDomainRet;

        /**
         * Creates a plain object from a RemoveDomainRet message. Also converts values to other types if specified.
         * @param message RemoveDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RemoveDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoveDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddMenuReq. */
    interface IAddMenuReq {

        /** AddMenuReq name */
        name?: (string|null);

        /** AddMenuReq seq */
        seq?: (number|null);

        /** AddMenuReq icon */
        icon?: (string|null);

        /** AddMenuReq route */
        route?: (string|null);

        /** AddMenuReq memo */
        memo?: (string|null);

        /** AddMenuReq show */
        show?: (boolean|null);

        /** AddMenuReq parentId */
        parentId?: (string|null);

        /** AddMenuReq isItem */
        isItem?: (boolean|null);
    }

    /** Represents an AddMenuReq. */
    class AddMenuReq implements IAddMenuReq {

        /**
         * Constructs a new AddMenuReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddMenuReq);

        /** AddMenuReq name. */
        public name: string;

        /** AddMenuReq seq. */
        public seq: number;

        /** AddMenuReq icon. */
        public icon: string;

        /** AddMenuReq route. */
        public route: string;

        /** AddMenuReq memo. */
        public memo: string;

        /** AddMenuReq show. */
        public show: boolean;

        /** AddMenuReq parentId. */
        public parentId: string;

        /** AddMenuReq isItem. */
        public isItem: boolean;

        /**
         * Creates a new AddMenuReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddMenuReq instance
         */
        public static create(properties?: dto.IAddMenuReq): dto.AddMenuReq;

        /**
         * Encodes the specified AddMenuReq message. Does not implicitly {@link dto.AddMenuReq.verify|verify} messages.
         * @param message AddMenuReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddMenuReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddMenuReq message, length delimited. Does not implicitly {@link dto.AddMenuReq.verify|verify} messages.
         * @param message AddMenuReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddMenuReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddMenuReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddMenuReq;

        /**
         * Decodes an AddMenuReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddMenuReq;

        /**
         * Verifies an AddMenuReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddMenuReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMenuReq
         */
        public static fromObject(object: { [k: string]: any }): dto.AddMenuReq;

        /**
         * Creates a plain object from an AddMenuReq message. Also converts values to other types if specified.
         * @param message AddMenuReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddMenuReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddMenuReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddMenuReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddMenuRet. */
    interface IAddMenuRet {

        /** AddMenuRet id */
        id?: (string|null);
    }

    /** Represents an AddMenuRet. */
    class AddMenuRet implements IAddMenuRet {

        /**
         * Constructs a new AddMenuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddMenuRet);

        /** AddMenuRet id. */
        public id: string;

        /**
         * Creates a new AddMenuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddMenuRet instance
         */
        public static create(properties?: dto.IAddMenuRet): dto.AddMenuRet;

        /**
         * Encodes the specified AddMenuRet message. Does not implicitly {@link dto.AddMenuRet.verify|verify} messages.
         * @param message AddMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddMenuRet message, length delimited. Does not implicitly {@link dto.AddMenuRet.verify|verify} messages.
         * @param message AddMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddMenuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddMenuRet;

        /**
         * Decodes an AddMenuRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddMenuRet;

        /**
         * Verifies an AddMenuRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddMenuRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMenuRet
         */
        public static fromObject(object: { [k: string]: any }): dto.AddMenuRet;

        /**
         * Creates a plain object from an AddMenuRet message. Also converts values to other types if specified.
         * @param message AddMenuRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddMenuRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddMenuRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddMenuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MenuListElem. */
    interface IMenuListElem {

        /** MenuListElem id */
        id?: (string|null);

        /** MenuListElem name */
        name?: (string|null);

        /** MenuListElem seq */
        seq?: (number|null);

        /** MenuListElem icon */
        icon?: (string|null);

        /** MenuListElem route */
        route?: (string|null);

        /** MenuListElem memo */
        memo?: (string|null);

        /** MenuListElem parentId */
        parentId?: (string|null);

        /** MenuListElem show */
        show?: (boolean|null);

        /** MenuListElem isItem */
        isItem?: (boolean|null);

        /** MenuListElem createdBy */
        createdBy?: (string|null);

        /** MenuListElem createdAt */
        createdAt?: (string|null);

        /** MenuListElem updatedBy */
        updatedBy?: (string|null);

        /** MenuListElem updatedAt */
        updatedAt?: (string|null);

        /** MenuListElem deletedBy */
        deletedBy?: (string|null);

        /** MenuListElem deletedAt */
        deletedAt?: (string|null);

        /** MenuListElem children */
        children?: (dto.IMenuListElem[]|null);
    }

    /** Represents a MenuListElem. */
    class MenuListElem implements IMenuListElem {

        /**
         * Constructs a new MenuListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IMenuListElem);

        /** MenuListElem id. */
        public id: string;

        /** MenuListElem name. */
        public name: string;

        /** MenuListElem seq. */
        public seq: number;

        /** MenuListElem icon. */
        public icon: string;

        /** MenuListElem route. */
        public route: string;

        /** MenuListElem memo. */
        public memo: string;

        /** MenuListElem parentId. */
        public parentId: string;

        /** MenuListElem show. */
        public show: boolean;

        /** MenuListElem isItem. */
        public isItem: boolean;

        /** MenuListElem createdBy. */
        public createdBy: string;

        /** MenuListElem createdAt. */
        public createdAt: string;

        /** MenuListElem updatedBy. */
        public updatedBy: string;

        /** MenuListElem updatedAt. */
        public updatedAt: string;

        /** MenuListElem deletedBy. */
        public deletedBy?: (string|null);

        /** MenuListElem deletedAt. */
        public deletedAt?: (string|null);

        /** MenuListElem children. */
        public children: dto.IMenuListElem[];

        /** MenuListElem _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** MenuListElem _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new MenuListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MenuListElem instance
         */
        public static create(properties?: dto.IMenuListElem): dto.MenuListElem;

        /**
         * Encodes the specified MenuListElem message. Does not implicitly {@link dto.MenuListElem.verify|verify} messages.
         * @param message MenuListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IMenuListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MenuListElem message, length delimited. Does not implicitly {@link dto.MenuListElem.verify|verify} messages.
         * @param message MenuListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IMenuListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MenuListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MenuListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.MenuListElem;

        /**
         * Decodes a MenuListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MenuListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.MenuListElem;

        /**
         * Verifies a MenuListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MenuListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MenuListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.MenuListElem;

        /**
         * Creates a plain object from a MenuListElem message. Also converts values to other types if specified.
         * @param message MenuListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.MenuListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MenuListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MenuListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListMenuRet. */
    interface IListMenuRet {

        /** ListMenuRet list */
        list?: (dto.IMenuListElem[]|null);

        /** ListMenuRet total */
        total?: (number|Long|null);
    }

    /** Represents a ListMenuRet. */
    class ListMenuRet implements IListMenuRet {

        /**
         * Constructs a new ListMenuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListMenuRet);

        /** ListMenuRet list. */
        public list: dto.IMenuListElem[];

        /** ListMenuRet total. */
        public total: (number|Long);

        /**
         * Creates a new ListMenuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMenuRet instance
         */
        public static create(properties?: dto.IListMenuRet): dto.ListMenuRet;

        /**
         * Encodes the specified ListMenuRet message. Does not implicitly {@link dto.ListMenuRet.verify|verify} messages.
         * @param message ListMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMenuRet message, length delimited. Does not implicitly {@link dto.ListMenuRet.verify|verify} messages.
         * @param message ListMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMenuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListMenuRet;

        /**
         * Decodes a ListMenuRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListMenuRet;

        /**
         * Verifies a ListMenuRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMenuRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMenuRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ListMenuRet;

        /**
         * Creates a plain object from a ListMenuRet message. Also converts values to other types if specified.
         * @param message ListMenuRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListMenuRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMenuRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListMenuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProfileMenuRet. */
    interface IProfileMenuRet {

        /** ProfileMenuRet id */
        id?: (string|null);

        /** ProfileMenuRet name */
        name?: (string|null);

        /** ProfileMenuRet seq */
        seq?: (number|null);

        /** ProfileMenuRet icon */
        icon?: (string|null);

        /** ProfileMenuRet route */
        route?: (string|null);

        /** ProfileMenuRet memo */
        memo?: (string|null);

        /** ProfileMenuRet parentId */
        parentId?: (string|null);

        /** ProfileMenuRet show */
        show?: (boolean|null);

        /** ProfileMenuRet isItem */
        isItem?: (boolean|null);

        /** ProfileMenuRet createdBy */
        createdBy?: (string|null);

        /** ProfileMenuRet createdAt */
        createdAt?: (string|null);

        /** ProfileMenuRet updatedBy */
        updatedBy?: (string|null);

        /** ProfileMenuRet updatedAt */
        updatedAt?: (string|null);

        /** ProfileMenuRet deletedBy */
        deletedBy?: (string|null);

        /** ProfileMenuRet deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a ProfileMenuRet. */
    class ProfileMenuRet implements IProfileMenuRet {

        /**
         * Constructs a new ProfileMenuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProfileMenuRet);

        /** ProfileMenuRet id. */
        public id: string;

        /** ProfileMenuRet name. */
        public name: string;

        /** ProfileMenuRet seq. */
        public seq: number;

        /** ProfileMenuRet icon. */
        public icon: string;

        /** ProfileMenuRet route. */
        public route: string;

        /** ProfileMenuRet memo. */
        public memo: string;

        /** ProfileMenuRet parentId. */
        public parentId: string;

        /** ProfileMenuRet show. */
        public show: boolean;

        /** ProfileMenuRet isItem. */
        public isItem: boolean;

        /** ProfileMenuRet createdBy. */
        public createdBy: string;

        /** ProfileMenuRet createdAt. */
        public createdAt: string;

        /** ProfileMenuRet updatedBy. */
        public updatedBy: string;

        /** ProfileMenuRet updatedAt. */
        public updatedAt: string;

        /** ProfileMenuRet deletedBy. */
        public deletedBy?: (string|null);

        /** ProfileMenuRet deletedAt. */
        public deletedAt?: (string|null);

        /** ProfileMenuRet _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** ProfileMenuRet _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new ProfileMenuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileMenuRet instance
         */
        public static create(properties?: dto.IProfileMenuRet): dto.ProfileMenuRet;

        /**
         * Encodes the specified ProfileMenuRet message. Does not implicitly {@link dto.ProfileMenuRet.verify|verify} messages.
         * @param message ProfileMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProfileMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileMenuRet message, length delimited. Does not implicitly {@link dto.ProfileMenuRet.verify|verify} messages.
         * @param message ProfileMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProfileMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileMenuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProfileMenuRet;

        /**
         * Decodes a ProfileMenuRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProfileMenuRet;

        /**
         * Verifies a ProfileMenuRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileMenuRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileMenuRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ProfileMenuRet;

        /**
         * Creates a plain object from a ProfileMenuRet message. Also converts values to other types if specified.
         * @param message ProfileMenuRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProfileMenuRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileMenuRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProfileMenuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditMenuReq. */
    interface IEditMenuReq {

        /** EditMenuReq name */
        name?: (string|null);

        /** EditMenuReq seq */
        seq?: (number|null);

        /** EditMenuReq icon */
        icon?: (string|null);

        /** EditMenuReq route */
        route?: (string|null);

        /** EditMenuReq memo */
        memo?: (string|null);

        /** EditMenuReq show */
        show?: (boolean|null);

        /** EditMenuReq parentId */
        parentId?: (string|null);

        /** EditMenuReq isItem */
        isItem?: (boolean|null);
    }

    /** Represents an EditMenuReq. */
    class EditMenuReq implements IEditMenuReq {

        /**
         * Constructs a new EditMenuReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditMenuReq);

        /** EditMenuReq name. */
        public name: string;

        /** EditMenuReq seq. */
        public seq: number;

        /** EditMenuReq icon. */
        public icon: string;

        /** EditMenuReq route. */
        public route: string;

        /** EditMenuReq memo. */
        public memo: string;

        /** EditMenuReq show. */
        public show: boolean;

        /** EditMenuReq parentId. */
        public parentId: string;

        /** EditMenuReq isItem. */
        public isItem: boolean;

        /**
         * Creates a new EditMenuReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditMenuReq instance
         */
        public static create(properties?: dto.IEditMenuReq): dto.EditMenuReq;

        /**
         * Encodes the specified EditMenuReq message. Does not implicitly {@link dto.EditMenuReq.verify|verify} messages.
         * @param message EditMenuReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditMenuReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditMenuReq message, length delimited. Does not implicitly {@link dto.EditMenuReq.verify|verify} messages.
         * @param message EditMenuReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditMenuReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditMenuReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditMenuReq;

        /**
         * Decodes an EditMenuReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditMenuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditMenuReq;

        /**
         * Verifies an EditMenuReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditMenuReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditMenuReq
         */
        public static fromObject(object: { [k: string]: any }): dto.EditMenuReq;

        /**
         * Creates a plain object from an EditMenuReq message. Also converts values to other types if specified.
         * @param message EditMenuReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditMenuReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditMenuReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditMenuReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditMenuRet. */
    interface IEditMenuRet {

        /** EditMenuRet id */
        id?: (string|null);
    }

    /** Represents an EditMenuRet. */
    class EditMenuRet implements IEditMenuRet {

        /**
         * Constructs a new EditMenuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditMenuRet);

        /** EditMenuRet id. */
        public id: string;

        /**
         * Creates a new EditMenuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditMenuRet instance
         */
        public static create(properties?: dto.IEditMenuRet): dto.EditMenuRet;

        /**
         * Encodes the specified EditMenuRet message. Does not implicitly {@link dto.EditMenuRet.verify|verify} messages.
         * @param message EditMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditMenuRet message, length delimited. Does not implicitly {@link dto.EditMenuRet.verify|verify} messages.
         * @param message EditMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditMenuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditMenuRet;

        /**
         * Decodes an EditMenuRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditMenuRet;

        /**
         * Verifies an EditMenuRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditMenuRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditMenuRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EditMenuRet;

        /**
         * Creates a plain object from an EditMenuRet message. Also converts values to other types if specified.
         * @param message EditMenuRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditMenuRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditMenuRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditMenuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnableMenuRet. */
    interface IEnableMenuRet {

        /** EnableMenuRet id */
        id?: (string|null);
    }

    /** Represents an EnableMenuRet. */
    class EnableMenuRet implements IEnableMenuRet {

        /**
         * Constructs a new EnableMenuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEnableMenuRet);

        /** EnableMenuRet id. */
        public id: string;

        /**
         * Creates a new EnableMenuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnableMenuRet instance
         */
        public static create(properties?: dto.IEnableMenuRet): dto.EnableMenuRet;

        /**
         * Encodes the specified EnableMenuRet message. Does not implicitly {@link dto.EnableMenuRet.verify|verify} messages.
         * @param message EnableMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEnableMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnableMenuRet message, length delimited. Does not implicitly {@link dto.EnableMenuRet.verify|verify} messages.
         * @param message EnableMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEnableMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnableMenuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EnableMenuRet;

        /**
         * Decodes an EnableMenuRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EnableMenuRet;

        /**
         * Verifies an EnableMenuRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnableMenuRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnableMenuRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EnableMenuRet;

        /**
         * Creates a plain object from an EnableMenuRet message. Also converts values to other types if specified.
         * @param message EnableMenuRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EnableMenuRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnableMenuRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnableMenuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisableMenuRet. */
    interface IDisableMenuRet {

        /** DisableMenuRet id */
        id?: (string|null);
    }

    /** Represents a DisableMenuRet. */
    class DisableMenuRet implements IDisableMenuRet {

        /**
         * Constructs a new DisableMenuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDisableMenuRet);

        /** DisableMenuRet id. */
        public id: string;

        /**
         * Creates a new DisableMenuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisableMenuRet instance
         */
        public static create(properties?: dto.IDisableMenuRet): dto.DisableMenuRet;

        /**
         * Encodes the specified DisableMenuRet message. Does not implicitly {@link dto.DisableMenuRet.verify|verify} messages.
         * @param message DisableMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDisableMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisableMenuRet message, length delimited. Does not implicitly {@link dto.DisableMenuRet.verify|verify} messages.
         * @param message DisableMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDisableMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisableMenuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DisableMenuRet;

        /**
         * Decodes a DisableMenuRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisableMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DisableMenuRet;

        /**
         * Verifies a DisableMenuRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisableMenuRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisableMenuRet
         */
        public static fromObject(object: { [k: string]: any }): dto.DisableMenuRet;

        /**
         * Creates a plain object from a DisableMenuRet message. Also converts values to other types if specified.
         * @param message DisableMenuRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DisableMenuRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisableMenuRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisableMenuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveMenuRet. */
    interface IRemoveMenuRet {

        /** RemoveMenuRet id */
        id?: (string|null);
    }

    /** Represents a RemoveMenuRet. */
    class RemoveMenuRet implements IRemoveMenuRet {

        /**
         * Constructs a new RemoveMenuRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRemoveMenuRet);

        /** RemoveMenuRet id. */
        public id: string;

        /**
         * Creates a new RemoveMenuRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveMenuRet instance
         */
        public static create(properties?: dto.IRemoveMenuRet): dto.RemoveMenuRet;

        /**
         * Encodes the specified RemoveMenuRet message. Does not implicitly {@link dto.RemoveMenuRet.verify|verify} messages.
         * @param message RemoveMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRemoveMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveMenuRet message, length delimited. Does not implicitly {@link dto.RemoveMenuRet.verify|verify} messages.
         * @param message RemoveMenuRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRemoveMenuRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveMenuRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RemoveMenuRet;

        /**
         * Decodes a RemoveMenuRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveMenuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RemoveMenuRet;

        /**
         * Verifies a RemoveMenuRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveMenuRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveMenuRet
         */
        public static fromObject(object: { [k: string]: any }): dto.RemoveMenuRet;

        /**
         * Creates a plain object from a RemoveMenuRet message. Also converts values to other types if specified.
         * @param message RemoveMenuRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RemoveMenuRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveMenuRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoveMenuRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddMenuWidgetReq. */
    interface IAddMenuWidgetReq {

        /** AddMenuWidgetReq name */
        name?: (string|null);

        /** AddMenuWidgetReq seq */
        seq?: (number|null);

        /** AddMenuWidgetReq icon */
        icon?: (string|null);

        /** AddMenuWidgetReq apiMethod */
        apiMethod?: (string|null);

        /** AddMenuWidgetReq apiPath */
        apiPath?: (string|null);

        /** AddMenuWidgetReq memo */
        memo?: (string|null);

        /** AddMenuWidgetReq show */
        show?: (boolean|null);
    }

    /** Represents an AddMenuWidgetReq. */
    class AddMenuWidgetReq implements IAddMenuWidgetReq {

        /**
         * Constructs a new AddMenuWidgetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddMenuWidgetReq);

        /** AddMenuWidgetReq name. */
        public name: string;

        /** AddMenuWidgetReq seq. */
        public seq: number;

        /** AddMenuWidgetReq icon. */
        public icon: string;

        /** AddMenuWidgetReq apiMethod. */
        public apiMethod: string;

        /** AddMenuWidgetReq apiPath. */
        public apiPath: string;

        /** AddMenuWidgetReq memo. */
        public memo: string;

        /** AddMenuWidgetReq show. */
        public show: boolean;

        /**
         * Creates a new AddMenuWidgetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddMenuWidgetReq instance
         */
        public static create(properties?: dto.IAddMenuWidgetReq): dto.AddMenuWidgetReq;

        /**
         * Encodes the specified AddMenuWidgetReq message. Does not implicitly {@link dto.AddMenuWidgetReq.verify|verify} messages.
         * @param message AddMenuWidgetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddMenuWidgetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddMenuWidgetReq message, length delimited. Does not implicitly {@link dto.AddMenuWidgetReq.verify|verify} messages.
         * @param message AddMenuWidgetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddMenuWidgetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddMenuWidgetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddMenuWidgetReq;

        /**
         * Decodes an AddMenuWidgetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddMenuWidgetReq;

        /**
         * Verifies an AddMenuWidgetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddMenuWidgetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMenuWidgetReq
         */
        public static fromObject(object: { [k: string]: any }): dto.AddMenuWidgetReq;

        /**
         * Creates a plain object from an AddMenuWidgetReq message. Also converts values to other types if specified.
         * @param message AddMenuWidgetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddMenuWidgetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddMenuWidgetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddMenuWidgetReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddMenuWidgetRet. */
    interface IAddMenuWidgetRet {

        /** AddMenuWidgetRet id */
        id?: (string|null);
    }

    /** Represents an AddMenuWidgetRet. */
    class AddMenuWidgetRet implements IAddMenuWidgetRet {

        /**
         * Constructs a new AddMenuWidgetRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddMenuWidgetRet);

        /** AddMenuWidgetRet id. */
        public id: string;

        /**
         * Creates a new AddMenuWidgetRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddMenuWidgetRet instance
         */
        public static create(properties?: dto.IAddMenuWidgetRet): dto.AddMenuWidgetRet;

        /**
         * Encodes the specified AddMenuWidgetRet message. Does not implicitly {@link dto.AddMenuWidgetRet.verify|verify} messages.
         * @param message AddMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddMenuWidgetRet message, length delimited. Does not implicitly {@link dto.AddMenuWidgetRet.verify|verify} messages.
         * @param message AddMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddMenuWidgetRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddMenuWidgetRet;

        /**
         * Decodes an AddMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddMenuWidgetRet;

        /**
         * Verifies an AddMenuWidgetRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddMenuWidgetRet
         */
        public static fromObject(object: { [k: string]: any }): dto.AddMenuWidgetRet;

        /**
         * Creates a plain object from an AddMenuWidgetRet message. Also converts values to other types if specified.
         * @param message AddMenuWidgetRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddMenuWidgetRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddMenuWidgetRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddMenuWidgetRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MenuWidgetListElem. */
    interface IMenuWidgetListElem {

        /** MenuWidgetListElem id */
        id?: (string|null);

        /** MenuWidgetListElem name */
        name?: (string|null);

        /** MenuWidgetListElem seq */
        seq?: (number|null);

        /** MenuWidgetListElem icon */
        icon?: (string|null);

        /** MenuWidgetListElem apiMethod */
        apiMethod?: (string|null);

        /** MenuWidgetListElem apiPath */
        apiPath?: (string|null);

        /** MenuWidgetListElem show */
        show?: (boolean|null);

        /** MenuWidgetListElem createdBy */
        createdBy?: (string|null);

        /** MenuWidgetListElem createdAt */
        createdAt?: (string|null);

        /** MenuWidgetListElem updatedBy */
        updatedBy?: (string|null);

        /** MenuWidgetListElem updatedAt */
        updatedAt?: (string|null);

        /** MenuWidgetListElem deletedBy */
        deletedBy?: (string|null);

        /** MenuWidgetListElem deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a MenuWidgetListElem. */
    class MenuWidgetListElem implements IMenuWidgetListElem {

        /**
         * Constructs a new MenuWidgetListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IMenuWidgetListElem);

        /** MenuWidgetListElem id. */
        public id: string;

        /** MenuWidgetListElem name. */
        public name: string;

        /** MenuWidgetListElem seq. */
        public seq: number;

        /** MenuWidgetListElem icon. */
        public icon: string;

        /** MenuWidgetListElem apiMethod. */
        public apiMethod: string;

        /** MenuWidgetListElem apiPath. */
        public apiPath: string;

        /** MenuWidgetListElem show. */
        public show: boolean;

        /** MenuWidgetListElem createdBy. */
        public createdBy: string;

        /** MenuWidgetListElem createdAt. */
        public createdAt: string;

        /** MenuWidgetListElem updatedBy. */
        public updatedBy: string;

        /** MenuWidgetListElem updatedAt. */
        public updatedAt: string;

        /** MenuWidgetListElem deletedBy. */
        public deletedBy?: (string|null);

        /** MenuWidgetListElem deletedAt. */
        public deletedAt?: (string|null);

        /** MenuWidgetListElem _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** MenuWidgetListElem _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new MenuWidgetListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MenuWidgetListElem instance
         */
        public static create(properties?: dto.IMenuWidgetListElem): dto.MenuWidgetListElem;

        /**
         * Encodes the specified MenuWidgetListElem message. Does not implicitly {@link dto.MenuWidgetListElem.verify|verify} messages.
         * @param message MenuWidgetListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IMenuWidgetListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MenuWidgetListElem message, length delimited. Does not implicitly {@link dto.MenuWidgetListElem.verify|verify} messages.
         * @param message MenuWidgetListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IMenuWidgetListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MenuWidgetListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MenuWidgetListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.MenuWidgetListElem;

        /**
         * Decodes a MenuWidgetListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MenuWidgetListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.MenuWidgetListElem;

        /**
         * Verifies a MenuWidgetListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MenuWidgetListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MenuWidgetListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.MenuWidgetListElem;

        /**
         * Creates a plain object from a MenuWidgetListElem message. Also converts values to other types if specified.
         * @param message MenuWidgetListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.MenuWidgetListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MenuWidgetListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MenuWidgetListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListMenuWidgetRet. */
    interface IListMenuWidgetRet {

        /** ListMenuWidgetRet list */
        list?: (dto.IMenuWidgetListElem[]|null);

        /** ListMenuWidgetRet total */
        total?: (number|Long|null);
    }

    /** Represents a ListMenuWidgetRet. */
    class ListMenuWidgetRet implements IListMenuWidgetRet {

        /**
         * Constructs a new ListMenuWidgetRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListMenuWidgetRet);

        /** ListMenuWidgetRet list. */
        public list: dto.IMenuWidgetListElem[];

        /** ListMenuWidgetRet total. */
        public total: (number|Long);

        /**
         * Creates a new ListMenuWidgetRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMenuWidgetRet instance
         */
        public static create(properties?: dto.IListMenuWidgetRet): dto.ListMenuWidgetRet;

        /**
         * Encodes the specified ListMenuWidgetRet message. Does not implicitly {@link dto.ListMenuWidgetRet.verify|verify} messages.
         * @param message ListMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMenuWidgetRet message, length delimited. Does not implicitly {@link dto.ListMenuWidgetRet.verify|verify} messages.
         * @param message ListMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMenuWidgetRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListMenuWidgetRet;

        /**
         * Decodes a ListMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListMenuWidgetRet;

        /**
         * Verifies a ListMenuWidgetRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMenuWidgetRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ListMenuWidgetRet;

        /**
         * Creates a plain object from a ListMenuWidgetRet message. Also converts values to other types if specified.
         * @param message ListMenuWidgetRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListMenuWidgetRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMenuWidgetRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListMenuWidgetRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProfileMenuWidgetRet. */
    interface IProfileMenuWidgetRet {

        /** ProfileMenuWidgetRet id */
        id?: (string|null);

        /** ProfileMenuWidgetRet name */
        name?: (string|null);

        /** ProfileMenuWidgetRet seq */
        seq?: (number|null);

        /** ProfileMenuWidgetRet icon */
        icon?: (string|null);

        /** ProfileMenuWidgetRet apiMethod */
        apiMethod?: (string|null);

        /** ProfileMenuWidgetRet apiPath */
        apiPath?: (string|null);

        /** ProfileMenuWidgetRet memo */
        memo?: (string|null);

        /** ProfileMenuWidgetRet show */
        show?: (boolean|null);

        /** ProfileMenuWidgetRet createdBy */
        createdBy?: (string|null);

        /** ProfileMenuWidgetRet createdAt */
        createdAt?: (string|null);

        /** ProfileMenuWidgetRet updatedBy */
        updatedBy?: (string|null);

        /** ProfileMenuWidgetRet updatedAt */
        updatedAt?: (string|null);

        /** ProfileMenuWidgetRet deletedBy */
        deletedBy?: (string|null);

        /** ProfileMenuWidgetRet deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a ProfileMenuWidgetRet. */
    class ProfileMenuWidgetRet implements IProfileMenuWidgetRet {

        /**
         * Constructs a new ProfileMenuWidgetRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProfileMenuWidgetRet);

        /** ProfileMenuWidgetRet id. */
        public id: string;

        /** ProfileMenuWidgetRet name. */
        public name: string;

        /** ProfileMenuWidgetRet seq. */
        public seq: number;

        /** ProfileMenuWidgetRet icon. */
        public icon: string;

        /** ProfileMenuWidgetRet apiMethod. */
        public apiMethod: string;

        /** ProfileMenuWidgetRet apiPath. */
        public apiPath: string;

        /** ProfileMenuWidgetRet memo. */
        public memo: string;

        /** ProfileMenuWidgetRet show. */
        public show: boolean;

        /** ProfileMenuWidgetRet createdBy. */
        public createdBy: string;

        /** ProfileMenuWidgetRet createdAt. */
        public createdAt: string;

        /** ProfileMenuWidgetRet updatedBy. */
        public updatedBy: string;

        /** ProfileMenuWidgetRet updatedAt. */
        public updatedAt: string;

        /** ProfileMenuWidgetRet deletedBy. */
        public deletedBy?: (string|null);

        /** ProfileMenuWidgetRet deletedAt. */
        public deletedAt?: (string|null);

        /** ProfileMenuWidgetRet _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** ProfileMenuWidgetRet _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new ProfileMenuWidgetRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileMenuWidgetRet instance
         */
        public static create(properties?: dto.IProfileMenuWidgetRet): dto.ProfileMenuWidgetRet;

        /**
         * Encodes the specified ProfileMenuWidgetRet message. Does not implicitly {@link dto.ProfileMenuWidgetRet.verify|verify} messages.
         * @param message ProfileMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProfileMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileMenuWidgetRet message, length delimited. Does not implicitly {@link dto.ProfileMenuWidgetRet.verify|verify} messages.
         * @param message ProfileMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProfileMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileMenuWidgetRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProfileMenuWidgetRet;

        /**
         * Decodes a ProfileMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProfileMenuWidgetRet;

        /**
         * Verifies a ProfileMenuWidgetRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileMenuWidgetRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ProfileMenuWidgetRet;

        /**
         * Creates a plain object from a ProfileMenuWidgetRet message. Also converts values to other types if specified.
         * @param message ProfileMenuWidgetRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProfileMenuWidgetRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileMenuWidgetRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProfileMenuWidgetRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditMenuWidgetReq. */
    interface IEditMenuWidgetReq {

        /** EditMenuWidgetReq name */
        name?: (string|null);

        /** EditMenuWidgetReq seq */
        seq?: (number|null);

        /** EditMenuWidgetReq icon */
        icon?: (string|null);

        /** EditMenuWidgetReq apiMethod */
        apiMethod?: (string|null);

        /** EditMenuWidgetReq apiPath */
        apiPath?: (string|null);

        /** EditMenuWidgetReq memo */
        memo?: (string|null);

        /** EditMenuWidgetReq show */
        show?: (boolean|null);
    }

    /** Represents an EditMenuWidgetReq. */
    class EditMenuWidgetReq implements IEditMenuWidgetReq {

        /**
         * Constructs a new EditMenuWidgetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditMenuWidgetReq);

        /** EditMenuWidgetReq name. */
        public name: string;

        /** EditMenuWidgetReq seq. */
        public seq: number;

        /** EditMenuWidgetReq icon. */
        public icon: string;

        /** EditMenuWidgetReq apiMethod. */
        public apiMethod: string;

        /** EditMenuWidgetReq apiPath. */
        public apiPath: string;

        /** EditMenuWidgetReq memo. */
        public memo: string;

        /** EditMenuWidgetReq show. */
        public show: boolean;

        /**
         * Creates a new EditMenuWidgetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditMenuWidgetReq instance
         */
        public static create(properties?: dto.IEditMenuWidgetReq): dto.EditMenuWidgetReq;

        /**
         * Encodes the specified EditMenuWidgetReq message. Does not implicitly {@link dto.EditMenuWidgetReq.verify|verify} messages.
         * @param message EditMenuWidgetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditMenuWidgetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditMenuWidgetReq message, length delimited. Does not implicitly {@link dto.EditMenuWidgetReq.verify|verify} messages.
         * @param message EditMenuWidgetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditMenuWidgetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditMenuWidgetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditMenuWidgetReq;

        /**
         * Decodes an EditMenuWidgetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditMenuWidgetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditMenuWidgetReq;

        /**
         * Verifies an EditMenuWidgetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditMenuWidgetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditMenuWidgetReq
         */
        public static fromObject(object: { [k: string]: any }): dto.EditMenuWidgetReq;

        /**
         * Creates a plain object from an EditMenuWidgetReq message. Also converts values to other types if specified.
         * @param message EditMenuWidgetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditMenuWidgetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditMenuWidgetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditMenuWidgetReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditMenuWidgetRet. */
    interface IEditMenuWidgetRet {

        /** EditMenuWidgetRet id */
        id?: (string|null);
    }

    /** Represents an EditMenuWidgetRet. */
    class EditMenuWidgetRet implements IEditMenuWidgetRet {

        /**
         * Constructs a new EditMenuWidgetRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditMenuWidgetRet);

        /** EditMenuWidgetRet id. */
        public id: string;

        /**
         * Creates a new EditMenuWidgetRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditMenuWidgetRet instance
         */
        public static create(properties?: dto.IEditMenuWidgetRet): dto.EditMenuWidgetRet;

        /**
         * Encodes the specified EditMenuWidgetRet message. Does not implicitly {@link dto.EditMenuWidgetRet.verify|verify} messages.
         * @param message EditMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditMenuWidgetRet message, length delimited. Does not implicitly {@link dto.EditMenuWidgetRet.verify|verify} messages.
         * @param message EditMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditMenuWidgetRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditMenuWidgetRet;

        /**
         * Decodes an EditMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditMenuWidgetRet;

        /**
         * Verifies an EditMenuWidgetRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditMenuWidgetRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EditMenuWidgetRet;

        /**
         * Creates a plain object from an EditMenuWidgetRet message. Also converts values to other types if specified.
         * @param message EditMenuWidgetRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditMenuWidgetRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditMenuWidgetRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditMenuWidgetRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnableMenuWidgetRet. */
    interface IEnableMenuWidgetRet {

        /** EnableMenuWidgetRet id */
        id?: (string|null);
    }

    /** Represents an EnableMenuWidgetRet. */
    class EnableMenuWidgetRet implements IEnableMenuWidgetRet {

        /**
         * Constructs a new EnableMenuWidgetRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEnableMenuWidgetRet);

        /** EnableMenuWidgetRet id. */
        public id: string;

        /**
         * Creates a new EnableMenuWidgetRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnableMenuWidgetRet instance
         */
        public static create(properties?: dto.IEnableMenuWidgetRet): dto.EnableMenuWidgetRet;

        /**
         * Encodes the specified EnableMenuWidgetRet message. Does not implicitly {@link dto.EnableMenuWidgetRet.verify|verify} messages.
         * @param message EnableMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEnableMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnableMenuWidgetRet message, length delimited. Does not implicitly {@link dto.EnableMenuWidgetRet.verify|verify} messages.
         * @param message EnableMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEnableMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnableMenuWidgetRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EnableMenuWidgetRet;

        /**
         * Decodes an EnableMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EnableMenuWidgetRet;

        /**
         * Verifies an EnableMenuWidgetRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnableMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnableMenuWidgetRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EnableMenuWidgetRet;

        /**
         * Creates a plain object from an EnableMenuWidgetRet message. Also converts values to other types if specified.
         * @param message EnableMenuWidgetRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EnableMenuWidgetRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnableMenuWidgetRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnableMenuWidgetRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisableMenuWidgetRet. */
    interface IDisableMenuWidgetRet {

        /** DisableMenuWidgetRet id */
        id?: (string|null);
    }

    /** Represents a DisableMenuWidgetRet. */
    class DisableMenuWidgetRet implements IDisableMenuWidgetRet {

        /**
         * Constructs a new DisableMenuWidgetRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDisableMenuWidgetRet);

        /** DisableMenuWidgetRet id. */
        public id: string;

        /**
         * Creates a new DisableMenuWidgetRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisableMenuWidgetRet instance
         */
        public static create(properties?: dto.IDisableMenuWidgetRet): dto.DisableMenuWidgetRet;

        /**
         * Encodes the specified DisableMenuWidgetRet message. Does not implicitly {@link dto.DisableMenuWidgetRet.verify|verify} messages.
         * @param message DisableMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDisableMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisableMenuWidgetRet message, length delimited. Does not implicitly {@link dto.DisableMenuWidgetRet.verify|verify} messages.
         * @param message DisableMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDisableMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisableMenuWidgetRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DisableMenuWidgetRet;

        /**
         * Decodes a DisableMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisableMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DisableMenuWidgetRet;

        /**
         * Verifies a DisableMenuWidgetRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisableMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisableMenuWidgetRet
         */
        public static fromObject(object: { [k: string]: any }): dto.DisableMenuWidgetRet;

        /**
         * Creates a plain object from a DisableMenuWidgetRet message. Also converts values to other types if specified.
         * @param message DisableMenuWidgetRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DisableMenuWidgetRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisableMenuWidgetRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisableMenuWidgetRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveMenuWidgetRet. */
    interface IRemoveMenuWidgetRet {

        /** RemoveMenuWidgetRet id */
        id?: (string|null);
    }

    /** Represents a RemoveMenuWidgetRet. */
    class RemoveMenuWidgetRet implements IRemoveMenuWidgetRet {

        /**
         * Constructs a new RemoveMenuWidgetRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRemoveMenuWidgetRet);

        /** RemoveMenuWidgetRet id. */
        public id: string;

        /**
         * Creates a new RemoveMenuWidgetRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveMenuWidgetRet instance
         */
        public static create(properties?: dto.IRemoveMenuWidgetRet): dto.RemoveMenuWidgetRet;

        /**
         * Encodes the specified RemoveMenuWidgetRet message. Does not implicitly {@link dto.RemoveMenuWidgetRet.verify|verify} messages.
         * @param message RemoveMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRemoveMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveMenuWidgetRet message, length delimited. Does not implicitly {@link dto.RemoveMenuWidgetRet.verify|verify} messages.
         * @param message RemoveMenuWidgetRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRemoveMenuWidgetRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveMenuWidgetRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RemoveMenuWidgetRet;

        /**
         * Decodes a RemoveMenuWidgetRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveMenuWidgetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RemoveMenuWidgetRet;

        /**
         * Verifies a RemoveMenuWidgetRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveMenuWidgetRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveMenuWidgetRet
         */
        public static fromObject(object: { [k: string]: any }): dto.RemoveMenuWidgetRet;

        /**
         * Creates a plain object from a RemoveMenuWidgetRet message. Also converts values to other types if specified.
         * @param message RemoveMenuWidgetRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RemoveMenuWidgetRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveMenuWidgetRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoveMenuWidgetRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddRoleReq. */
    interface IAddRoleReq {

        /** AddRoleReq name */
        name?: (string|null);

        /** AddRoleReq alias */
        alias?: (string[]|null);

        /** AddRoleReq seq */
        seq?: (number|null);

        /** AddRoleReq icon */
        icon?: (string|null);

        /** AddRoleReq memo */
        memo?: (string|null);
    }

    /** Represents an AddRoleReq. */
    class AddRoleReq implements IAddRoleReq {

        /**
         * Constructs a new AddRoleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddRoleReq);

        /** AddRoleReq name. */
        public name: string;

        /** AddRoleReq alias. */
        public alias: string[];

        /** AddRoleReq seq. */
        public seq: number;

        /** AddRoleReq icon. */
        public icon: string;

        /** AddRoleReq memo. */
        public memo: string;

        /**
         * Creates a new AddRoleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddRoleReq instance
         */
        public static create(properties?: dto.IAddRoleReq): dto.AddRoleReq;

        /**
         * Encodes the specified AddRoleReq message. Does not implicitly {@link dto.AddRoleReq.verify|verify} messages.
         * @param message AddRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddRoleReq message, length delimited. Does not implicitly {@link dto.AddRoleReq.verify|verify} messages.
         * @param message AddRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddRoleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddRoleReq;

        /**
         * Decodes an AddRoleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddRoleReq;

        /**
         * Verifies an AddRoleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddRoleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddRoleReq
         */
        public static fromObject(object: { [k: string]: any }): dto.AddRoleReq;

        /**
         * Creates a plain object from an AddRoleReq message. Also converts values to other types if specified.
         * @param message AddRoleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddRoleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddRoleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddRoleReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddRoleRet. */
    interface IAddRoleRet {

        /** AddRoleRet id */
        id?: (string|null);
    }

    /** Represents an AddRoleRet. */
    class AddRoleRet implements IAddRoleRet {

        /**
         * Constructs a new AddRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddRoleRet);

        /** AddRoleRet id. */
        public id: string;

        /**
         * Creates a new AddRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddRoleRet instance
         */
        public static create(properties?: dto.IAddRoleRet): dto.AddRoleRet;

        /**
         * Encodes the specified AddRoleRet message. Does not implicitly {@link dto.AddRoleRet.verify|verify} messages.
         * @param message AddRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddRoleRet message, length delimited. Does not implicitly {@link dto.AddRoleRet.verify|verify} messages.
         * @param message AddRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddRoleRet;

        /**
         * Decodes an AddRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddRoleRet;

        /**
         * Verifies an AddRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.AddRoleRet;

        /**
         * Creates a plain object from an AddRoleRet message. Also converts values to other types if specified.
         * @param message AddRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoleListElem. */
    interface IRoleListElem {

        /** RoleListElem id */
        id?: (string|null);

        /** RoleListElem name */
        name?: (string|null);

        /** RoleListElem alias */
        alias?: (string[]|null);

        /** RoleListElem seq */
        seq?: (number|null);

        /** RoleListElem icon */
        icon?: (string|null);

        /** RoleListElem memo */
        memo?: (string|null);

        /** RoleListElem domainIds */
        domainIds?: (string[]|null);

        /** RoleListElem domainNames */
        domainNames?: (string[]|null);

        /** RoleListElem createdBy */
        createdBy?: (string|null);

        /** RoleListElem createdAt */
        createdAt?: (string|null);

        /** RoleListElem updatedBy */
        updatedBy?: (string|null);

        /** RoleListElem updatedAt */
        updatedAt?: (string|null);

        /** RoleListElem deletedBy */
        deletedBy?: (string|null);

        /** RoleListElem deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a RoleListElem. */
    class RoleListElem implements IRoleListElem {

        /**
         * Constructs a new RoleListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRoleListElem);

        /** RoleListElem id. */
        public id: string;

        /** RoleListElem name. */
        public name: string;

        /** RoleListElem alias. */
        public alias: string[];

        /** RoleListElem seq. */
        public seq: number;

        /** RoleListElem icon. */
        public icon: string;

        /** RoleListElem memo. */
        public memo: string;

        /** RoleListElem domainIds. */
        public domainIds: string[];

        /** RoleListElem domainNames. */
        public domainNames: string[];

        /** RoleListElem createdBy. */
        public createdBy: string;

        /** RoleListElem createdAt. */
        public createdAt: string;

        /** RoleListElem updatedBy. */
        public updatedBy: string;

        /** RoleListElem updatedAt. */
        public updatedAt: string;

        /** RoleListElem deletedBy. */
        public deletedBy?: (string|null);

        /** RoleListElem deletedAt. */
        public deletedAt?: (string|null);

        /** RoleListElem _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** RoleListElem _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new RoleListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleListElem instance
         */
        public static create(properties?: dto.IRoleListElem): dto.RoleListElem;

        /**
         * Encodes the specified RoleListElem message. Does not implicitly {@link dto.RoleListElem.verify|verify} messages.
         * @param message RoleListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRoleListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleListElem message, length delimited. Does not implicitly {@link dto.RoleListElem.verify|verify} messages.
         * @param message RoleListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRoleListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RoleListElem;

        /**
         * Decodes a RoleListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RoleListElem;

        /**
         * Verifies a RoleListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.RoleListElem;

        /**
         * Creates a plain object from a RoleListElem message. Also converts values to other types if specified.
         * @param message RoleListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RoleListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoleListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListRoleRet. */
    interface IListRoleRet {

        /** ListRoleRet list */
        list?: (dto.IRoleListElem[]|null);

        /** ListRoleRet total */
        total?: (number|Long|null);
    }

    /** Represents a ListRoleRet. */
    class ListRoleRet implements IListRoleRet {

        /**
         * Constructs a new ListRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListRoleRet);

        /** ListRoleRet list. */
        public list: dto.IRoleListElem[];

        /** ListRoleRet total. */
        public total: (number|Long);

        /**
         * Creates a new ListRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRoleRet instance
         */
        public static create(properties?: dto.IListRoleRet): dto.ListRoleRet;

        /**
         * Encodes the specified ListRoleRet message. Does not implicitly {@link dto.ListRoleRet.verify|verify} messages.
         * @param message ListRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRoleRet message, length delimited. Does not implicitly {@link dto.ListRoleRet.verify|verify} messages.
         * @param message ListRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListRoleRet;

        /**
         * Decodes a ListRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListRoleRet;

        /**
         * Verifies a ListRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ListRoleRet;

        /**
         * Creates a plain object from a ListRoleRet message. Also converts values to other types if specified.
         * @param message ListRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProfileRoleRet. */
    interface IProfileRoleRet {

        /** ProfileRoleRet id */
        id?: (string|null);

        /** ProfileRoleRet name */
        name?: (string|null);

        /** ProfileRoleRet alias */
        alias?: (string[]|null);

        /** ProfileRoleRet seq */
        seq?: (number|null);

        /** ProfileRoleRet icon */
        icon?: (string|null);

        /** ProfileRoleRet memo */
        memo?: (string|null);

        /** ProfileRoleRet createdBy */
        createdBy?: (string|null);

        /** ProfileRoleRet createdAt */
        createdAt?: (string|null);

        /** ProfileRoleRet updatedBy */
        updatedBy?: (string|null);

        /** ProfileRoleRet updatedAt */
        updatedAt?: (string|null);

        /** ProfileRoleRet deletedBy */
        deletedBy?: (string|null);

        /** ProfileRoleRet deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a ProfileRoleRet. */
    class ProfileRoleRet implements IProfileRoleRet {

        /**
         * Constructs a new ProfileRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProfileRoleRet);

        /** ProfileRoleRet id. */
        public id: string;

        /** ProfileRoleRet name. */
        public name: string;

        /** ProfileRoleRet alias. */
        public alias: string[];

        /** ProfileRoleRet seq. */
        public seq: number;

        /** ProfileRoleRet icon. */
        public icon: string;

        /** ProfileRoleRet memo. */
        public memo: string;

        /** ProfileRoleRet createdBy. */
        public createdBy: string;

        /** ProfileRoleRet createdAt. */
        public createdAt: string;

        /** ProfileRoleRet updatedBy. */
        public updatedBy: string;

        /** ProfileRoleRet updatedAt. */
        public updatedAt: string;

        /** ProfileRoleRet deletedBy. */
        public deletedBy?: (string|null);

        /** ProfileRoleRet deletedAt. */
        public deletedAt?: (string|null);

        /** ProfileRoleRet _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** ProfileRoleRet _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new ProfileRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileRoleRet instance
         */
        public static create(properties?: dto.IProfileRoleRet): dto.ProfileRoleRet;

        /**
         * Encodes the specified ProfileRoleRet message. Does not implicitly {@link dto.ProfileRoleRet.verify|verify} messages.
         * @param message ProfileRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProfileRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileRoleRet message, length delimited. Does not implicitly {@link dto.ProfileRoleRet.verify|verify} messages.
         * @param message ProfileRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProfileRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProfileRoleRet;

        /**
         * Decodes a ProfileRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProfileRoleRet;

        /**
         * Verifies a ProfileRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ProfileRoleRet;

        /**
         * Creates a plain object from a ProfileRoleRet message. Also converts values to other types if specified.
         * @param message ProfileRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProfileRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProfileRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditRoleReq. */
    interface IEditRoleReq {

        /** EditRoleReq name */
        name?: (string|null);

        /** EditRoleReq alias */
        alias?: (string[]|null);

        /** EditRoleReq seq */
        seq?: (number|null);

        /** EditRoleReq icon */
        icon?: (string|null);

        /** EditRoleReq memo */
        memo?: (string|null);
    }

    /** Represents an EditRoleReq. */
    class EditRoleReq implements IEditRoleReq {

        /**
         * Constructs a new EditRoleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditRoleReq);

        /** EditRoleReq name. */
        public name: string;

        /** EditRoleReq alias. */
        public alias: string[];

        /** EditRoleReq seq. */
        public seq: number;

        /** EditRoleReq icon. */
        public icon: string;

        /** EditRoleReq memo. */
        public memo: string;

        /**
         * Creates a new EditRoleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditRoleReq instance
         */
        public static create(properties?: dto.IEditRoleReq): dto.EditRoleReq;

        /**
         * Encodes the specified EditRoleReq message. Does not implicitly {@link dto.EditRoleReq.verify|verify} messages.
         * @param message EditRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditRoleReq message, length delimited. Does not implicitly {@link dto.EditRoleReq.verify|verify} messages.
         * @param message EditRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditRoleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditRoleReq;

        /**
         * Decodes an EditRoleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditRoleReq;

        /**
         * Verifies an EditRoleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditRoleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditRoleReq
         */
        public static fromObject(object: { [k: string]: any }): dto.EditRoleReq;

        /**
         * Creates a plain object from an EditRoleReq message. Also converts values to other types if specified.
         * @param message EditRoleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditRoleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditRoleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditRoleReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditRoleRet. */
    interface IEditRoleRet {

        /** EditRoleRet id */
        id?: (string|null);
    }

    /** Represents an EditRoleRet. */
    class EditRoleRet implements IEditRoleRet {

        /**
         * Constructs a new EditRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditRoleRet);

        /** EditRoleRet id. */
        public id: string;

        /**
         * Creates a new EditRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditRoleRet instance
         */
        public static create(properties?: dto.IEditRoleRet): dto.EditRoleRet;

        /**
         * Encodes the specified EditRoleRet message. Does not implicitly {@link dto.EditRoleRet.verify|verify} messages.
         * @param message EditRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditRoleRet message, length delimited. Does not implicitly {@link dto.EditRoleRet.verify|verify} messages.
         * @param message EditRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditRoleRet;

        /**
         * Decodes an EditRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditRoleRet;

        /**
         * Verifies an EditRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EditRoleRet;

        /**
         * Creates a plain object from an EditRoleRet message. Also converts values to other types if specified.
         * @param message EditRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoleDomainsRet. */
    interface IRoleDomainsRet {

        /** RoleDomainsRet domainIds */
        domainIds?: (string[]|null);
    }

    /** Represents a RoleDomainsRet. */
    class RoleDomainsRet implements IRoleDomainsRet {

        /**
         * Constructs a new RoleDomainsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRoleDomainsRet);

        /** RoleDomainsRet domainIds. */
        public domainIds: string[];

        /**
         * Creates a new RoleDomainsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleDomainsRet instance
         */
        public static create(properties?: dto.IRoleDomainsRet): dto.RoleDomainsRet;

        /**
         * Encodes the specified RoleDomainsRet message. Does not implicitly {@link dto.RoleDomainsRet.verify|verify} messages.
         * @param message RoleDomainsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRoleDomainsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleDomainsRet message, length delimited. Does not implicitly {@link dto.RoleDomainsRet.verify|verify} messages.
         * @param message RoleDomainsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRoleDomainsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleDomainsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RoleDomainsRet;

        /**
         * Decodes a RoleDomainsRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RoleDomainsRet;

        /**
         * Verifies a RoleDomainsRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleDomainsRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleDomainsRet
         */
        public static fromObject(object: { [k: string]: any }): dto.RoleDomainsRet;

        /**
         * Creates a plain object from a RoleDomainsRet message. Also converts values to other types if specified.
         * @param message RoleDomainsRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RoleDomainsRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleDomainsRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoleDomainsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoleAuthoritiesRet. */
    interface IRoleAuthoritiesRet {

        /** RoleAuthoritiesRet menuIds */
        menuIds?: (string[]|null);

        /** RoleAuthoritiesRet widgetIds */
        widgetIds?: (string[]|null);
    }

    /** Represents a RoleAuthoritiesRet. */
    class RoleAuthoritiesRet implements IRoleAuthoritiesRet {

        /**
         * Constructs a new RoleAuthoritiesRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRoleAuthoritiesRet);

        /** RoleAuthoritiesRet menuIds. */
        public menuIds: string[];

        /** RoleAuthoritiesRet widgetIds. */
        public widgetIds: string[];

        /**
         * Creates a new RoleAuthoritiesRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleAuthoritiesRet instance
         */
        public static create(properties?: dto.IRoleAuthoritiesRet): dto.RoleAuthoritiesRet;

        /**
         * Encodes the specified RoleAuthoritiesRet message. Does not implicitly {@link dto.RoleAuthoritiesRet.verify|verify} messages.
         * @param message RoleAuthoritiesRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRoleAuthoritiesRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleAuthoritiesRet message, length delimited. Does not implicitly {@link dto.RoleAuthoritiesRet.verify|verify} messages.
         * @param message RoleAuthoritiesRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRoleAuthoritiesRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleAuthoritiesRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleAuthoritiesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RoleAuthoritiesRet;

        /**
         * Decodes a RoleAuthoritiesRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleAuthoritiesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RoleAuthoritiesRet;

        /**
         * Verifies a RoleAuthoritiesRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleAuthoritiesRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleAuthoritiesRet
         */
        public static fromObject(object: { [k: string]: any }): dto.RoleAuthoritiesRet;

        /**
         * Creates a plain object from a RoleAuthoritiesRet message. Also converts values to other types if specified.
         * @param message RoleAuthoritiesRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RoleAuthoritiesRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleAuthoritiesRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoleAuthoritiesRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthorizeRoleReq. */
    interface IAuthorizeRoleReq {

        /** AuthorizeRoleReq menuIds */
        menuIds?: (string[]|null);

        /** AuthorizeRoleReq widgetIds */
        widgetIds?: (string[]|null);
    }

    /** Represents an AuthorizeRoleReq. */
    class AuthorizeRoleReq implements IAuthorizeRoleReq {

        /**
         * Constructs a new AuthorizeRoleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAuthorizeRoleReq);

        /** AuthorizeRoleReq menuIds. */
        public menuIds: string[];

        /** AuthorizeRoleReq widgetIds. */
        public widgetIds: string[];

        /**
         * Creates a new AuthorizeRoleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthorizeRoleReq instance
         */
        public static create(properties?: dto.IAuthorizeRoleReq): dto.AuthorizeRoleReq;

        /**
         * Encodes the specified AuthorizeRoleReq message. Does not implicitly {@link dto.AuthorizeRoleReq.verify|verify} messages.
         * @param message AuthorizeRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAuthorizeRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthorizeRoleReq message, length delimited. Does not implicitly {@link dto.AuthorizeRoleReq.verify|verify} messages.
         * @param message AuthorizeRoleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAuthorizeRoleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthorizeRoleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthorizeRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AuthorizeRoleReq;

        /**
         * Decodes an AuthorizeRoleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthorizeRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AuthorizeRoleReq;

        /**
         * Verifies an AuthorizeRoleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthorizeRoleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthorizeRoleReq
         */
        public static fromObject(object: { [k: string]: any }): dto.AuthorizeRoleReq;

        /**
         * Creates a plain object from an AuthorizeRoleReq message. Also converts values to other types if specified.
         * @param message AuthorizeRoleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AuthorizeRoleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthorizeRoleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthorizeRoleReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthorizeRoleRet. */
    interface IAuthorizeRoleRet {

        /** AuthorizeRoleRet id */
        id?: (string|null);

        /** AuthorizeRoleRet domainId */
        domainId?: (string|null);
    }

    /** Represents an AuthorizeRoleRet. */
    class AuthorizeRoleRet implements IAuthorizeRoleRet {

        /**
         * Constructs a new AuthorizeRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAuthorizeRoleRet);

        /** AuthorizeRoleRet id. */
        public id: string;

        /** AuthorizeRoleRet domainId. */
        public domainId: string;

        /**
         * Creates a new AuthorizeRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthorizeRoleRet instance
         */
        public static create(properties?: dto.IAuthorizeRoleRet): dto.AuthorizeRoleRet;

        /**
         * Encodes the specified AuthorizeRoleRet message. Does not implicitly {@link dto.AuthorizeRoleRet.verify|verify} messages.
         * @param message AuthorizeRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAuthorizeRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthorizeRoleRet message, length delimited. Does not implicitly {@link dto.AuthorizeRoleRet.verify|verify} messages.
         * @param message AuthorizeRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAuthorizeRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthorizeRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthorizeRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AuthorizeRoleRet;

        /**
         * Decodes an AuthorizeRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthorizeRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AuthorizeRoleRet;

        /**
         * Verifies an AuthorizeRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthorizeRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthorizeRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.AuthorizeRoleRet;

        /**
         * Creates a plain object from an AuthorizeRoleRet message. Also converts values to other types if specified.
         * @param message AuthorizeRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AuthorizeRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthorizeRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthorizeRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnableRoleRet. */
    interface IEnableRoleRet {

        /** EnableRoleRet id */
        id?: (string|null);
    }

    /** Represents an EnableRoleRet. */
    class EnableRoleRet implements IEnableRoleRet {

        /**
         * Constructs a new EnableRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEnableRoleRet);

        /** EnableRoleRet id. */
        public id: string;

        /**
         * Creates a new EnableRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnableRoleRet instance
         */
        public static create(properties?: dto.IEnableRoleRet): dto.EnableRoleRet;

        /**
         * Encodes the specified EnableRoleRet message. Does not implicitly {@link dto.EnableRoleRet.verify|verify} messages.
         * @param message EnableRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEnableRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnableRoleRet message, length delimited. Does not implicitly {@link dto.EnableRoleRet.verify|verify} messages.
         * @param message EnableRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEnableRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnableRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EnableRoleRet;

        /**
         * Decodes an EnableRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EnableRoleRet;

        /**
         * Verifies an EnableRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnableRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnableRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EnableRoleRet;

        /**
         * Creates a plain object from an EnableRoleRet message. Also converts values to other types if specified.
         * @param message EnableRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EnableRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnableRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnableRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisableRoleRet. */
    interface IDisableRoleRet {

        /** DisableRoleRet id */
        id?: (string|null);
    }

    /** Represents a DisableRoleRet. */
    class DisableRoleRet implements IDisableRoleRet {

        /**
         * Constructs a new DisableRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDisableRoleRet);

        /** DisableRoleRet id. */
        public id: string;

        /**
         * Creates a new DisableRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisableRoleRet instance
         */
        public static create(properties?: dto.IDisableRoleRet): dto.DisableRoleRet;

        /**
         * Encodes the specified DisableRoleRet message. Does not implicitly {@link dto.DisableRoleRet.verify|verify} messages.
         * @param message DisableRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDisableRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisableRoleRet message, length delimited. Does not implicitly {@link dto.DisableRoleRet.verify|verify} messages.
         * @param message DisableRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDisableRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisableRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DisableRoleRet;

        /**
         * Decodes a DisableRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisableRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DisableRoleRet;

        /**
         * Verifies a DisableRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisableRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisableRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.DisableRoleRet;

        /**
         * Creates a plain object from a DisableRoleRet message. Also converts values to other types if specified.
         * @param message DisableRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DisableRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisableRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisableRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveRoleRet. */
    interface IRemoveRoleRet {

        /** RemoveRoleRet id */
        id?: (string|null);
    }

    /** Represents a RemoveRoleRet. */
    class RemoveRoleRet implements IRemoveRoleRet {

        /**
         * Constructs a new RemoveRoleRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRemoveRoleRet);

        /** RemoveRoleRet id. */
        public id: string;

        /**
         * Creates a new RemoveRoleRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveRoleRet instance
         */
        public static create(properties?: dto.IRemoveRoleRet): dto.RemoveRoleRet;

        /**
         * Encodes the specified RemoveRoleRet message. Does not implicitly {@link dto.RemoveRoleRet.verify|verify} messages.
         * @param message RemoveRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRemoveRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveRoleRet message, length delimited. Does not implicitly {@link dto.RemoveRoleRet.verify|verify} messages.
         * @param message RemoveRoleRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRemoveRoleRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveRoleRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RemoveRoleRet;

        /**
         * Decodes a RemoveRoleRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveRoleRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RemoveRoleRet;

        /**
         * Verifies a RemoveRoleRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveRoleRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveRoleRet
         */
        public static fromObject(object: { [k: string]: any }): dto.RemoveRoleRet;

        /**
         * Creates a plain object from a RemoveRoleRet message. Also converts values to other types if specified.
         * @param message RemoveRoleRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RemoveRoleRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveRoleRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoveRoleRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddStaffReq. */
    interface IAddStaffReq {

        /** AddStaffReq account */
        account?: (string|null);

        /** AddStaffReq password */
        password?: (string|null);

        /** AddStaffReq nickName */
        nickName?: (string|null);

        /** AddStaffReq realName */
        realName?: (string|null);

        /** AddStaffReq email */
        email?: (string|null);

        /** AddStaffReq phone */
        phone?: (string|null);

        /** AddStaffReq gender */
        gender?: (string|null);

        /** AddStaffReq avatar */
        avatar?: (string|null);

        /** AddStaffReq signInIpWhitelist */
        signInIpWhitelist?: (string[]|null);
    }

    /** Represents an AddStaffReq. */
    class AddStaffReq implements IAddStaffReq {

        /**
         * Constructs a new AddStaffReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddStaffReq);

        /** AddStaffReq account. */
        public account: string;

        /** AddStaffReq password. */
        public password: string;

        /** AddStaffReq nickName. */
        public nickName: string;

        /** AddStaffReq realName. */
        public realName: string;

        /** AddStaffReq email. */
        public email: string;

        /** AddStaffReq phone. */
        public phone: string;

        /** AddStaffReq gender. */
        public gender: string;

        /** AddStaffReq avatar. */
        public avatar: string;

        /** AddStaffReq signInIpWhitelist. */
        public signInIpWhitelist: string[];

        /**
         * Creates a new AddStaffReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddStaffReq instance
         */
        public static create(properties?: dto.IAddStaffReq): dto.AddStaffReq;

        /**
         * Encodes the specified AddStaffReq message. Does not implicitly {@link dto.AddStaffReq.verify|verify} messages.
         * @param message AddStaffReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddStaffReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddStaffReq message, length delimited. Does not implicitly {@link dto.AddStaffReq.verify|verify} messages.
         * @param message AddStaffReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddStaffReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddStaffReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddStaffReq;

        /**
         * Decodes an AddStaffReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddStaffReq;

        /**
         * Verifies an AddStaffReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddStaffReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddStaffReq
         */
        public static fromObject(object: { [k: string]: any }): dto.AddStaffReq;

        /**
         * Creates a plain object from an AddStaffReq message. Also converts values to other types if specified.
         * @param message AddStaffReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddStaffReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddStaffReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddStaffReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddStaffRet. */
    interface IAddStaffRet {

        /** AddStaffRet id */
        id?: (string|null);
    }

    /** Represents an AddStaffRet. */
    class AddStaffRet implements IAddStaffRet {

        /**
         * Constructs a new AddStaffRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAddStaffRet);

        /** AddStaffRet id. */
        public id: string;

        /**
         * Creates a new AddStaffRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddStaffRet instance
         */
        public static create(properties?: dto.IAddStaffRet): dto.AddStaffRet;

        /**
         * Encodes the specified AddStaffRet message. Does not implicitly {@link dto.AddStaffRet.verify|verify} messages.
         * @param message AddStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAddStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddStaffRet message, length delimited. Does not implicitly {@link dto.AddStaffRet.verify|verify} messages.
         * @param message AddStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAddStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddStaffRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AddStaffRet;

        /**
         * Decodes an AddStaffRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AddStaffRet;

        /**
         * Verifies an AddStaffRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddStaffRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddStaffRet
         */
        public static fromObject(object: { [k: string]: any }): dto.AddStaffRet;

        /**
         * Creates a plain object from an AddStaffRet message. Also converts values to other types if specified.
         * @param message AddStaffRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AddStaffRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddStaffRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddStaffRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StaffListElem. */
    interface IStaffListElem {

        /** StaffListElem id */
        id?: (string|null);

        /** StaffListElem account */
        account?: (string|null);

        /** StaffListElem nickName */
        nickName?: (string|null);

        /** StaffListElem realName */
        realName?: (string|null);

        /** StaffListElem email */
        email?: (string|null);

        /** StaffListElem phone */
        phone?: (string|null);

        /** StaffListElem gender */
        gender?: (string|null);

        /** StaffListElem avatar */
        avatar?: (string|null);

        /** StaffListElem signIn */
        signIn?: (boolean|null);

        /** StaffListElem status */
        status?: (boolean|null);

        /** StaffListElem signInToken */
        signInToken?: (string|null);

        /** StaffListElem lastSignInIp */
        lastSignInIp?: (string|null);

        /** StaffListElem lastSignInTime */
        lastSignInTime?: (number|Long|null);

        /** StaffListElem createdBy */
        createdBy?: (string|null);

        /** StaffListElem createdAt */
        createdAt?: (string|null);

        /** StaffListElem updatedBy */
        updatedBy?: (string|null);

        /** StaffListElem updatedAt */
        updatedAt?: (string|null);

        /** StaffListElem deletedBy */
        deletedBy?: (string|null);

        /** StaffListElem deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a StaffListElem. */
    class StaffListElem implements IStaffListElem {

        /**
         * Constructs a new StaffListElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IStaffListElem);

        /** StaffListElem id. */
        public id: string;

        /** StaffListElem account. */
        public account: string;

        /** StaffListElem nickName. */
        public nickName: string;

        /** StaffListElem realName. */
        public realName: string;

        /** StaffListElem email. */
        public email: string;

        /** StaffListElem phone. */
        public phone: string;

        /** StaffListElem gender. */
        public gender: string;

        /** StaffListElem avatar. */
        public avatar: string;

        /** StaffListElem signIn. */
        public signIn: boolean;

        /** StaffListElem status. */
        public status: boolean;

        /** StaffListElem signInToken. */
        public signInToken: string;

        /** StaffListElem lastSignInIp. */
        public lastSignInIp: string;

        /** StaffListElem lastSignInTime. */
        public lastSignInTime: (number|Long);

        /** StaffListElem createdBy. */
        public createdBy: string;

        /** StaffListElem createdAt. */
        public createdAt: string;

        /** StaffListElem updatedBy. */
        public updatedBy: string;

        /** StaffListElem updatedAt. */
        public updatedAt: string;

        /** StaffListElem deletedBy. */
        public deletedBy?: (string|null);

        /** StaffListElem deletedAt. */
        public deletedAt?: (string|null);

        /** StaffListElem _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** StaffListElem _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new StaffListElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StaffListElem instance
         */
        public static create(properties?: dto.IStaffListElem): dto.StaffListElem;

        /**
         * Encodes the specified StaffListElem message. Does not implicitly {@link dto.StaffListElem.verify|verify} messages.
         * @param message StaffListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IStaffListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StaffListElem message, length delimited. Does not implicitly {@link dto.StaffListElem.verify|verify} messages.
         * @param message StaffListElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IStaffListElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StaffListElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StaffListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.StaffListElem;

        /**
         * Decodes a StaffListElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StaffListElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.StaffListElem;

        /**
         * Verifies a StaffListElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StaffListElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StaffListElem
         */
        public static fromObject(object: { [k: string]: any }): dto.StaffListElem;

        /**
         * Creates a plain object from a StaffListElem message. Also converts values to other types if specified.
         * @param message StaffListElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.StaffListElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StaffListElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StaffListElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListStaffRet. */
    interface IListStaffRet {

        /** ListStaffRet list */
        list?: (dto.IStaffListElem[]|null);

        /** ListStaffRet total */
        total?: (number|Long|null);
    }

    /** Represents a ListStaffRet. */
    class ListStaffRet implements IListStaffRet {

        /**
         * Constructs a new ListStaffRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListStaffRet);

        /** ListStaffRet list. */
        public list: dto.IStaffListElem[];

        /** ListStaffRet total. */
        public total: (number|Long);

        /**
         * Creates a new ListStaffRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListStaffRet instance
         */
        public static create(properties?: dto.IListStaffRet): dto.ListStaffRet;

        /**
         * Encodes the specified ListStaffRet message. Does not implicitly {@link dto.ListStaffRet.verify|verify} messages.
         * @param message ListStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListStaffRet message, length delimited. Does not implicitly {@link dto.ListStaffRet.verify|verify} messages.
         * @param message ListStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListStaffRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListStaffRet;

        /**
         * Decodes a ListStaffRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListStaffRet;

        /**
         * Verifies a ListStaffRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListStaffRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListStaffRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ListStaffRet;

        /**
         * Creates a plain object from a ListStaffRet message. Also converts values to other types if specified.
         * @param message ListStaffRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListStaffRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListStaffRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListStaffRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProfileStaffRet. */
    interface IProfileStaffRet {

        /** ProfileStaffRet id */
        id?: (string|null);

        /** ProfileStaffRet account */
        account?: (string|null);

        /** ProfileStaffRet nickName */
        nickName?: (string|null);

        /** ProfileStaffRet realName */
        realName?: (string|null);

        /** ProfileStaffRet email */
        email?: (string|null);

        /** ProfileStaffRet phone */
        phone?: (string|null);

        /** ProfileStaffRet gender */
        gender?: (string|null);

        /** ProfileStaffRet avatar */
        avatar?: (string|null);

        /** ProfileStaffRet signInIpWhitelist */
        signInIpWhitelist?: (string[]|null);

        /** ProfileStaffRet signIn */
        signIn?: (boolean|null);

        /** ProfileStaffRet signInToken */
        signInToken?: (string|null);

        /** ProfileStaffRet lastSignInIp */
        lastSignInIp?: (string|null);

        /** ProfileStaffRet lastSignInTime */
        lastSignInTime?: (number|Long|null);

        /** ProfileStaffRet createdBy */
        createdBy?: (string|null);

        /** ProfileStaffRet createdAt */
        createdAt?: (string|null);

        /** ProfileStaffRet updatedBy */
        updatedBy?: (string|null);

        /** ProfileStaffRet updatedAt */
        updatedAt?: (string|null);

        /** ProfileStaffRet deletedBy */
        deletedBy?: (string|null);

        /** ProfileStaffRet deletedAt */
        deletedAt?: (string|null);
    }

    /** Represents a ProfileStaffRet. */
    class ProfileStaffRet implements IProfileStaffRet {

        /**
         * Constructs a new ProfileStaffRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IProfileStaffRet);

        /** ProfileStaffRet id. */
        public id: string;

        /** ProfileStaffRet account. */
        public account: string;

        /** ProfileStaffRet nickName. */
        public nickName: string;

        /** ProfileStaffRet realName. */
        public realName: string;

        /** ProfileStaffRet email. */
        public email: string;

        /** ProfileStaffRet phone. */
        public phone: string;

        /** ProfileStaffRet gender. */
        public gender: string;

        /** ProfileStaffRet avatar. */
        public avatar: string;

        /** ProfileStaffRet signInIpWhitelist. */
        public signInIpWhitelist: string[];

        /** ProfileStaffRet signIn. */
        public signIn: boolean;

        /** ProfileStaffRet signInToken. */
        public signInToken: string;

        /** ProfileStaffRet lastSignInIp. */
        public lastSignInIp: string;

        /** ProfileStaffRet lastSignInTime. */
        public lastSignInTime: (number|Long);

        /** ProfileStaffRet createdBy. */
        public createdBy: string;

        /** ProfileStaffRet createdAt. */
        public createdAt: string;

        /** ProfileStaffRet updatedBy. */
        public updatedBy: string;

        /** ProfileStaffRet updatedAt. */
        public updatedAt: string;

        /** ProfileStaffRet deletedBy. */
        public deletedBy?: (string|null);

        /** ProfileStaffRet deletedAt. */
        public deletedAt?: (string|null);

        /** ProfileStaffRet _deletedBy. */
        public _deletedBy?: "deletedBy";

        /** ProfileStaffRet _deletedAt. */
        public _deletedAt?: "deletedAt";

        /**
         * Creates a new ProfileStaffRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileStaffRet instance
         */
        public static create(properties?: dto.IProfileStaffRet): dto.ProfileStaffRet;

        /**
         * Encodes the specified ProfileStaffRet message. Does not implicitly {@link dto.ProfileStaffRet.verify|verify} messages.
         * @param message ProfileStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IProfileStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileStaffRet message, length delimited. Does not implicitly {@link dto.ProfileStaffRet.verify|verify} messages.
         * @param message ProfileStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IProfileStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileStaffRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ProfileStaffRet;

        /**
         * Decodes a ProfileStaffRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ProfileStaffRet;

        /**
         * Verifies a ProfileStaffRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileStaffRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileStaffRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ProfileStaffRet;

        /**
         * Creates a plain object from a ProfileStaffRet message. Also converts values to other types if specified.
         * @param message ProfileStaffRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ProfileStaffRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileStaffRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProfileStaffRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditStaffReq. */
    interface IEditStaffReq {

        /** EditStaffReq account */
        account?: (string|null);

        /** EditStaffReq nickName */
        nickName?: (string|null);

        /** EditStaffReq realName */
        realName?: (string|null);

        /** EditStaffReq email */
        email?: (string|null);

        /** EditStaffReq phone */
        phone?: (string|null);

        /** EditStaffReq gender */
        gender?: (string|null);

        /** EditStaffReq avatar */
        avatar?: (string|null);

        /** EditStaffReq signInIpWhitelist */
        signInIpWhitelist?: (string[]|null);
    }

    /** Represents an EditStaffReq. */
    class EditStaffReq implements IEditStaffReq {

        /**
         * Constructs a new EditStaffReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditStaffReq);

        /** EditStaffReq account. */
        public account: string;

        /** EditStaffReq nickName. */
        public nickName: string;

        /** EditStaffReq realName. */
        public realName: string;

        /** EditStaffReq email. */
        public email: string;

        /** EditStaffReq phone. */
        public phone: string;

        /** EditStaffReq gender. */
        public gender: string;

        /** EditStaffReq avatar. */
        public avatar: string;

        /** EditStaffReq signInIpWhitelist. */
        public signInIpWhitelist: string[];

        /**
         * Creates a new EditStaffReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditStaffReq instance
         */
        public static create(properties?: dto.IEditStaffReq): dto.EditStaffReq;

        /**
         * Encodes the specified EditStaffReq message. Does not implicitly {@link dto.EditStaffReq.verify|verify} messages.
         * @param message EditStaffReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditStaffReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditStaffReq message, length delimited. Does not implicitly {@link dto.EditStaffReq.verify|verify} messages.
         * @param message EditStaffReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditStaffReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditStaffReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditStaffReq;

        /**
         * Decodes an EditStaffReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditStaffReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditStaffReq;

        /**
         * Verifies an EditStaffReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditStaffReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditStaffReq
         */
        public static fromObject(object: { [k: string]: any }): dto.EditStaffReq;

        /**
         * Creates a plain object from an EditStaffReq message. Also converts values to other types if specified.
         * @param message EditStaffReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditStaffReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditStaffReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditStaffReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EditStaffRet. */
    interface IEditStaffRet {

        /** EditStaffRet id */
        id?: (string|null);
    }

    /** Represents an EditStaffRet. */
    class EditStaffRet implements IEditStaffRet {

        /**
         * Constructs a new EditStaffRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEditStaffRet);

        /** EditStaffRet id. */
        public id: string;

        /**
         * Creates a new EditStaffRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EditStaffRet instance
         */
        public static create(properties?: dto.IEditStaffRet): dto.EditStaffRet;

        /**
         * Encodes the specified EditStaffRet message. Does not implicitly {@link dto.EditStaffRet.verify|verify} messages.
         * @param message EditStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEditStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EditStaffRet message, length delimited. Does not implicitly {@link dto.EditStaffRet.verify|verify} messages.
         * @param message EditStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEditStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EditStaffRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EditStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EditStaffRet;

        /**
         * Decodes an EditStaffRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EditStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EditStaffRet;

        /**
         * Verifies an EditStaffRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EditStaffRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EditStaffRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EditStaffRet;

        /**
         * Creates a plain object from an EditStaffRet message. Also converts values to other types if specified.
         * @param message EditStaffRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EditStaffRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EditStaffRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EditStaffRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PatchPasswordReq. */
    interface IPatchPasswordReq {

        /** PatchPasswordReq oldPassword */
        oldPassword?: (string|null);

        /** PatchPasswordReq newPassword */
        newPassword?: (string|null);
    }

    /** Represents a PatchPasswordReq. */
    class PatchPasswordReq implements IPatchPasswordReq {

        /**
         * Constructs a new PatchPasswordReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IPatchPasswordReq);

        /** PatchPasswordReq oldPassword. */
        public oldPassword: string;

        /** PatchPasswordReq newPassword. */
        public newPassword: string;

        /**
         * Creates a new PatchPasswordReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PatchPasswordReq instance
         */
        public static create(properties?: dto.IPatchPasswordReq): dto.PatchPasswordReq;

        /**
         * Encodes the specified PatchPasswordReq message. Does not implicitly {@link dto.PatchPasswordReq.verify|verify} messages.
         * @param message PatchPasswordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IPatchPasswordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PatchPasswordReq message, length delimited. Does not implicitly {@link dto.PatchPasswordReq.verify|verify} messages.
         * @param message PatchPasswordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IPatchPasswordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PatchPasswordReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PatchPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.PatchPasswordReq;

        /**
         * Decodes a PatchPasswordReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PatchPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.PatchPasswordReq;

        /**
         * Verifies a PatchPasswordReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PatchPasswordReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PatchPasswordReq
         */
        public static fromObject(object: { [k: string]: any }): dto.PatchPasswordReq;

        /**
         * Creates a plain object from a PatchPasswordReq message. Also converts values to other types if specified.
         * @param message PatchPasswordReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.PatchPasswordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PatchPasswordReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PatchPasswordReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PatchPasswordRet. */
    interface IPatchPasswordRet {

        /** PatchPasswordRet id */
        id?: (string|null);
    }

    /** Represents a PatchPasswordRet. */
    class PatchPasswordRet implements IPatchPasswordRet {

        /**
         * Constructs a new PatchPasswordRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IPatchPasswordRet);

        /** PatchPasswordRet id. */
        public id: string;

        /**
         * Creates a new PatchPasswordRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PatchPasswordRet instance
         */
        public static create(properties?: dto.IPatchPasswordRet): dto.PatchPasswordRet;

        /**
         * Encodes the specified PatchPasswordRet message. Does not implicitly {@link dto.PatchPasswordRet.verify|verify} messages.
         * @param message PatchPasswordRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IPatchPasswordRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PatchPasswordRet message, length delimited. Does not implicitly {@link dto.PatchPasswordRet.verify|verify} messages.
         * @param message PatchPasswordRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IPatchPasswordRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PatchPasswordRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PatchPasswordRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.PatchPasswordRet;

        /**
         * Decodes a PatchPasswordRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PatchPasswordRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.PatchPasswordRet;

        /**
         * Verifies a PatchPasswordRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PatchPasswordRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PatchPasswordRet
         */
        public static fromObject(object: { [k: string]: any }): dto.PatchPasswordRet;

        /**
         * Creates a plain object from a PatchPasswordRet message. Also converts values to other types if specified.
         * @param message PatchPasswordRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.PatchPasswordRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PatchPasswordRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PatchPasswordRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthorizeStaffRolesInDomainReq. */
    interface IAuthorizeStaffRolesInDomainReq {

        /** AuthorizeStaffRolesInDomainReq roleIds */
        roleIds?: (string[]|null);
    }

    /** Represents an AuthorizeStaffRolesInDomainReq. */
    class AuthorizeStaffRolesInDomainReq implements IAuthorizeStaffRolesInDomainReq {

        /**
         * Constructs a new AuthorizeStaffRolesInDomainReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAuthorizeStaffRolesInDomainReq);

        /** AuthorizeStaffRolesInDomainReq roleIds. */
        public roleIds: string[];

        /**
         * Creates a new AuthorizeStaffRolesInDomainReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthorizeStaffRolesInDomainReq instance
         */
        public static create(properties?: dto.IAuthorizeStaffRolesInDomainReq): dto.AuthorizeStaffRolesInDomainReq;

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainReq message. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainReq.verify|verify} messages.
         * @param message AuthorizeStaffRolesInDomainReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAuthorizeStaffRolesInDomainReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainReq message, length delimited. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainReq.verify|verify} messages.
         * @param message AuthorizeStaffRolesInDomainReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAuthorizeStaffRolesInDomainReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthorizeStaffRolesInDomainReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthorizeStaffRolesInDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AuthorizeStaffRolesInDomainReq;

        /**
         * Decodes an AuthorizeStaffRolesInDomainReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthorizeStaffRolesInDomainReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AuthorizeStaffRolesInDomainReq;

        /**
         * Verifies an AuthorizeStaffRolesInDomainReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthorizeStaffRolesInDomainReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthorizeStaffRolesInDomainReq
         */
        public static fromObject(object: { [k: string]: any }): dto.AuthorizeStaffRolesInDomainReq;

        /**
         * Creates a plain object from an AuthorizeStaffRolesInDomainReq message. Also converts values to other types if specified.
         * @param message AuthorizeStaffRolesInDomainReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AuthorizeStaffRolesInDomainReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthorizeStaffRolesInDomainReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthorizeStaffRolesInDomainReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthorizeStaffRolesInDomainRet. */
    interface IAuthorizeStaffRolesInDomainRet {

        /** AuthorizeStaffRolesInDomainRet id */
        id?: (string|null);
    }

    /** Represents an AuthorizeStaffRolesInDomainRet. */
    class AuthorizeStaffRolesInDomainRet implements IAuthorizeStaffRolesInDomainRet {

        /**
         * Constructs a new AuthorizeStaffRolesInDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IAuthorizeStaffRolesInDomainRet);

        /** AuthorizeStaffRolesInDomainRet id. */
        public id: string;

        /**
         * Creates a new AuthorizeStaffRolesInDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthorizeStaffRolesInDomainRet instance
         */
        public static create(properties?: dto.IAuthorizeStaffRolesInDomainRet): dto.AuthorizeStaffRolesInDomainRet;

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainRet message. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainRet.verify|verify} messages.
         * @param message AuthorizeStaffRolesInDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IAuthorizeStaffRolesInDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthorizeStaffRolesInDomainRet message, length delimited. Does not implicitly {@link dto.AuthorizeStaffRolesInDomainRet.verify|verify} messages.
         * @param message AuthorizeStaffRolesInDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IAuthorizeStaffRolesInDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthorizeStaffRolesInDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthorizeStaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.AuthorizeStaffRolesInDomainRet;

        /**
         * Decodes an AuthorizeStaffRolesInDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthorizeStaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.AuthorizeStaffRolesInDomainRet;

        /**
         * Verifies an AuthorizeStaffRolesInDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthorizeStaffRolesInDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthorizeStaffRolesInDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.AuthorizeStaffRolesInDomainRet;

        /**
         * Creates a plain object from an AuthorizeStaffRolesInDomainRet message. Also converts values to other types if specified.
         * @param message AuthorizeStaffRolesInDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.AuthorizeStaffRolesInDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthorizeStaffRolesInDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthorizeStaffRolesInDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StaffDomainsRet. */
    interface IStaffDomainsRet {

        /** StaffDomainsRet domainIds */
        domainIds?: (string[]|null);
    }

    /** Represents a StaffDomainsRet. */
    class StaffDomainsRet implements IStaffDomainsRet {

        /**
         * Constructs a new StaffDomainsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IStaffDomainsRet);

        /** StaffDomainsRet domainIds. */
        public domainIds: string[];

        /**
         * Creates a new StaffDomainsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StaffDomainsRet instance
         */
        public static create(properties?: dto.IStaffDomainsRet): dto.StaffDomainsRet;

        /**
         * Encodes the specified StaffDomainsRet message. Does not implicitly {@link dto.StaffDomainsRet.verify|verify} messages.
         * @param message StaffDomainsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IStaffDomainsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StaffDomainsRet message, length delimited. Does not implicitly {@link dto.StaffDomainsRet.verify|verify} messages.
         * @param message StaffDomainsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IStaffDomainsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StaffDomainsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StaffDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.StaffDomainsRet;

        /**
         * Decodes a StaffDomainsRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StaffDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.StaffDomainsRet;

        /**
         * Verifies a StaffDomainsRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StaffDomainsRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StaffDomainsRet
         */
        public static fromObject(object: { [k: string]: any }): dto.StaffDomainsRet;

        /**
         * Creates a plain object from a StaffDomainsRet message. Also converts values to other types if specified.
         * @param message StaffDomainsRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.StaffDomainsRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StaffDomainsRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StaffDomainsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StaffRolesInDomainRet. */
    interface IStaffRolesInDomainRet {

        /** StaffRolesInDomainRet roleIds */
        roleIds?: (string[]|null);
    }

    /** Represents a StaffRolesInDomainRet. */
    class StaffRolesInDomainRet implements IStaffRolesInDomainRet {

        /**
         * Constructs a new StaffRolesInDomainRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IStaffRolesInDomainRet);

        /** StaffRolesInDomainRet roleIds. */
        public roleIds: string[];

        /**
         * Creates a new StaffRolesInDomainRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StaffRolesInDomainRet instance
         */
        public static create(properties?: dto.IStaffRolesInDomainRet): dto.StaffRolesInDomainRet;

        /**
         * Encodes the specified StaffRolesInDomainRet message. Does not implicitly {@link dto.StaffRolesInDomainRet.verify|verify} messages.
         * @param message StaffRolesInDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IStaffRolesInDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StaffRolesInDomainRet message, length delimited. Does not implicitly {@link dto.StaffRolesInDomainRet.verify|verify} messages.
         * @param message StaffRolesInDomainRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IStaffRolesInDomainRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StaffRolesInDomainRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.StaffRolesInDomainRet;

        /**
         * Decodes a StaffRolesInDomainRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StaffRolesInDomainRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.StaffRolesInDomainRet;

        /**
         * Verifies a StaffRolesInDomainRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StaffRolesInDomainRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StaffRolesInDomainRet
         */
        public static fromObject(object: { [k: string]: any }): dto.StaffRolesInDomainRet;

        /**
         * Creates a plain object from a StaffRolesInDomainRet message. Also converts values to other types if specified.
         * @param message StaffRolesInDomainRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.StaffRolesInDomainRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StaffRolesInDomainRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StaffRolesInDomainRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnableStaffRet. */
    interface IEnableStaffRet {

        /** EnableStaffRet id */
        id?: (string|null);
    }

    /** Represents an EnableStaffRet. */
    class EnableStaffRet implements IEnableStaffRet {

        /**
         * Constructs a new EnableStaffRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IEnableStaffRet);

        /** EnableStaffRet id. */
        public id: string;

        /**
         * Creates a new EnableStaffRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnableStaffRet instance
         */
        public static create(properties?: dto.IEnableStaffRet): dto.EnableStaffRet;

        /**
         * Encodes the specified EnableStaffRet message. Does not implicitly {@link dto.EnableStaffRet.verify|verify} messages.
         * @param message EnableStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IEnableStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnableStaffRet message, length delimited. Does not implicitly {@link dto.EnableStaffRet.verify|verify} messages.
         * @param message EnableStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IEnableStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnableStaffRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.EnableStaffRet;

        /**
         * Decodes an EnableStaffRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.EnableStaffRet;

        /**
         * Verifies an EnableStaffRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnableStaffRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnableStaffRet
         */
        public static fromObject(object: { [k: string]: any }): dto.EnableStaffRet;

        /**
         * Creates a plain object from an EnableStaffRet message. Also converts values to other types if specified.
         * @param message EnableStaffRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.EnableStaffRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnableStaffRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnableStaffRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisableStaffRet. */
    interface IDisableStaffRet {

        /** DisableStaffRet id */
        id?: (string|null);
    }

    /** Represents a DisableStaffRet. */
    class DisableStaffRet implements IDisableStaffRet {

        /**
         * Constructs a new DisableStaffRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDisableStaffRet);

        /** DisableStaffRet id. */
        public id: string;

        /**
         * Creates a new DisableStaffRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisableStaffRet instance
         */
        public static create(properties?: dto.IDisableStaffRet): dto.DisableStaffRet;

        /**
         * Encodes the specified DisableStaffRet message. Does not implicitly {@link dto.DisableStaffRet.verify|verify} messages.
         * @param message DisableStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDisableStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisableStaffRet message, length delimited. Does not implicitly {@link dto.DisableStaffRet.verify|verify} messages.
         * @param message DisableStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDisableStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisableStaffRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DisableStaffRet;

        /**
         * Decodes a DisableStaffRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisableStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DisableStaffRet;

        /**
         * Verifies a DisableStaffRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisableStaffRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisableStaffRet
         */
        public static fromObject(object: { [k: string]: any }): dto.DisableStaffRet;

        /**
         * Creates a plain object from a DisableStaffRet message. Also converts values to other types if specified.
         * @param message DisableStaffRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DisableStaffRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisableStaffRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisableStaffRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveStaffRet. */
    interface IRemoveStaffRet {

        /** RemoveStaffRet id */
        id?: (string|null);
    }

    /** Represents a RemoveStaffRet. */
    class RemoveStaffRet implements IRemoveStaffRet {

        /**
         * Constructs a new RemoveStaffRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IRemoveStaffRet);

        /** RemoveStaffRet id. */
        public id: string;

        /**
         * Creates a new RemoveStaffRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveStaffRet instance
         */
        public static create(properties?: dto.IRemoveStaffRet): dto.RemoveStaffRet;

        /**
         * Encodes the specified RemoveStaffRet message. Does not implicitly {@link dto.RemoveStaffRet.verify|verify} messages.
         * @param message RemoveStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IRemoveStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveStaffRet message, length delimited. Does not implicitly {@link dto.RemoveStaffRet.verify|verify} messages.
         * @param message RemoveStaffRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IRemoveStaffRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveStaffRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.RemoveStaffRet;

        /**
         * Decodes a RemoveStaffRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveStaffRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.RemoveStaffRet;

        /**
         * Verifies a RemoveStaffRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveStaffRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveStaffRet
         */
        public static fromObject(object: { [k: string]: any }): dto.RemoveStaffRet;

        /**
         * Creates a plain object from a RemoveStaffRet message. Also converts values to other types if specified.
         * @param message RemoveStaffRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.RemoveStaffRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveStaffRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoveStaffRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListChangeLogElem. */
    interface IListChangeLogElem {

        /** ListChangeLogElem id */
        id?: (string|null);

        /** ListChangeLogElem collName */
        collName?: (string|null);

        /** ListChangeLogElem recordId */
        recordId?: (string|null);

        /** ListChangeLogElem fieldDiff */
        fieldDiff?: ({ [k: string]: google.protobuf.IAny }|null);

        /** ListChangeLogElem createdBy */
        createdBy?: (string|null);

        /** ListChangeLogElem createdAt */
        createdAt?: (string|null);

        /** ListChangeLogElem updatedBy */
        updatedBy?: (string|null);

        /** ListChangeLogElem updatedAt */
        updatedAt?: (string|null);
    }

    /** Represents a ListChangeLogElem. */
    class ListChangeLogElem implements IListChangeLogElem {

        /**
         * Constructs a new ListChangeLogElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListChangeLogElem);

        /** ListChangeLogElem id. */
        public id: string;

        /** ListChangeLogElem collName. */
        public collName: string;

        /** ListChangeLogElem recordId. */
        public recordId: string;

        /** ListChangeLogElem fieldDiff. */
        public fieldDiff: { [k: string]: google.protobuf.IAny };

        /** ListChangeLogElem createdBy. */
        public createdBy: string;

        /** ListChangeLogElem createdAt. */
        public createdAt: string;

        /** ListChangeLogElem updatedBy. */
        public updatedBy: string;

        /** ListChangeLogElem updatedAt. */
        public updatedAt: string;

        /**
         * Creates a new ListChangeLogElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListChangeLogElem instance
         */
        public static create(properties?: dto.IListChangeLogElem): dto.ListChangeLogElem;

        /**
         * Encodes the specified ListChangeLogElem message. Does not implicitly {@link dto.ListChangeLogElem.verify|verify} messages.
         * @param message ListChangeLogElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListChangeLogElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListChangeLogElem message, length delimited. Does not implicitly {@link dto.ListChangeLogElem.verify|verify} messages.
         * @param message ListChangeLogElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListChangeLogElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListChangeLogElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListChangeLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListChangeLogElem;

        /**
         * Decodes a ListChangeLogElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListChangeLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListChangeLogElem;

        /**
         * Verifies a ListChangeLogElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListChangeLogElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListChangeLogElem
         */
        public static fromObject(object: { [k: string]: any }): dto.ListChangeLogElem;

        /**
         * Creates a plain object from a ListChangeLogElem message. Also converts values to other types if specified.
         * @param message ListChangeLogElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListChangeLogElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListChangeLogElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListChangeLogElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListChangeLogRet. */
    interface IListChangeLogRet {

        /** ListChangeLogRet list */
        list?: (dto.IListChangeLogElem[]|null);

        /** ListChangeLogRet total */
        total?: (number|Long|null);
    }

    /** Represents a ListChangeLogRet. */
    class ListChangeLogRet implements IListChangeLogRet {

        /**
         * Constructs a new ListChangeLogRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListChangeLogRet);

        /** ListChangeLogRet list. */
        public list: dto.IListChangeLogElem[];

        /** ListChangeLogRet total. */
        public total: (number|Long);

        /**
         * Creates a new ListChangeLogRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListChangeLogRet instance
         */
        public static create(properties?: dto.IListChangeLogRet): dto.ListChangeLogRet;

        /**
         * Encodes the specified ListChangeLogRet message. Does not implicitly {@link dto.ListChangeLogRet.verify|verify} messages.
         * @param message ListChangeLogRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListChangeLogRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListChangeLogRet message, length delimited. Does not implicitly {@link dto.ListChangeLogRet.verify|verify} messages.
         * @param message ListChangeLogRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListChangeLogRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListChangeLogRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListChangeLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListChangeLogRet;

        /**
         * Decodes a ListChangeLogRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListChangeLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListChangeLogRet;

        /**
         * Verifies a ListChangeLogRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListChangeLogRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListChangeLogRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ListChangeLogRet;

        /**
         * Creates a plain object from a ListChangeLogRet message. Also converts values to other types if specified.
         * @param message ListChangeLogRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListChangeLogRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListChangeLogRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListChangeLogRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListAccessLogElem. */
    interface IListAccessLogElem {

        /** ListAccessLogElem id */
        id?: (string|null);

        /** ListAccessLogElem level */
        level?: (string|null);

        /** ListAccessLogElem time */
        time?: (number|Long|null);

        /** ListAccessLogElem clientIp */
        clientIp?: (string|null);

        /** ListAccessLogElem proto */
        proto?: (string|null);

        /** ListAccessLogElem method */
        method?: (string|null);

        /** ListAccessLogElem path */
        path?: (string|null);

        /** ListAccessLogElem queries */
        queries?: (string|null);

        /** ListAccessLogElem requestHeaders */
        requestHeaders?: (string|null);

        /** ListAccessLogElem requestBody */
        requestBody?: (string|null);

        /** ListAccessLogElem statusCode */
        statusCode?: (string|null);

        /** ListAccessLogElem responseHeaders */
        responseHeaders?: (string|null);

        /** ListAccessLogElem responseBody */
        responseBody?: (string|null);

        /** ListAccessLogElem latency */
        latency?: (string|null);

        /** ListAccessLogElem traceId */
        traceId?: (string|null);

        /** ListAccessLogElem sessionId */
        sessionId?: (string|null);

        /** ListAccessLogElem tag */
        tag?: (string|null);

        /** ListAccessLogElem stack */
        stack?: (string|null);

        /** ListAccessLogElem createdBy */
        createdBy?: (string|null);

        /** ListAccessLogElem createdAt */
        createdAt?: (string|null);

        /** ListAccessLogElem updatedBy */
        updatedBy?: (string|null);

        /** ListAccessLogElem updatedAt */
        updatedAt?: (string|null);
    }

    /** Represents a ListAccessLogElem. */
    class ListAccessLogElem implements IListAccessLogElem {

        /**
         * Constructs a new ListAccessLogElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListAccessLogElem);

        /** ListAccessLogElem id. */
        public id: string;

        /** ListAccessLogElem level. */
        public level: string;

        /** ListAccessLogElem time. */
        public time: (number|Long);

        /** ListAccessLogElem clientIp. */
        public clientIp: string;

        /** ListAccessLogElem proto. */
        public proto: string;

        /** ListAccessLogElem method. */
        public method: string;

        /** ListAccessLogElem path. */
        public path: string;

        /** ListAccessLogElem queries. */
        public queries: string;

        /** ListAccessLogElem requestHeaders. */
        public requestHeaders: string;

        /** ListAccessLogElem requestBody. */
        public requestBody: string;

        /** ListAccessLogElem statusCode. */
        public statusCode: string;

        /** ListAccessLogElem responseHeaders. */
        public responseHeaders: string;

        /** ListAccessLogElem responseBody. */
        public responseBody: string;

        /** ListAccessLogElem latency. */
        public latency: string;

        /** ListAccessLogElem traceId. */
        public traceId: string;

        /** ListAccessLogElem sessionId. */
        public sessionId: string;

        /** ListAccessLogElem tag. */
        public tag: string;

        /** ListAccessLogElem stack. */
        public stack: string;

        /** ListAccessLogElem createdBy. */
        public createdBy: string;

        /** ListAccessLogElem createdAt. */
        public createdAt: string;

        /** ListAccessLogElem updatedBy. */
        public updatedBy: string;

        /** ListAccessLogElem updatedAt. */
        public updatedAt: string;

        /**
         * Creates a new ListAccessLogElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListAccessLogElem instance
         */
        public static create(properties?: dto.IListAccessLogElem): dto.ListAccessLogElem;

        /**
         * Encodes the specified ListAccessLogElem message. Does not implicitly {@link dto.ListAccessLogElem.verify|verify} messages.
         * @param message ListAccessLogElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListAccessLogElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListAccessLogElem message, length delimited. Does not implicitly {@link dto.ListAccessLogElem.verify|verify} messages.
         * @param message ListAccessLogElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListAccessLogElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListAccessLogElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListAccessLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListAccessLogElem;

        /**
         * Decodes a ListAccessLogElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListAccessLogElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListAccessLogElem;

        /**
         * Verifies a ListAccessLogElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListAccessLogElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListAccessLogElem
         */
        public static fromObject(object: { [k: string]: any }): dto.ListAccessLogElem;

        /**
         * Creates a plain object from a ListAccessLogElem message. Also converts values to other types if specified.
         * @param message ListAccessLogElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListAccessLogElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListAccessLogElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListAccessLogElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ListAccessLogRet. */
    interface IListAccessLogRet {

        /** ListAccessLogRet list */
        list?: (dto.IListAccessLogElem[]|null);

        /** ListAccessLogRet total */
        total?: (number|Long|null);
    }

    /** Represents a ListAccessLogRet. */
    class ListAccessLogRet implements IListAccessLogRet {

        /**
         * Constructs a new ListAccessLogRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListAccessLogRet);

        /** ListAccessLogRet list. */
        public list: dto.IListAccessLogElem[];

        /** ListAccessLogRet total. */
        public total: (number|Long);

        /**
         * Creates a new ListAccessLogRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListAccessLogRet instance
         */
        public static create(properties?: dto.IListAccessLogRet): dto.ListAccessLogRet;

        /**
         * Encodes the specified ListAccessLogRet message. Does not implicitly {@link dto.ListAccessLogRet.verify|verify} messages.
         * @param message ListAccessLogRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListAccessLogRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListAccessLogRet message, length delimited. Does not implicitly {@link dto.ListAccessLogRet.verify|verify} messages.
         * @param message ListAccessLogRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListAccessLogRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListAccessLogRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListAccessLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListAccessLogRet;

        /**
         * Decodes a ListAccessLogRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListAccessLogRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListAccessLogRet;

        /**
         * Verifies a ListAccessLogRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListAccessLogRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListAccessLogRet
         */
        public static fromObject(object: { [k: string]: any }): dto.ListAccessLogRet;

        /**
         * Creates a plain object from a ListAccessLogRet message. Also converts values to other types if specified.
         * @param message ListAccessLogRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListAccessLogRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListAccessLogRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ListAccessLogRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetPicCaptchaRet. */
    interface IGetPicCaptchaRet {

        /** GetPicCaptchaRet picCaptchaId */
        picCaptchaId?: (string|null);

        /** GetPicCaptchaRet picCaptchaB64s */
        picCaptchaB64s?: (string|null);
    }

    /** Represents a GetPicCaptchaRet. */
    class GetPicCaptchaRet implements IGetPicCaptchaRet {

        /**
         * Constructs a new GetPicCaptchaRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetPicCaptchaRet);

        /** GetPicCaptchaRet picCaptchaId. */
        public picCaptchaId: string;

        /** GetPicCaptchaRet picCaptchaB64s. */
        public picCaptchaB64s: string;

        /**
         * Creates a new GetPicCaptchaRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPicCaptchaRet instance
         */
        public static create(properties?: dto.IGetPicCaptchaRet): dto.GetPicCaptchaRet;

        /**
         * Encodes the specified GetPicCaptchaRet message. Does not implicitly {@link dto.GetPicCaptchaRet.verify|verify} messages.
         * @param message GetPicCaptchaRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetPicCaptchaRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPicCaptchaRet message, length delimited. Does not implicitly {@link dto.GetPicCaptchaRet.verify|verify} messages.
         * @param message GetPicCaptchaRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetPicCaptchaRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPicCaptchaRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPicCaptchaRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetPicCaptchaRet;

        /**
         * Decodes a GetPicCaptchaRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPicCaptchaRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetPicCaptchaRet;

        /**
         * Verifies a GetPicCaptchaRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPicCaptchaRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPicCaptchaRet
         */
        public static fromObject(object: { [k: string]: any }): dto.GetPicCaptchaRet;

        /**
         * Creates a plain object from a GetPicCaptchaRet message. Also converts values to other types if specified.
         * @param message GetPicCaptchaRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetPicCaptchaRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPicCaptchaRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetPicCaptchaRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetPicCaptchaAnswerRet. */
    interface IGetPicCaptchaAnswerRet {

        /** GetPicCaptchaAnswerRet answer */
        answer?: (string|null);
    }

    /** Represents a GetPicCaptchaAnswerRet. */
    class GetPicCaptchaAnswerRet implements IGetPicCaptchaAnswerRet {

        /**
         * Constructs a new GetPicCaptchaAnswerRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetPicCaptchaAnswerRet);

        /** GetPicCaptchaAnswerRet answer. */
        public answer: string;

        /**
         * Creates a new GetPicCaptchaAnswerRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPicCaptchaAnswerRet instance
         */
        public static create(properties?: dto.IGetPicCaptchaAnswerRet): dto.GetPicCaptchaAnswerRet;

        /**
         * Encodes the specified GetPicCaptchaAnswerRet message. Does not implicitly {@link dto.GetPicCaptchaAnswerRet.verify|verify} messages.
         * @param message GetPicCaptchaAnswerRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetPicCaptchaAnswerRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPicCaptchaAnswerRet message, length delimited. Does not implicitly {@link dto.GetPicCaptchaAnswerRet.verify|verify} messages.
         * @param message GetPicCaptchaAnswerRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetPicCaptchaAnswerRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPicCaptchaAnswerRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPicCaptchaAnswerRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetPicCaptchaAnswerRet;

        /**
         * Decodes a GetPicCaptchaAnswerRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPicCaptchaAnswerRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetPicCaptchaAnswerRet;

        /**
         * Verifies a GetPicCaptchaAnswerRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPicCaptchaAnswerRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPicCaptchaAnswerRet
         */
        public static fromObject(object: { [k: string]: any }): dto.GetPicCaptchaAnswerRet;

        /**
         * Creates a plain object from a GetPicCaptchaAnswerRet message. Also converts values to other types if specified.
         * @param message GetPicCaptchaAnswerRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetPicCaptchaAnswerRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPicCaptchaAnswerRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetPicCaptchaAnswerRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignInReq. */
    interface ISignInReq {

        /** SignInReq account */
        account?: (string|null);

        /** SignInReq password */
        password?: (string|null);

        /** SignInReq picCaptchaId */
        picCaptchaId?: (string|null);

        /** SignInReq picCaptchaAnswer */
        picCaptchaAnswer?: (string|null);
    }

    /** Represents a SignInReq. */
    class SignInReq implements ISignInReq {

        /**
         * Constructs a new SignInReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISignInReq);

        /** SignInReq account. */
        public account: string;

        /** SignInReq password. */
        public password: string;

        /** SignInReq picCaptchaId. */
        public picCaptchaId: string;

        /** SignInReq picCaptchaAnswer. */
        public picCaptchaAnswer: string;

        /**
         * Creates a new SignInReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInReq instance
         */
        public static create(properties?: dto.ISignInReq): dto.SignInReq;

        /**
         * Encodes the specified SignInReq message. Does not implicitly {@link dto.SignInReq.verify|verify} messages.
         * @param message SignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInReq message, length delimited. Does not implicitly {@link dto.SignInReq.verify|verify} messages.
         * @param message SignInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISignInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SignInReq;

        /**
         * Decodes a SignInReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SignInReq;

        /**
         * Verifies a SignInReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInReq
         */
        public static fromObject(object: { [k: string]: any }): dto.SignInReq;

        /**
         * Creates a plain object from a SignInReq message. Also converts values to other types if specified.
         * @param message SignInReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SignInReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignInReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignInRet. */
    interface ISignInRet {

        /** SignInRet token */
        token?: (string|null);

        /** SignInRet expiresAt */
        expiresAt?: (number|Long|null);
    }

    /** Represents a SignInRet. */
    class SignInRet implements ISignInRet {

        /**
         * Constructs a new SignInRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISignInRet);

        /** SignInRet token. */
        public token: string;

        /** SignInRet expiresAt. */
        public expiresAt: (number|Long);

        /**
         * Creates a new SignInRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInRet instance
         */
        public static create(properties?: dto.ISignInRet): dto.SignInRet;

        /**
         * Encodes the specified SignInRet message. Does not implicitly {@link dto.SignInRet.verify|verify} messages.
         * @param message SignInRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISignInRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInRet message, length delimited. Does not implicitly {@link dto.SignInRet.verify|verify} messages.
         * @param message SignInRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISignInRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SignInRet;

        /**
         * Decodes a SignInRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SignInRet;

        /**
         * Verifies a SignInRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInRet
         */
        public static fromObject(object: { [k: string]: any }): dto.SignInRet;

        /**
         * Creates a plain object from a SignInRet message. Also converts values to other types if specified.
         * @param message SignInRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SignInRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignInRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetOwnDomainsElem. */
    interface IGetOwnDomainsElem {

        /** GetOwnDomainsElem id */
        id?: (string|null);

        /** GetOwnDomainsElem name */
        name?: (string|null);

        /** GetOwnDomainsElem alias */
        alias?: (string[]|null);

        /** GetOwnDomainsElem icon */
        icon?: (string|null);
    }

    /** Represents a GetOwnDomainsElem. */
    class GetOwnDomainsElem implements IGetOwnDomainsElem {

        /**
         * Constructs a new GetOwnDomainsElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetOwnDomainsElem);

        /** GetOwnDomainsElem id. */
        public id: string;

        /** GetOwnDomainsElem name. */
        public name: string;

        /** GetOwnDomainsElem alias. */
        public alias: string[];

        /** GetOwnDomainsElem icon. */
        public icon: string;

        /**
         * Creates a new GetOwnDomainsElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetOwnDomainsElem instance
         */
        public static create(properties?: dto.IGetOwnDomainsElem): dto.GetOwnDomainsElem;

        /**
         * Encodes the specified GetOwnDomainsElem message. Does not implicitly {@link dto.GetOwnDomainsElem.verify|verify} messages.
         * @param message GetOwnDomainsElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetOwnDomainsElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOwnDomainsElem message, length delimited. Does not implicitly {@link dto.GetOwnDomainsElem.verify|verify} messages.
         * @param message GetOwnDomainsElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetOwnDomainsElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOwnDomainsElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetOwnDomainsElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetOwnDomainsElem;

        /**
         * Decodes a GetOwnDomainsElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetOwnDomainsElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetOwnDomainsElem;

        /**
         * Verifies a GetOwnDomainsElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetOwnDomainsElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetOwnDomainsElem
         */
        public static fromObject(object: { [k: string]: any }): dto.GetOwnDomainsElem;

        /**
         * Creates a plain object from a GetOwnDomainsElem message. Also converts values to other types if specified.
         * @param message GetOwnDomainsElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetOwnDomainsElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetOwnDomainsElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetOwnDomainsElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetOwnDomainsRet. */
    interface IGetOwnDomainsRet {

        /** GetOwnDomainsRet list */
        list?: (dto.IGetOwnDomainsElem[]|null);

        /** GetOwnDomainsRet total */
        total?: (number|Long|null);
    }

    /** Represents a GetOwnDomainsRet. */
    class GetOwnDomainsRet implements IGetOwnDomainsRet {

        /**
         * Constructs a new GetOwnDomainsRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetOwnDomainsRet);

        /** GetOwnDomainsRet list. */
        public list: dto.IGetOwnDomainsElem[];

        /** GetOwnDomainsRet total. */
        public total: (number|Long);

        /**
         * Creates a new GetOwnDomainsRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetOwnDomainsRet instance
         */
        public static create(properties?: dto.IGetOwnDomainsRet): dto.GetOwnDomainsRet;

        /**
         * Encodes the specified GetOwnDomainsRet message. Does not implicitly {@link dto.GetOwnDomainsRet.verify|verify} messages.
         * @param message GetOwnDomainsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetOwnDomainsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOwnDomainsRet message, length delimited. Does not implicitly {@link dto.GetOwnDomainsRet.verify|verify} messages.
         * @param message GetOwnDomainsRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetOwnDomainsRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOwnDomainsRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetOwnDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetOwnDomainsRet;

        /**
         * Decodes a GetOwnDomainsRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetOwnDomainsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetOwnDomainsRet;

        /**
         * Verifies a GetOwnDomainsRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetOwnDomainsRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetOwnDomainsRet
         */
        public static fromObject(object: { [k: string]: any }): dto.GetOwnDomainsRet;

        /**
         * Creates a plain object from a GetOwnDomainsRet message. Also converts values to other types if specified.
         * @param message GetOwnDomainsRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetOwnDomainsRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetOwnDomainsRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetOwnDomainsRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetOwnRolesElem. */
    interface IGetOwnRolesElem {

        /** GetOwnRolesElem id */
        id?: (string|null);

        /** GetOwnRolesElem name */
        name?: (string|null);

        /** GetOwnRolesElem alias */
        alias?: (string[]|null);

        /** GetOwnRolesElem icon */
        icon?: (string|null);
    }

    /** Represents a GetOwnRolesElem. */
    class GetOwnRolesElem implements IGetOwnRolesElem {

        /**
         * Constructs a new GetOwnRolesElem.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetOwnRolesElem);

        /** GetOwnRolesElem id. */
        public id: string;

        /** GetOwnRolesElem name. */
        public name: string;

        /** GetOwnRolesElem alias. */
        public alias: string[];

        /** GetOwnRolesElem icon. */
        public icon: string;

        /**
         * Creates a new GetOwnRolesElem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetOwnRolesElem instance
         */
        public static create(properties?: dto.IGetOwnRolesElem): dto.GetOwnRolesElem;

        /**
         * Encodes the specified GetOwnRolesElem message. Does not implicitly {@link dto.GetOwnRolesElem.verify|verify} messages.
         * @param message GetOwnRolesElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetOwnRolesElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOwnRolesElem message, length delimited. Does not implicitly {@link dto.GetOwnRolesElem.verify|verify} messages.
         * @param message GetOwnRolesElem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetOwnRolesElem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOwnRolesElem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetOwnRolesElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetOwnRolesElem;

        /**
         * Decodes a GetOwnRolesElem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetOwnRolesElem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetOwnRolesElem;

        /**
         * Verifies a GetOwnRolesElem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetOwnRolesElem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetOwnRolesElem
         */
        public static fromObject(object: { [k: string]: any }): dto.GetOwnRolesElem;

        /**
         * Creates a plain object from a GetOwnRolesElem message. Also converts values to other types if specified.
         * @param message GetOwnRolesElem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetOwnRolesElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetOwnRolesElem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetOwnRolesElem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetOwnRolesRet. */
    interface IGetOwnRolesRet {

        /** GetOwnRolesRet list */
        list?: (dto.IGetOwnRolesElem[]|null);

        /** GetOwnRolesRet total */
        total?: (number|Long|null);
    }

    /** Represents a GetOwnRolesRet. */
    class GetOwnRolesRet implements IGetOwnRolesRet {

        /**
         * Constructs a new GetOwnRolesRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetOwnRolesRet);

        /** GetOwnRolesRet list. */
        public list: dto.IGetOwnRolesElem[];

        /** GetOwnRolesRet total. */
        public total: (number|Long);

        /**
         * Creates a new GetOwnRolesRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetOwnRolesRet instance
         */
        public static create(properties?: dto.IGetOwnRolesRet): dto.GetOwnRolesRet;

        /**
         * Encodes the specified GetOwnRolesRet message. Does not implicitly {@link dto.GetOwnRolesRet.verify|verify} messages.
         * @param message GetOwnRolesRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetOwnRolesRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOwnRolesRet message, length delimited. Does not implicitly {@link dto.GetOwnRolesRet.verify|verify} messages.
         * @param message GetOwnRolesRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetOwnRolesRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOwnRolesRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetOwnRolesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetOwnRolesRet;

        /**
         * Decodes a GetOwnRolesRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetOwnRolesRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetOwnRolesRet;

        /**
         * Verifies a GetOwnRolesRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetOwnRolesRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetOwnRolesRet
         */
        public static fromObject(object: { [k: string]: any }): dto.GetOwnRolesRet;

        /**
         * Creates a plain object from a GetOwnRolesRet message. Also converts values to other types if specified.
         * @param message GetOwnRolesRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetOwnRolesRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetOwnRolesRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetOwnRolesRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MenuView. */
    interface IMenuView {

        /** MenuView id */
        id?: (string|null);

        /** MenuView name */
        name?: (string|null);

        /** MenuView seq */
        seq?: (number|null);

        /** MenuView icon */
        icon?: (string|null);

        /** MenuView route */
        route?: (string|null);

        /** MenuView memo */
        memo?: (string|null);

        /** MenuView show */
        show?: (boolean|null);

        /** MenuView isItem */
        isItem?: (boolean|null);

        /** MenuView widgets */
        widgets?: (dto.IMenuWidgetView[]|null);

        /** MenuView children */
        children?: (dto.IMenuView[]|null);
    }

    /** Represents a MenuView. */
    class MenuView implements IMenuView {

        /**
         * Constructs a new MenuView.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IMenuView);

        /** MenuView id. */
        public id: string;

        /** MenuView name. */
        public name: string;

        /** MenuView seq. */
        public seq: number;

        /** MenuView icon. */
        public icon: string;

        /** MenuView route. */
        public route: string;

        /** MenuView memo. */
        public memo: string;

        /** MenuView show. */
        public show: boolean;

        /** MenuView isItem. */
        public isItem: boolean;

        /** MenuView widgets. */
        public widgets: dto.IMenuWidgetView[];

        /** MenuView children. */
        public children: dto.IMenuView[];

        /**
         * Creates a new MenuView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MenuView instance
         */
        public static create(properties?: dto.IMenuView): dto.MenuView;

        /**
         * Encodes the specified MenuView message. Does not implicitly {@link dto.MenuView.verify|verify} messages.
         * @param message MenuView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IMenuView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MenuView message, length delimited. Does not implicitly {@link dto.MenuView.verify|verify} messages.
         * @param message MenuView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IMenuView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MenuView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MenuView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.MenuView;

        /**
         * Decodes a MenuView message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MenuView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.MenuView;

        /**
         * Verifies a MenuView message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MenuView message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MenuView
         */
        public static fromObject(object: { [k: string]: any }): dto.MenuView;

        /**
         * Creates a plain object from a MenuView message. Also converts values to other types if specified.
         * @param message MenuView
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.MenuView, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MenuView to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MenuView
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MenuWidgetView. */
    interface IMenuWidgetView {

        /** MenuWidgetView id */
        id?: (string|null);

        /** MenuWidgetView name */
        name?: (string|null);

        /** MenuWidgetView seq */
        seq?: (number|null);

        /** MenuWidgetView icon */
        icon?: (string|null);

        /** MenuWidgetView apiMethod */
        apiMethod?: (string|null);

        /** MenuWidgetView apiPath */
        apiPath?: (string|null);

        /** MenuWidgetView memo */
        memo?: (string|null);

        /** MenuWidgetView show */
        show?: (boolean|null);
    }

    /** Represents a MenuWidgetView. */
    class MenuWidgetView implements IMenuWidgetView {

        /**
         * Constructs a new MenuWidgetView.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IMenuWidgetView);

        /** MenuWidgetView id. */
        public id: string;

        /** MenuWidgetView name. */
        public name: string;

        /** MenuWidgetView seq. */
        public seq: number;

        /** MenuWidgetView icon. */
        public icon: string;

        /** MenuWidgetView apiMethod. */
        public apiMethod: string;

        /** MenuWidgetView apiPath. */
        public apiPath: string;

        /** MenuWidgetView memo. */
        public memo: string;

        /** MenuWidgetView show. */
        public show: boolean;

        /**
         * Creates a new MenuWidgetView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MenuWidgetView instance
         */
        public static create(properties?: dto.IMenuWidgetView): dto.MenuWidgetView;

        /**
         * Encodes the specified MenuWidgetView message. Does not implicitly {@link dto.MenuWidgetView.verify|verify} messages.
         * @param message MenuWidgetView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IMenuWidgetView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MenuWidgetView message, length delimited. Does not implicitly {@link dto.MenuWidgetView.verify|verify} messages.
         * @param message MenuWidgetView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IMenuWidgetView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MenuWidgetView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MenuWidgetView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.MenuWidgetView;

        /**
         * Decodes a MenuWidgetView message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MenuWidgetView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.MenuWidgetView;

        /**
         * Verifies a MenuWidgetView message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MenuWidgetView message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MenuWidgetView
         */
        public static fromObject(object: { [k: string]: any }): dto.MenuWidgetView;

        /**
         * Creates a plain object from a MenuWidgetView message. Also converts values to other types if specified.
         * @param message MenuWidgetView
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.MenuWidgetView, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MenuWidgetView to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MenuWidgetView
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetOwnMenusRet. */
    interface IGetOwnMenusRet {

        /** GetOwnMenusRet list */
        list?: (dto.IMenuView[]|null);

        /** GetOwnMenusRet total */
        total?: (number|Long|null);
    }

    /** Represents a GetOwnMenusRet. */
    class GetOwnMenusRet implements IGetOwnMenusRet {

        /**
         * Constructs a new GetOwnMenusRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetOwnMenusRet);

        /** GetOwnMenusRet list. */
        public list: dto.IMenuView[];

        /** GetOwnMenusRet total. */
        public total: (number|Long);

        /**
         * Creates a new GetOwnMenusRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetOwnMenusRet instance
         */
        public static create(properties?: dto.IGetOwnMenusRet): dto.GetOwnMenusRet;

        /**
         * Encodes the specified GetOwnMenusRet message. Does not implicitly {@link dto.GetOwnMenusRet.verify|verify} messages.
         * @param message GetOwnMenusRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetOwnMenusRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOwnMenusRet message, length delimited. Does not implicitly {@link dto.GetOwnMenusRet.verify|verify} messages.
         * @param message GetOwnMenusRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetOwnMenusRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOwnMenusRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetOwnMenusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetOwnMenusRet;

        /**
         * Decodes a GetOwnMenusRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetOwnMenusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetOwnMenusRet;

        /**
         * Verifies a GetOwnMenusRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetOwnMenusRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetOwnMenusRet
         */
        public static fromObject(object: { [k: string]: any }): dto.GetOwnMenusRet;

        /**
         * Creates a plain object from a GetOwnMenusRet message. Also converts values to other types if specified.
         * @param message GetOwnMenusRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetOwnMenusRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetOwnMenusRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetOwnMenusRet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
