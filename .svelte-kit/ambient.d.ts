
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const BLIKK_ESCAPE_SECRET: string;
	export const BLIKK_ESCAPE_DBHOST: string;
	export const BLIKK_ESCAPE_DBUSER: string;
	export const BLIKK_ESCAPE_DBPASS: string;
	export const BLIKK_ESCAPE_DBNAME: string;
	export const ALLUSERSPROFILE: string;
	export const all_proxy: string;
	export const ANSICON: string;
	export const ANSICON_DEF: string;
	export const APPDATA: string;
	export const AVR32_HOME: string;
	export const Branch: string;
	export const CAMLIBS: string;
	export const CARBON_MEM_DISABLE: string;
	export const COLOR: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const ConEmuANSI: string;
	export const ConEmuAnsiLog: string;
	export const ConEmuArgs: string;
	export const ConEmuArgs2: string;
	export const ConEmuBackHWND: string;
	export const ConEmuBaseDir: string;
	export const ConEmuBuild: string;
	export const ConEmuConfig: string;
	export const ConEmuDir: string;
	export const ConEmuDrawHWND: string;
	export const ConEmuDrive: string;
	export const ConEmuHooks: string;
	export const ConEmuHWND: string;
	export const ConEmuIsAdmin: string;
	export const ConEmuPalette: string;
	export const ConEmuPID: string;
	export const ConEmuPrompt0: string;
	export const ConEmuPrompt1: string;
	export const ConEmuPrompt2: string;
	export const ConEmuPrompt3: string;
	export const ConEmuServerPID: string;
	export const ConEmuTask: string;
	export const ConEmuWorkDir: string;
	export const ConEmuWorkDrive: string;
	export const DFS: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const FP_NO_HOST_CHECK: string;
	export const GISHOME: string;
	export const GTK_BASEPATH: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const Homeserver: string;
	export const HTTPS_PROXY: string;
	export const HTTP_PROXY: string;
	export const INIT_CWD: string;
	export const IOLIBS: string;
	export const JAVA_HOME: string;
	export const language: string;
	export const LOCALAPPDATA: string;
	export const logicalOffice: string;
	export const LOGONSERVER: string;
	export const Mailserver: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const NODE_EXE: string;
	export const NODE_OPTIONS: string;
	export const NO_PROXY: string;
	export const NPM_CLI_JS: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_https_proxy: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_prefix: string;
	export const npm_config_proxy: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NPM_PREFIX_NPM_CLI_JS: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVM_HOME: string;
	export const NVM_SYMLINK: string;
	export const office: string;
	export const OneDrive: string;
	export const OneDriveCommercial: string;
	export const OS: string;
	export const P2P: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PCNr: string;
	export const physicalOffice: string;
	export const primaryOffice: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const Proxyserver: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TAXCODE: string;
	export const TEMP: string;
	export const TMP: string;
	export const TNS_ADMIN: string;
	export const USERDNSDOMAIN: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USEREXT: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const VISUALSVN_SERVER: string;
	export const VXIPNPPATH: string;
	export const windir: string;
	export const windows_tracing_flags: string;
	export const windows_tracing_logfile: string;
	export const WORKSPACE: string;
	export const _JAVA_OPTIONS: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		BLIKK_ESCAPE_SECRET: string;
		BLIKK_ESCAPE_DBHOST: string;
		BLIKK_ESCAPE_DBUSER: string;
		BLIKK_ESCAPE_DBPASS: string;
		BLIKK_ESCAPE_DBNAME: string;
		ALLUSERSPROFILE: string;
		all_proxy: string;
		ANSICON: string;
		ANSICON_DEF: string;
		APPDATA: string;
		AVR32_HOME: string;
		Branch: string;
		CAMLIBS: string;
		CARBON_MEM_DISABLE: string;
		COLOR: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		ConEmuANSI: string;
		ConEmuAnsiLog: string;
		ConEmuArgs: string;
		ConEmuArgs2: string;
		ConEmuBackHWND: string;
		ConEmuBaseDir: string;
		ConEmuBuild: string;
		ConEmuConfig: string;
		ConEmuDir: string;
		ConEmuDrawHWND: string;
		ConEmuDrive: string;
		ConEmuHooks: string;
		ConEmuHWND: string;
		ConEmuIsAdmin: string;
		ConEmuPalette: string;
		ConEmuPID: string;
		ConEmuPrompt0: string;
		ConEmuPrompt1: string;
		ConEmuPrompt2: string;
		ConEmuPrompt3: string;
		ConEmuServerPID: string;
		ConEmuTask: string;
		ConEmuWorkDir: string;
		ConEmuWorkDrive: string;
		DFS: string;
		DriverData: string;
		EDITOR: string;
		FP_NO_HOST_CHECK: string;
		GISHOME: string;
		GTK_BASEPATH: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		Homeserver: string;
		HTTPS_PROXY: string;
		HTTP_PROXY: string;
		INIT_CWD: string;
		IOLIBS: string;
		JAVA_HOME: string;
		language: string;
		LOCALAPPDATA: string;
		logicalOffice: string;
		LOGONSERVER: string;
		Mailserver: string;
		NODE: string;
		NODE_ENV: string;
		NODE_EXE: string;
		NODE_OPTIONS: string;
		NO_PROXY: string;
		NPM_CLI_JS: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_https_proxy: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_prefix: string;
		npm_config_proxy: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NPM_PREFIX_NPM_CLI_JS: string;
		NUMBER_OF_PROCESSORS: string;
		NVM_HOME: string;
		NVM_SYMLINK: string;
		office: string;
		OneDrive: string;
		OneDriveCommercial: string;
		OS: string;
		P2P: string;
		Path: string;
		PATHEXT: string;
		PCNr: string;
		physicalOffice: string;
		primaryOffice: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		Proxyserver: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TAXCODE: string;
		TEMP: string;
		TMP: string;
		TNS_ADMIN: string;
		USERDNSDOMAIN: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USEREXT: string;
		USERNAME: string;
		USERPROFILE: string;
		VBOX_MSI_INSTALL_PATH: string;
		VISUALSVN_SERVER: string;
		VXIPNPPATH: string;
		windir: string;
		windows_tracing_flags: string;
		windows_tracing_logfile: string;
		WORKSPACE: string;
		_JAVA_OPTIONS: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
