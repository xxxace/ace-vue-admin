import enabled from "../config/enabled";

export default function setupMock({ open, setup }: { open?: boolean, setup: () => void }) {
    if (open !== false && enabled) setup();
}

export const successResponseWrap = (data: unknown) => {
    return {
        code: 200,
        msg: '请求成功',
        status: 'ok',
        data
    }
}

export const failResponseWrap = (data: unknown, msg: string, code: number = 500) => {
    return {
        code,
        msg,
        status: 'fail',
        data
    }
}