import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['source', 'audio', 'play', 'pause'];

    initialize() {
        this.playing = false;
    }

    play(event) {
        if (event) {
            const source = event.detail.source;
            const stream = event.detail.stream;

            this.audioTarget.src = source;
            Turbo.visit(stream);
            this.audioTarget.load();
        }

        this.audioTarget.play();
        this.playing = true;
        this.playTarget.classList.remove('hidden');
        this.pauseTarget.classList.add('hidden');
    }

    pause() {
        this.audioTarget.pause();
        this.playing = false;
        this.playTarget.classList.add('hidden');
        this.pauseTarget.classList.remove('hidden');
    }

    toggle() {
      this.playing ? this.pause() : this.play();
    }
}
