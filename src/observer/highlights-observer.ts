import { SLCT } from '../styles';
import { DEBUG } from '../util';
import { UAObserver } from './ua-observer';

/**
 * PageObserverで「名投稿まとめ」のページを検知したときに起動するオブザーバ。\
 * 現状は何もしない。
 */
export class HighlightsObserver extends UAObserver {
	public static runnable(): boolean {
		return document.querySelector(SLCT.TH_PROOF) !== null;
	}

	protected start(): boolean {
		// do nothing
		DEBUG.log('highlights observer started');
		return true;
	}
	protected stop(): void {
		// do nothing
		DEBUG.log('highlights observer stopped');
	}
}
