#!/usr/bin/env node

import 'reflect-metadata'

import path from 'path'

import { Logger } from '@abi-toolkit/utils'
import fs from 'fs-extra'

import { execute } from './execute'

const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf-8'),
)

/**
 * Execute the CLI commands
 */
// eslint-disable-next-line import/newline-after-import
;(async () => {
  await execute(packageJson.version)
})().catch((err) => Logger.error(err.message))
