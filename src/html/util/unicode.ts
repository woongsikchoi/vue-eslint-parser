/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

export const EOF = -1
export const NULL = 0x00
export const TABULATION = 0x09
export const CARRIAGE_RETURN = 0x0d
export const LINE_FEED = 0x0a
export const FORM_FEED = 0x0c
export const SPACE = 0x20
export const EXCLAMATION_MARK = 0x21 // !
export const QUOTATION_MARK = 0x22 // "
export const NUMBER_SIGN = 0x23 // #
export const AMPERSAND = 0x26 // &
export const APOSTROPHE = 0x27 // '
export const LEFT_PARENTHESIS = 0x28 // (
export const RIGHT_PARENTHESIS = 0x29 // )
export const ASTERISK = 0x2a // *
export const HYPHEN_MINUS = 0x2d // -
export const SOLIDUS = 0x2f // /
export const DIGIT_0 = 0x30
export const DIGIT_9 = 0x39
export const COLON = 0x3a // :
export const SEMICOLON = 0x3b // ;
export const LESS_THAN_SIGN = 0x3c // <
export const EQUALS_SIGN = 0x3d // =
export const GREATER_THAN_SIGN = 0x3e // >
export const QUESTION_MARK = 0x3f // ?
export const LATIN_CAPITAL_A = 0x41
export const LATIN_CAPITAL_D = 0x44
export const LATIN_CAPITAL_F = 0x46
export const LATIN_CAPITAL_X = 0x58
export const LATIN_CAPITAL_Z = 0x5a
export const LEFT_SQUARE_BRACKET = 0x5b // [
export const REVERSE_SOLIDUS = 0x5c // \
export const RIGHT_SQUARE_BRACKET = 0x5d // ]
export const GRAVE_ACCENT = 0x60 // `
export const LATIN_SMALL_A = 0x61
export const LATIN_SMALL_F = 0x66
export const LATIN_SMALL_X = 0x78
export const LATIN_SMALL_Z = 0x7a
export const LEFT_CURLY_BRACKET = 0x7b // {
export const RIGHT_CURLY_BRACKET = 0x7d // }
export const NULL_REPLACEMENT = 0xfffd

/**
 * Check whether the code point is a whitespace.
 * @param cp The code point to check.
 * @returns `true` if the code point is a whitespace.
 */
export function isWhitespace(cp: number): boolean {
    return (
        cp === TABULATION ||
        cp === LINE_FEED ||
        cp === FORM_FEED ||
        cp === CARRIAGE_RETURN ||
        cp === SPACE
    )
}

/**
 * Check whether the code point is an uppercase letter character.
 * @param cp The code point to check.
 * @returns `true` if the code point is an uppercase letter character.
 */
export function isUpperLetter(cp: number): boolean {
    return cp >= LATIN_CAPITAL_A && cp <= LATIN_CAPITAL_Z
}

/**
 * Check whether the code point is a lowercase letter character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a lowercase letter character.
 */
export function isLowerLetter(cp: number): boolean {
    return cp >= LATIN_SMALL_A && cp <= LATIN_SMALL_Z
}

/**
 * Check whether the code point is a letter character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a letter character.
 */
export function isLetter(cp: number): boolean {
    return isLowerLetter(cp) || isUpperLetter(cp)
}

/**
 * Check whether the code point is a digit character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a digit character.
 */
export function isDigit(cp: number): boolean {
    return cp >= DIGIT_0 && cp <= DIGIT_9
}

/**
 * Check whether the code point is a digit character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a digit character.
 */
export function isUpperHexDigit(cp: number): boolean {
    return cp >= LATIN_CAPITAL_A && cp <= LATIN_CAPITAL_F
}

/**
 * Check whether the code point is a digit character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a digit character.
 */
export function isLowerHexDigit(cp: number): boolean {
    return cp >= LATIN_SMALL_A && cp <= LATIN_SMALL_F
}

/**
 * Check whether the code point is a digit character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a digit character.
 */
export function isHexDigit(cp: number): boolean {
    return isDigit(cp) || isUpperHexDigit(cp) || isLowerHexDigit(cp)
}

/**
 * Check whether the code point is a control character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a control character.
 */
export function isControl(cp: number): boolean {
    return (cp >= 0 && cp <= 0x1f) || (cp >= 0x7f && cp <= 0x9f)
}

/**
 * Check whether the code point is a surrogate character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a surrogate character.
 */
export function isSurrogate(cp: number): boolean {
    return cp >= 0xd800 && cp <= 0xdfff
}

/**
 * Check whether the code point is a surrogate pair character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a surrogate pair character.
 */
export function isSurrogatePair(cp: number): boolean {
    return cp >= 0xdc00 && cp <= 0xdfff
}

/**
 * Check whether the code point is a surrogate character.
 * @param cp The code point to check.
 * @returns `true` if the code point is a surrogate character.
 */
export function isNonCharacter(cp: number): boolean {
    return (
        (cp >= 0xfdd0 && cp <= 0xfdef) ||
        ((cp & 0xfffe) === 0xfffe && cp <= 0x10ffff)
    )
}

// export function isReservedCodePoint(cp: number): boolean {
//     return (cp >= 0xD800 && cp <= 0xDFFF) || cp > 0x10FFFF
// }

/**
 * Convert the given character to lowercases.
 * @param cp The code point to convert.
 * @returns Converted code point.
 */
export function toLowerCodePoint(cp: number): number {
    return cp + 0x0020
}
