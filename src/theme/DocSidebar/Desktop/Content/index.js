import React from "react";
import Content from "@theme-original/DocSidebar/Desktop/Content";
import VersionedLink from "@site/src/components/VersionedLink";
import styles from "./customStyles.module.scss";
import useIsBrowser from "@docusaurus/useIsBrowser";

export default function ContentWrapper(props) {
	const isBrowser = useIsBrowser();
	const isCoreDocs =
		isBrowser && window.location.pathname.includes("/core/");
	const isApiDocs =
		isBrowser && window.location.pathname.includes("/api/");
	return (
		<>
			<div className={styles["doc-sidebar-tabs"]}>
				<VersionedLink
					to="/core/index/"
					className={`${styles["link-tab"]} ${isCoreDocs ? styles['active'] : ''}`}
				>
					Core
				</VersionedLink>
				<VersionedLink
					to="/api/index/"
					className={`${styles["link-tab"]} ${isApiDocs ? styles['active'] : ''}`}
				>
					API
				</VersionedLink>
			</div>
			<Content {...props} />
		</>
	);
}
