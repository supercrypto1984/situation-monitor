<script lang="ts">
	import { PRESETS, PRESET_ORDER } from '$lib/config';

	interface Props {
		open: boolean;
		onSelectPreset: (presetId: string) => void;
		onSkip?: () => void;
	}

	let { open, onSelectPreset, onSkip }: Props = $props();

	function handleSelectPreset(presetId: string) {
		onSelectPreset(presetId);
	}

	function handleSkip() {
		// Select the 'everything' preset (show all panels) when skipping
		onSelectPreset('everything');
	}

	function handleClose() {
		if (onSkip) {
			onSkip();
		} else {
			handleSkip();
		}
	}

    function getTranslatedPresetName(englishName: string): string {
        switch (englishName) {
            case 'News Junkie': return '新闻狂人';
            case 'Trader': return '交易员';
            case 'Geopolitics Watcher': return '地缘政治观察家';
            case 'Intelligence Analyst': return '情报分析师';
            case 'Minimal': return '极简模式';
            case 'Everything': return '全部面板';
            default: return englishName;
        }
    }

    function getTranslatedPresetDescription(englishDescription: string): string {
        switch (englishDescription) {
            case 'Focus on politics, tech, finance, and government news.': return '关注政治、科技、金融和政府新闻。';
            case 'Markets, crypto, commodities, and money printer.': return '市场、加密货币、商品和印钞机。';
            case 'Global situations, world leaders, intel feeds.': return '全球局势、世界领导人、情报源。';
            case 'Correlation engine, narrative tracker, main character.': return '关联引擎、叙事追踪器、主要人物。';
            case 'Just the map, essential news, and markets.': return '仅包含地图、基本新闻和市场。';
            case 'All panels enabled for comprehensive monitoring.': return '启用所有面板进行全面监控。';
            default: return englishDescription;
        }
    }
</script>

{#if open}
	<div class="modal-overlay">
		<div class="modal onboarding-modal">
			<div class="modal-header">
				<button class="close-btn" onclick={handleClose} aria-label="跳过引导">
					&times;
				</button>
				<h2>欢迎来到态势监测器</h2>
				<p class="subtitle">选择一个仪表盘配置以开始</p>
			</div>

			<div class="preset-grid">
				{#each PRESET_ORDER as presetId}
					{@const preset = PRESETS[presetId]}
					<button class="preset-card" onclick={() => handleSelectPreset(presetId)}>
						<div class="preset-icon">{preset.icon}</div>
						<div class="preset-name">{getTranslatedPresetName(preset.name)}</div>
						<div class="preset-description">{getTranslatedPresetDescription(preset.description)}</div>
						<div class="preset-panel-count">{preset.panels.length} 个面板</div>
					</button>
				{/each}
			</div>

			<div class="modal-footer">
				<p class="hint">您稍后可以在设置中更改此项</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2000;
		padding: 1rem;
	}

	.onboarding-modal {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 8px;
		max-width: 900px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
	}

	.modal-header {
		position: relative;
		padding: 1.5rem;
		text-align: center;
		border-bottom: 1px solid var(--border);
	}

	.close-btn {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 4px;
		color: var(--text-secondary);
		font-size: 1.25rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.close-btn:hover {
		background: var(--bg);
		color: var(--text-primary);
		border-color: var(--text-secondary);
	}

	.modal-header h2 {
		color: var(--text-primary);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		color: var(--text-secondary);
		font-size: 0.8rem;
		margin: 0;
	}

	.preset-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		padding: 1.5rem;
	}

	.preset-card {
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 1.25rem;
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.preset-card:hover {
		border-color: var(--accent);
		background: rgba(0, 255, 136, 0.05);
	}

	.preset-icon {
		font-size: 2rem;
		margin-bottom: 0.25rem;
	}

	.preset-name {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.preset-description {
		font-size: 0.7rem;
		color: var(--text-secondary);
		line-height: 1.4;
		flex: 1;
	}

	.preset-panel-count {
		font-size: 0.65rem;
		color: var(--accent);
		font-weight: 500;
	}

	.modal-footer {
		padding: 1rem 1.5rem;
		border-top: 1px solid var(--border);
		text-align: center;
	}

	.hint {
		color: var(--text-muted);
		font-size: 0.7rem;
		margin: 0;
	}

	@media (max-width: 768px) {
		.preset-grid {
			grid-template-columns: 1fr;
		}

		.modal-header h2 {
			font-size: 1.1rem;
		}
	}
</style>
