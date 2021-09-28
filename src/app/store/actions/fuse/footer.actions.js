export const SET_FOOTER_SETTING = '[FOOTER] SET SETTING';
export const GET_FOOTER_SETTING = '[FOOTER] GET SETTING';
export const EMIT_FOOTER_EVENT = '[FOOTER] EMIT EVENT';
export const RESET_FOOTER_EVENT = '[FOOTER] RESET EVENT';

export function getFooterSetting()
{
    return {
        type: GET_FOOTER_SETTING
    }
}

export function setFooterSetting(options)
{
    return {
        type: SET_FOOTER_SETTING,
        options
    }
}

export function emitFooterEvent(event)
{
    return {
        type: EMIT_FOOTER_EVENT,
        event
    }
}

export function resetFooterEvent()
{
    return {
        type: RESET_FOOTER_EVENT
    }
}