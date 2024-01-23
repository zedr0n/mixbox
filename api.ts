import type { App } from "obsidian";
import mixbox_esm_default from 'mixbox';

export class Api {
	public static GetApi(
		app: App) {
            return {
                lerp: (
                    color1 : Array<number>,
                    color2 : Array<number>,
                    t : number = 0.5
                ) => {
                    return mixbox_esm_default.lerp(color1, color2, t)
                },
            }
    }
}