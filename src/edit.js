/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps(blockProperties);
	return (
		<iframe {...blockProps} src={attributes.src} >
			<InspectorControls>
				<PanelBody title={__('Réglages', 'la62blocks')}>
					<TextControl
						label={__('Source du podcast (url)', 'la62blocks')}
						value={attributes.src || ''}
						onChange={(value) =>
							setAttributes({src: value})
						}
					/>
				</PanelBody>
			</InspectorControls>
		</iframe>
)
	;
}

const iframeStyle = {

};

export const blockProperties = {
	loading: "lazy",
	//src: "https://podcasts.audiomeans.fr/player-v2/azimut-70360b65805b/episodes/d99f820b-e3c2-4a5f-8bb9-139f01437513?mp=0&amp;download=0&amp;std=0&amp;vert=0&amp;playlist=1&amp;color=0f4292&amp;theme=light",
	className: '',
	frameBorder: "0",
	style: iframeStyle
};
